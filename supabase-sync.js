// ════════════════════ SUPABASE SYNC — PyroShield ════════════════════
// Supabase ES la fuente de verdad compartida entre dispositivos.
// localStorage es caché local — siempre se reemplaza con lo de Supabase al login.

var SUPABASE_URL = "https://flxweylyksddssvuqdzq.supabase.co";
var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZseHdleWx5a3NkZHNzdnVxZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NTg0NDMsImV4cCI6MjA5NzAzNDQ0M30.hJRfemrsIaOKKl5HWJCSI6myxrqzOl6zuhIcSZHIFwE";
var _sb = null;
var _sbReady = false;
var _sbSyncInProgress = false;
var _sbFailCount = 0;
var _sbCircuitOpen = false;
var _sbCircuitTimer = null;
var _sbRetryTimer = null;

function _sbOnSuccess() {
  _sbFailCount = 0;
  _sbCircuitOpen = false;
  if (_sbCircuitTimer) { clearTimeout(_sbCircuitTimer); _sbCircuitTimer = null; }
}

function _sbOnFailure(label) {
  _sbFailCount++;
  if (_sbCircuitTimer) clearTimeout(_sbCircuitTimer);
  if (_sbRetryTimer) clearTimeout(_sbRetryTimer);
  if (_sbFailCount >= 3) {
    _sbCircuitOpen = true;
    _sbSetStatus("err");
    console.warn("[Supabase] circuit open after", _sbFailCount, "failures — pausing 5 min");
    _sbCircuitTimer = setTimeout(function() {
      _sbCircuitOpen = false;
      _sbFailCount = 0;
      _sbCircuitTimer = null;
      console.warn("[Supabase] circuit reset — will retry on next push");
    }, 5 * 60 * 1000);
  } else {
    // Exponential backoff: 5s, 10s, 20s... max 120s
    var delay = Math.min(5000 * Math.pow(2, _sbFailCount - 1), 120000);
    console.warn("[Supabase]", label, "retry in", delay/1000, "s");
    _sbRetryTimer = setTimeout(function() {
      _sbRetryTimer = null;
      if (label === "pushPedidos") sbPushPedidos();
      else if (label === "pushStock") sbPushStock();
    }, delay);
  }
}

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
  if (!_sbReady || _sbCircuitOpen) return;
  try {
    var raw = localStorage.getItem("pyro_pedidos");
    if (!raw) return;
    var pedidos = JSON.parse(raw);
    if (!Array.isArray(pedidos) || !pedidos.length) return;
    // Un cliente solo debe subir SUS propios pedidos. Si subiera todo el array
    // (que incluye pedidos de otros que trajo al login), pisaria con su copia
    // vieja los cambios de estado que el admin hizo despues (last-writer-wins).
    var u = window._USER;
    var esGestor = u && (u.esAdmin || u.rol === "impresion");
    if (u && !esGestor) {
      pedidos = pedidos.filter(function(p) { return p.ruc === u.ruc; });
    }
    if (!pedidos.length) return;
    var rows = pedidos.map(function(p) {
      return { id: String(p.id), data: p, ruc: p.ruc || null, estado: p.estado || null };
    });
    _sbSetStatus("sync");
    await _sbUpsert("pedidos", rows, "id");
    _sbOnSuccess();
    _sbSetStatus("ok");
  } catch (e) {
    console.warn("[Supabase] pushPedidos:", e);
    _sbSetStatus("err");
    _sbOnFailure("pushPedidos");
  }
}

