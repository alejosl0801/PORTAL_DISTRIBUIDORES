// ════════════════════════════════════════════════════════════════
// Code.gs — Backend Google Apps Script para Portal PyroShield
//
// Web App desplegada como endpoint POST. Recibe los pedidos
// confirmados desde el portal (app.js → confirmarPedido)
// y los registra/actualiza en un Google Sheet.
// ════════════════════════════════════════════════════════════════

// ID del Google Sheet donde se almacenan los pedidos
var SHEET_ID = "1H3OQmaJtqVWHqVrI_hX2h8ZL_-a6RRobQww7IuGMhp0";

// Nombre de la pestaña y encabezados de la hoja de pedidos
var HOJA_PEDIDOS = "PEDIDOS_PYRO";
var ENCABEZADOS_PEDIDOS = [
  "id_pedido",
  "fecha",
  "ruc_dist",
  "nombre_dist",
  "items_json",
  "total",
  "estado",
  "fecha_registro"
];

// ════════════════════════════════════════════════════════════════
// Autenticación: el token debe coincidir con GAS_TOKEN en app.js
// Para mayor seguridad, guardar el token en:
//   Apps Script > Proyecto > Propiedades > PYRO_SECRET
// Si la propiedad no existe, se usa el token hardcodeado como fallback.
// ════════════════════════════════════════════════════════════════
function verificarToken(datos) {
  var secretProp = PropertiesService.getScriptProperties().getProperty("PYRO_SECRET");
  var secret = secretProp || "PyroShield-portal-2026";
  if (!datos.token || datos.token !== secret) {
    return false;
  }
  return true;
}

// ════════════════════════════════════════════════════════════════
// ENTRADA: doPost — enruta por el campo "accion"
// ════════════════════════════════════════════════════════════════
function doPost(e) {
  var resultado;
  try {
    var datos = JSON.parse(e.postData.contents);
    if (!verificarToken(datos)) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "No autorizado" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    switch (datos.accion) {
      case "guardarPedidoPyro":
        resultado = recibirPedidoPyro(datos);
        break;
      case "actualizarEstadoPyro":
        resultado = actualizarEstadoPyro(datos);
        break;
      default:
        resultado = { ok: false, error: "Acción no reconocida: " + datos.accion };
    }
  } catch (err) {
    resultado = { ok: false, error: String(err) };
  }
  return ContentService
    .createTextOutput(JSON.stringify(resultado))
    .setMimeType(ContentService.MimeType.JSON);
}

// ════════════════════════════════════════════════════════════════
// recibirPedidoPyro — registra un pedido nuevo en PEDIDOS_PYRO
// ════════════════════════════════════════════════════════════════
function recibirPedidoPyro(datos) {
  var hoja = obtenerHojaPedidos();

  // Evitar duplicados: si ya existe el id_pedido, no insertar de nuevo
  var ultima = hoja.getLastRow();
  if (ultima > 1) {
    var ids = hoja.getRange(2, 1, ultima - 1, 1).getValues().flat();
    if (ids.indexOf(datos.id_pedido) !== -1) {
      return { ok: true, duplicado: true };
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
    new Date()
  ]);

  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// actualizarEstadoPyro — actualiza la columna "estado" de un pedido
// ════════════════════════════════════════════════════════════════
function actualizarEstadoPyro(datos) {
  if (!datos.id_pedido || !datos.estado) {
    return { ok: false, error: "Faltan id_pedido o estado" };
  }
  var hoja = obtenerHojaPedidos();
  var ultima = hoja.getLastRow();
  if (ultima < 2) return { ok: false, error: "No hay pedidos" };

  var ids = hoja.getRange(2, 1, ultima - 1, 1).getValues().flat();
  var idx = ids.indexOf(datos.id_pedido);
  if (idx === -1) return { ok: false, error: "Pedido no encontrado: " + datos.id_pedido };

  // Columna 7 = "estado" (1-based, fila idx+2)
  hoja.getRange(idx + 2, 7).setValue(datos.estado);
  return { ok: true };
}

// ════════════════════════════════════════════════════════════════
// Util: obtiene (o crea) la hoja PEDIDOS_PYRO con sus encabezados
// ════════════════════════════════════════════════════════════════
function obtenerHojaPedidos() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var hoja = ss.getSheetByName(HOJA_PEDIDOS);
  if (!hoja) {
    hoja = ss.insertSheet(HOJA_PEDIDOS);
    hoja.appendRow(ENCABEZADOS_PEDIDOS);
    hoja.setFrozenRows(1);
  }
  return hoja;
}
