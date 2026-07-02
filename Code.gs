// ════════════════════════════════════════════════════════════════
// Code.gs — Backend Google Apps Script para Portal PyroShield
// ════════════════════════════════════════════════════════════════

var SHEET_ID = "1H3OQmaJtqVWHqVrI_hX2h8ZL_-a6RRobQww7IuGMhp0";

var HOJA_PEDIDOS  = "PEDIDOS_PYRO";
var HOJA_BACKUP   = "BACKUP_COMPLETO";
var HOJA_STOCK    = "STOCK_PYRO";
var HOJA_TUTORIALES = "TUTORIALES_COMPLETADOS";

var ENCABEZADOS_PEDIDOS = [
  "id_pedido","fecha","ruc_dist","nombre_dist",
  "items_json","total","estado","fecha_registro","pedido_json"
];

// ════════════════════════════════════════════════════════════════
// Token de seguridad
// ════════════════════════════════════════════════════════════════
function verificarToken(datos) {
  var secretProp = PropertiesService.getScriptProperties().getProperty("PYRO_SECRET");
  var secret = secretProp || "PyroShield-portal-2026";
  return datos.token && datos.token === secret;
}

// ════════════════════════════════════════════════════════════════
// doPost — enruta por el campo "accion"
// ════════════════════════════════════════════════════════════════
function doPost(e) {
  var resultado;
  try {
    var datos = JSON.parse(e.postData.contents);
    if (!verificarToken(datos)) {
      return _json({ ok: false, error: "No autorizado" });
    }
    switch (datos.accion) {
      case "guardarPedidoPyro":
        resultado = recibirPedidoPyro(datos); break;
      case "actualizarEstadoPyro":
        resultado = actualizarEstadoPyro(datos); break;
      case "backup":
        resultado = recibirBackupPyro(datos); break;
      case "obtenerPedidos":
        resultado = obtenerTodosPedidos(datos); break;
      case "marcarTutorial":
        resultado = marcarTutorialCompletado(datos); break;
      case "reiniciarTutoriales":
        resultado = reiniciarTutorialesRuc(datos); break;
      case "reportarError":
        resultado = recibirErrorCliente(datos); break;
      case "registrarAcceso":
        resultado = registrarAcceso(datos); break;
      default:
        resultado = { ok: false, error: "Acción no reconocida: " + datos.accion };
    }
  } catch (err) {
    resultado = { ok: false, error: String(err) };
  }
  return _json(resultado);
}

// ════════════════════════════════════════════════════════════════
// doGet — permite obtener pedidos sin necesitar POST (más simple)
// ════════════════════════════════════════════════════════════════
function doGet(e) {
  var params = e.parameter || {};
  var secretProp = PropertiesService.getScriptProperties().getProperty("PYRO_SECRET");
  var secret = secretProp || "PyroShield-portal-2026";
  if (params.token !== secret) return _json({ ok: false, error: "No autorizado" });

  if (params.accion === "obtenerPedidos") {
    return _json(obtenerTodosPedidos(params));
  }
  if (params.accion === "obtenerStock") {
    return _json(obtenerStockNube());
  }
  if (params.accion === "obtenerMeta") {
    return _json(obtenerMetaNube());
  }
  if (params.accion === "obtenerTutoriales") {
    return _json(obtenerTutorialesCompletados(params));
  }
  if (params.accion === "limpiarDatos") {
    return _json(LIMPIAR_DATOS_PRUEBA());
  }
  if (params.accion === "obtenerAccesos") {
    return _json(obtenerAccesos());
  }
  return _json({ ok: false, error: "Acción no reconocida" });
}

