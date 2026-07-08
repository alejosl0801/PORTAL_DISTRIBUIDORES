# SISTEMA DE PUNTOS MANUAL — PyroShield
## Documento maestro para la sesión de "Facturas → Puntos → Regalos sorpresa"

> **Lee esto ANTES de tocar cualquier factura.** Este documento contiene TODO lo
> que necesitas: por qué existe este sistema, qué reemplaza, las fórmulas
> exactas (copiadas 1:1 del código del portal), la lista de precios/costos de
> los 34 productos, y el procedimiento diario paso a paso.

---

## 1. CONTEXTO — por qué existe este documento

El dueño (Alejandro) construyó durante varias semanas un **Portal Web PyroShield**
(SPA en HTML/CSS/JS, sin backend propio, en `pyroshield.online`) para que sus
distribuidores hicieran pedidos, acumularan puntos y canjearan premios
directamente desde una web.

**El portal funciona técnicamente** (pedidos, sincronización multi-dispositivo,
canjes, stock — todo probado y en producción). Pero **el mercado lo rechazó**:
los distribuidores son personas de 35-40+ años que prefieren seguir pidiendo
por WhatsApp. A pesar de ofrecer cupones y recompensas dentro del portal,
la adopción fue nula.

**Decisión del dueño:** el portal pasa a **pausa / referencia histórica**
(sigue existiendo, pero no es el canal activo de venta). El nuevo flujo real
de trabajo es:

1. Los distribuidores siguen pidiendo **por WhatsApp**, como siempre.
2. Alejandro **emite la factura en Azur** (facturación electrónica) como ya
   hacía antes del portal.
3. **Esta sesión (la que lee este MD)** entra diariamente a Azur, descarga las
   facturas nuevas emitidas a distribuidores, calcula los puntos que generó
   cada factura usando las fórmulas exactas del portal (documentadas abajo), y
   lleva un **registro acumulado de puntos por distribuidor**.
4. Cuando un distribuidor acumula suficientes puntos para un premio (ej. Combo
   KFC), Alejandro se lo envía en su siguiente compra **como una sorpresa** —
   el distribuidor NO ve el sistema de puntos, no sabe que está siendo
   "trackeado"; para él es un regalo espontáneo de buena relación comercial.
   Internamente, el saldo de puntos de ese distribuidor baja según lo canjeado.

**Hay una SEGUNDA sesión separada** (no esta) encargada de: leer los pedidos
que los clientes mandan por WhatsApp y generar la **proforma** y la
**nota de entrega** en el mismo formato que generaba el portal (ver sección 9).
Esta sesión (puntos) y esa sesión (proformas) son independientes pero
comparten las mismas fórmulas de precios de este documento.

---

## 2. QUÉ ES PYROSHIELD (el negocio)

Empresa ecuatoriana (Guayaquil) que vende **extintores, accesorios y gabinetes
contra incendios** a distribuidores B2B (ferreterías, empresas de seguridad
industrial, etc.). Los distribuidores revenden estos productos a sus propios
clientes finales.

- **Razón social / RUC emisor:** PyroShield / PREVIFUEGO — RUC `0952773976001`
- **Dirección:** Portete #3007 y Gallegos Lara, Guayaquil
- **Teléfonos:** 04-2374822, 0983583325, 0978997247
- **Facturación electrónica:** vía Azur (ver sección 8)

---

## 3. FÓRMULAS EXACTAS (copiadas del código fuente — no aproximar)

Estas fórmulas viven en `app.js` (función `calcPuntos`) y `datos.js`
(constantes). Son la fuente de verdad; si el dueño cambia una constante en el
portal, avísale que debe decírtelo para actualizar este documento.

### 3.1 Constantes (de `datos.js`)

```
IVA                 = 0.15   (15%)
PUNTOS_MAX_UNIT      = 450    (tope de puntos por línea de producto en una factura)
UMBRAL_MARGEN_ALTO   = 0.30   (30% — si el margen de ganancia es igual o mayor, tasa alta)
PCT_ALTO             = 0.10   (10% de la ganancia se convierte en puntos, si margen ≥ 30%)
PCT_NORMAL           = 0.08   (8% de la ganancia se convierte en puntos, si margen < 30%)
PUNTOS_X_DOLAR        = 100    (multiplicador: 1 punto = $0.01 de "ganancia convertida")
```

### 3.2 Fórmula de puntos por línea de factura

Para CADA producto de una factura, se calcula:

```
ganancia = precio_facturado_unitario − costo_unitario
si ganancia <= 0 → 0 puntos (no se regalan puntos en productos vendidos a pérdida o sin margen)

margen = ganancia / precio_facturado_unitario

si margen >= 0.30  → pct = 0.10  (10%)
si margen <  0.30  → pct = 0.08  (8%)

puntos_por_unidad = round(ganancia × pct × 100)
puntos_por_unidad = min(puntos_por_unidad, 450)   ← tope por unidad

puntos_de_la_linea = puntos_por_unidad × cantidad_comprada
```

**Ejemplo real (Extintor 20 LBS PQS, `VENT20PQS`):**
- Precio facturado (pb): $20.15 · Costo: $15.03
- Ganancia = 20.15 − 15.03 = **$5.12**
- Margen = 5.12 / 20.15 = **25.4%** → menor a 30% → pct = 8%
- Puntos por unidad = round(5.12 × 0.08 × 100) = round(40.96) = **41 puntos**
- Si el distribuidor compró 5 unidades → 41 × 5 = **205 puntos** de esa línea

**Puntos totales de una factura = suma de puntos de todas sus líneas.**

⚠️ **Importante:** el precio que se usa es el que aparece EN LA FACTURA (lo
que realmente pagó el distribuidor), no el precio de vitrina. Si el
distribuidor tiene precio especial (ver sección 6) o descuento por volumen,
usa ese precio real facturado — no el `pb` de la tabla, salvo que coincidan.

### 3.3 Fórmula de precio con descuento por volumen (por si hay que verificar
   el precio facturado contra lo esperado)

```
precio_vitrina (pv) = precio de lista público
precio_base_cliente  = precio especial del distribuidor si existe, si no pb estándar
descuento_base(%)    = (pv − precio_base_cliente) / pv × 100

Si la cantidad pedida alcanza un tier de descVol del producto, se suma ese % extra:
descuento_total(%) = descuento_base + descuento_por_volumen

precio_final = pv × (1 − descuento_total/100)

REGLA DE PISO: el precio_final NUNCA puede ser menor al costo del producto.
Si la fórmula da un precio menor al costo, se usa el costo como precio final.
```

### 3.4 IVA

Todas las facturas de Azur llevan **15% de IVA** sobre el subtotal. El cálculo
de puntos se hace SIEMPRE sobre precios **sin IVA** (el subtotal neto de cada
línea), nunca sobre el total con impuestos.

---

## 4. TABLA DE REFERENCIA — 34 PRODUCTOS (precio, costo, puntos calculados)

Esta tabla usa el precio **PB** (precio base estándar de distribuidor, sin
descuentos ni precio especial) como ejemplo de cálculo. **Si la factura real
tiene un precio distinto** (por precio especial de ese distribuidor o
descuento por volumen), recalcula con el precio REAL facturado usando la
fórmula de la sección 3.2 — esta tabla es solo referencia rápida.