// Empuja UN solo pedido (upsert por id). Se usa cuando el pedido ya no está
// en el array local — p.ej. al editar, para dejarlo "cancelado" en la nube y
// que no reaparezca como fantasma en otro dispositivo.
async function sbPushUnPedido(p) {
  if (!_sbReady || _sbCircuitOpen || !p || !p.id) return;
  try {
    var row = { id: String(p.id), data: p, ruc: p.ruc || null, estado: p.estado || null };
    _sbSetStatus("sync");
    await _sbUpsert("pedidos", [row], "id");
    _sbOnSuccess();
    _sbSetStatus("ok");
  } catch (e) {
    console.warn("[Supabase] pushUnPedido:", e);
    _sbSetStatus("err");
    _sbOnFailure("pushUnPedido");
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
  if (!_sbReady || _sbCircuitOpen) return;
  try {
    var raw = localStorage.getItem("pyro_stock");
    if (!raw) return;
    var st = JSON.parse(raw);
    var rows = Object.keys(st).map(function(id) {
      return { id: id, stock: st[id].stock, ago: st[id].ago };
    });
    await _sbUpsert("stock", rows, "id");
    _sbOnSuccess();
  } catch (e) {
    console.warn("[Supabase] pushStock:", e);
    _sbOnFailure("pushStock");
  }
}

// Sube SOLO los productos indicados (los de un pedido), no todo el mapa de
// stock. Reduce la ventana de sobreescritura: un cliente jamas pisa el stock
// de productos que no toco. (La atomicidad total ante dos pedidos del MISMO
// producto a la vez requiere la funcion RPC del lado de Supabase.)
async function sbPushStockParcial(ids) {
  if (!_sbReady || _sbCircuitOpen || !ids || !ids.length) return;
  try {
    var raw = localStorage.getItem("pyro_stock");
    if (!raw) return;
    var st = JSON.parse(raw);
    var rows = ids.filter(function(id){ return st[id] != null; }).map(function(id) {
      return { id: id, stock: st[id].stock, ago: st[id].ago };
    });
    if (!rows.length) return;
    await _sbUpsert("stock", rows, "id");
    _sbOnSuccess();
  } catch (e) {
    console.warn("[Supabase] pushStockParcial:", e);
    _sbOnFailure("pushStockParcial");
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

// ════════════════════ REGISTRO DE ACCESOS ════════════════════
// Guarda el login en app_config (key="accesos_log") como array. Asi el admin
// ve, desde cualquier dispositivo, quien y cuando inicio sesion — SIN depender
// de redesplegar el Apps Script.
async function sbPushAcceso(acceso) {
  if (!_sbReady || !acceso) return;
  try {
    var res = await _sb.from("app_config").select("value").eq("key", "accesos_log").maybeSingle();
    var arr = (res && res.data && Array.isArray(res.data.value)) ? res.data.value : [];
    arr.unshift(acceso);
    if (arr.length > 500) arr = arr.slice(0, 500);
    await _sb.from("app_config").upsert({ key: "accesos_log", value: arr }, { onConflict: "key" });
  } catch (e) {
    console.warn("[Supabase] pushAcceso:", e);
  }
}
async function sbPullAccesos() {
  if (!_sbReady) return null;
  try {
    var res = await _sb.from("app_config").select("value").eq("key", "accesos_log").maybeSingle();
    if (res.error || !res.data) return null;
    return Array.isArray(res.data.value) ? res.data.value : [];
  } catch (e) {
    console.warn("[Supabase] pullAccesos:", e);
    return null;
  }
}

// ════════════════════ LOG DE ERRORES ════════════════════
// Guarda errores de clientes en app_config (key="errores_log") como array.
// Asi el admin ve, desde cualquier dispositivo y sin redesplegar el Apps
// Script, los errores que tuvieron sus distribuidores.
async function sbPushError(entrada) {
  if (!_sbReady || !entrada) return;
  try {
    var res = await _sb.from("app_config").select("value").eq("key", "errores_log").maybeSingle();
    var arr = (res && res.data && Array.isArray(res.data.value)) ? res.data.value : [];
    arr.unshift(entrada);
    if (arr.length > 200) arr = arr.slice(0, 200);
    await _sb.from("app_config").upsert({ key: "errores_log", value: arr }, { onConflict: "key" });
  } catch (e) {
    console.warn("[Supabase] pushError:", e);
  }
}
async function sbPullErrores() {
  if (!_sbReady) return null;
  try {
    var res = await _sb.from("app_config").select("value").eq("key", "errores_log").maybeSingle();
    if (res.error || !res.data) return null;
    return Array.isArray(res.data.value) ? res.data.value : [];
  } catch (e) {
    console.warn("[Supabase] pullErrores:", e);
    return null;
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
      sbPullRewards()   // TAMBIEN para clientes: deben ver el catalogo de premios actualizado
    ]);

    var changed = false;

    // Pedidos: Supabase ES la fuente de verdad — reemplaza localStorage completamente.
    // Si Supabase devuelve array (incluso vacío tras una limpieza), ese array manda.
    // Solo se conserva localStorage si Supabase no responde (null = error de red).
    if (pedCloud !== null) {
      var pedidosFinal = Array.isArray(pedCloud) ? pedCloud : [];
      // Si Supabase no tiene nada pero localStorage tiene pedidos sin subir
      // (offline reciente), fusionar para no perder trabajo local pendiente.
      if (pedidosFinal.length === 0) {
        var localPed = [];
        try { localPed = JSON.parse(localStorage.getItem("pyro_pedidos") || "[]"); } catch (e) {}
        var pendientesSync = localPed.filter(function(p) {
          // Solo conservar pedidos creados en los últimos 10 minutos (buffer offline)
          if (!p.fechaISO) return false;
          return (Date.now() - new Date(p.fechaISO).getTime()) < 10 * 60 * 1000;
        });
        pedidosFinal = pendientesSync;
      }
      // Respetar tumbas: no resucitar pedidos que se eliminaron localmente
      // (p.ej. al editar). sincronizarDesdeNube ya lo hace para Sheets; aqui
      // lo aplicamos tambien al pull de Supabase.
      try {
        var tumba = JSON.parse(localStorage.getItem("pyro_ped_eliminados") || "[]");
        if (tumba.length) {
          pedidosFinal = pedidosFinal.filter(function(p) { return tumba.indexOf(p.id) === -1; });
        }
      } catch (e) {}
      pedidosFinal.sort(function(a,b){var da=a.fechaISO||"",db=b.fechaISO||"";return da>db?1:da<db?-1:0;});
      localStorage.setItem("pyro_pedidos", JSON.stringify(pedidosFinal));
      changed = true;
    }

    // Stock: Supabase reemplaza si devuelve datos, si no conserva local
    if (stCloud && Object.keys(stCloud).length) {
      localStorage.setItem("pyro_stock", JSON.stringify(stCloud));
      changed = true;
    }

    // Distribuidores (solo admin): Supabase reemplaza
    if (distCloud) {
      // Extra: reemplazar aunque venga vacío (limpieza real)
      localStorage.setItem("pyro_dist_extra", JSON.stringify(distCloud.extra || []));
      if (distCloud.elim && distCloud.elim.length) {
        localStorage.setItem("pyro_dist_eliminados", JSON.stringify(distCloud.elim));
      }
      changed = true;
    }

    // Fusionar rewards (admin y clientes)
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
      if (typeof cargarDistribuidoresExtra === "function") {
        try { cargarDistribuidoresExtra(); } catch (e) {}
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