// ════════════════════════════════════════════════════════════════
// recibirPedidoPyro — registra un pedido nuevo en PEDIDOS_PYRO
// ════════════════════════════════════════════════════════════════
function recibirPedidoPyro(datos) {
  var hoja = obtenerHoja(HOJA_PEDIDOS, ENCABEZADOS_PEDIDOS);
  var ultima = hoja.getLastRow();
  if (ultima > 1) {
    var ids = hoja.getRange(2, 1, ultima - 1, 1).getValues().flat();
    var idx = ids.indexOf(datos.id_pedido);
    if (idx !== -1) {
      // Upsert: la fila ya existe — actualizar estado y pedido_json
      var fila = idx + 2;
      if (datos.estado) hoja.getRange(fila, 7).setValue(datos.estado);
      if (datos.pedido_json) hoja.getRange(fila, 9).setValue(datos.pedido_json);
      return { ok: true, actualizado: true };
    }
  }
  hoja.appendRow([
    datos.id_pedido || "",
    datos.fecha || "",
    datos.ruc_dist || "",
    datos.nombre_dist || "",
    datos.items_json || "",
    datos.total != null ? datos.total : "",
    datos.estado || "pendiente",
    new Date(),
    datos.pedido_json || ""
  ]);
  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// actualizarEstadoPyro — actualiza la columna "estado"
// ════════════════════════════════════════════════════════════════
function actualizarEstadoPyro(datos) {
  if (!datos.id_pedido || !datos.estado) return { ok: false, error: "Faltan campos" };
  var hoja = obtenerHoja(HOJA_PEDIDOS, ENCABEZADOS_PEDIDOS);
  var ultima = hoja.getLastRow();
  if (ultima < 2) return { ok: false, error: "No hay pedidos" };
  var ids = hoja.getRange(2, 1, ultima - 1, 1).getValues().flat();
  var idx = ids.indexOf(datos.id_pedido);
  if (idx === -1) return { ok: false, error: "Pedido no encontrado" };
  hoja.getRange(idx + 2, 7).setValue(datos.estado);
  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// recibirBackupPyro — guarda snapshot completo de pedidos + stock + meta
// ════════════════════════════════════════════════════════════════
function recibirBackupPyro(datos) {
  var ss = SpreadsheetApp.openById(SHEET_ID);

  // ── Backup completo de pedidos en PEDIDOS_PYRO ──
  var hojaPed = obtenerHoja(HOJA_PEDIDOS, ENCABEZADOS_PEDIDOS);
  var pedidos = (datos.pedidos || []).slice(0, 500); // límite de seguridad
  // Leer IDs existentes una sola vez (O(n) en vez de O(n²))
  var ultimaInicial = hojaPed.getLastRow();
  var idsExistentes = ultimaInicial > 1
    ? hojaPed.getRange(2, 1, ultimaInicial - 1, 1).getValues().flat()
    : [];
  var idSet = {};
  idsExistentes.forEach(function(id, i) { if (id) idSet[String(id)] = i + 2; });
  pedidos.forEach(function(p) {
    if (!p.id) return; // Saltar pedidos sin ID
    var idStr = String(p.id);
    if (!(idStr in idSet)) {
      hojaPed.appendRow([
        idStr,
        p.fecha || "",
        p.ruc || "",
        p.razon || "",
        JSON.stringify(p.items || []),
        p.total != null ? p.total : "",
        p.estado || "",
        new Date(),
        JSON.stringify(p)
      ]);
      idSet[idStr] = hojaPed.getLastRow(); // actualizar mapa local
    } else {
      var fila = idSet[idStr];
      hojaPed.getRange(fila, 7).setValue(p.estado || "");
      hojaPed.getRange(fila, 9).setValue(JSON.stringify(p));
    }
  });

  // ── Stock en STOCK_PYRO ──
  if (datos.stock) {
    var hojaStock = obtenerHoja(HOJA_STOCK, ["id_producto","stock","ago","fecha_actualizacion"]);
    hojaStock.clearContents();
    hojaStock.appendRow(["id_producto","stock","ago","fecha_actualizacion"]);
    var stockObj = datos.stock;
    Object.keys(stockObj).forEach(function(id) {
      var s = stockObj[id];
      hojaStock.appendRow([id, s.stock, s.ago ? "SI" : "NO", new Date()]);
    });
  }

  // ── Snapshot JSON en BACKUP_COMPLETO (4 columnas: fecha, pedidos, stock, meta) ──
  var hojaSnap = obtenerHoja(HOJA_BACKUP, ["fecha","pedidos_json","stock_json","meta_json"]);
  hojaSnap.appendRow([
    new Date(),
    JSON.stringify(datos.pedidos || []),
    JSON.stringify(datos.stock || {}),
    JSON.stringify(datos.meta || {})
  ]);
  // Mantener solo los últimos 30 snapshots
  var lastRow = hojaSnap.getLastRow();
  if (lastRow > 31) hojaSnap.deleteRows(2, lastRow - 31);

  return { ok: true, pedidos: pedidos.length };
}

// ════════════════════════════════════════════════════════════════
// obtenerTodosPedidos — devuelve todos los pedidos del Sheet
// ════════════════════════════════════════════════════════════════
function obtenerTodosPedidos(params) {
  var rucFiltro = params.ruc || null;

  // PEDIDOS_PYRO es la fuente de verdad: una fila por pedido, nunca se
  // sobreescribe completa. (El snapshot de BACKUP_COMPLETO lo reescribe el
  // último dispositivo que respalda y puede estar incompleto.)
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hojaPed = ss.getSheetByName(HOJA_PEDIDOS);
  if (!hojaPed || hojaPed.getLastRow() < 2) return { ok: true, pedidos: [] };
  var rows = hojaPed.getRange(2, 1, hojaPed.getLastRow() - 1, 9).getValues();
  var pedidos = rows
    .filter(function(r){ return r[0]; })
    .map(function(r){
      // Si la fila tiene el pedido completo en JSON, usarlo (conserva pago,
      // modo, entregaInfo, puntos, canjes...). La columna estado (7) manda.
      if (r[8]) {
        try {
          var p = JSON.parse(r[8]);
          if (r[6]) p.estado = r[6];
          return p;
        } catch(e) {}
      }
      var items = [];
      try { items = JSON.parse(r[4]); } catch(e){}
      return { id:r[0], fecha:r[1], ruc:r[2], razon:r[3], items:items, total:r[5], estado:r[6] };
    });
  if (rucFiltro) pedidos = pedidos.filter(function(p){ return p.ruc === rucFiltro; });
  return { ok: true, pedidos: pedidos, fuente: "pedidos_pyro" };
}

// ════════════════════════════════════════════════════════════════
// obtenerStockNube — devuelve el stock guardado en STOCK_PYRO
// ════════════════════════════════════════════════════════════════
function obtenerStockNube() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName(HOJA_STOCK);
  if (!hoja || hoja.getLastRow() < 2) return { ok: true, stock: {} };
  var rows = hoja.getRange(2, 1, hoja.getLastRow() - 1, 3).getValues();
  var stock = {};
  rows.forEach(function(r){
    if (r[0]) stock[r[0]] = { stock: Number(r[1]) || 0, ago: r[2] === "SI" };
  });
  return { ok: true, stock: stock };
}

// ════════════════════════════════════════════════════════════════
// obtenerMetaNube — devuelve el meta_json del último snapshot
// ════════════════════════════════════════════════════════════════
function obtenerMetaNube() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName(HOJA_BACKUP);
  if (!hoja || hoja.getLastRow() < 2) return { ok: true, meta: {} };
  var lastRow = hoja.getLastRow();
  // Columna 4 = meta_json (si existe)
  var numCols = hoja.getLastColumn();
  if (numCols < 4) return { ok: true, meta: {} };
  var metaJson = hoja.getRange(lastRow, 4).getValue();
  try {
    var meta = JSON.parse(metaJson);
    return { ok: true, meta: meta };
  } catch(e) {
    return { ok: true, meta: {} };
  }
}