| Código | Producto | PV (vitrina) | PB (base dist.) | Costo | Ganancia (a PB) | Margen | % Puntos | Pts x unidad (a PB) |
|---|---|---|---|---|---|---|---|---|
| VENT10PQS | Extintor 10 LBS PQS | $12.89 | $11.88 | $9.02 | $2.86 | 24.1% | 8% | 23 pts |
| VENT20PQS | Extintor 20 LBS PQS | $21.35 | $20.15 | $15.03 | $5.12 | 25.4% | 8% | 41 pts |
| VENT50PQS | Extintor 50 LBS PQS | $169.05 | $132.31 | $90.17 | $42.14 | 31.8% | 10% | 421 pts |
| VENT100PQS | Extintor 100 LBS PQS | $216.05 | $168.88 | $120.22 | $48.66 | 28.8% | 8% | 389 pts |
| VENT150PQS | Extintor 150 LBS PQS | $280.25 | $217.99 | $153.81 | $64.18 | 29.4% | 8% | 450 pts (tope) |
| VENT5CO2 | Extintor 5 LBS CO2 | $26.70 | $22.40 | $15.03 | $7.37 | 32.9% | 10% | 74 pts |
| VENT10CO2 | Extintor 10 LBS CO2 | $34.65 | $33.85 | $23.92 | $9.93 | 29.3% | 8% | 79 pts |
| VENT20CO2 | Extintor 20 LBS CO2 + Carro | $106.99 | $104.99 | $40.99 | $64.00 | 61.0% | 10% | 450 pts (tope) |
| VENT2-5AQ | Extintor 2.5 Glns Agua Química | $63.00 | $61.25 | $38.25 | $23.00 | 37.6% | 10% | 230 pts |
| CABPQS1020 | Cabezal PQS 10/20 LBS | $2.95 | $2.80 | $1.24 | $1.56 | 55.7% | 10% | 16 pts |
| CABCO2510 | Cabezal CO2 5/10 LBS | $7.80 | $7.00 | $4.71 | $2.29 | 32.7% | 10% | 23 pts |
| CABMARITIMO | Cabezal Marítimo CO2 | $42.25 | $38.46 | $18.93 | $19.53 | 50.8% | 10% | 195 pts |
| CAB50CO2AR | CO2 Disparo Rápido (50-100 LBS) | $16.80 | $13.95 | $5.92 | $8.03 | 57.6% | 10% | 80 pts |
| MANOPQS | Manómetro 195 PSI | $0.85 | $0.70 | $0.36 | $0.34 | 48.6% | 10% | 3 pts |
| MANGPQS10 | Manguera 10 PQS | $0.90 | $0.80 | $0.36 | $0.44 | 55.0% | 10% | 4 pts |
| MANGPQS20 | Manguera 20 PQS | $0.90 | $0.80 | $0.34 | $0.46 | 57.5% | 10% | 5 pts |
| CORN5CO2 | Corneta 5 CO2 | $2.80 | $2.20 | $0.95 | $1.25 | 56.8% | 10% | 13 pts |
| CORN10CO2 | Manguera con corneta 10 CO2 | $7.20 | $6.40 | $2.37 | $4.03 | 63.0% | 10% | 40 pts |
| GANCO2 | Soporte CO2 Rojo | $1.20 | $1.15 | $0.41 | $0.74 | 64.3% | 10% | 7 pts |
| GANCPQS10 | Soporte PQS 10 | $0.98 | $0.85 | $0.25 | $0.60 | 70.6% | 10% | 6 pts |
| GANCPQS20 | Soporte PQS 20 | $0.98 | $0.85 | $0.28 | $0.57 | 67.1% | 10% | 6 pts |
| ABRPQS | Abrazaderas Plásticas | $0.26 | $0.24 | $0.12 | $0.12 | 50.0% | 10% | 1 pt |
| SEGPLAST01 | Seguros Plásticos Amarillo | $0.08 | $0.06 | $0.03 | $0.03 | 50.0% | 10% | 0 pts |
| LETPQS | Letrero Instructivo Extintor PQS | $2.25 | $1.95 | $1.50 | $0.45 | 23.1% | 8% | 4 pts |
| LETCO2 | Letrero Instructivo Extintor CO2 | $2.25 | $1.95 | $1.50 | $0.45 | 23.1% | 8% | 4 pts |
| MANH15C001 | Manguera 15M doble chaqueta 1½" | $38.61 | $36.98 | $29.93 | $7.05 | 19.1% | 8% | 56 pts |
| MANH30C001 | Manguera 30M doble chaqueta 1½" | $69.10 | $64.28 | $46.14 | $18.14 | 28.2% | 8% | 145 pts |
| VALVANG001 | Angular 1½" | $33.83 | $31.48 | $23.19 | $8.29 | 26.3% | 8% | 66 pts |
| VALVANG002 | Angular 2½" | $67.11 | $61.26 | $46.85 | $14.41 | 23.5% | 8% | 115 pts |
| HID001 | Pitón 1½" (Pitón de Bronce) | $19.80 | $17.80 | $14.91 | $2.89 | 16.2% | 8% | 23 pts |
| HID002 | Niple 1½" | $7.68 | $6.88 | $5.68 | $1.20 | 17.4% | 8% | 10 pts |
| PORTMAN | Brazo Portamanguera | $12.91 | $11.71 | $7.10 | $4.61 | 39.4% | 10% | 46 pts |
| HACHA001 | Hacha Reforzada | $12.40 | $11.78 | $9.23 | $2.55 | 21.6% | 8% | 20 pts |
| SPANNER001 | Llave Spanner | $6.98 | $5.98 | $4.50 | $1.48 | 24.7% | 8% | 12 pts |

**⚠️ Estos precios/costos pueden cambiar.** El dueño los actualiza en el
portal (pestaña Stock → editar Costo). Si una factura muestra un precio
distinto a esta tabla, o si pasa mucho tiempo (semanas) desde julio de 2026,
pregúntale al dueño si hay una lista de costos actualizada antes de asumir
estos valores como definitivos.

