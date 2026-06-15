// ════════════════════ SUPABASE SYNC — PyroShield ════════════════════
// Fire-and-forget sync layer. localStorage sigue siendo la fuente de verdad
// local; Supabase es la fuente de verdad compartida entre dispositivos/usuarios.

var SUPABASE_URL = "https://flxweylyksddssvuqdzq.supabase.co";
var SUPABASE_KEY = "sb_publishable_1w2FKzNgBgha1YjQ4KGjvg_cpNnh7_9";
var _sb = null;
var _sbReady = false;
var _sbSyncInProgress = false;

function sbInit() {
  try {
    if (typeof window.supabase !== "undefined" && window.supabase.createClient) {
      _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      _sbReady = true;
    }
  } catch (e) {
    console.warn("[Supabase] init error:", e);
  }
}

// ── Indicador visual de sync ──────────────────────────────────────────────────
function _sbSetStatus(st) {
  var el = document.getElementById("sb-sync-dot");
  if (!el) return;
  el.className = "sb-dot sb-" + st;
  el.title = st === "ok" ? "Nube sincronizada" : st === "sync" ? "Sincronizando…" : "Sin conexión a nube";
}

// ── Helper: batch upsert con reintentos ───────────────────────────────────────
async function _sbUpsert(table, rows, conflict) {
  if (!_sbReady || !rows.length) return;
  var BATCH = 200;
  for (var i = 0; i < rows.length; i += BATCH) {
    var batch = rows.slice(i, i + BATCH);
    var res = await _sb.from(table).upsert(batch, { onConflict: conflict });
    if (res.error) throw res.error;
  }
}

// ════════════════════ PEDIDOS ════════════════════
async function sbPushPedidos() {
  if (!_sbReady) return;
  try {
    var raw = localStorage.getItem("pyro_pedidos");
    if (!raw) return;
    var pedidos = JSON.parse(raw);
    if (!Array.isArray(pedidos) || !pedidos.length) return;
    var rows = pedidos.map(function(p) {
      return { id: String(p.id), data: p, ruc: p.ruc || null, estado: p.estado || null };
    });
    _sbSetStatus("sync");
    await _sbUpsert("pedidos", rows, "id");
    _sbSetStatus("ok");
  } catch (e) {
    console.warn("[Supabase] pushPedidos:", e);
    _sbSetStatus("err");
  }
}

async function sbPullPedidos() {
  if (!_sbReady) return null;
  try {
    var res = await _sb.from("pedidos").select("data").order("created_at", { ascending: true });
    if (res.error) throw res.error;
    return (res.data || []).map(function(r) { return r.data; });
  } catch (e) {
    console.warn("[Supabase] pullPedidos:", e);
    return null;
  }
}

// ════════════════════ STOCK ════════════════════
async function sbPushStock() {
  if (!_sbReady) return;
  try {
    var raw = localStorage.getItem("pyro_stock");
    if (!raw) return;
    var st = JSON.parse(raw);
    var rows = Object.keys(st).map(function(id) {
      return { id: id, stock: st[id].stock, ago: st[id].ago };
    });
    await _sbUpsert("stock", rows, "id");
  } catch (e) {
    console.warn("[Supabase] pushStock:", e);
  }
}

async function sbPullStock() {
  if (!_sbReady) return null;
  try {
    var res = await _sb.from("stock").select("id,stock,ago");
    if (res.error) throw res.error;
    var result = {};
    (res.data || []).forEach(function(r) { result[r.id] = { stock: r.stock, ago: r.ago }; });
    return result;
  } catch (e) {
    console.warn("[Supabase] pullStock:", e);
    return null;
  }
}