// ════════════════════════════════════════════════════════════════
// marcarTutorialCompletado — guarda ruc + tab en TUTORIALES_COMPLETADOS
// ════════════════════════════════════════════════════════════════
function marcarTutorialCompletado(datos) {
  if (!datos.ruc || !datos.tab) return { ok: false, error: "Faltan campos" };
  var hoja = obtenerHoja(HOJA_TUTORIALES, ["ruc","tab","fecha"]);
  var ultima = hoja.getLastRow();
  if (ultima > 1) {
    var rows = hoja.getRange(2, 1, ultima - 1, 2).getValues();
    for (var i = 0; i < rows.length; i++) {
      if (rows[i][0] === datos.ruc && rows[i][1] === datos.tab) return { ok: true, duplicado: true };
    }
  }
  hoja.appendRow([datos.ruc, datos.tab, new Date()]);
  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// obtenerTutorialesCompletados — devuelve lista de tabs completados por ruc
// ════════════════════════════════════════════════════════════════
function obtenerTutorialesCompletados(params) {
  if (!params.ruc) return { ok: false, error: "Falta ruc" };
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName(HOJA_TUTORIALES);
  if (!hoja || hoja.getLastRow() < 2) return { ok: true, tabs: [] };
  var rows = hoja.getRange(2, 1, hoja.getLastRow() - 1, 2).getValues();
  var tabs = rows
    .filter(function(r){ return r[0] === params.ruc; })
    .map(function(r){ return r[1]; });
  return { ok: true, tabs: tabs };
}

// ════════════════════════════════════════════════════════════════
// reiniciarTutorialesRuc — borra todas las filas de un RUC en TUTORIALES_COMPLETADOS
// ════════════════════════════════════════════════════════════════
function reiniciarTutorialesRuc(datos) {
  if (!datos.ruc) return { ok: false, error: "Falta ruc" };
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName(HOJA_TUTORIALES);
  if (!hoja || hoja.getLastRow() < 2) return { ok: true };
  var rows = hoja.getRange(2, 1, hoja.getLastRow() - 1, 1).getValues();
  // Recorrer de abajo hacia arriba para no desajustar índices al borrar
  for (var i = rows.length - 1; i >= 0; i--) {
    if (rows[i][0] === datos.ruc) hoja.deleteRow(i + 2);
  }
  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// Util
// ════════════════════════════════════════════════════════════════
function obtenerHoja(nombre, encabezados) {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName(nombre);
  if (!hoja) {
    hoja = ss.insertSheet(nombre);
    hoja.appendRow(encabezados);
    hoja.setFrozenRows(1);
  }
  return hoja;
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ════════════════════════════════════════════════════════════════
// recibirErrorCliente — guarda error en ERRORES_LOG y notifica por email
// ════════════════════════════════════════════════════════════════
function recibirErrorCliente(datos) {
  var e = datos.error || {};
  var hoja = obtenerHoja("ERRORES_LOG", ["timestamp","ruc","distribuidor","mensaje","archivo","linea","columna","stack"]);
  hoja.appendRow([
    e.ts || new Date().toISOString(),
    e.ruc || "",
    e.razon || "",
    e.msg || "",
    e.src || "",
    e.linea || "",
    e.col || "",
    e.stack || ""
  ]);

  // Email de alerta
  var asunto = "🚨 PyroShield — Error en portal: " + (e.razon || e.ruc || "desconocido");
  var cuerpo = "Se registró un error en el portal PyroShield.\n\n"
    + "Distribuidor: " + (e.razon || "—") + "\n"
    + "RUC: " + (e.ruc || "—") + "\n"
    + "Hora: " + (e.ts || "—") + "\n"
    + "Error: " + (e.msg || "—") + "\n"
    + "Archivo: " + (e.src || "—") + " línea " + (e.linea || "—") + "\n"
    + (e.stack ? "\nStack:\n" + e.stack : "");

  try {
    MailApp.sendEmail("alejosl0801@gmail.com", asunto, cuerpo);
  } catch(mailErr) {
    Logger.log("Email no enviado: " + mailErr);
  }

  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// registrarAcceso — guarda un login en ACCESOS_LOG (para que el admin
// vea, desde cualquier dispositivo, quién y cuándo inició sesión)
// ════════════════════════════════════════════════════════════════
function registrarAcceso(datos) {
  var a = datos.acceso || {};
  var hoja = obtenerHoja("ACCESOS_LOG", ["ruc","razon","fecha","hora","registrado"]);
  hoja.appendRow([a.ruc || "", a.razon || "", a.fecha || "", a.hora || "", new Date()]);
  // Mantener solo los últimos 1000 accesos
  var ultima = hoja.getLastRow();
  if (ultima > 1001) hoja.deleteRows(2, ultima - 1001);
  return { ok: true };
}

// obtenerAccesos — devuelve los accesos registrados (más recientes primero)
function obtenerAccesos() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName("ACCESOS_LOG");
  if (!hoja || hoja.getLastRow() < 2) return { ok: true, accesos: [] };
  var rows = hoja.getRange(2, 1, hoja.getLastRow() - 1, 4).getValues();
  var accesos = rows.filter(function(r){ return r[0]; }).map(function(r){
    return { ruc: r[0], razon: r[1], fecha: r[2], hora: r[3] };
  });
  accesos.reverse();
  if (accesos.length > 300) accesos = accesos.slice(0, 300);
  return { ok: true, accesos: accesos };
}

// ════════════════════════════════════════════════════════════════
// LIMPIEZA ÚNICA — Ejecutar UNA VEZ desde el editor de Apps Script
// para borrar todos los datos de prueba antes del lanzamiento.
// Después de ejecutar, ELIMINAR o comentar esta función.
// ════════════════════════════════════════════════════════════════
function LIMPIAR_DATOS_PRUEBA() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hojas = [
    { nombre: HOJA_PEDIDOS,    encabezados: ENCABEZADOS_PEDIDOS },
    { nombre: HOJA_BACKUP,     encabezados: ["fecha","pedidos_json","stock_json","meta_json"] },
    { nombre: HOJA_STOCK,      encabezados: ["id_producto","stock","ago","fecha_actualizacion"] },
    { nombre: HOJA_TUTORIALES, encabezados: ["ruc","tab","fecha"] },
    { nombre: "ERRORES_LOG",   encabezados: ["timestamp","ruc","distribuidor","mensaje","archivo","linea","columna","stack"] },
    { nombre: "ACCESOS_LOG",   encabezados: ["ruc","razon","fecha","hora","registrado"] }
  ];

  hojas.forEach(function(h) {
    var hoja = ss.getSheetByName(h.nombre);
    if (!hoja) { Logger.log("No existe: " + h.nombre); return; }
    var ultima = hoja.getLastRow();
    if (ultima > 1) {
      hoja.deleteRows(2, ultima - 1);
      Logger.log("✅ Limpiada: " + h.nombre + " (" + (ultima - 1) + " filas borradas)");
    } else {
      Logger.log("ℹ️  Ya estaba vacía: " + h.nombre);
    }
  });

  Logger.log("🎉 Listo. El Sheet está limpio para producción.");
  return { ok: true, msg: "Sheets limpiadas correctamente" };
}