---

## 5. FUENTE DE VERDAD DE ESTA TABLA (para actualizarla si hace falta)

Esta tabla se generó extrayendo el array `PRODUCTOS` de `/home/user/PORTAL_DISTRIBUIDORES/app.js`
(busca `var PRODUCTOS = [`). Cada producto tiene los campos `pv` (precio
vitrina), `pb` (precio base distribuidor) y `costo`. Si necesitas
regenerar esta tabla porque cambiaron precios, repite este proceso:

1. Abre `app.js`, localiza `var PRODUCTOS = [...]`.
2. Por cada producto, toma `pv`, `pb`, `costo`.
3. Aplica la fórmula de la sección 3.2 usando `pb` como precio de referencia
   (o el precio real facturado si es distinto).

**Nota:** en el portal también existe `pyro_costos` en localStorage / Supabase
(tabla `app_config` con clave asociada a costos editados manualmente por el
admin desde la pestaña Stock) que puede tener costos MÁS RECIENTES que los
que están hardcodeados en `app.js`. Si el dueño te dice "cambié un costo",
pregúntale el valor nuevo directamente — no hay forma de leerlo sin acceso al
portal en vivo.

---

## 6. DISTRIBUIDORES CON PRECIO ESPECIAL (afecta el cálculo)

**Solo 1 de los ~37 distribuidores tiene precios especiales** distintos al
`pb` estándar: **Sumiseg (Jorge Avilés Briones, RUC 0906872742001)**.

Sus precios especiales (ligeramente menores al `pb` estándar) son:

```
VENT10PQS: $11.78   VENT20PQS: $19.84   VENT50PQS: $124.91  VENT100PQS: $164.88
VENT150PQS: $207.96 VENT5CO2: $22.40    VENT10CO2: $32.88   VENT20CO2: $98.80
VENT2-5AQ: $58.25    CABPQS1020: $2.65   MANOPQS: $0.65      MANGPQS10: $0.75
MANGPQS20: $0.75     CABCO2510: $6.80    CORN5CO2: $2.10     CORN10CO2: $6.25
GANCO2: $0.98        GANCPQS10: $0.80    GANCPQS20: $0.80    ABRPQS: $0.22
CABMARITIMO: $38.46  CAB50CO2AR: $13.95  SEGPLAST01: $0.06
MANH15C001: $36.98   MANH30C001: $64.28  VALVANG001: $31.48  VALVANG002: $61.26
HID001: $17.80       HID002: $6.88       PORTMAN: $11.71     HACHA001: $11.78
SPANNER001: $5.98
```

**Todos los demás distribuidores usan el precio `pb` estándar de la tabla**
(sección 4), salvo que la factura muestre otro precio — en ese caso, usa
SIEMPRE el precio que aparece en la factura real, es la fuente de verdad.

**Lista completa de distribuidores (razón social, encargado, RUC/cédula):**
La lista completa vive en `/home/user/PORTAL_DISTRIBUIDORES/datos.js`, array
`DISTRIBUIDORES` (~37 entradas). Cada uno tiene: `ruc`, `razon` (razón
social), `encargado` (nombre de la persona de contacto), `empresa` (nombre
comercial si aplica), `tel`, `correo`. Usa ese archivo para hacer match entre
el RUC/cédula del comprador en cada factura de Azur y el nombre del
distribuidor.

---

## 7. PROCEDIMIENTO DIARIO (lo que esta sesión debe hacer cada día)

### Paso 1 — Descargar facturas nuevas de Azur
Entra a Azur (o usa la API si tienes las credenciales — ver sección 8) y
descarga/lista las facturas **emitidas ese día** (o desde la última vez que
se revisó) cuyo **comprador sea uno de los RUCs/cédulas de la lista de
distribuidores** (`datos.js` → `DISTRIBUIDORES`). Ignora facturas a
consumidor final (identificación `9999999999999`) — esas no son de
distribuidores del programa de puntos.

### Paso 2 — Por cada factura, calcular los puntos
Para cada línea de producto en la factura:
1. Identifica el producto por su `codigo_principal` (coincide con el `id` de
   la tabla de la sección 4, ej. `VENT20PQS`).
2. Toma el `precio_unitario` REAL de la factura (no el de la tabla, a menos
   que coincidan) y la `cantidad`.
3. Busca el `costo` de ese producto en la tabla de la sección 4.
4. Aplica la fórmula de la sección 3.2 → obtén puntos de esa línea.
5. Suma los puntos de todas las líneas → puntos totales de la factura.