// ════════════════════ DISTRIBUIDORES EXTRA ════════════════════
async function sbPushDistribuidores() {
  if (!_sbReady) return;
  try {
    var raw = localStorage.getItem("pyro_dist_extra");
    var extra = raw ? JSON.parse(raw) : [];
    var elimRaw = localStorage.getItem("pyro_dist_eliminados");
    var elim = elimRaw ? JSON.parse(elimRaw) : [];

    // Guardar distribuidores activos
    var rows = extra.map(function(d) { return { ruc: d.ruc, data: d }; });
    if (rows.length) await _sbUpsert("distribuidores_extra", rows, "ruc");

    // Guardar lista de eliminados
    await _sb.from("app_config").upsert(
      { key: "dist_eliminados", value: elim },
      { onConflict: "key" }
    );
  } catch (e) {
    console.warn("[Supabase] pushDistribuidores:", e);
  }
}

async function sbPullDistribuidores() {
  if (!_sbReady) return null;
  try {
    var [resExtra, resElim] = await Promise.all([
      _sb.from("distribuidores_extra").select("data"),
      _sb.from("app_config").select("value").eq("key", "dist_eliminados").maybeSingle()
    ]);
    var extra = (resExtra.data || []).map(function(r) { return r.data; });
    var elim = (resElim.data && resElim.data.value) ? resElim.data.value : [];
    return { extra: extra, elim: elim };
  } catch (e) {
    console.warn("[Supabase] pullDistribuidores:", e);
    return null;
  }
}

// ════════════════════ REWARDS ════════════════════
async function sbPushRewards() {
  if (!_sbReady) return;
  try {
    var raw = localStorage.getItem("pyro_rewards");
    var rewards = raw ? JSON.parse(raw) : [];
    await _sb.from("app_config").upsert(
      { key: "rewards", value: rewards },
      { onConflict: "key" }
    );
  } catch (e) {
    console.warn("[Supabase] pushRewards:", e);
  }
}

async function sbPullRewards() {
  if (!_sbReady) return null;
  try {
    var res = await _sb.from("app_config").select("value").eq("key", "rewards").maybeSingle();
    if (res.error || !res.data) return null;
    return res.data.value;
  } catch (e) {
    console.warn("[Supabase] pullRewards:", e);
    return null;
  }
}

// ════════════════════ PUNTOS LOG ════════════════════
async function sbPushLogPuntos(ruc, entrada) {
  if (!_sbReady || !ruc || !entrada) return;
  try {
    await _sb.from("puntos_log").insert({
      ruc: ruc,
      tipo: entrada.tipo || "?",
      pts: entrada.pts || 0,
      descripcion: entrada.desc || entrada.descripcion || null,
      ts: entrada.ts ? new Date(entrada.ts).toISOString() : new Date().toISOString()
    });
  } catch (e) {
    console.warn("[Supabase] pushLogPuntos:", e);
  }
}

