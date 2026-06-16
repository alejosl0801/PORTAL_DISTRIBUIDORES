# Spec — App de facturación rápida para recargas de extintores

## Contexto

Existe un local que recibe pocos extintores al día (1-5) para recarga.
La persona encargada (señora mayor, no técnica) hoy envía fotos de
recibos por WhatsApp y el administrador transcribe esos datos a mano
en Azur. Es lento, propenso a error de lectura, y le quita tiempo al
admin que debería estar facturando pedidos grandes (10+ extintores).

**Objetivo:** una app mínima, de una sola pantalla, para que ella misma
emita la factura desde su celular, sin pasar por el admin.

**No es** una versión reducida del portal de distribuidores. Es un
proyecto nuevo e independiente — sin login complejo, sin catálogo, sin
carrito, sin stock, sin puntos. Comparte únicamente la integración con
Azur (mismo proxy, mismo patrón de payload) ya probada y en producción
en este repo.

## Decisiones ya tomadas

- **Selección de producto:** lista fija de precios predefinida (no
  buscador, no campo libre). Ej: "Recarga 5kg PQS — $X", "Recarga 10kg
  PQS — $Y", "Recarga 20lb CO2 — $Z". Ella elige de un menú y pone
  cantidad si aplica. Minimiza errores de tipeo y de lectura de recibo.
- **Independencia de datos:** completamente separada del portal de
  distribuidores. Su propio HTML/JS, su propio localStorage (si acaso
  para guardar un historial local de "lo que ya facturé hoy"). NO
  escribe en `pyro_pedidos` ni en ningún otro localStorage del portal.
  Las facturas emitidas solo viven en Azur (y opcionalmente un log
  local simple de respaldo).

## Pantalla única (mobile-first)

1. **Datos del cliente** (3 campos):
   - Cédula o RUC (input numérico, detecta tipo por longitud igual que
     `tipoDocLabel()` en este portal: 10 dígitos = cédula, 13 = RUC).
     Casilla "Consumidor final" si no quiere dar datos → usa
     `9999999999999`.
   - Nombre / Razón social.
   - Teléfono (opcional).
2. **Qué se facturó:**
   - Selector de la lista fija de recargas con precio ya cargado.
   - Cantidad (default 1).
   - Botón "+" para agregar otra línea si trajo más de un extintor.
3. **Forma de pago:** Efectivo / Transferencia (mismo mapeo a códigos
   Azur `"01"`/`"20"` que ya usa `generarAzur()`).
4. **Botón grande "🧾 Facturar"** — un solo tap, sin pasos intermedios.
5. **Confirmación visual simple:** ✅ grande + el monto total, nada de
   claves de acceso ni tecnicismos (eso lo revisas tú después si hace
   falta, vía Azur directamente o reusando `consultarEstadoAzur()`).

Sin pantalla de login: protege el acceso con una contraseña simple
fija (un PIN de 4 dígitos guardado en el código, suficiente para este
caso de uso) en vez de un sistema de usuarios completo.

## Reutilización de la integración Azur

Mismo patrón que `app.js` de este repo (función `generarAzur`, líneas
~3325-3365):

- `AZUR_API = "https://azur-proxy.alejosl0801.workers.dev/"` (mismo
  proxy Cloudflare Worker — ya soporta CORS para este origen, pero
  **revisa si el Worker valida el dominio que llama**; si lo hace,
  habrá que agregar el dominio/origen de la nueva app a su whitelist).
- `AZUR_TOKEN` — mismo token, o pedir uno nuevo si quieren separar la
  facturación de recargas de la facturación de distribuidores en los
  reportes de Azur.
- Mismo payload a `POST factura/emision`:
  ```json
  {
    "api_key": "...",
    "codigoDoc": "01",
    "emisor": { "manejo_interno_secuencia": "SI", "fecha_emision": "YYYY/MM/DD" },
    "comprador": { "tipo_identificacion": "04|05|07", "identificacion": "...", "razon_social": "...", "direccion": "S/N", "telefono": null, "celular": null, "correo": null },
    "items": [ { "codigo_principal": "RECARGA_5KG", "descripcion": "...", "tipoproducto": 1, "tipo_iva": 4, "precio_unitario": 0.00, "cantidad": 1, "descuento": 0 } ],
    "pagos": [ { "tipo": "01|20", "total": 0.00 } ],
    "informacion_adicional": [ { "nombre": "Origen", "detalle": "App Recargas" } ]
  }
  ```
- Respuesta exitosa: `{ "creado": "true", "claveacceso": "..." }`.
- Opcional: reusar el patrón de `consultarEstadoAzur()` (recién
  agregado en este repo, app.js) si más adelante quieren verificar el
  estado SRI desde la misma app de recargas.

## Stack sugerido

Igual que el portal: HTML/CSS/JS vanilla, un solo archivo o tres
sueltos (`index.html`, `app.js`, `style.css`), sin build step,
desplegable en GitHub Pages igual que este repo. Es la opción más
simple de mantener y la señora solo necesita un acceso directo en el
celular (PWA simple, como ya tiene este portal con `sw.js`, es
opcional pero recomendable para que funcione bien desde el home
screen del celular).

## Lo que NO necesita

- Stock/inventario.
- Sistema de puntos.
- Multiusuario / roles.
- Sincronización con Supabase ni Google Apps Script.
- Historial de pedidos compartido con el portal de distribuidores.

## Siguiente paso

Abrir una sesión nueva (puede ser un repo nuevo o una carpeta nueva),
pegar este documento como contexto inicial, y pedir la implementación
completa de la pantalla descrita arriba reusando el patrón de
`generarAzur()` de este repo como referencia de la integración Azur.