### Paso 3 — Actualizar el registro acumulado por distribuidor
Mantén un registro (hoja de cálculo, JSON, base de datos — lo que uses en
esta sesión) con, por cada distribuidor:
- RUC / razón social / encargado
- Puntos acumulados totales (histórico)
- Puntos ya "canjeados" (regalos ya entregados)
- Saldo disponible = acumulados − canjeados
- Historial: fecha, # factura, puntos ganados, detalle

### Paso 4 — Detectar quién llegó al umbral de un regalo
Define con el dueño el umbral de puntos por regalo (ej. "Combo KFC = X
puntos", igual que en el portal donde el canje de bienvenida costaba 0 pts
pero los premios reales tenían un costo en puntos — pregúntale al dueño los
umbrales exactos que quiere usar, ya que el catálogo de premios del portal
(`REWARDS`) tenía costos variables por premio).

Cuando un distribuidor cruce el umbral:
- Avísale al dueño: "Fulano llegó a X puntos, le corresponden N combos KFC
  (o el premio que decidas)".
- Cuando el dueño confirme que lo entregó, resta esos puntos del saldo
  disponible de ese distribuidor (mantén el acumulado histórico intacto).

### Paso 5 — Reporte
Al final de cada sesión de trabajo, dale al dueño un resumen corto: cuántas
facturas nuevas se procesaron, de qué distribuidores, cuántos puntos ganó
cada uno, y si alguien cruzó el umbral de premio.

---

## 8. INTEGRACIÓN AZUR — datos técnicos

⚠️ **El token real (`AZUR_TOKEN`) y las credenciales NO están en este
documento** porque este archivo se sube al repositorio público de GitHub
Pages. Están en `CREDENCIALES_PRIVADO.md` (mismo directorio, protegido por
`.gitignore`, nunca se sube a GitHub). Ábrelo para obtener el token real
antes de hacer llamadas a la API de Azur.

```
AZUR_API (proxy)       = "https://azur-proxy.alejosl0801.workers.dev/"
Azur real (tras proxy) = "https://azur.com.ec/plataforma/api/v2/"
AZUR_TOKEN              = ver CREDENCIALES_PRIVADO.md
```

**Endpoints usados por el portal (puedes reusarlos si tienes forma de hacer
llamadas HTTP desde esta sesión):**

- `POST {AZUR_API}factura/emision` — crea una factura (usado al facturar un
  pedido; NO lo necesitas para leer, es para emitir).
- `GET {AZUR_API}factura/consulta/{claveacceso}?api_key={AZUR_TOKEN}` —
  consulta el estado SRI de una factura ya emitida.

**Para LEER/LISTAR facturas emitidas** (lo que esta sesión necesita a
diario), el portal actual NO tiene ese endpoint implementado — solo emite y
consulta una factura puntual por su clave de acceso. Es muy probable que
necesites:
- Entrar al **portal web de Azur** directamente (azur.com.ec) con las
  credenciales del dueño y revisar el listado de facturas emitidas del día, o
- Preguntarle al dueño si Azur tiene un endpoint de "listar facturas por
  rango de fecha" en su API v2 que no está siendo usado todavía.

**Estructura de una factura emitida por el portal (para reconocer los
campos cuando la leas):**

```json
{
  "api_key": "...",
  "codigoDoc": "01",
  "emisor": { "manejo_interno_secuencia": "SI", "fecha_emision": "YYYY/MM/DD" },
  "comprador": {
    "tipo_identificacion": "04 (RUC) | 05 (Cédula) | 07 (Consumidor final)",
    "identificacion": "RUC o cédula del distribuidor",
    "razon_social": "...",
    "direccion": "...", "telefono": "...", "correo": "..."
  },
  "items": [
    {
      "codigo_principal": "VENT20PQS (coincide con la tabla sección 4)",
      "descripcion": "...",
      "tipoproducto": 1,
      "tipo_iva": 4,
      "precio_unitario": 20.15,
      "cantidad": 5,
      "descuento": 0
    }
  ],
  "pagos": [{ "tipo": "01 (Efectivo) | 20 (Otros: transferencia/crédito/cheque)", "total": 0.00 }],
  "informacion_adicional": [
    { "nombre": "Pedido Portal", "detalle": "#XXXXX" },
    { "nombre": "Forma de Pago", "detalle": "Efectivo" }
  ]
}
```

El campo clave para calcular puntos es `items[].precio_unitario` × `items[].cantidad`,
comparado contra el `costo` de la tabla de la sección 4.