// ════════════════════ PULL COMPLETO AL LOGIN ════════════════════
// Se llama después del login exitoso: descarga datos de Supabase y
// los funde con lo que ya está en localStorage (Supabase gana en conflicto).
async function sbPullAll(esAdmin) {
  if (!_sbReady) return;
  _sbSetStatus("sync");
  try {
    var [pedCloud, stCloud, distCloud, rewCloud] = await Promise.all([
      sbPullPedidos(),
      sbPullStock(),
      esAdmin ? sbPullDistribuidores() : Promise.resolve(null),
      esAdmin ? sbPullRewards() : Promise.resolve(null)
    ]);

    var changed = false;

    // Fusionar pedidos: Supabase gana (tiene datos de todos los dispositivos)
    if (pedCloud && pedCloud.length) {
      var local = [];
      try { local = JSON.parse(localStorage.getItem("pyro_pedidos") || "[]"); } catch (e) {}
      var mapaLocal = {};
      local.forEach(function(p) { mapaLocal[p.id] = p; });
      pedCloud.forEach(function(p) { mapaLocal[p.id] = p; });
      var fusionados = Object.values(mapaLocal);
      // Mantener orden cronológico por fecha ISO
      fusionados.sort(function(a,b){var da=a.fechaISO||"",db=b.fechaISO||"";return da>db?1:da<db?-1:0;});
      localStorage.setItem("pyro_pedidos", JSON.stringify(fusionados));
      changed = true;
    }

    // Fusionar stock: Supabase gana
    if (stCloud && Object.keys(stCloud).length) {
      var stLocal = {};
      try { stLocal = JSON.parse(localStorage.getItem("pyro_stock") || "{}"); } catch (e) {}
      Object.assign(stLocal, stCloud);
      localStorage.setItem("pyro_stock", JSON.stringify(stLocal));
      changed = true;
    }

    // Fusionar distribuidores (solo admin)
    if (distCloud) {
      if (distCloud.extra && distCloud.extra.length) {
        localStorage.setItem("pyro_dist_extra", JSON.stringify(distCloud.extra));
      }
      if (distCloud.elim && distCloud.elim.length) {
        localStorage.setItem("pyro_dist_eliminados", JSON.stringify(distCloud.elim));
      }
      changed = true;
    }

    // Fusionar rewards (solo admin)
    if (rewCloud && Array.isArray(rewCloud)) {
      localStorage.setItem("pyro_rewards", JSON.stringify(rewCloud));
      changed = true;
    }

    _sbSetStatus("ok");

    // Refrescar la UI si algo cambió
    if (changed) {
      // Reload in-memory globals from localStorage before re-rendering
      if (typeof cargarPedidos === "function") {
        try { window.PEDIDOS = cargarPedidos(); } catch (e) {}
      }
      if (typeof cargarStock === "function") {
        try { cargarStock(); } catch (e) {}
      }
      if (typeof renderAdmin === "function" && window._USER && window._USER.esAdmin) {
        try { renderAdmin(); } catch (e) {}
      }
    }

  } catch (e) {
    console.warn("[Supabase] pullAll:", e);
    _sbSetStatus("err");
  }
}

// ════════════════════ REALTIME — pedidos en vivo para admin ══════════════════
var _sbRealtimeChannel = null;
function sbSuscribirPedidos() {
  if (!_sbReady || _sbRealtimeChannel) return;
  try {
    _sbRealtimeChannel = _sb
      .channel("pedidos-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "pedidos" }, function(payload) {
        if (!payload || !payload.new || !payload.new.data) return;
        var p = payload.new.data;
        // Merge el pedido en localStorage y en PEDIDOS (si está cargado en memoria)
        try {
          var raw = localStorage.getItem("pyro_pedidos") || "[]";
          var arr = JSON.parse(raw);
          var idx = arr.findIndex(function(x) { return String(x.id) === String(p.id); });
          if (idx > -1) { arr[idx] = p; } else { arr.push(p); }
          arr.sort(function(a, b) { var da=a.fechaISO||"",db=b.fechaISO||"";return da>db?1:da<db?-1:0; });
          localStorage.setItem("pyro_pedidos", JSON.stringify(arr));
          if (typeof PEDIDOS !== "undefined") {
            var mi = PEDIDOS.findIndex(function(x) { return String(x.id) === String(p.id); });
            if (mi > -1) { PEDIDOS[mi] = p; } else { PEDIDOS.push(p); PEDIDOS.sort(function(a,b){var da=a.fechaISO||"",db=b.fechaISO||"";return da>db?1:da<db?-1:0;}); }
          }
          if (typeof chequearPedidosNuevos === "function") chequearPedidosNuevos();
          if (typeof renderAdmin === "function" && window._USER && window._USER.esAdmin) renderAdmin();
        } catch (er) {}
      })
      .subscribe();
  } catch (e) {
    console.warn("[Supabase] realtime:", e);
  }
}

function sbDesuscribir() {
  if (_sbRealtimeChannel) {
    try { _sb.removeChannel(_sbRealtimeChannel); } catch (e) {}
    _sbRealtimeChannel = null;
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", sbInit);
} else {
  sbInit();
}
