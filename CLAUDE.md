# CLAUDE.md — Portal PyroShield

## Qué es este proyecto

Portal web B2B para distribuidores de PyroShield (extintores, accesorios, gabinetes contra incendios). Es una SPA en **HTML/CSS/JS vanilla** sin frameworks ni paso de compilación. Los distribuidores hacen pedidos, acumulan puntos y canjean premios. El administrador gestiona pedidos, distribuidores y stock.

No hay backend propio: toda la lógica vive en el navegador y los datos se persisten en `localStorage`. La única integración externa es la facturación electrónica via **Azur**.

---

## Estructura de archivos

```
PORTAL_DISTRIBUIDORES/
├── CLAUDE.md
├── Code.gs          — Backend Google Apps Script (sincronización de pedidos)
├── appsscript.json  — Manifiesto del Apps Script
├── index.html       — HTML único de toda la app (login, cliente, admin, modales)
├── app.js           — Toda la lógica: productos, carrito, pedidos, admin, Azur
├── datos.js         — Constantes, IMGS, PROMOS, DISTRIBUIDORES (datos en frío)
├── style.css        — Estilos completos (variables CSS, dark mode, componentes)
└── img/             — imágenes .jpg (productos + logo + promos)
```

No hay subcarpetas `js/`, `css/`, ni `assets/`. Todo suelto en la raíz del repo (servido directo por GitHub Pages). Hay un único archivo JS (`app.js`) que accede a los datos definidos en `datos.js` (cargado antes en el HTML).

---

## Reglas de negocio

### IVA
Constante `IVA = 0.15` (15%). Se aplica sobre el subtotal al confirmar pedido y se muestra desglosado en carrito y detalle de pedido.

### Sistema de puntos (3 variables en datos.js)
| Constante | Valor | Significado |
|---|---|---|
| `PUNTOS_MAX_UNIT` | 450 | Tope de puntos por unidad de producto |
| `UMBRAL_MARGEN_ALTO` | 0.30 | Si margen ≥ 30 %, se usa tasa alta |
| `PCT_ALTO` | 0.10 | Tasa alta: 10 % de la ganancia |
| `PCT_NORMAL` | 0.08 | Tasa normal: 8 % de la ganancia |
| `PUNTOS_X_DOLAR` | 100 | Multiplicador (puntos por dólar de ganancia) |

Fórmula en `calcPuntos(precioAplicado, costo)`:
```
ganancia = precioAplicado - costo
pct = (ganancia/precioAplicado >= 0.30) ? 0.10 : 0.08
pts = min(round(ganancia * pct * 100), 450)
```

### Precios en 3 capas
1. **`pv`** — precio vitrina / público (se muestra tachado)
2. **`pb`** — precio base del distribuidor (por defecto)
3. **`preciosEsp[id]`** — precio especial individual, sobreescribe `pb` (solo algunos distribuidores en `datos.js`)

La función `precioCliente(p)` devuelve `preciosEsp[id]` si existe, sino `pb`.

### Descuentos por volumen
Cada producto tiene `descVol: [[qty, pct], ...]`. La función `precioConVolumen(p, cant)`:
- Calcula `descBase = (pv - precioCliente) / pv * 100`
- Busca el mayor tier de volumen alcanzado → `descVol %`
- Precio final = `pv * (1 - (descBase + descVol) / 100)`
- **El precio nunca baja del costo** (`p.costo`): si la fórmula lo supera, se usa el costo como piso.
- Retorna `{precio, descPct, descVol, descBase}`

---

## Estados de pedido

Flujo normal: `pendiente → en_proceso → entregado → facturado → finalizado`

| Valor en DB | Label mostrado | Color badge | Quién lo asigna |
|---|---|---|---|
| `pendiente` | ⏳ Pendiente | Amarillo | Sistema al confirmar |
| `en_proceso` | 🔄 En proceso | Azul | Admin |
| `entregado` | 📦 Entregado (pend. factura) | Verde claro | Admin |
| `facturado` | 🧾 Facturado (pend. entrega) | Verde claro | Admin |
| `finalizado` | ✔️ Finalizado | Verde | Admin |
| `cancelado` | ✕ Cancelado | Gris | Cliente (solo desde pendiente) o Admin |

**Backward compatibility:** pedidos viejos con `estado = "autorizado"` o `"entrega"` se renderizan como `en_proceso` (mapeo en `estadoLabel()` y `estadoClass()`).

### Botones por estado en el historial del cliente
| Estado | Botones disponibles |
|---|---|
| pendiente | Ver detalle · Editar · Cancelar |
| en_proceso / entregado / facturado | Ver detalle |
| finalizado | Ver detalle · Repetir · Calificar |
| cancelado | Ver detalle · Volver a solicitar |

**Editar** devuelve los items al carrito, restaura el stock y elimina el pedido.
**Volver a solicitar** y **Repetir** usan la misma función `repetirPedido()`.

---

## Gestión de stock