---

## 9. LA OTRA SESIÓN (proformas y notas de entrega) — para contexto, no la manejas tú

Existe una segunda sesión, separada de esta, que:
1. Lee los pedidos que los clientes mandan por WhatsApp (vía WhatsApp Web o
   la app, con acceso local a la PC del dueño).
2. Genera la **proforma** en el mismo formato que usaba el portal (ver
   ejemplo real: el dueño ya generó manualmente notas de entrega para el
   pedido #000000762, formato PyroShield con header rojo, logo, tabla de
   items sin precios para la nota de entrega, y CON precios para la
   proforma).
3. Guarda esos documentos en una carpeta designada por el dueño.

Esa sesión usa **las mismas fórmulas de precio** (sección 3.3) para calcular
cuánto cobrar a cada distribuidor según su precio especial (si tiene) y
descuento por volumen. Si en algún momento coordinas con esa sesión o el
dueño te pide ayuda con una proforma, usa exactamente esas fórmulas.

**Formato de referencia de Nota de Entrega (SIN precios):**
- Header: logo PyroShield + "PYROSHIELD" en rojo + dirección + RUC emisor
- Título derecho: "NOTA DE ENTREGA"
- Caja de info: N° Pedido, Fecha, Cliente, RUC/Cédula, Dirección de entrega
- Tabla: # | Código | Descripción | Cantidad (SIN columna de precio)
- Sección de firma: "RECIBÍ CONFORME" + grid de Firma/Nombre/Cédula/Fecha
- Footer: nombre + dirección de la empresa

---

## 10. QUÉ NO TOCAR / QUÉ RECORDAR

1. **El portal sigue existiendo y funcionando** en `pyroshield.online`. No lo
   borres, no lo desactives. Simplemente ya no es el canal principal. El
   dueño puede decidir reactivarlo para algún cliente puntual en el futuro.
2. **Las credenciales de los distribuidores** (usuario/contraseña del portal)
   NO se documentan en ningún archivo del repositorio — el repo es público
   (GitHub Pages). Si necesitas alguna, pídesela directamente al dueño.
3. **El sistema de puntos que manejas ahora es MANUAL y OCULTO** — el
   distribuidor nunca debe enterarse de que existe un cálculo detrás. Para él,
   los regalos son gestos espontáneos de buena relación, no un programa de
   fidelización formal.
4. Si el dueño te dice que un costo, precio o umbral de premio cambió,
   **actualiza este mismo documento** para que la información no se pierda
   entre sesiones futuras.
5. **No inventes puntos ni redondees "a ojo".** Usa siempre la fórmula exacta
   de la sección 3.2 — el dueño construyó este sistema para que sea preciso
   y auditable, aunque ahora sea manual.

---

## ANEXO A — LISTA COMPLETA DE 37 DISTRIBUIDORES

⚠️ **Movida a `CREDENCIALES_PRIVADO.md`** (mismo directorio, protegido por
`.gitignore`, NUNCA se sube a GitHub) porque contiene datos personales
(teléfonos, correos, RUC/cédulas) que no deben quedar en el repo público.

Ábrelo para obtener: RUC/cédula, razón social, nombre del encargado, empresa,
teléfono y correo de cada uno de los 37 distribuidores. Úsala para hacer
match entre el RUC/cédula del comprador en cada factura de Azur y el
distribuidor real. Si un RUC de una factura NO aparece en esa lista,
probablemente es un cliente nuevo — avísale al dueño antes de asumir que es
un distribuidor del programa.

(Nota: Sumiseg/Jorge, RUC 0906872742001, es el único con precios especiales
— ver sección 6 de este documento, que SÍ es información de negocio no
sensible y queda aquí.)

---

## 11. RESUMEN EJECUTIVO (si solo lees un párrafo, lee este)

El portal web no prendió con los clientes → el dueño vuelve a operar por
WhatsApp/Azur como antes, pero **mantiene en secreto un sistema de puntos
calculado desde las facturas reales de Azur**, usando las mismas fórmulas
exactas que tenía el portal (ganancia × 8-10% según margen × 100, tope 450
pts/unidad). Tu trabajo diario: bajar facturas nuevas de distribuidores,
calcular sus puntos con la tabla de costos de la sección 4, llevar el
acumulado, y avisar al dueño cuándo alguien merece un regalo sorpresa (Combo
KFC u otro) — para que él se lo entregue sin que el cliente sepa que hay un
cálculo detrás.
