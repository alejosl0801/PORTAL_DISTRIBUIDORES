// ════════════════════════════════════════════════════════════════
// Code.gs — Backend Google Apps Script para Portal PyroShield
// ════════════════════════════════════════════════════════════════

var SHEET_ID = "1H3OQmaJtqVWHqVrI_hX2h8ZL_-a6RRobQww7IuGMhp0";

var HOJA_PEDIDOS  = "PEDIDOS_PYRO";
var HOJA_BACKUP   = "BACKUP_COMPLETO";
var HOJA_STOCK    = "STOCK_PYRO";

var ENCABEZADOS_PEDIDOS = [
  "id_pedido","fecha","ruc_dist","nombre_dist",
  "items_json","total","estado","fecha_registro"
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
    if (ids.indexOf(datos.id_pedido) !== -1) return { ok: true, duplicado: true };
  }
  hoja.appendRow([
    datos.id_pedido || "",
    datos.fecha || "",
    datos.ruc_dist || "",
    datos.nombre_dist || "",
    datos.items_json || "",
    datos.total != null ? datos.total : "",
    datos.estado || "pendiente",
    new Date()
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
  var pedidos = datos.pedidos || [];
  pedidos.forEach(function(p) {
    var ultima = hojaPed.getLastRow();
    var ids = ultima > 1
      ? hojaPed.getRange(2, 1, ultima - 1, 1).getValues().flat()
      : [];
    if (ids.indexOf(p.id) === -1) {
      hojaPed.appendRow([
        p.id || "",
        p.fecha || "",
        p.ruc || "",
        p.razon || "",
        JSON.stringify(p.items || []),
        p.total != null ? p.total : "",
        p.estado || "",
        new Date()
      ]);
    } else {
      var idx = ids.indexOf(p.id);
      hojaPed.getRange(idx + 2, 7).setValue(p.estado || "");
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

  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hojaSnap = ss.getSheetByName(HOJA_BACKUP);
  if (hojaSnap && hojaSnap.getLastRow() > 1) {
    var lastRow = hojaSnap.getLastRow();
    var pedidosJson = hojaSnap.getRange(lastRow, 2).getValue();
    try {
      var pedidos = JSON.parse(pedidosJson);
      if (rucFiltro) pedidos = pedidos.filter(function(p){ return p.ruc === rucFiltro; });
      return { ok: true, pedidos: pedidos, fuente: "snapshot" };
    } catch(e) {}
  }

  // Fallback: reconstruir desde PEDIDOS_PYRO fila a fila
  var hojaPed = ss.getSheetByName(HOJA_PEDIDOS);
  if (!hojaPed || hojaPed.getLastRow() < 2) return { ok: true, pedidos: [] };
  var rows = hojaPed.getRange(2, 1, hojaPed.getLastRow() - 1, 8).getValues();
  var pedidos = rows
    .filter(function(r){ return r[0]; })
    .map(function(r){
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