### Ciclo automático
- **Al confirmar pedido** (`confirmarPedido`): `p.stock -= it.cant`; si llega a 0, `p.ago = true`.
- **Al cancelar** (cliente via `cancelarPedido` o admin via `guardarEstadoPed → "cancelado"`): `p.stock += it.cant`; `p.ago = false`.
- **Al editar** un pedido pendiente (`editarPedido`): restaura stock igual que al cancelar, luego carga items al carrito.

### Persistencia
- Clave localStorage: `"pyro_stock"` → `{ "PROD_ID": { stock: N, ago: bool }, ... }`
- Funciones: `guardarStock()` / `cargarStock()` (llamada en `hacerLogin()`)
- Los valores base están en `app.js` (array `PRODUCTOS`); localStorage los sobreescribe en runtime.

### Admin: pestaña Stock
- **Ajuste manual:** cada producto tiene un input numérico + botón ✓ → llama `ajustarStock(id, val)`.
- **Exportar Excel:** botón "📥 Exportar Excel" → genera `stock_pyroshield_YYYY-MM-DD.xls` (XML/Excel) con columnas: ID, Nombre, Categoría, Subcategoría, Stock, Estado.
- **Importar CSV:** botón "📤 Importar CSV" → acepta `.csv` con cabecera `id,stock` (abrir el Excel exportado, editar la columna Stock, guardar como CSV, reimportar).

---

## Integración Azur (facturación electrónica)

El frontend NO llama a Azur directamente: hace `fetch` contra un Cloudflare
Worker (`AZUR_API` en `datos.js`) que actúa de proxy y reenvía la petición
desde servidor, evitando el bloqueo CORS del navegador.

| Parámetro | Valor |
|---|---|
| `AZUR_API` (proxy) | `https://azur-proxy.alejosl0801.workers.dev/` (en `datos.js`) |
| Azur real (detrás del proxy) | `https://azur.com.ec/plataforma/api/v2/` |
| Endpoint | `POST factura/emision` |
| Token | `AZUR_TOKEN = "API_1851_2064_5fcfa1b47f430"` (en `datos.js`) |
| `codigoDoc` | `"01"` (factura) |
| `tipo_iva` | `4` (15 %) |
| `tipoproducto` | `1` (BIEN) |

### Tipos de identificación del comprador
- `"04"` → RUC (13 dígitos)
- `"05"` → Cédula (10 dígitos, o `dist.tipoDoc === "cedula"`)
- `"07"` → Consumidor final (RUC `9999999999999`)

### Formas de pago (tabla Azur)
- `"01"` → Efectivo
- `"20"` → Otros (transferencia, crédito, cheque)

### Payload que se envía
```json
{
  "api_key": "...",
  "codigoDoc": "01",
  "emisor": { "manejo_interno_secuencia": "SI", "fecha_emision": "YYYY/MM/DD" },
  "comprador": { "tipo_identificacion": "04", "identificacion": "RUC", "razon_social": "...", ... },
  "items": [
    { "codigo_principal": "PROD_ID", "descripcion": "...", "tipoproducto": 1,
      "tipo_iva": 4, "precio_unitario": 0.00, "cantidad": 1, "descuento": 0 }
  ],
  "pagos": [{ "tipo": "01", "total": 0.00 }],
  "informacion_adicional": [
    { "nombre": "Pedido Portal", "detalle": "#XXXXX" },
    { "nombre": "Forma de Pago", "detalle": "Efectivo" }
  ]
}
```

### Respuesta exitosa
```json
{ "creado": "true", "claveacceso": "..." }
```
La clave de acceso se guarda en `p.azurFactura` y persiste en `pyro_pedidos`.

---

## Claves localStorage

| Clave | Contenido |
|---|---|
| `pyro_pedidos` | Array global de todos los pedidos (compartido admin/clientes) |
| `pyro_stock` | Objeto `{id: {stock, ago}}` — stock en runtime |
| `pyro_cart_{ruc}` | Carrito del distribuidor |
| `pyro_borradores_{ruc}` | Array de hasta 3 borradores de carrito |
| `pyro_dist_extra` | Distribuidores creados desde admin (no están en datos.js) |
| `pyro_tut_{ruc}` | Flag: `"1"` si el distribuidor ya vio el tutorial |

---

## Credenciales

Por seguridad, las contraseñas NO se documentan en este archivo ni en ningún
otro archivo del repositorio (el repo se sirve público via GitHub Pages).
En `datos.js` solo viven los hashes SHA-256. Las credenciales reales las
gestiona el administrador fuera del repo.

- `ADMIN` — administrador (pedidos, distribuidores, stock, Azur)
- `FABIOLA` — rol impresión (solo ve pedidos)
- RUC/cédula de cada distribuidor — cliente estándar

---

## Pendientes conocidos

### Validación SRI
No se valida si la clave de acceso retornada por Azur fue aceptada por el SRI. Se guarda `data.claveacceso` pero no se consulta el estado posterior en el SRI. Pendiente: consultar `GET factura/consulta/{claveacceso}` y actualizar `p.azurEstado`.
