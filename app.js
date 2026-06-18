// ── Polyfills para Safari/Android antiguos ────────────────────────────────
if(!String.prototype.padStart){String.prototype.padStart=function(len,fill){var s=String(this);fill=fill==null?" ":String(fill);while(s.length<len)s=fill+s;return s.slice(-Math.max(len,s.length));};}
if(!Array.prototype.flat){Array.prototype.flat=function(){return this.reduce(function(a,b){return a.concat(Array.isArray(b)?b.flat():b);},[]);};}
if(!Object.entries){Object.entries=function(o){return Object.keys(o).map(function(k){return[k,o[k]];});};}
if(!Object.values){Object.values=function(o){return Object.keys(o).map(function(k){return o[k];});};}
// ─────────────────────────────────────────────────────────────────────────

// ════════════════════ PRODUCTOS ════════════════════
var CATS = {
  extintores:{nombre:"Extintores",ico:"🧯",subs:["PQS","CO2","H2O"]},
  accesorios:{nombre:"Accesorios",ico:"🔧",subs:["Cabezales","Manómetros","Mangueras","Soportes","Otros"]},
  gabinetes:{nombre:"Gabinetes",ico:"🏗️",subs:["Válvulas","Hidrantes","Otros"]},
  mangueras_hid:{nombre:"Mangueras HID",ico:"💧",subs:["Mangueras"]}
};

// Íconos por subcategoría
var SUB_ICOS = {
  "PQS":"🔴","CO2":"❄️","H2O":"💦",
  "Cabezales":"🔩","Manómetros":"⏱️","Mangueras":"🌀","Soportes":"📌","Otros":"📦",
  "Válvulas":"🔧","Hidrantes":"🚒",
};

var PRODUCTOS = [
  // EXTINTORES PQS
  {id:"VENT10PQS",nm:"Extintor 10 LBS PQS",cat:"extintores",sub:"PQS",pv:12.89,pb:11.88,costo:9.02,stock:795,ago:false,img:"VENT10PQS",descVol:[[10,1],[20,2],[30,3],[40,5],[60,7]],codigoAzur:"VENT10PQS"},
  {id:"VENT20PQS",nm:"Extintor 20 LBS PQS",cat:"extintores",sub:"PQS",pv:21.35,pb:20.15,costo:15.03,stock:0,ago:true,img:"VENT20PQS",descVol:[[10,1],[20,2],[30,3],[40,5],[50,7]],codigoAzur:"VENT20PQS"},
  {id:"VENT50PQS",nm:"Extintor 50 LBS PQS",cat:"extintores",sub:"PQS",pv:169.05,pb:132.31,costo:90.17,stock:0,ago:true,img:"VENT50PQS",descVol:[[2,1],[3,2],[5,3],[8,5],[12,6]],codigoAzur:"VENT50PQS"},
  {id:"VENT100PQS",nm:"Extintor 100 LBS PQS",cat:"extintores",sub:"PQS",pv:216.05,pb:168.88,costo:120.22,stock:26,ago:false,img:"VENT100PQS",descVol:[[2,1],[3,2],[5,3],[8,5],[10,6]],codigoAzur:"VENT100PQS"},
  {id:"VENT150PQS",nm:"Extintor 150 LBS PQS",cat:"extintores",sub:"PQS",pv:280.25,pb:217.99,costo:153.81,stock:12,ago:false,img:"VENT150PQS",descVol:[[2,1],[3,2],[4,3],[6,5],[8,6]],codigoAzur:"VENT150PQS"},
  // EXTINTORES CO2
  {id:"VENT5CO2",nm:"Extintor 5 LBS CO2",cat:"extintores",sub:"CO2",pv:26.70,pb:22.40,costo:15.03,stock:57,ago:false,img:"VENT5CO2",descVol:[[5,1],[8,2],[12,3],[15,5],[20,6]],codigoAzur:"VENT5CO2"},
  {id:"VENT10CO2",nm:"Extintor 10 LBS CO2",cat:"extintores",sub:"CO2",pv:34.65,pb:33.85,costo:23.92,stock:0,ago:true,img:"VENT10CO2",descVol:[[3,1],[5,2],[8,3],[10,5],[15,6]],codigoAzur:"VENT10CO2"},
  {id:"VENT20CO2",nm:"Extintor 20 LBS CO2 + Carro",cat:"extintores",sub:"CO2",pv:106.99,pb:104.99,costo:40.99,stock:17,ago:false,img:"VENT20CO2",descVol:[[2,1],[3,2],[4,3],[5,5],[8,6]],codigoAzur:"VENT20CO2"},
  {id:"VENT2-5AQ",nm:"Extintor 2.5 Glns Agua Química",cat:"extintores",sub:"H2O",pv:63.00,pb:61.25,costo:38.25,stock:24,ago:false,img:"VENT2-5AQ",descVol:[[2,1],[3,2],[4,3],[5,5],[8,6]],codigoAzur:"VENT2-5AQ"},
  // ACCESORIOS - CABEZALES
  {id:"CABPQS1020",nm:"Cabezal PQS 10/20 LBS",cat:"accesorios",sub:"Cabezales",pv:2.95,pb:2.80,costo:1.24,stock:0,ago:true,img:"CABPQS1020",descVol:[[20,1],[40,2],[60,3],[80,5],[120,6]],codigoAzur:"CABPQS1020"},
  {id:"CABCO2510",nm:"Cabezal CO2 5/10 LBS",cat:"accesorios",sub:"Cabezales",pv:7.80,pb:7.00,costo:4.71,stock:222,ago:false,img:"CABCO2510",descVol:[[10,1],[20,2],[30,3],[40,5],[50,6]],codigoAzur:"CABCO2510"},
  {id:"CABMARITIMO",nm:"Cabezal Marítimo CO2",cat:"accesorios",sub:"Cabezales",pv:42.25,pb:38.46,costo:18.93,stock:73,ago:false,img:"CABMARITIMO",descVol:[[2,1],[3,2],[5,3],[8,5],[10,6]],codigoAzur:"CABMARITIMO"},
  {id:"CAB50CO2AR",nm:"CO2 Disparo Rápido (50-100 LBS)",cat:"accesorios",sub:"Cabezales",pv:16.80,pb:13.95,costo:5.92,stock:121,ago:false,img:"CAB50CO2AR",descVol:[[5,1],[10,2],[15,3],[20,5],[30,6]],codigoAzur:"CAB50CO2AR"},
  // ACCESORIOS - MANÓMETROS
  {id:"MANOPQS",nm:"Manómetro 195 PSI",cat:"accesorios",sub:"Manómetros",pv:0.85,pb:0.70,costo:0.36,stock:36,ago:false,img:"MANOPQS",descVol:[[20,1],[50,2],[100,3],[150,5],[300,6]],cantMin:10,codigoAzur:"MANOPQS"},
  // ACCESORIOS - MANGUERAS
  {id:"MANGPQS10",nm:"Manguera 10 PQS",cat:"accesorios",sub:"Mangueras",pv:0.90,pb:0.80,costo:0.36,stock:327,ago:false,img:"MANGPQS10",descVol:[[30,1],[50,2],[80,3],[100,5],[150,6]],codigoAzur:"MANGPQS10"},
  {id:"MANGPQS20",nm:"Manguera 20 PQS",cat:"accesorios",sub:"Mangueras",pv:0.90,pb:0.80,costo:0.34,stock:678,ago:false,img:"MANGPQS20",descVol:[[30,1],[50,2],[80,3],[100,5],[150,6]],codigoAzur:"MANGPQS20"},
  {id:"CORN5CO2",nm:"Corneta 5 CO2",cat:"accesorios",sub:"Mangueras",pv:2.80,pb:2.20,costo:0.95,stock:623,ago:false,img:"CORN5CO2",descVol:[[10,1],[15,2],[25,3],[50,5],[80,6]],codigoAzur:"CORN5CO2"},
  {id:"CORN10CO2",nm:"Manguera con corneta 10 CO2",cat:"accesorios",sub:"Mangueras",pv:7.20,pb:6.40,costo:2.37,stock:579,ago:false,img:"CORN10CO2",descVol:[[10,1],[20,2],[30,3],[40,5],[60,6]],codigoAzur:"CORN10CO2"},
  // ACCESORIOS - SOPORTES
  {id:"GANCO2",nm:"Soporte CO2 Rojo",cat:"accesorios",sub:"Soportes",pv:1.20,pb:1.15,costo:0.41,stock:340,ago:false,img:"GANCO2",descVol:[[50,1],[100,2],[150,3],[200,5],[400,6]],codigoAzur:"GANCO2"},
  {id:"GANCPQS10",nm:"Soporte PQS 10",cat:"accesorios",sub:"Soportes",pv:0.98,pb:0.85,costo:0.25,stock:440,ago:false,img:"GANCPQS10",descVol:[[50,1],[100,2],[150,3],[200,5],[400,6]],codigoAzur:"GANCPQS10"},
  {id:"GANCPQS20",nm:"Soporte PQS 20",cat:"accesorios",sub:"Soportes",pv:0.98,pb:0.85,costo:0.28,stock:486,ago:false,img:"GANCPQS20",descVol:[[50,1],[100,2],[150,3],[200,5],[400,6]],codigoAzur:"GANCPQS20"},
  // ACCESORIOS - OTROS
  {id:"ABRPQS",nm:"Abrazaderas Plásticas",cat:"accesorios",sub:"Otros",pv:0.26,pb:0.24,costo:0.12,stock:2616,ago:false,img:"ABRPQS",descVol:[[100,1],[200,2],[300,3],[500,5],[1000,6]],codigoAzur:"ABRPQS"},
  {id:"SEGPLAST01",nm:"Seguros Plásticos Amarillo",cat:"accesorios",sub:"Otros",pv:0.08,pb:0.06,costo:0.03,stock:13467,ago:false,img:"SEGPLAST01",descVol:null,cantMin:200,codigoAzur:"SEGPLAST01"},
  {id:"LETPQS",nm:"Letrero Instructivo Extintor PQS",cat:"accesorios",sub:"Otros",pv:2.25,pb:1.95,costo:1.50,stock:100,ago:false,img:"LETPQS",descVol:[[10,3],[25,5]],codigoAzur:"LETPQS"},
  {id:"LETCO2",nm:"Letrero Instructivo Extintor CO2",cat:"accesorios",sub:"Otros",pv:2.25,pb:1.95,costo:1.50,stock:100,ago:false,img:"LETCO2",descVol:[[10,3],[25,5]],codigoAzur:"LETCO2"},
  // MANGUERAS HID
  {id:"MANH15C001",nm:"Manguera 15M doble chaqueta 1½\"",cat:"mangueras_hid",sub:"Mangueras",pv:38.61,pb:36.98,costo:29.93,stock:161,ago:false,img:"MANH15C001",descVol:[[3,1],[5,2],[8,3]],codigoAzur:"MANH15C001"},
  {id:"MANH30C001",nm:"Manguera 30M doble chaqueta 1½\"",cat:"mangueras_hid",sub:"Mangueras",pv:69.10,pb:64.28,costo:46.14,stock:89,ago:false,img:"MANH30C001",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]],codigoAzur:"MANH30C001"},
  // GABINETES - VÁLVULAS
  {id:"VALVANG001",nm:"Angular 1½\" 300 lbs bronce",cat:"gabinetes",sub:"Válvulas",pv:33.83,pb:31.48,costo:23.19,stock:149,ago:false,img:"VALVANG001",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]],codigoAzur:"VALVANG001"},
  {id:"VALVANG002",nm:"Angular 2½\" 300 lbs bronce",cat:"gabinetes",sub:"Válvulas",pv:67.11,pb:61.26,costo:46.85,stock:76,ago:false,img:"VALVANG002",descVol:[[3,1],[5,2],[8,3],[10,4]],codigoAzur:"VALVANG002"},
  // GABINETES - HIDRANTES
  {id:"HID001",nm:"Pitón 1½\" bronce",cat:"gabinetes",sub:"Hidrantes",pv:19.80,pb:17.80,costo:14.91,stock:168,ago:false,img:"HID001",descVol:null,codigoAzur:"HID001"},
  {id:"HID002",nm:"Niple 1½\" bronce",cat:"gabinetes",sub:"Hidrantes",pv:7.68,pb:6.88,costo:5.68,stock:299,ago:false,img:"HID002",descVol:[[5,1],[10,2]],codigoAzur:"HID002"},
  // GABINETES - OTROS
  {id:"PORTMAN",nm:"Brazo Portamanguera",cat:"gabinetes",sub:"Otros",pv:12.91,pb:11.71,costo:7.10,stock:97,ago:false,img:"PORTMAN",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]],codigoAzur:"PORTMAN"},
  {id:"HACHA001",nm:"Hacha Reforzada",cat:"gabinetes",sub:"Otros",pv:12.40,pb:11.78,costo:9.23,stock:80,ago:false,img:"HACHA001",descVol:[[3,1],[5,2],[8,3],[10,4]],codigoAzur:"HACHA001"},
  {id:"SPANNER001",nm:"Llave Spanner",cat:"gabinetes",sub:"Otros",pv:6.98,pb:5.98,costo:4.50,stock:95,ago:false,img:"SPANNER001",descVol:[[5,1],[10,2],[15,3],[20,4],[30,5]],codigoAzur:"SPANNER001"}
];

// ════════════════════ ESTADO GLOBAL ════════════════════
var USER=null, CARRITO=[], PEDIDOS=[], FILTRO="todos", SUB_FILTRO=null, ADM_TAB="pedidos";
var FILTRO_MARGEN_MIN=0;
var FILTRO_STOCK_MIN=0;
var ADM_PED_FILTRO="pendiente";
var CALIF_PED_ID=null, CALIF_ESTRELLAS=0;
var FAVORITOS=[];
var DESEOS=[];
var H_DESDE=null, H_HASTA=null;
var CAT_GRID=false;
var _autoguardadoInterval=null;
var _catSearchDebounce=null;
var FRASES_MOTIVACIONALES=[
  "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
  "Cada pedido que haces es un paso hacia tu próxima meta.",
  "Los grandes negocios se construyen con constancia y visión.",
  "Tu crecimiento es nuestro orgullo. ¡Sigamos adelante!",
  "La disciplina de hoy es el éxito de mañana.",
  "Invertir en tu negocio hoy es ganar libertad mañana."
];
// Tips de tutorial por sección (se muestran la primera vez que se visita cada tab)
var TUT_TIPS={
  inicio:[
    {ico:"🔥",t:"¡Tu negocio, en piloto automático!",d:"Este portal fue creado SOLO para ti. Desde aquí controlas tus pedidos, puntos y premios en segundos. Los distribuidores que lo usan venden hasta un 40% más. ¡Bienvenido al club!"},
    {ico:"💰",t:"Cada compra te genera dinero extra",d:"Con cada pedido acumulas puntos que se convierten en premios reales: tarjetas de consumo, bonos KFC y más. No es un descuento — es dinero en tu bolsillo."},
    {ico:"🏆",t:"Tu marcador de éxito",d:"Aquí ves tus puntos confirmados, pedidos activos y tu siguiente premio. Úsalo como motivación: entre más pides, más ganas. ¡El techo lo pones tú!"},
    {ico:"⚡",t:"Todo en tiempo real",d:"Cuando PyroShield procesa tu pedido, el estado cambia aquí al instante. Cero llamadas, cero espera — tú sabes exactamente dónde está tu mercadería."},
    {ico:"🎯",t:"Tu meta de esta semana",d:"Los distribuidores top hacen mínimo 2 pedidos por semana. ¿Listo para estar en ese grupo? Tu primera meta: haz tu pedido antes de que acabe el día de hoy."}
  ],
  catalogo:[
    {ico:"🛒",t:"Tu bodega virtual, siempre abierta",d:"Extintores, accesorios, gabinetes — todo el catálogo PyroShield disponible 24/7. Sin límite de horario, sin esperas. Pide cuando quieras, desde donde estés."},
    {ico:"🔍",t:"Encuentra lo que necesitas en 3 segundos",d:"Usa la barra de búsqueda para encontrar cualquier producto por nombre o código. O filtra por categoría con los botones de arriba. Tu tiempo vale oro — no lo gastes buscando."},
    {ico:"🔥",t:"El secreto de los mejores distribuidores",d:"Los distribuidores más rentables piden en volumen. ¿Ves ese badge de '%'? Es tu descuento extra por cantidad. A más unidades, mayor margen de ganancia para ti. ¡Eso se llama inteligencia de negocio!"},
    {ico:"❤️",t:"Guarda tus productos estrella",d:"Toca el corazón ❤️ en los productos que más vendes. Así los encuentras en 1 segundo con el filtro 'Favs'. Tu catálogo personalizado, solo para ti."},
    {ico:"🏷️",t:"Precios que te dejan ganar",d:"Los precios que ves ya son TUS precios especiales como distribuidor PyroShield — no los del público. Tu margen de ganancia está calculado para que seas competitivo Y rentable."},
    {ico:"➕",t:"¡Empieza a llenar tu carrito!",d:"Toca '+ Añadir' en cualquier producto. El número rojo del carrito (abajo) se actualiza solo. Pro tip: arma tu pedido completo ANTES de confirmar para aprovechar los descuentos por volumen."}
  ],
  carrito:[
    {ico:"🛒",t:"Tu pedido, bajo control total",d:"Aquí ves exactamente lo que vas a pedir. Cambia cantidades con ➕ ➖, elimina con 🗑️. Todo se recalcula automáticamente — precio, descuentos, IVA y puntos."},
    {ico:"💵",t:"Transparencia total en tu inversión",d:"Ves el Subtotal + IVA 15% = Total. Sin sorpresas, sin cargos ocultos. Lo que ves aquí es exactamente lo que pagas. Así debe ser."},
    {ico:"🏆",t:"Cada pedido te acerca a un premio",d:"¿Ves los '🏆 pts' junto a cada producto? Esos son los puntos que ganarás con este pedido. Entre más grande el pedido, más puntos — y más cerca de tu siguiente recompensa."},
    {ico:"💾",t:"Guarda tu pedido y vuelve después",d:"¿No tienes tiempo ahora? Toca 'Guardar borrador'. Tu carrito queda guardado (hasta 3 borradores). Vuelve cuando puedas y continúa desde donde dejaste."},
    {ico:"✅",t:"¡Confirma y listo en 10 segundos!",d:"Toca 'CONFIRMAR PEDIDO', elige cómo pagas (efectivo, transferencia o crédito) y listo. PyroShield recibe tu pedido al instante y empieza a prepararlo. Así de simple."}
  ],
  historial:[
    {ico:"📋",t:"Tu historial es tu poder",d:"Aquí están TODOS tus pedidos, desde el primero hasta el último. Es tu registro completo de compras — útil para planificar, calcular rentabilidad y saber qué productos se mueven más."},
    {ico:"🟡",t:"Sigue tu pedido paso a paso",d:"⏳ Pendiente: recibido. 🔄 En proceso: preparándose. 📦 Entregado: en camino. ✔️ Finalizado: completo y con puntos acreditados. Sin llamadas, sin dudas."},
    {ico:"🔁",t:"El botón que te ahorra 5 minutos",d:"¿Vendes los mismos productos cada semana? En pedidos Finalizados hay un botón 'Repetir' que carga TODO ese pedido al carrito con un solo toque. Eficiencia pura."},
    {ico:"✏️",t:"Flexibilidad cuando la necesitas",d:"¿Cometiste un error en un pedido pendiente? Sin problema — toca 'Editar' y corrígelo antes de que PyroShield lo procese. Una vez en proceso, ya va en camino."},
    {ico:"⭐",t:"Califica y gana puntos extra",d:"Cuando tu pedido esté Finalizado, califícalo con estrellas. Es rápido y te ayuda a ganar logros especiales que suman puntos extra a tu saldo. ¡30 segundos que valen dinero!"}
  ],
  recompensas:[
    {ico:"🏆",t:"Aquí el dinero trabaja para ti",d:"Cada pedido que confirmas genera puntos automáticamente. Los puntos se acreditan cuando el pedido es entregado. No tienes que hacer NADA extra — solo pedir como siempre."},
    {ico:"💳",t:"Premios reales, no puntos vacíos",d:"Tus puntos se canjean por: 🍗 Combo KFC (650 pts), 💳 Tarjeta $15 (1.500 pts), 💳 Tarjeta $30 (3.000 pts), 💳 Tarjeta $50 (5.000 pts). Dinero real de vuelta a tu bolsillo."},
    {ico:"🎯",t:"Los logros: tu máquina de puntos extra",d:"Completa logros (como hacer tu 1er pedido o comprar $500) y recibe puntos adicionales permanentes. Hay 65 logros disponibles. Cada uno es un pequeño tesoro esperándote."},
    {ico:"⚡",t:"Estrategia ganadora: pide en volumen",d:"Un pedido de $500 te genera más puntos que diez pedidos de $50 — Y activa descuentos por volumen. Doble beneficio: más margen de ganancia + más puntos. Así piensan los distribuidores top."},
    {ico:"🎁",t:"Tu próximo premio está más cerca de lo que crees",d:"Mira la barra de progreso de cada premio. ¿A cuántos puntos estás? Tal vez solo necesitas UN pedido más. Canjea, disfruta, y vuelve a acumular. Es un ciclo que no para."}
  ],
  perfil:[
    {ico:"👤",t:"Tu identidad como distribuidor",d:"Aquí están tus datos: RUC, razón social, correo y teléfono. Si algo cambió en tu empresa, contacta a PyroShield para actualizarlo. Datos correctos = facturas correctas."},
    {ico:"🔐",t:"Tu contraseña, tu responsabilidad",d:"Cambia tu contraseña cuando quieras desde aquí. Usa una que recuerdes pero que nadie más pueda adivinar. Tu cuenta da acceso a tus pedidos y puntos — protégela."},
    {ico:"🌙",t:"Personaliza tu experiencia",d:"¿Prefieres fondo oscuro? Activa el modo nocturno 🌙 — ideal para revisar pedidos de noche sin forzar la vista. Se guarda automáticamente."},
    {ico:"📲",t:"Instala la app y gana puntos",d:"¿Ya tienes la app instalada en tu celular Y en tu computadora? Cada instalación te da puntos de regalo. Ve la sección de instalación en tu panel de inicio para reclamarlos."},
    {ico:"💡",t:"Pro tip final",d:"Los mejores distribuidores revisan su portal 2-3 veces por semana: lunes para planificar, miércoles para ajustar, viernes para cerrar pedidos. ¡Conviértelo en hábito y verás los resultados!"}
  ]
};

// ════════════════════ UTILIDADES ════════════════════
function norm(s){return(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");}
// Coincidencia de búsqueda: por nombre, ID interno o código Azur del producto
function coincideBusqueda(p,q){if(!q)return true;var n=norm(q);return norm(p.nm).indexOf(n)!==-1||norm(p.id).indexOf(n)!==-1||norm(p.codigoAzur||"").indexOf(n)!==-1;}

// ════════════════════ CÁLCULO DE PUNTOS ════════════════════
function calcPuntos(precioAplicado, costo){
  var ganancia=precioAplicado-costo;
  if(ganancia<=0)return 0;
  var margen=ganancia/precioAplicado;
  var pct=(margen>=UMBRAL_MARGEN_ALTO)?PCT_ALTO:PCT_NORMAL;
  var pts=Math.round(ganancia*pct*PUNTOS_X_DOLAR);
  return Math.min(pts,PUNTOS_MAX_UNIT);
}
function precioCliente(p){
  var promo=promoDelProducto(p.id);
  if(promo)return promo.pp;
  if(USER&&USER.preciosEsp&&USER.preciosEsp[p.id]!=null)return USER.preciosEsp[p.id];
  return p.pb;
}
function tieneEspecial(p){return!!(USER&&USER.preciosEsp&&USER.preciosEsp[p.id]!=null);}
function cantMinProducto(p){return p.cantMin||1;}
function validarCantMinMsg(p,cant){
  var min=cantMinProducto(p);
  if(min>1&&cant>0&&cant<min)return"Cantidad mínima para "+p.nm+": "+min+" unidades";
  return null;
}

// Descuento por volumen — respeta flag sinDescVol del distribuidor
function precioConVolumen(p, cant){
  var pv=p.pv||1;
  var precioBase=precioCliente(p);
  var descBase=(pv-precioBase)/pv*100;
  var dvPct=0;
  // Si el distribuidor tiene sinDescVol=true, no aplica descuento por volumen
  var sinVol=USER&&USER.sinDescVol;
  if(!sinVol && p.descVol){
    for(var i=p.descVol.length-1;i>=0;i--){
      if(cant>=p.descVol[i][0]){dvPct=p.descVol[i][1];break;}
    }
  }
  var descTotal=descBase+dvPct;
  var precioCalc=parseFloat((pv*(1-descTotal/100)).toFixed(2));
  if(p.costo!=null && precioCalc<p.costo){
    precioCalc=parseFloat(p.costo.toFixed(2));
    descTotal=(pv-precioCalc)/pv*100;
  }
  return {precio:precioCalc,descPct:descTotal,descVol:dvPct,descBase:descBase};
}

function siguienteNivel(p, cant){
  if(!p.descVol)return null;
  if(USER&&USER.sinDescVol)return null;
  for(var i=0;i<p.descVol.length;i++){
    if(cant<p.descVol[i][0])return{falta:p.descVol[i][0]-cant,pct:p.descVol[i][1]};
  }
  return null;
}

function fmtPts(n){return (n||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");}
function fmt$(n){return"$"+(n||0).toFixed(2);}
function primerNombre(razon){return String(razon||"").trim().split(/\s+/)[0]||"";}

// ════════════════════ PUNTOS — LÓGICA CORREGIDA ════════════════════
// Los puntos solo se confirman cuando el pedido está en estado "entregado" o "finalizado"
function misPedidos(){if(!USER)return[];return PEDIDOS.filter(function(p){return p.ruc===USER.ruc;});}

function puntosConfirmados(){
  return misPedidos().reduce(function(s,p){
    if(p.esCanje&&!p.esInstalacion&&!p.esBienvenida)return s;
    var confirmado=(p.estado==="entregado"||p.estado==="finalizado");
    return s+(confirmado?(p.puntos||0):0);
  },0);
}

function puntosPendientes(){
  return misPedidos().reduce(function(s,p){
    if(p.esCanje)return s;
    var pendiente=(p.estado==="pendiente"||p.estado==="en_proceso"||p.estado==="autorizado"||p.estado==="entrega"||p.estado==="facturado");
    return s+(pendiente?(p.puntos||0):0);
  },0);
}

function puntosCanjeados(){
  return misPedidos().reduce(function(s,p){
    if(p.estado==="cancelado")return s;
    return s+(p.canjePts||0);
  },0);
}

function registrarLogPuntos(ruc,tipo,pts,detalle){
  try{
    var key="pyro_log_puntos_"+ruc;
    var log=[];try{log=JSON.parse(localStorage.getItem(key)||"[]");}catch(e){}
    var now=new Date(),p2=function(n){return n<10?"0"+n:String(n);};
    log.unshift({tipo:tipo,pts:pts,detalle:detalle,fecha:now.getFullYear()+"-"+p2(now.getMonth()+1)+"-"+p2(now.getDate()),hora:p2(now.getHours())+":"+p2(now.getMinutes())});
    if(log.length>100)log=log.slice(0,100);
    localStorage.setItem(key,JSON.stringify(log));
  }catch(e){}
}
function saldoPuntos(){
  var base=Math.max(0, puntosConfirmados()-puntosCanjeados());
  // Suma puntos fijos de logros desbloqueados
  try{
    var bonus=bonoPorLogros();
    if(bonus>0)return base+bonus;
  }catch(e){}
  return base;
}

// ════════════════════ LOGIN ════════════════════
// SHA-256 síncrono (impl. compacta de Geraint Luff, dominio público) para
// soportar contraseñas guardadas como hash (ej. ADMIN) sin texto plano.
function sha256(ascii){
  // Normalizar a bytes UTF-8: sin esto, tildes/ñ dan un hash no estándar y los
  // caracteres fuera de Latin-1 (emojis, etc.) hacían que la función devolviera
  // undefined → la contraseña se guardaba vacía y el cliente quedaba bloqueado.
  try{ascii=unescape(encodeURIComponent(ascii));}catch(e){}
  function rightRotate(value,amount){return(value>>>amount)|(value<<(32-amount));}
  var mathPow=Math.pow;var maxWord=mathPow(2,32);var result="";
  var words=[];var asciiBitLength=ascii.length*8;
  var hash=sha256.h=sha256.h||[];var k=sha256.k=sha256.k||[];var primeCounter=k.length;
  var isComposite={};
  for(var candidate=2;primeCounter<64;candidate++){
    if(!isComposite[candidate]){
      for(var i=0;i<313;i+=candidate){isComposite[i]=candidate;}
      hash[primeCounter]=(mathPow(candidate,.5)*maxWord)|0;
      k[primeCounter++]=(mathPow(candidate,1/3)*maxWord)|0;
    }
  }
  ascii+="\x80";
  while(ascii.length%64-56)ascii+="\x00";
  for(var i=0;i<ascii.length;i++){
    var j=ascii.charCodeAt(i);
    if(j>>8)return;
    words[i>>2]|=j<<((3-i)%4)*8;
  }
  words[words.length]=((asciiBitLength/maxWord)|0);
  words[words.length]=(asciiBitLength);
  for(var j=0;j<words.length;){
    var w=words.slice(j,j+=16);var oldHash=hash;
    hash=hash.slice(0,8);
    for(var i=0;i<64;i++){
      var w15=w[i-15],w2=w[i-2];
      var a=hash[0],e=hash[4];
      var temp1=hash[7]
        +(rightRotate(e,6)^rightRotate(e,11)^rightRotate(e,25))
        +((e&hash[5])^((~e)&hash[6]))
        +k[i]
        +(w[i]=(i<16)?w[i]:(
            w[i-16]
            +(rightRotate(w15,7)^rightRotate(w15,18)^(w15>>>3))
            +w[i-7]
            +(rightRotate(w2,17)^rightRotate(w2,19)^(w2>>>10))
          )|0
        );
      var temp2=(rightRotate(a,2)^rightRotate(a,13)^rightRotate(a,22))
        +((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
      hash=[(temp1+temp2)|0].concat(hash);
      hash[4]=(hash[4]+temp1)|0;
    }
    for(var i=0;i<8;i++){hash[i]=(hash[i]+oldHash[i])|0;}
  }
  for(var i=0;i<8;i++){
    for(var j=3;j+1;j--){
      var b=(hash[i]>>(j*8))&255;
      result+=((b<16)?0:"")+b.toString(16);
    }
  }
  return result;
}
// Compara la contraseña ingresada contra la almacenada (texto plano o hash SHA-256 de 64 hex)
function passCoincide(stored,pw){
  if(stored==null)return false;
  if(stored===pw)return true;
  if(/^[a-f0-9]{64}$/i.test(stored))return sha256(pw)===stored.toLowerCase();
  return false;
}
function loginConCredenciales(ruc,pw){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc.toLowerCase()===ruc.toLowerCase()&&passCoincide(x.pass,pw);});
  if(!d)return false;
  if(d.bloqueado&&!d.esAdmin)return false;
  // Modo mantenimiento: bloquear a no-admin por CUALQUIER vía (autologin, biometría)
  if(typeof MODO_MANTENIMIENTO!=="undefined"&&MODO_MANTENIMIENTO&&!d.esAdmin)return false;
  USER=d; window._USER=d; PEDIDOS=cargarPedidos(); cargarStock(); cargarDescVol();
  // Log de accesos (#25)
  try{
    var logAccesos=[];
    try{logAccesos=JSON.parse(localStorage.getItem("pyro_log_accesos")||"[]");}catch(e){}
    var _now=new Date(),_p2=function(n){return n<10?"0"+n:String(n);};
    logAccesos.unshift({ruc:d.ruc,razon:d.razon||d.empresa||d.ruc,fecha:_now.getFullYear()+"-"+_p2(_now.getMonth()+1)+"-"+_p2(_now.getDate()),hora:_p2(_now.getHours())+":"+_p2(_now.getMinutes())+":"+_p2(_now.getSeconds())});
    if(logAccesos.length>50)logAccesos=logAccesos.slice(0,50);
    localStorage.setItem("pyro_log_accesos",JSON.stringify(logAccesos));
  }catch(e){}
  setTimeout(reintentarSyncPendientes,2000);
  // Pull datos de Supabase en background después del login
  if(typeof sbPullAll==="function")setTimeout(function(){sbPullAll(d.esAdmin||d.rol==="impresion");},1500);
  if((d.esAdmin||d.rol==="impresion")&&typeof sbSuscribirPedidos==="function")setTimeout(sbSuscribirPedidos,3000);
  if(d.rol==="impresion"){
    // Rol de impresión: usa la pantalla admin con UI reducida (solo pedidos)
    mostrar("s-admin");
    renderAdmin();
    return true;
  }
  if(d.esAdmin){mostrar("s-admin");renderAdmin();iniciarNotificacionesAdmin();}
  else{
    CARRITO=cargarCarrito();
    // Cargar favoritos del usuario
    try{FAVORITOS=JSON.parse(localStorage.getItem("pyro_favs_"+USER.ruc)||"[]");}catch(e){FAVORITOS=[];}
    try{DESEOS=JSON.parse(localStorage.getItem("pyro_deseos_"+USER.ruc)||"[]");}catch(e){DESEOS=[];}
    // Cargar preferencia de grid
    CAT_GRID=localStorage.getItem("pyro_cat_grid")==="1";
    mostrar("s-main");
    // Iniciar activadores UX
    activarScrollTop();
    activarSwipe();
    activarPullToRefresh();
    iniciarAutoguardado();
    // Restaurar última tab (si ya vio tutorial y no hay bienvenida pendiente)
    var _tabsValidas=["inicio","catalogo","carrito","historial","recompensas"];
    var ultimaTab=localStorage.getItem("pyro_ultima_tab_"+USER.ruc)||"inicio";
    if(_tabsValidas.indexOf(ultimaTab)===-1)ultimaTab="inicio";
    var keyTut="pyro_tut_"+USER.ruc;
    var yaVioTut=localStorage.getItem(keyTut)==="1";
    var yaTieneBienvenida=PEDIDOS.some(function(p){return p.ruc===USER.ruc&&p.esBienvenida;});
    if(yaVioTut&&yaTieneBienvenida&&ultimaTab!=="inicio"){
      irTab(ultimaTab);
    } else {
      irTab("inicio");
    }
    renderCatalogo();
    actualizarBadge();
  }
  return true;
}
// ════════ RECORDARME ════════
var _REC_KEY="pyro_recuerdo";
function _xor(str,key){var r="";for(var i=0;i<str.length;i++)r+=String.fromCharCode(str.charCodeAt(i)^key.charCodeAt(i%key.length));return r;}
function _b64e(s){try{return btoa(unescape(encodeURIComponent(s)));}catch(e){return "";}}
function _b64d(s){try{return decodeURIComponent(escape(atob(s)));}catch(e){return "";}}
var _REC_SALT="PyroShield#2026!";
function guardarRecuerdo(ruc,pw){
  try{
    var cifrado=_b64e(_xor(ruc+"|||"+pw,_REC_SALT));
    localStorage.setItem(_REC_KEY,cifrado);
  }catch(e){}
}
function borrarRecuerdo(){try{localStorage.removeItem(_REC_KEY);}catch(e){}}
function cargarRecuerdo(){
  try{
    var raw=localStorage.getItem(_REC_KEY);
    if(!raw)return null;
    var plain=_xor(_b64d(raw),_REC_SALT);
    var parts=plain.split("|||");
    if(parts.length===2)return{ruc:parts[0],pw:parts[1]};
  }catch(e){}
  return null;
}
function intentarAutoLogin(){
  var rec=cargarRecuerdo();
  if(!rec)return;
  var lu=document.getElementById("login-user");
  var lp=document.getElementById("login-pass");
  var chk=document.getElementById("login-recordar");
  if(lu)lu.value=rec.ruc;
  if(lp)lp.value=rec.pw;
  if(chk)chk.checked=true;
  // Auto-login silencioso
  if(loginConCredenciales(rec.ruc,rec.pw)){
    document.getElementById("login-err").style.display="none";
    finalizarLogin(rec.ruc,rec.pw);
  }
}

function toggleVerPass(){
  var inp=document.getElementById("login-pass");
  var btn=document.getElementById("btn-ver-pass");
  if(!inp)return;
  if(inp.type==="password"){inp.type="text";if(btn)btn.textContent="🙈";}
  else{inp.type="password";if(btn)btn.textContent="👁️";}
}
var _loginAttempts=0;var _loginBlocked=false;

// Descarga del servidor qué tutoriales ya completó este RUC y los marca en localStorage
function _sincTutorialesDesdeServidor(ruc){
  if(!ruc)return;
  // Si el usuario acaba de reiniciar tutoriales, no restaurar desde servidor
  if(localStorage.getItem("pyro_tut_resetado_"+ruc))return;
  try{
    fetch(GAS_URL+"?token="+encodeURIComponent(GAS_TOKEN)+"&accion=obtenerTutoriales&ruc="+encodeURIComponent(ruc))
      .then(function(r){return r.json();})
      .then(function(d){
        if(!d.ok||!Array.isArray(d.tabs))return;
        // Doble check: si reinició mientras esperaba la respuesta, ignorar
        if(localStorage.getItem("pyro_tut_resetado_"+ruc))return;
        d.tabs.forEach(function(tab){
          try{
            localStorage.setItem("pyro_tipsec_"+ruc+"_"+tab,"1");
            localStorage.setItem("pyro_tut_pts_"+ruc+"_"+tab,"1");
          }catch(e){}
        });
      })
      .catch(function(){});
  }catch(e){}
}

function hacerLogin(){
  var u=document.getElementById("login-user").value.trim();
  var pw=document.getElementById("login-pass").value.trim();
  var err=document.getElementById("login-err");
  err.style.display="none";
  // Modo mantenimiento: bloquear a no-admin ANTES de loginConCredenciales,
  // porque esa función ya navega a s-main (dejaría USER=null en pantalla rota).
  if(typeof MODO_MANTENIMIENTO!=="undefined"&&MODO_MANTENIMIENTO){
    var _cand=DISTRIBUIDORES.find(function(x){return x.ruc.toLowerCase()===u.toLowerCase();});
    if(_cand&&!_cand.esAdmin){
      err.textContent=(typeof MANTENIMIENTO_MSG!=="undefined"?MANTENIMIENTO_MSG:"Portal en mantenimiento");
      err.style.display="block";
      return;
    }
  }
  if(_loginBlocked){err.textContent="⛔ Demasiados intentos fallidos. Espera 60 segundos.";err.style.display="block";return;}
  if(!loginConCredenciales(u,pw)){
    // Verificar si las credenciales son correctas pero el acceso está bloqueado
    var _dBloq=DISTRIBUIDORES.find(function(x){return x.ruc.toLowerCase()===u.toLowerCase()&&passCoincide(x.pass,pw);});
    if(_dBloq&&_dBloq.bloqueado&&!_dBloq.esAdmin){
      err.textContent="🚫 Tu acceso ha sido suspendido."+(_dBloq.bloqueoRazon?" Motivo: "+_dBloq.bloqueoRazon:" Contacta a PyroShield.");
      err.style.display="block";
      return;
    }
    _loginAttempts++;
    if(_loginAttempts>=5){
      _loginBlocked=true;
      err.textContent="⛔ Demasiados intentos fallidos. Espera 60 segundos.";
      err.style.display="block";
      setTimeout(function(){_loginBlocked=false;_loginAttempts=0;},60000);
    }else{err.textContent="RUC o contraseña incorrectos";err.style.display="block";}
    return;
  }
  _loginAttempts=0;_loginBlocked=false;
  // Recordarme
  var chkRec=document.getElementById("login-recordar");
  if(chkRec&&chkRec.checked){guardarRecuerdo(u,pw);}else{borrarRecuerdo();}
  try{localStorage.setItem("pyro_last_ruc",u);}catch(e){}
  try{localStorage.setItem("pyro_sesion",JSON.stringify({ruc:u}));}catch(e){}
  finalizarLogin(u,pw);
}
function finalizarLogin(u,pw){
  // Alerta contraseña débil (últimos 6 dígitos del RUC o contraseñas conocidas)
  var PASSES_DEBILES=["dist123","jorge123","fabiola123","123456","password","pyroshield"];
  var esDebil=PASSES_DEBILES.indexOf(pw)!==-1||(u.length>=6&&pw===u.slice(-6))||(u.length>=6&&pw===u.slice(-7));
  if(esDebil&&!USER.esAdmin){
    setTimeout(function(){
      var llave="pyro_pass_alerta_"+USER.ruc;
      if(!localStorage.getItem(llave)){
        localStorage.setItem(llave,"1");
        confirmar(
          "⚠️ <b>Tu contraseña es muy fácil de adivinar</b><br><br>Por seguridad, te recomendamos cambiarla ahora.<br><small style='color:var(--g3)'>Ve a Perfil → Cambiar contraseña</small>",
          function(){abrirPerfil();setTimeout(mostrarCambioPassOpcional,400);}
        );
      }
    },1800);
  }
  if(!USER.esAdmin&&USER.rol!=="impresion"){
    cargarAvatar();
    otorgarBienvenida();
    if(!document.getElementById("primer-ingreso-ov")&&!document.getElementById("bienvenida-ov"))mostrarSaludoFlash();
    _ofrecerBiometria(u,pw);
    _sincTutorialesDesdeServidor(USER.ruc);
    // Flujo de primer ingreso (bienvenida + cambio de contraseña)
    var keyPrimer="pyro_primer_ingreso_"+USER.ruc;
    if(!localStorage.getItem(keyPrimer)){
      mostrarPrimerIngreso();
    }
  }
  // Alerta pedidos pendientes >30 días
  if(!USER.esAdmin&&USER.rol!=="impresion"){setTimeout(function(){var ahora=new Date();var viejos=PEDIDOS.filter(function(p){if(p.ruc!==USER.ruc||p.estado!=="pendiente")return false;var f=parseFechaPed(p);return f&&(ahora-f)>30*24*60*60*1000;});if(viejos.length)toast("⏰ Tienes "+viejos.length+" pedidos en 'pendiente' hace más de 30 días — contacta a PyroShield");},2500);}
  podarPedidosAdmin();
  if(USER.esAdmin){
    backupAutomatico(false);
    sincronizarDesdeNube(null);
    restaurarMetaDesdeNube();
  } else {
    sincronizarDesdeNube(USER.rol==="impresion"?null:USER.ruc);
  }
  iniciarSondeoNube();
}

// ════════════════════ FLUJO PRIMER INGRESO ════════════════════
function mostrarPrimerIngreso(){
  if(!USER)return;
  primerIngresoPaso1();
}
function _cerrarPrimerIngresoOv(){
  var ov=document.getElementById("primer-ingreso-ov");
  if(ov)ov.remove();
}
function _primerIngresoOv(innerHtml){
  _cerrarPrimerIngresoOv();
  var ov=document.createElement("div");
  ov.id="primer-ingreso-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:9998;padding:20px";
  ov.innerHTML='<div style="background:var(--blanco,#fff);border-radius:22px;padding:28px 24px;max-width:340px;width:100%;text-align:center;box-shadow:0 12px 50px rgba(0,0,0,.45)">'+innerHtml+'</div>';
  document.body.appendChild(ov);
}
function primerIngresoPaso1(){
  var enc=USER.encargado||primerNombre(USER.razon);
  _primerIngresoOv(
    '<div style="font-size:48px;margin-bottom:10px">🎁</div>'+
    '<div style="font-size:21px;font-weight:800;color:var(--oro);margin-bottom:10px">¡Bienvenido/a, '+escHtml(enc)+'! 🎁</div>'+
    '<div style="font-size:14px;color:var(--g4);margin-bottom:8px">Tienes un regalo de bienvenida:</div>'+
    '<div style="font-size:15px;font-weight:700;margin-bottom:20px;line-height:1.4">Combo KFC 3 presas + papas + cola</div>'+
    '<button class="btn btn-p" style="width:100%;font-size:16px" onclick="primerIngresoPaso2()">¡Genial! Continuar →</button>'
  );
}
function primerIngresoPaso2(){
  _primerIngresoOv(
    '<div style="font-size:21px;font-weight:800;margin-bottom:10px">Cambia tu contraseña</div>'+
    '<div style="font-size:13px;color:var(--g4);margin-bottom:16px;line-height:1.5">Tu contraseña actual es temporal. Te recomendamos cambiarla por una segura.</div>'+
    '<input class="form-input" id="pi-pass1" type="password" placeholder="Nueva contraseña">'+
    '<input class="form-input" id="pi-pass2" type="password" placeholder="Repetir contraseña">'+
    '<button class="btn btn-p btn-full" style="margin-top:4px" onclick="primerIngresoGuardarPass()">Guardar contraseña</button>'
  );
}
function primerIngresoGuardarPass(){
  var p1=document.getElementById("pi-pass1"),p2=document.getElementById("pi-pass2");
  var v1=p1?p1.value:"",v2=p2?p2.value:"";
  if(v1.length<6){toast("⚠️ La contraseña debe tener al menos 6 caracteres");return;}
  if(v1!==v2){toast("⚠️ Las contraseñas no coinciden");return;}
  USER.pass=sha256(v1);
  USER.passModificado=true;
  // Invalidar biometría y recuerdo: el hash y las credenciales guardadas ya no coinciden
  try{localStorage.removeItem("pyro_biometria_"+USER.ruc);}catch(e){}
  borrarRecuerdo();
  guardarDistribuidores();
  try{localStorage.setItem("pyro_sesion",JSON.stringify({ruc:USER.ruc}));}catch(e){}
  toast("✅ Contraseña actualizada");
  primerIngresoPaso3();
}
function primerIngresoPaso3(){
  _cerrarPrimerIngresoOv();
  try{localStorage.setItem("pyro_primer_ingreso_"+USER.ruc,"1");}catch(e){}
  iniciarTutorial();
}
function mostrarCambioPassOpcional(){
  if(!USER)return;
  _primerIngresoOv(
    '<div style="font-size:21px;font-weight:800;margin-bottom:10px">🔐 Cambiar contraseña</div>'+
    '<input class="form-input" id="pi-pass1" type="password" placeholder="Nueva contraseña" style="margin-bottom:8px">'+
    '<input class="form-input" id="pi-pass2" type="password" placeholder="Repetir contraseña" style="margin-bottom:12px">'+
    '<button class="btn btn-p btn-full" style="margin-bottom:8px" onclick="primerIngresoGuardarPass()">Guardar</button>'+
    '<button class="btn btn-s btn-full" onclick="_cerrarPrimerIngresoOv()">Cancelar</button>'
  );
}

// Otorga (una sola vez por cuenta) un canje gratis de bienvenida al primer login
function otorgarBienvenida(){
  if(!USER||USER.esAdmin)return;
  var flag="pyro_bienvenida_"+USER.ruc;
  // PEDIDOS es la fuente de verdad — funciona aunque entre desde otro dispositivo
  var yaTiene=PEDIDOS.some(function(p){return p.ruc===USER.ruc&&p.esBienvenida;});
  if(yaTiene){try{localStorage.setItem(flag,"1");}catch(e){}return;}
  if(localStorage.getItem(flag))return;
  var now=new Date();
  var bid="B"+now.getTime()+Math.floor(Math.random()*900+100);
  var pedBienv={
    id:bid,ruc:USER.ruc,razon:USER.razon,
    fecha:now.toLocaleDateString("es-EC"),fechaISO:now.toISOString(),
    esCanje:true,esBienvenida:true,canjePts:0,
    canjeNm:"Combo KFC 3 presas + papas + cola",
    estado:"pendiente",total:0,puntos:0
  };
  PEDIDOS.push(pedBienv);
  guardarPedidos();
  sincronizarConSheets(pedBienv,true);
  try{localStorage.setItem(flag,"1");}catch(e){}
  if(typeof renderInicio==="function")renderInicio();
  // Solo mostrar overlay si NO es primer ingreso (primerIngresoPaso1 ya lo anuncia)
  var esPrimerIngreso=!localStorage.getItem("pyro_primer_ingreso_"+USER.ruc);
  if(!esPrimerIngreso){setTimeout(function(){mostrarOverlayBienvenida();},1400);}
}
function mostrarOverlayBienvenida(){
  var ov=document.createElement("div");
  ov.id="bienvenida-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;z-index:9999";
  ov.innerHTML='<div style="background:var(--bg);border-radius:20px;padding:32px 28px;max-width:320px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.4)">'+
    '<div style="font-size:52px;margin-bottom:12px">🎁</div>'+
    '<div style="font-size:20px;font-weight:800;color:var(--oro);margin-bottom:8px">¡Tienes un regalo de bienvenida!</div>'+
    '<div style="font-size:15px;color:var(--g4);margin-bottom:20px;line-height:1.5">Combo KFC por registrarte<br><span style="font-size:13px;color:var(--g3)">3 presas + papas + cola 🍗</span></div>'+
    '<button class="btn btn-p" style="width:100%;font-size:16px" onclick="document.getElementById(\'bienvenida-ov\').remove()">¡Genial! 🔥</button>'+
  '</div>';
  document.body.appendChild(ov);
}
function logout(){
  USER=null;window._USER=null;CARRITO=[];PEDIDOS=[];
  if(_notifInterval){clearInterval(_notifInterval);_notifInterval=null;}
  if(_autoguardadoInterval){clearInterval(_autoguardadoInterval);_autoguardadoInterval=null;}
  if(_nubeInterval){clearInterval(_nubeInterval);_nubeInterval=null;}
  if(typeof sbDesuscribir==="function")sbDesuscribir();
  try{localStorage.removeItem("pyro_sesion");}catch(e){}
  borrarRecuerdo();
  mostrar("s-login");
  document.getElementById("login-user").value="";
  document.getElementById("login-pass").value="";
}
function mostrar(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active");});document.getElementById(id).classList.add("active");window.scrollTo(0,0);}

function mostrarSaludoFlash(){
  var nm=USER.empresa||(USER.razon||"").split(" ").slice(0,2).join(" ");
  var d=document.createElement("div");
  d.className="saludo-flash";
  d.textContent="¡Hola "+nm+"! Es un gusto tenerte de vuelta 🔥";
  document.body.appendChild(d);
  setTimeout(function(){d.remove();},3200);
}

// ════════════════════ TUTORIAL POR SECCIÓN ════════════════════
function iniciarTutorial(){
  // Compatibilidad: ya no hay tutorial global al inicio, solo por sección
  try{if(USER)localStorage.setItem("pyro_tut_"+USER.ruc,"1");}catch(e){}
}
function cerrarTutorial(){
  var t=document.getElementById("tutorial");
  if(t)t.style.display="none";
  try{if(USER)localStorage.setItem("pyro_tut_"+USER.ruc,"1");}catch(e){}
}
// Muestra un overlay tipo tutorial la primera vez que el usuario entra a cada sección
function mostrarTipSeccion(tab){
  if(!USER)return;
  var tips=TUT_TIPS[tab];
  if(!tips||!tips.length)return;
  var key="pyro_tipsec_"+USER.ruc+"_"+tab;
  if(localStorage.getItem(key))return;
  var prev=document.getElementById("tipsec-ov");if(prev)prev.remove();
  var paso=-1; // -1 = pantalla de bienvenida, 0..n-1 = pasos, n = recompensa
  var _tutTimer=null;
  var ov=document.createElement("div");
  ov.id="tipsec-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.88);z-index:800;display:flex;align-items:center;justify-content:center;padding:24px";
  ov.addEventListener("click",function(e){e.stopPropagation();});

  function otorgarPuntosTutorial(){
    var ya=localStorage.getItem("pyro_tut_pts_"+USER.ruc+"_"+tab);
    if(ya)return;
    try{localStorage.setItem(key,"1");}catch(e){}
    try{localStorage.setItem("pyro_tut_pts_"+USER.ruc+"_"+tab,"1");}catch(e){}
    // Al completar un tutorial, limpiar el flag de reset (ya completó al menos uno)
    try{localStorage.removeItem("pyro_tut_resetado_"+USER.ruc);}catch(e){}
    // Guardar en servidor para que no vuelva a salir en ningún dispositivo
    try{fetch(GAS_URL,{method:"POST",body:JSON.stringify({token:GAS_TOKEN,accion:"marcarTutorial",ruc:USER.ruc,tab:tab})});}catch(e){}
    var pid="TUT"+Date.now().toString().slice(-6);
    PEDIDOS.push({id:pid,ruc:USER.ruc,razon:USER.razon,
      fecha:new Date().toLocaleDateString("es-EC"),fechaISO:new Date().toISOString(),
      esCanje:true,esBienvenida:false,esInstalacion:true,canjePts:0,
      canjeNm:"🎓 Premio por completar tutorial de "+tab+" — 10 pts",
      estado:"finalizado",total:0,puntos:10});
    registrarLogPuntos(USER.ruc,"confirmado",10,"Tutorial completado: "+tab);
    guardarPedidos();
  }

  function iniciarCuenta(btnId,seg0,label0){
    if(_tutTimer)clearInterval(_tutTimer);
    var seg=seg0;
    function actualizar(){
      var b=document.getElementById(btnId);if(!b)return;
      if(seg>0){
        b.disabled=true;b.style.background="#ccc";b.style.cursor="not-allowed";
        b.textContent=label0+" ("+seg+")";
        seg--;
      } else {
        clearInterval(_tutTimer);_tutTimer=null;
        b.disabled=false;b.style.background="var(--rojo,#e03c31)";b.style.cursor="pointer";
        b.textContent=label0;
      }
    }
    actualizar();
    _tutTimer=setInterval(actualizar,1000);
  }

  function iniciarCuenta2(btnPrevId,btnNextId,esFin){
    if(_tutTimer)clearInterval(_tutTimer);
    var seg=3;
    function actualizar(){
      var bp=document.getElementById(btnPrevId);
      var bn=document.getElementById(btnNextId);
      if(seg>0){
        if(bp){bp.disabled=true;bp.style.background="#f5f5f5";bp.style.cursor="not-allowed";bp.textContent="← Atrás ("+seg+")";}
        if(bn){bn.disabled=true;bn.style.background="#ccc";bn.style.cursor="not-allowed";bn.textContent=(esFin?"¡Entendido! ✓":"Siguiente →")+" ("+seg+")";}
        seg--;
      } else {
        clearInterval(_tutTimer);_tutTimer=null;
        if(bp){bp.disabled=false;bp.style.background="#fff";bp.style.color="#555";bp.style.cursor="pointer";bp.style.borderColor="#ddd";bp.textContent="← Atrás";}
        if(bn){bn.disabled=false;bn.style.background="var(--rojo,#e03c31)";bn.style.cursor="pointer";bn.textContent=esFin?"¡Entendido! ✓":"Siguiente →";}
      }
    }
    actualizar();
    _tutTimer=setInterval(actualizar,1000);
  }

  function renderOv(){
    if(_tutTimer){clearInterval(_tutTimer);_tutTimer=null;}

    // ── Pantalla bienvenida (paso -1) ──
    if(paso===-1){
      ov.innerHTML=
        '<div style="background:var(--bg,#fff);border-radius:24px;padding:40px 28px;width:100%;max-width:380px;text-align:center;box-shadow:0 16px 60px rgba(0,0,0,.5)">'+
          '<div style="font-size:64px;margin-bottom:16px">🎓</div>'+
          '<div style="font-size:22px;font-weight:800;color:var(--negro,#111);margin-bottom:10px;line-height:1.2">¡Tutorial rápido!</div>'+
          '<div style="font-size:15px;color:var(--g4,#555);line-height:1.6;margin-bottom:20px">Tienes <b>'+tips.length+' pasos</b> para conocer esta sección.<br>Al completarlos recibirás:</div>'+
          '<div style="background:linear-gradient(135deg,#B8860B,#f5c842);border-radius:16px;padding:18px 24px;margin-bottom:24px">'+
            '<div style="font-size:42px;font-weight:900;color:#fff;line-height:1">🏆 10</div>'+
            '<div style="font-size:14px;font-weight:700;color:#fff;margin-top:4px">PUNTOS DE BIENVENIDA</div>'+
          '</div>'+
          '<button id="tut-btn-start" disabled style="width:100%;padding:15px;background:#ccc;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:800;cursor:not-allowed;transition:all .2s">¡Empecemos! (3)</button>'+
        '</div>';
      document.getElementById("tut-btn-start").addEventListener("click",function(){
        if(document.getElementById("tut-btn-start").disabled)return;
        paso=0;renderOv();
      });
      iniciarCuenta("tut-btn-start",3,"¡Empecemos!");
      return;
    }

    // ── Pantalla recompensa (paso === tips.length) ──
    if(paso===tips.length){
      otorgarPuntosTutorial();
      ov.innerHTML=
        '<div style="background:var(--bg,#fff);border-radius:24px;padding:40px 28px;width:100%;max-width:380px;text-align:center;box-shadow:0 16px 60px rgba(0,0,0,.5)">'+
          '<div style="font-size:64px;margin-bottom:14px">🎉</div>'+
          '<div style="font-size:22px;font-weight:800;color:var(--negro,#111);margin-bottom:10px">¡Tutorial completado!</div>'+
          '<div style="font-size:15px;color:var(--g4,#555);margin-bottom:20px">Has ganado tu recompensa:</div>'+
          '<div style="background:linear-gradient(135deg,#B8860B,#f5c842);border-radius:16px;padding:20px 24px;margin-bottom:8px">'+
            '<div style="font-size:48px;font-weight:900;color:#fff;line-height:1">🏆 +10</div>'+
            '<div style="font-size:15px;font-weight:700;color:#fff;margin-top:6px">PUNTOS ACREDITADOS</div>'+
          '</div>'+
          '<div style="font-size:12px;color:#aaa;margin-bottom:22px">Ya aparecen en tu saldo de recompensas</div>'+
          '<button id="tut-btn-fin" disabled style="width:100%;padding:15px;background:#ccc;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:800;cursor:not-allowed;transition:all .2s">¡Ir al portal! (3)</button>'+
        '</div>';
      document.getElementById("tut-btn-fin").addEventListener("click",function(){
        if(document.getElementById("tut-btn-fin").disabled)return;
        if(_tutTimer)clearInterval(_tutTimer);
        ov.remove();
        renderInicio();
      });
      iniciarCuenta("tut-btn-fin",3,"¡Ir al portal!");
      return;
    }

    // ── Pasos normales ──
    var t=tips[paso];
    var pct=Math.round((paso+1)/tips.length*100);
    var esFin=paso===tips.length-1;
    ov.innerHTML=
      '<div style="background:var(--bg,#fff);border-radius:24px;padding:36px 28px;width:100%;max-width:380px;text-align:center;box-shadow:0 16px 60px rgba(0,0,0,.5)">'+
        '<div style="font-size:56px;margin-bottom:14px">'+t.ico+'</div>'+
        '<div style="font-size:11px;font-weight:700;color:var(--oro);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px">PASO '+(paso+1)+' DE '+tips.length+'</div>'+
        '<div style="font-size:20px;font-weight:800;color:var(--negro);margin-bottom:10px;line-height:1.2">'+escHtml(t.t)+'</div>'+
        '<div style="font-size:14px;color:var(--g4,#555);line-height:1.6;margin-bottom:22px">'+escHtml(t.d)+'</div>'+
        '<div style="background:#eee;border-radius:6px;height:6px;margin-bottom:22px">'+
          '<div style="background:var(--rojo);height:6px;border-radius:6px;width:'+pct+'%;transition:width .3s"></div>'+
        '</div>'+
        '<div style="display:flex;gap:10px">'+
          (paso>0?'<button id="tut-btn-prev" disabled style="flex:1;padding:13px;border:1.5px solid #ddd;border-radius:12px;font-size:14px;font-weight:600;background:#f5f5f5;cursor:not-allowed;color:#aaa;transition:all .2s">← Atrás (3)</button>':'')+
          (esFin
            ?'<button id="tut-btn-next" disabled style="flex:2;padding:13px;background:#ccc;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:not-allowed;transition:all .2s">Finalizar → (3)</button>'
            :'<button id="tut-btn-next" disabled style="flex:2;padding:13px;background:#ccc;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:not-allowed;transition:all .2s">Siguiente → (3)</button>'
          )+
        '</div>'+
      '</div>';
    var btnNext=document.getElementById("tut-btn-next");
    var btnPrev=document.getElementById("tut-btn-prev");
    if(btnNext){
      btnNext.addEventListener("click",function(){
        if(btnNext.disabled)return;
        paso++;renderOv();
      });
    }
    if(btnPrev){
      btnPrev.addEventListener("click",function(){
        if(btnPrev.disabled)return;
        paso--;renderOv();
      });
    }
    iniciarCuenta2("tut-btn-prev","tut-btn-next",esFin);
  }
  document.body.appendChild(ov);
  renderOv();
}

// ════════════════════ NAV ════════════════════
function irTab(t){
  cerrarZoom();
  document.querySelectorAll("#s-main .tab-panel").forEach(function(x){x.classList.remove("active");});
  var el=document.getElementById("tab-"+t);if(el)el.classList.add("active");
  document.querySelectorAll("#s-main .bnav").forEach(function(b){b.classList.remove("active");});
  var bn=document.getElementById("bnav-"+t);if(bn)bn.classList.add("active");
  if(t==="inicio")renderInicio();
  if(t==="catalogo")renderCatalogo();
  if(t==="carrito")renderCarrito();
  if(t==="historial")renderHistorial();
  if(t==="recompensas")renderRecompensas();
  var cb=document.getElementById("cart-bar");
  if(cb)cb.style.display="none";
  var _sc=document.querySelector("#s-main .content");if(_sc)_sc.scrollTo(0,0);
  if(USER&&!USER.esAdmin){
    try{localStorage.setItem("pyro_ultima_tab_"+USER.ruc,t);}catch(e){}
    setTimeout(function(){mostrarTipSeccion(t);},300);
  }
}

// Actualiza el badge de puntos del topbar; hace pulse cuando el saldo sube
function setTopbarPts(val){
  var el=document.getElementById("topbar-pts-v");
  if(!el)return;
  var prev=parseInt(el.getAttribute("data-prev")||"0",10);
  el.textContent=fmtPts(val);
  if(val>prev){
    var box=el.parentNode;
    if(box){box.classList.remove("pulse");void box.offsetWidth;box.classList.add("pulse");}
  }
  el.setAttribute("data-prev",val);
  // Mantener sincronizado el card del dashboard
  var heroEl=document.getElementById("hero-pts");
  if(heroEl)heroEl.textContent=fmtPts(val);
}

// Overlay de éxito grande con animación (feedback al confirmar pedido)
function mostrarExito(titulo,sub){
  var ov=document.getElementById("exito-ov");
  if(!ov){toastGold(titulo);return;}
  var t=document.getElementById("exito-t"),s=document.getElementById("exito-s");
  if(t)t.textContent=titulo||"¡Listo!";
  if(s)s.textContent=sub||"";
  ov.classList.remove("show");void ov.offsetWidth;ov.classList.add("show");
  setTimeout(function(){ov.classList.remove("show");},2200);
}

// ════════════════════ INICIO ════════════════════
function animarContador(el, valor, duracion){
  if(!el)return;
  var inicio=Date.now();
  var numVal=typeof valor==="number"?valor:parseInt(String(valor).replace(/[^0-9]/g,""),10)||0;
  function tick(){
    var elapsed=Date.now()-inicio;
    var progreso=Math.min(elapsed/duracion,1);
    var ease=1-Math.pow(1-progreso,3);
    var actual=Math.round(numVal*ease);
    el.textContent=actual.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
    if(progreso<1)requestAnimationFrame(tick);
    else el.textContent=String(numVal).replace(/\B(?=(\d{3})+(?!\d))/g,".");
  }
  requestAnimationFrame(tick);
}

function renderInicio(){
  var mp=misPedidos();
  var entregados=mp.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";});
  var pend=mp.filter(function(p){return p.estado==="pendiente"||p.estado==="en_proceso"||p.estado==="autorizado"||p.estado==="entrega"||p.estado==="facturado";});
  var saludoNm=USER.encargado||primerNombre(USER.razon);
  var empresaNm=USER.empresa||USER.razon;
  var heroTxt=(empresaNm&&empresaNm!==saludoNm)?saludoNm+" / "+empresaNm:saludoNm;
  var heroNm=document.getElementById("hero-nombre");if(heroNm)heroNm.textContent=heroTxt;
  var fe=document.getElementById("hero-frase");
  if(fe&&!fe.textContent){fe.textContent=FRASES_MOTIVACIONALES[Math.floor(Math.random()*FRASES_MOTIVACIONALES.length)];}
  setTopbarPts(saldoPuntos());
  animarContador(document.getElementById("hero-pts"),saldoPuntos(),600);
  animarContador(document.getElementById("hs-pedidos"),entregados.length,600);
  animarContador(document.getElementById("hs-proceso"),pend.length,600);
  animarContador(document.getElementById("hs-carrito"),CARRITO.reduce(function(s,i){return s+i.cant;},0),600);
  renderPromosHome();
  renderPedidoFrecuente();
  // Saldo pendiente del distribuidor (si el admin registró uno)
  var saldoTag=document.getElementById("cli-saldo-tag");
  if(saldoTag){
    if(USER&&USER.saldoPendiente>0){
      saldoTag.style.display="block";
      saldoTag.innerHTML='💲 Saldo pendiente de pago: <b>'+fmt$(USER.saldoPendiente)+'</b>';
    } else { saldoTag.style.display="none"; }
  }
  renderInsignias();
  renderDeseosSec();
  renderBannerInstalacion();
  // Banner de pedidos pendientes en cola offline
  var colaOffUI=cargarColaOffline();
  var colaActivaOffUI=colaOffUI.filter(function(id){return PEDIDOS.some(function(p){return p.id===id;});});
  var bannerColaEl=document.getElementById("offline-cola-banner");
  if(colaActivaOffUI.length>0){
    if(!bannerColaEl){
      bannerColaEl=document.createElement("div");
      bannerColaEl.id="offline-cola-banner";
      bannerColaEl.style.cssText="background:#f39c12;color:#fff;border-radius:10px;padding:12px 16px;margin:8px 0;font-size:14px;font-weight:600;display:flex;align-items:center;justify-content:space-between;gap:8px";
      var contenedor=document.getElementById("ultimos-pedidos");
      if(contenedor&&contenedor.parentNode)contenedor.parentNode.insertBefore(bannerColaEl,contenedor);
    }
    bannerColaEl.innerHTML='<span>⏳ Tienes '+colaActivaOffUI.length+' pedido(s) pendiente(s) de sincronizar</span>'+
      '<button class="btn btn-s" style="background:#fff;color:#f39c12;min-width:120px" onclick="procesarColaOffline()">Sincronizar ahora</button>';
  } else {
    if(bannerColaEl)bannerColaEl.remove();
  }
  var up=mp.slice().reverse().slice(0,3);
  var _upEl=document.getElementById("ultimos-pedidos");if(!_upEl)return;
  _upEl.innerHTML=up.length?up.map(function(p){
    return '<div class="ped" onclick="verDetallePed(\''+p.id+'\')" style="cursor:pointer">'+
      '<div class="ped-top"><div><div class="ped-id">Pedido #'+p.id+'</div>'+
      '<div style="font-size:12px;color:var(--g3)">'+p.fecha+'</div></div>'+
      '<span class="est-chip est-'+estadoClass(p.estado).replace('est-','')+'">'+estadoLabel(p.estado)+'</span></div>'+
      '<div class="ped-total">'+fmt$(p.total)+'</div>'+
    '</div>';
  }).join(""):'<div class="empty"><div class="ico">📭</div><p>Aún no tienes pedidos. ¡Haz tu primero!</p></div>';
}

// ════════════════════ INSIGNIAS / LOGROS ════════════════════
// bonoPts: puntos fijos que se suman al saldo cuando el logro está desbloqueado
var _logrosCache=null;
var _logrosCacheKey="";
function _logrosDefinicion(){
  var _favsN=0,_borrN=0;
  try{_favsN=(JSON.parse(localStorage.getItem("pyro_favs_"+(USER&&USER.ruc))||"[]")||[]).length;}catch(e){}
  try{_borrN=(JSON.parse(localStorage.getItem("pyro_borradores_"+(USER&&USER.ruc))||"[]")||[]).length;}catch(e){}
  var _key=(USER&&USER.ruc||"")+"_"+PEDIDOS.length+"_"+(new Date().getHours())+"_"+_favsN+"_"+_borrN;
  if(_logrosCache&&_logrosCacheKey===_key) return _logrosCache;
  var mp=misPedidos().filter(function(p){return!p.esCanje;});
  var comp=mp.filter(function(p){return["finalizado","entregado","facturado"].indexOf(p.estado)!==-1;});
  var pend=mp.filter(function(p){return p.estado==="pendiente";});
  var canc=mp.filter(function(p){return p.estado==="cancelado";});
  var n=comp.length;
  var total=comp.reduce(function(s,p){return s+(p.total||0);},0);
  var pts=puntosConfirmados();
  var canjes=misPedidos().filter(function(p){return p.esCanje&&!p.esBienvenida;}).length;
  var meses=new Set(comp.map(function(p){var d=parseFechaPed(p);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");})).size;
  var semanas=new Set(comp.map(function(p){var d=parseFechaPed(p);var w=Math.floor(d/6048e5);return w;})).size;
  var prods=new Set(comp.reduce(function(a,p){return a.concat((p.items||[]).map(function(i){return i.id;}));},[]).filter(Boolean)).size;
  var _excUnid=["SEGPLAST01","MANOPQS"]; // seguros plásticos y manómetros no cuentan por ser accesorios de muy bajo valor unitario
  var items=comp.reduce(function(s,p){return s+(p.items||[]).reduce(function(ss,i){return _excUnid.indexOf(i.id)!==-1?ss:ss+i.cant;},0);},0);
  var maxPed=comp.reduce(function(s,p){return Math.max(s,p.total||0);},0);
  var diasSemana=comp.map(function(p){return parseFechaPed(p).getDay();});
  var tieneViernesPed=diasSemana.indexOf(5)!==-1;
  var ttodos=misPedidos().filter(function(p){return!p.esCanje;}).length;
  var notas=mp.filter(function(p){return p.notas&&p.notas.length>5;}).length;
  var porPago={};comp.forEach(function(p){porPago[p.pago]=(porPago[p.pago]||0)+1;});
  var tiposP=Object.keys(porPago).length;
  var maxItems=comp.reduce(function(s,p){return Math.max(s,(p.items||[]).length);},0);
  var favs=[];try{favs=JSON.parse(localStorage.getItem("pyro_favs_"+(USER&&USER.ruc))||"[]");}catch(e){}
  var borradores=[];try{borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+(USER&&USER.ruc))||"[]");}catch(e){}
  var tieneEntrega=comp.some(function(p){return p.modo==="entrega";});
  var tieneRetiro=comp.some(function(p){return p.modo==="retiro";});
  var ahora=new Date();
  var pedHoy=comp.filter(function(p){var d=parseFechaPed(p);return d.toDateString()===ahora.toDateString();}).length;
  var pedEsteAnio=comp.filter(function(p){return parseFechaPed(p).getFullYear()===ahora.getFullYear();}).length;
  var totalPuntosPed=comp.reduce(function(s,p){return s+(p.puntos||0);},0);
  var pedConDesc=comp.filter(function(p){return(p.items||[]).some(function(i){return i.descVol>0||i.descPct>0;});}).length;
  var cats3=new Set(comp.reduce(function(a,p){return a.concat((p.items||[]).map(function(i){var pr=PRODUCTOS.find(function(x){return x.id===i.id;});return pr?pr.cat:null;}).filter(Boolean));},[])).size;
  var _resultadoLogros=[
    // ── NIVEL 1: Inmediatos / primer contacto ──
    {ico:"🔍",nm:"Explorador",             desc:"Abre el portal PyroShield",               ok:true,            bonoPts:1},
    {ico:"🌙",nm:"Noctámbulo",             desc:"Entra al portal después de las 9pm",       ok:(function(){var h=ahora.getHours();var logrado=(h>=21||h<6);if(logrado)try{localStorage.setItem("pyro_logro_noct_"+USER.ruc,"1");}catch(e){}return logrado||!!localStorage.getItem("pyro_logro_noct_"+(USER&&USER.ruc||""));}()), bonoPts:1},
    {ico:"☀️",nm:"Madrugador",             desc:"Entra al portal antes de las 8am",         ok:(function(){var h=ahora.getHours();var logrado=(h<8);if(logrado)try{localStorage.setItem("pyro_logro_madrug_"+USER.ruc,"1");}catch(e){}return logrado||!!localStorage.getItem("pyro_logro_madrug_"+(USER&&USER.ruc||""));}()), bonoPts:1},
    {ico:"❤️",nm:"Primer favorito",        desc:"Guarda un producto como favorito",         ok:favs.length>=1,  bonoPts:2},
    {ico:"📝",nm:"Primer borrador",        desc:"Guarda un borrador de carrito",            ok:borradores.length>=1, bonoPts:2},
    {ico:"💬",nm:"Primera nota",           desc:"Agrega notas en un pedido",               ok:notas>=1,        bonoPts:2},

    // ── NIVEL 2: Primeras acciones clave ──
    {ico:"🥇",nm:"Primer pedido",          desc:"Completa tu primer pedido",               ok:n>=1,            bonoPts:3},
    {ico:"🚚",nm:"Primera entrega",        desc:"Pide con envío a tu local",               ok:tieneEntrega,    bonoPts:3},
    {ico:"🏪",nm:"Primer retiro",          desc:"Pide con retiro en bodega",               ok:tieneRetiro,     bonoPts:3},
    {ico:"🏷️",nm:"Cazador de descuentos",  desc:"Usa descuento por volumen en 1 pedido",   ok:pedConDesc>=1,   bonoPts:2},
    {ico:"📲",nm:"Siempre conectado",       desc:"10 pedidos totales (incluye pendientes)", ok:ttodos>=10,      bonoPts:2},
    {ico:"🐦",nm:"Pedido de viernes",      desc:"Confirma un pedido un viernes",           ok:tieneViernesPed, bonoPts:2},
    {ico:"📌",nm:"Varios canales pago",    desc:"Usa 2 formas de pago distintas",          ok:tiposP>=2,       bonoPts:2},
    {ico:"🗑️",nm:"Orden y limpieza",       desc:"Cancela un pedido y genera uno nuevo",    ok:canc.length>=1&&n>=1, bonoPts:2},

    // ── NIVEL 3: Catálogo y variedad ──
    {ico:"🔑",nm:"Explorador de catálogo", desc:"Pide 3 productos distintos",              ok:prods>=3,        bonoPts:3},
    {ico:"📋",nm:"Pedido completo",        desc:"Pedido con 5 o más productos distintos",  ok:maxItems>=5,     bonoPts:3},
    {ico:"💜",nm:"3 favoritos",            desc:"Guarda 3 productos favoritos",            ok:favs.length>=3,  bonoPts:2},
    {ico:"🗒️",nm:"Anotador",              desc:"Agrega notas en 3 pedidos",               ok:notas>=3,        bonoPts:2},
    {ico:"🌺",nm:"Floreciente",            desc:"Pide de 3 categorías distintas",          ok:prods>=5&&cats3>=3, bonoPts:6},

    // ── NIVEL 4: Volumen inicial ──
    // Fórmula: hito_$ × 28% margen × 0.2% = pts reales en $; × 100 pts/$
    // Ej: $100 × 0.28 × 0.002 × 100 = 5.6 ≈ 6 pts
    {ico:"💵",nm:"Primeros $100",          desc:"$100 en compras totales",                 ok:total>=100,      bonoPts:6},
    {ico:"📊",nm:"Pedido de $100",         desc:"Un solo pedido de $100 o más",            ok:maxPed>=100,     bonoPts:6},
    {ico:"📦",nm:"50 unidades",            desc:"50 unidades pedidas en total",            ok:items>=50,       bonoPts:5},
    {ico:"🔥",nm:"En racha",               desc:"5 pedidos completados",                   ok:n>=5,            bonoPts:5},
    {ico:"✨",nm:"Sin desperdiciar",       desc:"0 cancelados con 5+ pedidos completados", ok:canc.length===0&&n>=5, bonoPts:5},
    {ico:"⚡",nm:"2 semanas activo",       desc:"Pedidos en 2 semanas distintas",          ok:semanas>=2,      bonoPts:4},
    {ico:"📅",nm:"2 meses activo",         desc:"Pedidos en 2 meses distintos",            ok:meses>=2,        bonoPts:4},
    {ico:"🎄",nm:"5 pedidos este año",     desc:"5 pedidos en el año en curso",            ok:pedEsteAnio>=5,  bonoPts:5},
    {ico:"🌀",nm:"500 puntos",             desc:"Acumula 500 puntos",                      ok:pts>=500,        bonoPts:4},
    {ico:"🎁",nm:"Primer canje",           desc:"Canjea tu primer premio",                 ok:canjes>=1,       bonoPts:5},

    // ── NIVEL 5: Crecimiento ──
    // $250 × 0.28 × 0.002 × 100 = 14 pts
    {ico:"💴",nm:"$250 en compras",        desc:"$250 en compras totales",                 ok:total>=250,      bonoPts:14},
    {ico:"📈",nm:"Pedido de $250",         desc:"Un solo pedido de $250 o más",            ok:maxPed>=250,     bonoPts:12},
    {ico:"🏗️",nm:"200 unidades",           desc:"200 unidades pedidas en total",           ok:items>=200,      bonoPts:8},
    {ico:"🗺️",nm:"Gran explorador",        desc:"Pide 8 productos distintos",              ok:prods>=8,        bonoPts:7},
    {ico:"🧩",nm:"Pedido masivo",          desc:"Pedido con 10 o más productos distintos", ok:maxItems>=10,    bonoPts:7},
    {ico:"⭐",nm:"Cliente activo",         desc:"15 pedidos completados",                  ok:n>=15,           bonoPts:10},
    {ico:"🔋",nm:"4 semanas activo",       desc:"Pedidos en 4 semanas distintas",          ok:semanas>=4,      bonoPts:7},
    {ico:"🗓️",nm:"3 meses seguidos",       desc:"Pedidos en 3 meses distintos",            ok:meses>=3,        bonoPts:7},
    {ico:"🎆",nm:"10 pedidos este año",    desc:"10 pedidos en el año en curso",           ok:pedEsteAnio>=10, bonoPts:8},
    {ico:"🌠",nm:"1.000 puntos",           desc:"Acumula 1.000 puntos",                    ok:pts>=1000,       bonoPts:7},
    {ico:"🎀",nm:"3 canjes",               desc:"Canjea 3 premios",                        ok:canjes>=3,       bonoPts:8},
    {ico:"🔂",nm:"Generador de puntos",    desc:"Genera 1.000 pts acumulados en pedidos",  ok:totalPuntosPed>=1000, bonoPts:7},
    {ico:"💛",nm:"10 favoritos",           desc:"Guarda 10 productos favoritos",           ok:favs.length>=10, bonoPts:5},
    {ico:"🎣",nm:"Maestro del descuento",  desc:"Usa descuento por volumen 5 veces",       ok:pedConDesc>=5,   bonoPts:6},
    {ico:"⏱️",nm:"Rápido como rayo",       desc:"2 o más pedidos confirmados en un día",   ok:pedHoy>=2,       bonoPts:6},

    // ── NIVEL 6: Intermedio ──
    // $500 × 0.28 × 0.002 × 100 = 28 pts
    {ico:"💰",nm:"$500 en compras",        desc:"$500 en compras totales",                 ok:total>=500,      bonoPts:28},
    {ico:"🎰",nm:"Pedido de $500",         desc:"Un solo pedido de $500 o más",            ok:maxPed>=500,     bonoPts:22},
    {ico:"🚛",nm:"500 unidades",           desc:"500 unidades pedidas en total",           ok:items>=500,      bonoPts:18},
    {ico:"🌍",nm:"Catálogo completo",      desc:"Pide 15 productos distintos",             ok:prods>=15,       bonoPts:15},
    {ico:"🎪",nm:"Pedido épico",           desc:"Pedido con 15 o más productos distintos", ok:maxItems>=15,    bonoPts:12},
    {ico:"💪",nm:"Constante",              desc:"30 pedidos completados",                  ok:n>=30,           bonoPts:18},
    {ico:"🔌",nm:"8 semanas activo",       desc:"Pedidos en 8 semanas distintas",          ok:semanas>=8,      bonoPts:14},
    {ico:"🌱",nm:"Medio año",              desc:"Pedidos en 6 meses distintos",            ok:meses>=6,        bonoPts:15},
    {ico:"🎇",nm:"20 pedidos este año",    desc:"20 pedidos en el año en curso",           ok:pedEsteAnio>=20, bonoPts:14},
    {ico:"💫",nm:"2.500 puntos",           desc:"Acumula 2.500 puntos",                    ok:pts>=2500,       bonoPts:12},
    {ico:"🎊",nm:"5 canjes",               desc:"Canjea 5 premios",                        ok:canjes>=5,       bonoPts:12},
    {ico:"⚖️",nm:"Puntos masivos",         desc:"Genera 5.000 pts acumulados en pedidos",  ok:totalPuntosPed>=5000, bonoPts:15},
    {ico:"🌹",nm:"Mi lista personal",      desc:"Guarda 20 productos favoritos",           ok:favs.length>=20, bonoPts:8},
    {ico:"🦈",nm:"Rey del volumen",        desc:"Usa descuento por volumen 15 veces",      ok:pedConDesc>=15,  bonoPts:10},

    // ── NIVEL 7: Avanzado ──
    // $1.000 × 0.28 × 0.002 × 100 = 56 pts
    {ico:"🏦",nm:"Gran comprador",         desc:"$1.000 en compras totales",               ok:total>=1000,     bonoPts:56},
    {ico:"💣",nm:"Pedido de $1.000",       desc:"Un solo pedido de $1.000 o más",          ok:maxPed>=1000,    bonoPts:45},
    {ico:"🏭",nm:"1.000 unidades",         desc:"1.000 unidades pedidas en total",         ok:items>=1000,     bonoPts:30},
    {ico:"🎗️",nm:"Cliente fiel",           desc:"50 pedidos completados",                  ok:n>=50,           bonoPts:35},
    {ico:"🌿",nm:"9 meses activo",         desc:"Pedidos en 9 meses distintos",            ok:meses>=9,        bonoPts:25},
    {ico:"📆",nm:"30 pedidos este año",    desc:"30 pedidos en el año en curso",           ok:pedEsteAnio>=30, bonoPts:22},
    {ico:"🏆",nm:"5.000 puntos",           desc:"Acumula 5.000 puntos",                    ok:pts>=5000,       bonoPts:20},
    {ico:"🎖️",nm:"Medalla de honor",       desc:"3 canjes + 10 pedidos + 6 meses activo", ok:canjes>=3&&n>=10&&meses>=6, bonoPts:35},

    // ── NIVEL 8: Experto ──
    // $2.500 × 0.28 × 0.002 × 100 = 140 pts
    {ico:"💎",nm:"$2.500 en compras",      desc:"$2.500 en compras totales",               ok:total>=2500,     bonoPts:140},
    {ico:"🌋",nm:"Pedido de $2.500",       desc:"Un solo pedido de $2.500 o más",          ok:maxPed>=2500,    bonoPts:110},
    {ico:"🚀",nm:"Imparable",              desc:"75 pedidos completados",                  ok:n>=75,           bonoPts:60},
    {ico:"🌳",nm:"Un año completo",        desc:"Pedidos en 12 meses distintos",           ok:meses>=12,       bonoPts:50},
    {ico:"🌟",nm:"10.000 puntos",          desc:"Acumula 10.000 puntos",                   ok:pts>=10000,      bonoPts:40},

    // ── NIVEL 9: Élite ──
    // $5.000 × 0.28 × 0.002 × 100 = 280 pts
    {ico:"🥂",nm:"Comprador premium",      desc:"$5.000 en compras totales",               ok:total>=5000,     bonoPts:280},
    {ico:"💼",nm:"Profesional",            desc:"100 pedidos completados",                 ok:n>=100,          bonoPts:100},
    {ico:"👑",nm:"Cliente élite",          desc:"150 pedidos completados",                 ok:n>=150,          bonoPts:140},
    {ico:"🦅",nm:"Águila PyroShield",      desc:"200 pedidos completados",                 ok:n>=200,          bonoPts:180},
    {ico:"🦄",nm:"Unicornio",              desc:"50 pedidos + $5.000 + 5.000 pts",         ok:n>=50&&total>=5000&&pts>=5000, bonoPts:120}
  ];
  _logrosCache=_resultadoLogros;
  _logrosCacheKey=_key;
  return _logrosCache;
}

function calcularInsignias(){return _logrosDefinicion();}

// Suma los puntos fijos de todos los logros desbloqueados
function bonoPorLogros(){
  try{
    var logros=_logrosDefinicion();
    return logros.filter(function(l){return l.ok;}).reduce(function(s,l){return s+(l.bonoPts||0);},0);
  }catch(e){return 0;}
}

function renderInsignias(){
  var el=document.getElementById("insignias-lista");
  if(!el)return;
  var ins=_logrosDefinicion();
  var logrados=ins.filter(function(i){return i.ok;});
  var bono=logrados.reduce(function(s,l){return s+(l.bonoPts||0);},0);
  var desbloqueados=logrados.length;
  var pct=Math.min(100,Math.round(desbloqueados/ins.length*100));

  // Mostrar solo los últimos 10 desbloqueados + resumen + botón "Ver todos"
  var recientes=logrados.slice(-10).reverse();
  el.innerHTML=
    // Resumen
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'+
      '<div style="font-size:13px;font-weight:700">'+desbloqueados+' / '+ins.length+' logros desbloqueados</div>'+
      '<div style="font-size:12px;font-weight:700;color:var(--verde)">+'+bono+' pts extras</div>'+
    '</div>'+
    // Barra de progreso
    '<div style="background:var(--g2);border-radius:6px;height:10px;margin-bottom:4px">'+
      '<div style="background:linear-gradient(90deg,var(--rojo),var(--oro));height:10px;border-radius:6px;width:'+pct+'%;transition:width .5s"></div>'+
    '</div>'+
    '<div style="font-size:11px;color:var(--g3);margin-bottom:12px">'+pct+'% completado</div>'+
    // Últimos desbloqueados
    (recientes.length?
      '<div style="font-size:11px;font-weight:600;color:var(--g4);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Últimos desbloqueados</div>'+
      '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">'+
      recientes.map(function(i){
        return '<div style="display:flex;align-items:center;gap:6px;background:var(--oro-claro,#fff7e0);border:1.5px solid var(--oro);border-radius:20px;padding:4px 10px 4px 6px">'+
          '<span style="font-size:18px">'+i.ico+'</span>'+
          '<div>'+
            '<div style="font-size:11px;font-weight:700;line-height:1.1">'+escHtml(i.nm)+'</div>'+
            '<div style="font-size:10px;color:var(--verde);font-weight:700">+'+i.bonoPts+' pts</div>'+
          '</div>'+
        '</div>';
      }).join("")+
      '</div>'
    :'')+
    // Botón ver todos
    '<button type="button" class="btn btn-s btn-full" onclick="abrirModalLogros()" style="font-size:13px">🏅 Ver los '+_logrosDefinicion().length+' logros</button>';
}

function abrirModalLogros(){
  var ins=_logrosDefinicion();
  // Niveles 1-9 tal como están ordenados en _logrosDefinicion()
  // Nivel 1: índices 0-5 (6 logros), Nivel 2: 6-13 (8), Nivel 3: 14-18 (5),
  // Nivel 4: 19-28 (10), Nivel 5: 29-43 (15), Nivel 6: 44-57 (14),
  // Nivel 7: 58-65 (8), Nivel 8: 66-70 (5), Nivel 9: 71-75 (5)
  var total=ins.length;
  var categorias=[
    {nm:"⭐ Nivel 1 — Inmediatos",desde:0,hasta:5},
    {nm:"🥇 Nivel 2 — Primeras acciones",desde:6,hasta:13},
    {nm:"🔑 Nivel 3 — Catálogo y variedad",desde:14,hasta:18},
    {nm:"💵 Nivel 4 — Volumen inicial",desde:19,hasta:28},
    {nm:"📈 Nivel 5 — Crecimiento",desde:29,hasta:43},
    {nm:"💰 Nivel 6 — Intermedio",desde:44,hasta:57},
    {nm:"🏦 Nivel 7 — Avanzado",desde:58,hasta:65},
    {nm:"💎 Nivel 8 — Experto",desde:66,hasta:70},
    {nm:"👑 Nivel 9 — Élite",desde:71,hasta:total-1}
  ];
  var html='<div class="mhandle"></div>'+
    '<h3 style="margin-bottom:4px">🏅 Mis logros</h3>'+
    '<p style="font-size:12px;color:var(--g3);margin-bottom:14px">Cada logro desbloqueado suma puntos extra a tu saldo permanentemente</p>';
  categorias.forEach(function(cat){
    var grupo=ins.slice(cat.desde,cat.hasta+1);
    var ok=grupo.filter(function(i){return i.ok;}).length;
    html+='<div style="margin-bottom:12px">'+
      '<div style="font-size:11px;font-weight:700;color:var(--g4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:flex;justify-content:space-between">'+
        '<span>'+escHtml(cat.nm)+'</span><span style="color:var(--g3)">'+ok+'/'+grupo.length+'</span>'+
      '</div>'+
      '<div style="display:flex;flex-direction:column;gap:6px">'+
      grupo.map(function(i){
        return '<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;'+
          'background:'+(i.ok?'var(--oro-claro,#fff7e0)':'var(--g1)')+';'+
          'border:1.5px solid '+(i.ok?'var(--oro)':'transparent')+';'+
          'opacity:'+(i.ok?'1':'.55')+'">'+
          '<div style="font-size:24px;filter:'+(i.ok?'none':'grayscale(1)')+';min-width:30px;text-align:center">'+i.ico+'</div>'+
          '<div style="flex:1">'+
            '<div style="font-size:13px;font-weight:700">'+escHtml(i.nm)+'</div>'+
            '<div style="font-size:11px;color:var(--g3)">'+escHtml(i.desc)+'</div>'+
          '</div>'+
          '<div style="text-align:right;min-width:42px">'+
            '<div style="font-size:12px;font-weight:700;color:'+(i.ok?'var(--verde)':'var(--g3)')+'">+'+i.bonoPts+' pts</div>'+
            (i.ok?'<div style="font-size:9px;color:var(--verde)">✔ logrado</div>':'<div style="font-size:9px;color:var(--g3)">bloqueado</div>')+
          '</div>'+
        '</div>';
      }).join("")+
      '</div></div>';
  });
  html+='<button class="btn btn-s btn-full" style="margin-top:4px" onclick="cerrarModal(\'modal-logros\')">Cerrar</button>';
  var c=document.getElementById("modal-logros-c");
  if(c){c.innerHTML=html;abrir("modal-logros");}
}
function renderPedidoFrecuente(){
  var el=document.getElementById("ultimos-pedidos");
  if(!el)return;
  var prev=document.getElementById("card-frecuente-wrap");
  if(prev)prev.remove();
  var mp=misPedidos().filter(function(p){return!p.esCanje&&p.estado!=="cancelado"&&p.items&&p.items.length;}).slice().sort(function(a,b){return parseFechaPed(b).getTime()-parseFechaPed(a).getTime();});
  if(!mp.length)return;
  var conteo={};
  mp.forEach(function(p){p.items.forEach(function(it){conteo[it.id]=(conteo[it.id]||0)+it.cant;});});
  var topId=null,topCant=0;
  Object.keys(conteo).forEach(function(k){if(conteo[k]>topCant){topCant=conteo[k];topId=k;}});
  if(!topId)return;
  var topProd=PRODUCTOS.find(function(x){return x.id===topId;});
  if(!topProd)return;
  // Último pedido que contenía ese producto (mp está ordenado de más nuevo a más viejo)
  var ultimoPed=null;
  for(var i=0;i<mp.length;i++){
    if(mp[i].items.some(function(it){return it.id===topId;})){ultimoPed=mp[i];break;}
  }
  if(!ultimoPed)return;
  var wrap=document.createElement("div");
  wrap.id="card-frecuente-wrap";
  wrap.innerHTML='<div class="sec-titulo">Tu producto más pedido</div>'+
    '<div class="card-frecuente">'+
      '<div style="display:flex;align-items:center;gap:12px">'+
        '<div style="font-size:28px">🔁</div>'+
        '<div style="flex:1"><div style="font-weight:700;font-size:14px">'+escHtml(topProd.nm)+'</div>'+
        '<div style="font-size:12px;color:var(--g3)">'+topCant+' unidades en '+mp.filter(function(p){return p.items.some(function(it){return it.id===topId;});}).length+' pedidos</div></div>'+
        '<button class="btn btn-p btn-sm" onclick="repetirPedido(\''+ultimoPed.id+'\')">Repetir pedido</button>'+
      '</div>'+
    '</div>';
  el.parentNode.insertBefore(wrap,el);
}

// ════════════════════ PROMOS ════════════════════
function renderPromosHome(){
  limpiarContadores();
  var cont=document.getElementById("promos-home");
  if(!cont)return;
  var activas=promosVigentes();
  if(!activas.length){cont.innerHTML='<div class="sec-titulo">Promociones</div><div class="empty" style="padding:12px 0"><p>No hay promociones disponibles en este momento</p></div>';return;}
  cont.innerHTML="<div class='sec-titulo'>Promociones</div>"+activas.map(function(pr){
    var items=pr.items.map(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      var imgHtml=prod&&prod.img&&IMGS[prod.img]?'<img src="'+IMGS[prod.img]+'" alt="'+escHtml(it.nm)+'" onerror="this.style.display=\'none\'" style="width:60px;height:60px;object-fit:contain;background:#000;border-radius:8px;margin-bottom:6px">':'';
      // Controles de cantidad + agregar al carrito (idénticos al catálogo)
      var addCtl='';
      if(prod&&!prod.ago){
        var cartItem=CARRITO.find(function(i){return i.id===prod.id;});
        var cantActual=cartItem?cartItem.cant:0;
        addCtl='<div class="prod-add-row" style="align-items:center;margin-top:8px">'+
          '<div class="qty-inline">'+
            '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+prod.id+'\',-1)" '+(cantActual===0?'style="opacity:.3;pointer-events:none"':'')+'>−</button>'+
            '<input class="qty-inp" id="qty-cat-'+prod.id+'" type="number" min="0"'+(prod.stock!=null?' max="'+prod.stock+'"':'')+' value="'+cantActual+'" onchange="setCantCatalogo(\''+prod.id+'\',this.value)" onclick="this.select()">'+
            '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+prod.id+'\',1)">+</button>'+
          '</div>'+
          '<button class="badd'+(cantActual>0?' inc':'')+'" onclick="agregarAlCarrito(\''+prod.id+'\')">'+(cantActual>0?'✓ Añadir':'+ Añadir')+'</button>'+
        '</div>';
      } else if(prod&&prod.ago){
        addCtl='<div style="margin-top:8px;font-size:10px;color:#fff;opacity:.6">Agotado</div>';
      }
      return '<div class="promo-it">'+
        imgHtml+
        '<div class="nm">'+escHtml(it.nm)+'</div>'+
        '<div class="pv">'+fmt$(it.pv)+'</div>'+
        '<div class="pp">'+fmt$(it.pp)+'</div>'+
        '<div class="sv">Ahorras '+fmt$(it.ahorro)+'</div>'+
        addCtl+
      '</div>';
    }).join("");
    var cntId="cnt-"+pr.id;
    var foot='<div class="promo-foot"><span class="promo-cnt" id="'+cntId+'">Calculando...</span><span class="iva">+ IVA 15%</span></div>';
    setTimeout(function(){iniciarContador(pr.fechaVence,cntId);},100);
    return '<div class="promo-card">'+
      '<div class="promo-head"><div class="tit">PROMO <b>'+pr.titulo+'</b></div><span class="promo-badge act">⏰ Activa</span></div>'+
      '<div class="promo-items">'+items+'</div>'+foot+
    '</div>';
  }).join("");
}

var _contadores=[];
function iniciarContador(fechaVence,elId){
  var intervalId;
  function actualizar(){
    var el=document.getElementById(elId);
    if(!el){clearInterval(intervalId);return;}
    var fin=new Date(fechaVence+"T23:59:59");
    var ahora=new Date();
    var diff=fin-ahora;
    if(diff<=0){el.textContent="¡Terminó!";clearInterval(intervalId);return;}
    var d=Math.floor(diff/86400000);
    var h=Math.floor((diff%86400000)/3600000);
    var m=Math.floor((diff%3600000)/60000);
    el.textContent="Vence en "+d+"d "+h+"h "+m+"m";
  }
  actualizar();
  intervalId=setInterval(actualizar,60000);
  _contadores.push(intervalId);
}
function limpiarContadores(){
  _contadores.forEach(function(id){clearInterval(id);});
  _contadores=[];
}

// ════════════════════ CATÁLOGO ════════════════════
function setFiltro(f,btn){
  FILTRO=f; SUB_FILTRO=null;
  document.querySelectorAll(".filtros .fbtn").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  renderSubFiltros();
  renderCatalogo();
}
function setSubFiltro(s,btn){
  SUB_FILTRO=(SUB_FILTRO===s)?null:s;
  document.querySelectorAll("#sub-filtros .fbtn").forEach(function(b){b.classList.remove("active");});
  if(SUB_FILTRO)btn.classList.add("active");
  renderCatalogo();
}
function renderSubFiltros(){
  var el=document.getElementById("sub-filtros");
  if(!el)return;
  if(FILTRO==="todos"||!CATS[FILTRO]){el.innerHTML="";return;}
  var subs=CATS[FILTRO].subs;
  el.innerHTML='<div class="filtros" style="margin-bottom:10px">'+
    subs.map(function(s){
      var ico=SUB_ICOS[s]||"";
      return '<button class="fbtn'+(SUB_FILTRO===s?" active":"")+'\" onclick="setSubFiltro(\''+s+'\',this)">'+ico+' '+s+'</button>';
    }).join("")+
  '</div>';
}

function onCatSearch(){
  clearTimeout(_catSearchDebounce);
  _catSearchDebounce=setTimeout(function(){
    var searchEl=document.getElementById("cat-search");
    if(!searchEl)return;
    var q=(searchEl.value||"").trim();
    if(q.length>1){
      var busqs=[];
      try{busqs=JSON.parse(localStorage.getItem("pyro_busquedas_"+(USER?USER.ruc:"x")+"")||"[]");}catch(e){}
      if(busqs.indexOf(q)===-1){busqs.unshift(q);busqs=busqs.slice(0,5);try{localStorage.setItem("pyro_busquedas_"+(USER?USER.ruc:"x")+"",JSON.stringify(busqs));}catch(e){}}
    }
    renderSearchRecientes();
    renderCatalogo();
  },350);
}

function renderSearchRecientes(){
  var el=document.getElementById("search-recientes");
  if(!el)return;
  var searchEl=document.getElementById("cat-search");
  var q=(searchEl&&searchEl.value||"").trim();
  if(q){el.innerHTML="";return;}
  var busqs=[];
  try{busqs=JSON.parse(localStorage.getItem("pyro_busquedas_"+(USER?USER.ruc:"x")+"")||"[]");}catch(e){}
  if(!busqs.length){el.innerHTML="";return;}
  el.innerHTML='<div class="busq-recientes">'+
    '<span style="font-size:10px;color:var(--g3);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-right:4px">Recientes:</span>'+
    busqs.map(function(b){return'<button class="busq-chip" data-q="'+escHtml(b)+'" onclick="usarBusquedaReciente(this.dataset.q)">'+escHtml(b)+'</button>';}).join("")+
  '</div>';
}

function usarBusquedaReciente(q){
  var searchEl=document.getElementById("cat-search");
  if(!searchEl)return;
  searchEl.value=q;
  renderSearchRecientes();
  renderCatalogo();
}

function setFiltroAvanzado(tipo,val){
  if(tipo==="margen")FILTRO_MARGEN_MIN=val;
  if(tipo==="stock")FILTRO_STOCK_MIN=val;
  document.querySelectorAll(".fadv-margen").forEach(function(b){b.classList.remove("active");});
  document.querySelectorAll(".fadv-stock").forEach(function(b){b.classList.remove("active");});
  var actM=document.querySelector(".fadv-margen[data-val='"+FILTRO_MARGEN_MIN+"']");
  var actS=document.querySelector(".fadv-stock[data-val='"+FILTRO_STOCK_MIN+"']");
  if(actM)actM.classList.add("active");
  if(actS)actS.classList.add("active");
  renderCatalogo();
}
function renderCatToolbar(){
  var el=document.getElementById("cat-toolbar");
  if(!el)return;
  el.innerHTML=
    '<button class="cat-grid-btn fbtn'+(CAT_GRID?' active':'')+'" onclick="toggleCatGrid()" title="'+(CAT_GRID?'Vista lista':'Vista cuadrícula')+'">'+(CAT_GRID?'☰ Lista':'⊞ Cuadrícula')+'</button>'+
    '<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px;align-items:center">'+
      '<span style="font-size:10px;color:var(--g3);font-weight:600;margin-right:2px">Margen:</span>'+
      '<button class="fbtn fadv-margen'+(FILTRO_MARGEN_MIN===0?' active':'')+'" data-val="0" onclick="setFiltroAvanzado(\'margen\',0)" style="font-size:10px;padding:2px 8px">Todos</button>'+
      '<button class="fbtn fadv-margen'+(FILTRO_MARGEN_MIN===20?' active':'')+'" data-val="20" onclick="setFiltroAvanzado(\'margen\',20)" style="font-size:10px;padding:2px 8px">20%+</button>'+
      '<button class="fbtn fadv-margen'+(FILTRO_MARGEN_MIN===30?' active':'')+'" data-val="30" onclick="setFiltroAvanzado(\'margen\',30)" style="font-size:10px;padding:2px 8px">30%+</button>'+
      '<span style="font-size:10px;color:var(--g3);font-weight:600;margin-left:6px;margin-right:2px">Stock:</span>'+
      '<button class="fbtn fadv-stock'+(FILTRO_STOCK_MIN===0?' active':'')+'" data-val="0" onclick="setFiltroAvanzado(\'stock\',0)" style="font-size:10px;padding:2px 8px">Todos</button>'+
      '<button class="fbtn fadv-stock'+(FILTRO_STOCK_MIN===1?' active':'')+'" data-val="1" onclick="setFiltroAvanzado(\'stock\',1)" style="font-size:10px;padding:2px 8px">Con stock</button>'+
    '</div>';
}

function toggleCatGrid(){
  CAT_GRID=!CAT_GRID;
  try{localStorage.setItem("pyro_cat_grid",CAT_GRID?"1":"0");}catch(e){}
  renderCatToolbar();
  renderCatalogo();
}

function renderCatalogo(){
  var searchEl=document.getElementById("cat-search");
  if(!searchEl)return;
  var q=(searchEl.value||"").toLowerCase();
  renderSearchRecientes();
  renderCatToolbar();
  var html="";

  if(FILTRO==="favoritos"){
    var favProds=PRODUCTOS.filter(function(p){return FAVORITOS.indexOf(p.id)!==-1;});
    if(q)favProds=favProds.filter(function(p){return coincideBusqueda(p,q);});
    if(!favProds.length){document.getElementById("cat-lista").innerHTML='<div class="empty"><div class="ico">❤️</div><p>No tienes favoritos aún</p></div>';return;}
    html='<div class="subcat">❤️ Tus favoritos</div>';
    var wrapClass=CAT_GRID?"cat-grid-wrap":"";
    if(CAT_GRID){
      html+='<div class="cat-grid-wrap">'+favProds.map(function(p){return renderProdCard(p);}).join("")+'</div>';
    } else {
      html+=favProds.map(function(p){return renderProdCard(p);}).join("");
    }
    document.getElementById("cat-lista").innerHTML=html;
    return;
  }

  var _promoIds={};
  if(FILTRO==="todos"){
    var prodsEnPromo=[];
    promosVigentes().forEach(function(pr){
      pr.items.forEach(function(it){
        if(_promoIds[it.id])return;
        var p=PRODUCTOS.find(function(x){return x.id===it.id;});
        if(!p||p.ago)return;
        if(q&&!coincideBusqueda(p,q))return;
        _promoIds[it.id]=true;
        prodsEnPromo.push(p);
      });
    });
    if(prodsEnPromo.length){
      html+='<div class="subcat">🔥 En Promoción</div>';
      if(CAT_GRID)html+='<div class="cat-grid-wrap">'+prodsEnPromo.map(function(p){return renderProdCard(p);}).join("")+'</div>';
      else html+=prodsEnPromo.map(function(p){return renderProdCard(p);}).join("");
    }
  }
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    if(FILTRO!=="todos"&&FILTRO!==ck)return;
    cat.subs.forEach(function(sn){
      if(SUB_FILTRO&&SUB_FILTRO!==sn)return;
      var ps=PRODUCTOS.filter(function(p){
        if(p.cat!==ck||p.sub!==sn)return false;
        if(_promoIds[p.id])return false;
        if(q&&!coincideBusqueda(p,q))return false;
        if(FILTRO_MARGEN_MIN>0){var pc2=precioCliente(p);var costo2=getCostoProducto(p.id);if(pc2>0&&(pc2-costo2)/pc2*100<FILTRO_MARGEN_MIN)return false;}
        if(FILTRO_STOCK_MIN>0&&p.ago)return false;
        return true;
      });
      if(!ps.length)return;
      var ico=SUB_ICOS[sn]||cat.ico;
      html+='<div class="subcat">'+ico+' '+cat.nombre+' · '+sn+'</div>';
      if(CAT_GRID)html+='<div class="cat-grid-wrap">'+ps.map(function(p){return renderProdCard(p);}).join("")+'</div>';
      else html+=ps.map(function(p){return renderProdCard(p);}).join("");
    });
  });
  document.getElementById("cat-lista").innerHTML=html||'<div class="empty"><div class="ico">🔍</div><p>No se encontraron productos</p></div>';
}

function renderProdCard(p){
  var promoIt=promoDelProducto(p.id);
  var esp=tieneEspecial(p)&&!promoIt;
  var cartItem=CARRITO.find(function(i){return i.id===p.id;});
  var cantActual=cartItem?cartItem.cant:0;
  var rv=precioConVolumen(p,cantActual>0?cantActual:1);
  var pc=rv.precio;
  var pts=calcPuntos(pc,p.costo);
  var isFav=FAVORITOS.indexOf(p.id)!==-1;
  var stockBadge=p.ago?'<span class="badge b-rojo">Agotado</span>':(p.stock!=null&&p.stock<=20&&p.stock>0?'<span class="badge b-amar">⚠️ Pocas ('+p.stock+')</span>':'<span class="badge b-verde">'+(p.stock!=null?'Stock: '+p.stock:'Disponible')+'</span>');
  var promoBadge=promoIt?'<span class="badge b-rojo" style="font-size:9px">🔥 PROMO</span>':'';
  var volBadge=(!USER||!USER.sinDescVol)&&p.descVol&&!promoIt?'<span class="badge b-azul" style="font-size:9px">Desc. volumen disponible</span>':'';
  var imgSrc=p.img&&IMGS[p.img]?IMGS[p.img]:null;
  var imgHtml=imgSrc?'<img src="'+imgSrc+'" alt="'+escHtml(p.nm)+'" loading="lazy" onerror="this.onerror=null;this.src=IMG_PLACEHOLDER" onclick="zoomImg(\''+imgSrc+'\')" style="cursor:zoom-in">':"<div class='ph'>🧯</div>";
  var favBtn='<button class="fav-btn'+(isFav?" active":"")+'\" onclick="toggleFav(\''+p.id+'\')">'+(isFav?"❤️":"🤍")+'</button>';
  var isDeseo=DESEOS.indexOf(p.id)!==-1;
  var deseoBtn='<button class="fav-btn deseo-btn'+(isDeseo?" active":"")+'\" onclick="toggleDeseo(\''+p.id+'\')" title="'+(isDeseo?"Quitar de lista de deseos":"Guardar en lista de deseos")+'">'+(isDeseo?"🔖":"🏷️")+'</button>';
  var calcBtn='<button class="fav-btn" onclick="abrirCalculadora(\''+p.id+'\')" title="Calcular ganancia" style="font-size:11px">📊</button>';

  // Banner descuento por volumen (cuando aún no hay en carrito)
  var bannerVol='';
  if((!USER||!USER.sinDescVol)&&p.descVol&&p.descVol.length&&!promoIt&&cantActual===0){
    var nextTier=p.descVol.find(function(t){return t[0]>1;});
    if(nextTier)bannerVol='<div style="background:linear-gradient(135deg,var(--rojo),#ff6b35);color:#fff;border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;margin-top:6px;text-align:center">🔥 Compra '+nextTier[0]+'+ y ahorra '+nextTier[1]+'% extra</div>';
  }

  // Indicador próximo descuento
  var proxDescHtml="";
  if(p.descVol&&(!USER||!USER.sinDescVol)&&cantActual>0){
    var sig=siguienteNivel(p,cantActual);
    if(sig&&sig.falta<=20){
      var ahorroAdicional=sig.pct;
      proxDescHtml='<div class="prox-desc">+'+sig.falta+' más → −'+ahorroAdicional+'% adicional</div>';
    }
  }

  var addHtml=p.ago
    ?'<button class="badd" disabled style="opacity:.4">Agotado</button>'
    :'<div class="prod-add-row">'+
        '<div class="qty-inline">'+
          '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+p.id+'\',-1)" '+(cantActual===0?'style="opacity:.3;pointer-events:none"':'')+'>−</button>'+
          '<input class="qty-inp" id="qty-cat-'+p.id+'" type="number" min="0"'+(p.stock!=null?' max="'+p.stock+'"':'')+' value="'+cantActual+'" onchange="setCantCatalogo(\''+p.id+'\',this.value)" onclick="this.select()">'+
          '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+p.id+'\',1)">+</button>'+
        '</div>'+
        '<button class="badd'+(cantActual>0?' inc':'')+'" onclick="agregarAlCarrito(\''+p.id+'\')">'+
          (cantActual>0?'✓ Añadir':'+ Añadir')+
        '</button>'+
      '</div>';

  var descPctDisp=rv.descPct>0?Math.round(rv.descPct):0;

  if(CAT_GRID){
    return '<div class="prod prod-grid'+(p.ago?" ago":"")+'\" id="prod-card-'+p.id+'">'+
      '<div class="prod-grid-img">'+(imgSrc?'<img src="'+imgSrc+'" alt="'+escHtml(p.nm)+'" loading="lazy" onerror="this.onerror=null;this.src=IMG_PLACEHOLDER" onclick="zoomImg(\''+imgSrc+'\')" style="cursor:zoom-in">':'<div class="ph" style="font-size:36px">🧯</div>')+'</div>'+
      favBtn+
      '<div class="prod-grid-body">'+
        '<div class="prod-nm">'+escHtml(p.nm)+'</div>'+
        '<div class="prod-meta" style="margin:4px 0">'+stockBadge+promoBadge+'</div>'+
        '<div class="prod-pu">'+fmt$(pc)+'</div>'+
        (descPctDisp>0?'<div class="prod-desc-badge" style="display:inline-block;margin-bottom:4px">−'+descPctDisp+'%</div>':'')+
        proxDescHtml+
        bannerVol+
        addHtml+
      '</div>'+
    '</div>';
  }

  var precioHtml='<div class="prod-precio-bloque">'+
    '<div class="prod-pv-label">P. público</div>'+
    '<div class="prod-pv">'+fmt$(p.pv)+'</div>'+
    (descPctDisp>0?'<div class="prod-desc-badge">−'+descPctDisp+'%</div>':'')+
    '<div class="prod-pu">'+fmt$(pc)+'</div>'+
    (promoIt?'<div class="prod-esp-label" style="color:#e03c31">🔥 Precio promocional</div>':(esp?'<div class="prod-esp-label">★ Tu precio</div>':''))+
    (rv.descVol>0?'<div style="font-size:9px;color:var(--verde);margin-top:2px">+Vol −'+rv.descVol.toFixed(1)+'%</div>':'')+
    (cantActual>0?'<div style="font-size:10px;color:var(--g3);margin-top:2px">Total: '+fmt$(pc*cantActual)+'</div>':'')+
    '<div class="prod-pts">🏆 '+pts+' pts/u</div>'+
    proxDescHtml+
  '</div>';

  return '<div class="prod'+(p.ago?" ago":"")+'\" id="prod-card-'+p.id+'" style="position:relative">'+
    favBtn+deseoBtn+calcBtn+
    '<div class="prod-img">'+imgHtml+'</div>'+
    '<div class="prod-info">'+
      '<div class="prod-nm">'+escHtml(p.nm)+'</div>'+
      '<div class="prod-meta">'+stockBadge+promoBadge+volBadge+'</div>'+
    '</div>'+
    '<div class="prod-r">'+
      precioHtml+
      addHtml+
    '</div>'+
  '</div>';
}

function toggleFav(id){
  var idx=FAVORITOS.indexOf(id);
  if(idx===-1)FAVORITOS.push(id);
  else FAVORITOS.splice(idx,1);
  try{localStorage.setItem("pyro_favs_"+USER.ruc,JSON.stringify(FAVORITOS));}catch(e){}
  // En modo Favoritos hay que re-renderizar para que la tarjeta desaparezca; en el resto solo actualizarla
  if(FILTRO==="favoritos"){renderCatalogo();return;}
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  var cardEl=document.getElementById("prod-card-"+id);
  if(p&&cardEl){cardEl.outerHTML=renderProdCard(p);}else{renderCatalogo();}
}

function toggleDeseo(id){
  var idx=DESEOS.indexOf(id);
  if(idx===-1){DESEOS.push(id);toast("🔖 Añadido a tu lista de deseos");}
  else{DESEOS.splice(idx,1);toast("Quitado de lista de deseos");}
  try{localStorage.setItem("pyro_deseos_"+USER.ruc,JSON.stringify(DESEOS));}catch(e){}
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  var cardEl=document.getElementById("prod-card-"+id);
  if(p&&cardEl){cardEl.outerHTML=renderProdCard(p);}else{renderCatalogo();}
  renderDeseosSec();
}
function renderDeseosSec(){
  var wrap=document.getElementById("deseos-sec");if(!wrap)return;
  var prods=PRODUCTOS.filter(function(p){return DESEOS.indexOf(p.id)!==-1;});
  if(!prods.length){wrap.style.display="none";return;}
  wrap.style.display="";
  var html='<div class="sec-titulo">🔖 Mi lista de deseos</div><div style="display:flex;flex-direction:column;gap:8px">';
  prods.forEach(function(p){
    var pc=precioCliente(p);
    html+='<div class="ped" style="padding:10px 14px;display:flex;align-items:center;gap:12px">'+
      '<div style="flex:1"><div style="font-weight:700;font-size:14px">'+escHtml(p.nm)+'</div>'+
      '<div style="font-size:13px;color:var(--azul);font-weight:600">'+fmt$(pc)+'</div>'+
      (p.ago?'<span class="badge b-rojo" style="font-size:10px">Agotado</span>':'<span class="badge b-verde" style="font-size:10px">'+(p.stock!=null?'Stock: '+p.stock:'Disponible')+'</span>')+
      '</div><div style="display:flex;flex-direction:column;gap:6px">'+
      (!p.ago?'<button class="btn btn-p btn-sm" onclick="agregarAlCarrito(\''+p.id+'\')">+ Carrito</button>':'')+
      '<button class="btn btn-s btn-sm" onclick="toggleDeseo(\''+p.id+'\')">🗑️ Quitar</button>'+
      '</div></div>';
  });
  wrap.innerHTML=html+'</div>';
}
function abrirCalculadora(id){
  var p=PRODUCTOS.find(function(x){return x.id===id;});if(!p)return;
  var cartItem=CARRITO.find(function(i){return i.id===id;});
  var cant=cartItem?cartItem.cant:1;
  var rv=precioConVolumen(p,cant>0?cant:1);var pc=rv.precio;
  var ov=document.getElementById("modal-calc"),cont=document.getElementById("modal-calc-c");
  if(!ov||!cont)return;
  cont.innerHTML='<div class="mhandle"></div><h3>📊 Calculadora</h3>'+
    '<div style="font-size:13px;font-weight:600;margin-bottom:12px">'+escHtml(p.nm)+'</div>'+
    '<div style="background:var(--g1);border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:13px;display:flex;justify-content:space-between"><span>Tu precio de compra:</span><b style="color:var(--azul)">'+fmt$(pc)+'</b></div>'+
    '<label class="form-label">Precio de venta al cliente ($)</label>'+
    '<input class="form-input" id="calc-pv-final" type="number" min="0" step="0.01" value="'+parseFloat((pc*1.3).toFixed(2))+'" oninput="actualizarCalc(\''+id+'\','+pc+')">'+
    '<label class="form-label">Cantidad</label>'+
    '<input class="form-input" id="calc-cant" type="number" min="1" value="'+Math.max(1,cant)+'" oninput="actualizarCalc(\''+id+'\','+pc+')">'+
    '<div id="calc-resultado" style="margin-top:10px"></div>'+
    '<button class="btn btn-s btn-full" style="margin-top:10px" onclick="cerrarModal(\'modal-calc\')">Cerrar</button>';
  abrir("modal-calc");actualizarCalc(id,pc);
}
function actualizarCalc(id,precioCompra){
  var pvInp=document.getElementById("calc-pv-final"),cantInp=document.getElementById("calc-cant"),res=document.getElementById("calc-resultado");
  if(!pvInp||!cantInp||!res)return;
  var pvFinal=parseFloat(pvInp.value)||0,cant=Math.max(1,parseInt(cantInp.value)||1);
  var ganUnit=pvFinal-precioCompra,ganTotal=ganUnit*cant;
  var margen=pvFinal>0?ganUnit/pvFinal*100:0;
  var col=ganUnit>=0?"var(--verde)":"var(--rojo)";
  res.innerHTML='<div style="background:var(--g1);border-radius:10px;padding:14px 16px;display:grid;gap:8px">'+
    '<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">Ganancia por unidad</span><b style="color:'+col+'">'+fmt$(ganUnit)+'</b></div>'+
    '<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">Ganancia total (×'+cant+')</span><b style="font-size:17px;color:'+col+'">'+fmt$(ganTotal)+'</b></div>'+
    '<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">Margen</span><b style="color:'+(margen>=20?"var(--verde)":margen>=10?"var(--amar)":"var(--rojo)")+'">'+margen.toFixed(1)+'%</b></div>'+
  '</div>'+(ganUnit<0?'<div style="font-size:11px;color:var(--rojo);margin-top:6px;text-align:center">⚠️ Precio menor al costo — perderías dinero</div>':'');
}
function renderDetallePuntos(){
  var wrap=document.getElementById("pts-detalle-wrap");if(!wrap)return;
  var mp=misPedidos().filter(function(p){return!p.esCanje&&(p.puntos||0)>0;}).slice().reverse();
  var confirmados=puntosConfirmados(),pendientes=puntosPendientes(),canjeados=puntosCanjeados();
  var html='<div class="sec-titulo" style="font-size:15px;margin-top:14px">📋 Puntos por pedido</div>';
  if(mp.length){
    html+='<div style="background:var(--g1);border-radius:12px;overflow:hidden;margin-bottom:10px">';
    mp.forEach(function(p){
      var esConf=p.estado==="entregado"||p.estado==="finalizado";
      var esPend=p.estado==="pendiente"||p.estado==="en_proceso"||p.estado==="facturado"||p.estado==="autorizado"||p.estado==="entrega";
      html+='<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 14px;border-bottom:1px solid var(--g2)">'+
        '<div><div style="font-size:12px;font-weight:600">Pedido #'+escHtml(p.id)+'</div>'+
        '<div style="font-size:11px;color:var(--g3)">'+escHtml(p.fecha||"")+'</div>'+
        '<span class="est-chip '+estadoClass(p.estado)+'" style="font-size:10px;padding:1px 6px">'+estadoLabel(p.estado)+'</span></div>'+
        '<div style="text-align:right"><div style="font-weight:700;color:'+(esConf?"var(--verde)":esPend?"var(--amar)":"var(--g3)")+'">🏆 '+fmtPts(p.puntos||0)+'</div>'+
        '<div style="font-size:10px;color:var(--g3)">'+(esConf?"Confirmados":esPend?"Pendientes":"Cancelado")+'</div></div></div>';
    });
    html+='</div>';
  } else {html+='<div class="empty" style="padding:16px"><p>Aún no tienes pedidos con puntos</p></div>';}
  html+='<div style="background:var(--g1);border-radius:12px;padding:12px 14px;display:grid;gap:6px;margin-bottom:4px">'+
    '<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">Ganados en pedidos</span><b style="color:var(--verde)">'+fmtPts(confirmados)+'</b></div>'+
    (bonoPorLogros()>0?'<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">🏅 Logros desbloqueados</span><b style="color:var(--verde)">+'+fmtPts(bonoPorLogros())+'</b></div>':'')+
    '<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">Pendientes de entrega</span><b style="color:var(--amar)">'+fmtPts(pendientes)+'</b></div>'+
    (canjeados>0?'<div style="display:flex;justify-content:space-between"><span style="font-size:13px;color:var(--g4)">Canjeados</span><b style="color:var(--rojo)">−'+fmtPts(canjeados)+'</b></div>':'')+
    '<div style="border-top:1.5px solid var(--g2);padding-top:6px;display:flex;justify-content:space-between"><b style="font-size:13px">Saldo disponible</b><b style="font-size:15px;color:var(--azul)">'+fmtPts(saldoPuntos())+'</b></div>'+
  '</div>';
  wrap.innerHTML=html;
}
function zoomImg(src){
  var ov=document.getElementById("img-zoom-ov");
  var img=document.getElementById("img-zoom-img");
  if(!ov||!img)return;
  img.src=src;
  ov.style.display="flex";
  document.body.style.overflow="hidden";
}
function cerrarZoom(){
  var ov=document.getElementById("img-zoom-ov");
  if(ov)ov.style.display="none";
  document.body.style.overflow="";
}

// Cambiar cantidad directo desde la tarjeta de catálogo
function cambiarCantCatalogo(id, d){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p||p.ago)return;
  var item=CARRITO.find(function(i){return i.id===id;});
  var actual=item?item.cant:0;
  var nueva=Math.max(0,actual+d);
  if(d>0&&p.stock!=null&&nueva>p.stock){toast("⚠️ Solo hay "+p.stock+" unidades disponibles");return;}
  if(nueva===0){
    CARRITO=CARRITO.filter(function(i){return i.id!==id;});
  } else if(item){
    item.cant=nueva;
  } else {
    CARRITO.push({id:id,cant:nueva});
  }
  var msg=validarCantMinMsg(p,nueva);
  if(msg)toast("⚠️ "+msg);
  guardarCarrito();
  actualizarBadge();
  // Reemplazar solo la tarjeta de ese producto (evita re-render completo y pérdida de foco)
  var cardEl=document.getElementById("prod-card-"+id);
  if(cardEl){var newHtml=renderProdCard(p);cardEl.outerHTML=newHtml;}
  refrescarPromosSiVisible();
}
// Si la pestaña de inicio (con la promo de la semana) está visible, refresca los controles
function refrescarPromosSiVisible(){
  var tab=document.getElementById("tab-inicio");
  if(tab&&tab.classList.contains("active")&&typeof renderPromosHome==="function")renderPromosHome();
}

function setCantCatalogo(id, val){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p||p.ago)return;
  var n=parseInt(val,10)||0;
  if(n<0)n=0;
  if(p.stock!=null&&n>p.stock){n=p.stock;toast("⚠️ Solo hay "+p.stock+" unidades disponibles");}
  var item=CARRITO.find(function(i){return i.id===id;});
  if(n===0){
    CARRITO=CARRITO.filter(function(i){return i.id!==id;});
  } else if(item){
    item.cant=n;
  } else {
    CARRITO.push({id:id,cant:n});
  }
  var msg=validarCantMinMsg(p,n);
  if(msg)toast("⚠️ "+msg);
  guardarCarrito();
  actualizarBadge();
  var cardEl2=document.getElementById("prod-card-"+id);
  if(cardEl2){var newHtml2=renderProdCard(p);cardEl2.outerHTML=newHtml2;}
  refrescarPromosSiVisible();
}

function agregarAlCarrito(id){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p||p.ago)return;
  var item=CARRITO.find(function(i){return i.id===id;});
  if(!item){
    var min=cantMinProducto(p);
    if(p.stock!=null&&min>p.stock){toast("⚠️ Stock insuficiente: solo hay "+p.stock+" unidades de "+p.nm);return;}
    CARRITO.push({id:id,cant:min});
    if(min>1)toast("ℹ️ Cant. mínima: "+min+" unidades de "+p.nm);
    else toast("🛒 "+p.nm+" en carrito");
  } else {
    toast("🛒 "+p.nm+" en carrito");
  }
  guardarCarrito();
  actualizarBadge();
  animarVueloCarrito(id);
  var cb=document.getElementById("cbadge");
  if(cb){cb.classList.remove("pop");void cb.offsetWidth;cb.classList.add("pop");}
  var cardEl3=document.getElementById("prod-card-"+id);
  if(cardEl3){var p3=PRODUCTOS.find(function(x){return x.id===id;});if(p3)cardEl3.outerHTML=renderProdCard(p3);}
  refrescarPromosSiVisible();
}

function animarVueloCarrito(id){
  var qb=document.getElementById("qty-cat-"+id);
  var destEl=document.getElementById("bnav-carrito");
  if(!qb||!destEl)return;
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  var emoji='🛒';
  var srcRect=qb.getBoundingClientRect();
  var dstRect=destEl.getBoundingClientRect();
  var el=document.createElement("div");
  el.textContent=emoji;
  el.style.cssText="position:fixed;font-size:22px;z-index:9999;pointer-events:none;transition:none;left:"+srcRect.left+"px;top:"+srcRect.top+"px;opacity:1;";
  document.body.appendChild(el);
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      el.style.transition="left 400ms cubic-bezier(.4,0,.2,1),top 400ms cubic-bezier(.4,0,.2,1),opacity 400ms,transform 400ms";
      el.style.left=(dstRect.left+dstRect.width/2-11)+"px";
      el.style.top=(dstRect.top+dstRect.height/2-11)+"px";
      el.style.opacity="0";
      el.style.transform="scale(0.3)";
    });
  });
  setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},450);
}

function actualizarBadge(){
  var tot=CARRITO.reduce(function(s,i){return s+i.cant;},0);
  var cb=document.getElementById("cbadge");
  if(cb){cb.style.display=tot>0?"flex":"none";cb.textContent=tot>9?"9+":tot;}
  var bar=document.getElementById("cart-bar");
  if(bar)bar.style.display="none"; // barra amarilla inferior desactivada
}

function scrollToConfirm(){
  var el=document.getElementById("confirmar-pedido");
  if(el)el.scrollIntoView({behavior:"smooth"});
}

// ════════════════════ CARRITO ════════════════════
function renderCarrito(){
  actualizarBadge();
  // Preservar selección de pago/entrega entre re-renders
  var prevPago=(document.getElementById("cart-pago")||{}).value||"";
  var prevModo=(document.getElementById("cart-modo")||{}).value||"";
  var prevEst=(document.getElementById("cart-est")||{}).value||"";
  var prevNotas=(document.getElementById("cart-notas")||{}).value||"";
  var cont=document.getElementById("cart-lista");
  var res=document.getElementById("cart-resumen");
  if(!cont||!res)return;
  renderBorradores();
  if(!CARRITO.length){
    cont.innerHTML='<div class="cvacio"><div class="ico cvacio-emoji">🛒</div><p style="font-size:17px;font-weight:800;color:var(--g4)">Tu carrito está vacío</p><p style="font-size:13px;color:var(--g3);margin-top:6px;max-width:260px;margin-left:auto;margin-right:auto;line-height:1.5">¡Empieza a armar tu pedido y suma puntos en cada compra! 🏆</p><button class="btn btn-p" style="margin-top:18px" onclick="irTab(\'catalogo\')">Explorar catálogo</button></div>';
    res.innerHTML="";
    return;
  }
  var subtotal=0,ptsTotal=0;
  var omitidos=[];
  var html=CARRITO.map(function(it){
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p)return"";
    if(p.ago){omitidos.push(p.nm);return"";}
    var rv=precioConVolumen(p,it.cant);
    var pr=rv.precio, total=pr*it.cant;
    var pts=calcPuntos(pr,p.costo)*it.cant;
    subtotal+=total; ptsTotal+=pts;
    var sig=siguienteNivel(p,it.cant);
    var sigHtml=sig?'<div class="prx-sig">+'+sig.falta+' más → −'+sig.pct+'% adicional</div>':"";
    var descLineas='';
    if(rv.descBase>0)descLineas+='<div class="desc-linea desc-pref">−'+rv.descBase.toFixed(1)+'% precio preferencial</div>';
    if(rv.descVol>0)descLineas+='<div class="desc-linea desc-vol">−'+rv.descVol.toFixed(1)+'% por volumen</div>';
    if(rv.descPct>0){
      var totalDesc=parseFloat(((p.pv-pr)*it.cant).toFixed(2));
      descLineas+='<div class="desc-total-linea">💰 Ahorras '+fmt$(totalDesc)+' en este item</div>';
    }
    var stockWarn=(p.stock<=20&&p.stock>0)?'<div class="stock-warn">⚠️ Quedan pocas unidades ('+p.stock+')</div>':"";
    return '<div class="item" data-cart-id="'+it.id+'">'+
      '<div class="item-i">'+
        '<div class="item-nm">'+escHtml(p.nm)+'</div>'+
        '<div class="item-pr">'+
          '<span class="prx-vitrina">'+fmt$(p.pv)+'</span> → <span class="prx-final">'+fmt$(pr)+'/u</span>'+
          ' <span class="pts-badge">🏆 '+fmtPts(pts)+' pts</span>'+
        '</div>'+
        descLineas+
        sigHtml+
        stockWarn+
      '</div>'+
      '<div class="qty">'+
        '<button class="qb" onclick="cambiarCant(\''+it.id+'\',-1)"'+(it.cant===0?' disabled style="opacity:.3;pointer-events:none"':'')+'>−</button>'+
        '<input class="qty-cart-inp" type="number" min="0"'+(p.stock!=null?' max="'+p.stock+'"':'')+' value="'+it.cant+'" onchange="setCantCarrito(\''+it.id+'\',this.value)" onclick="this.select()">'+
        '<button class="qb" onclick="cambiarCant(\''+it.id+'\',1)">+</button>'+
      '</div>'+
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">'+
        '<span class="item-t">'+fmt$(total)+'</span>'+
        '<button class="brm" onclick="quitarItem(\''+it.id+'\')">🗑</button>'+
      '</div>'+
    '</div>';
  }).join("");
  if(omitidos.length)html='<div style="background:var(--amarc);border:1.5px solid var(--amar);border-radius:10px;padding:10px 14px;margin-bottom:10px;font-size:12px;color:var(--amar)">⚠️ '+omitidos.length+' productos agotado(s) fueron omitidos: '+omitidos.map(escHtml).join(", ")+'</div>'+html;
  cont.innerHTML=html;
  activarSwipeCarrito();
  var iva=parseFloat((subtotal*IVA).toFixed(2));
  var total=parseFloat((subtotal+iva).toFixed(2));

  // Opciones de pago con cheque unificado
  var opcionesPago=[
    {v:"Efectivo",l:"Efectivo"},
    {v:"Transferencia",l:"Transferencia bancaria"},
    {v:"Cheque / Crédito 30 días",l:"Cheque / Crédito 30 días — válido únicamente con cheque a la fecha"},
    {v:"Cheque / Crédito 60 días",l:"Cheque / Crédito 60 días — válido únicamente con cheque a la fecha"},
    {v:"Cheque / Crédito 90 días",l:"Cheque / Crédito 90 días — válido únicamente con cheque a la fecha"},
  ];

  // Calcular ahorro total
  var ahorroTotal=0;
  CARRITO.forEach(function(it){
    var p2=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p2||p2.ago)return;
    var rv2=precioConVolumen(p2,it.cant);
    ahorroTotal+=(p2.pv-rv2.precio)*it.cant;
  });
  var ahorroHtml=ahorroTotal>0.005?'<div class="ahorro-carrito">💰 Estás ahorrando <strong>'+fmt$(ahorroTotal)+'</strong> en este pedido</div>':"";
  var ptsCarritoHtml='<div class="pts-carrito">🏆 Ganarás <strong>'+fmtPts(ptsTotal)+' pts</strong> con este pedido</div>';

  res.innerHTML='<div class="resumen">'+
    '<div class="rrow"><span>Subtotal</span><span>'+fmt$(subtotal)+'</span></div>'+
    '<div class="rrow"><span>IVA 15%</span><span>'+fmt$(iva)+'</span></div>'+
    '<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(total)+'</span></div>'+
    '<div style="font-size:10px;color:var(--g3);padding:6px 0 0;font-style:italic">* Los puntos se confirman al recibir tu pedido</div>'+
    ahorroHtml+
    ptsCarritoHtml+
    '</div>'+
    '<div style="margin-top:14px">'+
      '<label class="form-label">Forma de pago</label>'+
      '<select class="form-select" id="cart-pago" onchange="validarConfirmar()">'+
        '<option value="" disabled selected>Seleccionar...</option>'+
        opcionesPago.map(function(o){return'<option value="'+o.v+'">'+o.l+'</option>';}).join("")+
      '</select>'+
      '<label class="form-label">Modo de entrega</label>'+
      '<select class="form-select" id="cart-modo" onchange="renderModoEntrega();validarConfirmar()">'+
        '<option value="" disabled selected>Seleccionar...</option>'+
        '<option value="retiro">Retiro en local</option>'+
        '<option value="entrega">Entrega a domicilio</option>'+
      '</select>'+
      '<div id="entrega-extra"></div>'+
      '<label class="form-label">Notas (opcional)</label>'+
      '<input class="form-input" id="cart-notas" placeholder="Observaciones, referencias...">'+
      '<div style="display:flex;gap:8px;margin-bottom:8px">'+
        '<button class="btn btn-s" style="flex:1" onclick="guardarBorrador()">💾 Borrador</button>'+
        '<button class="btn btn-p btn-full" id="confirmar-pedido" style="flex:2;min-height:52px" onclick="confirmarPedido()" disabled>Confirmar pedido</button>'+
      '</div>'+
      '<div id="confirmar-hint" style="font-size:11px;color:var(--g3);text-align:center;font-style:italic">Selecciona forma de pago y modo de entrega para continuar</div>'+
    '</div>';
  // Restaurar selección previa y notas
  if(prevPago){var pe=document.getElementById("cart-pago");if(pe)pe.value=prevPago;}
  if(prevModo){var me=document.getElementById("cart-modo");if(me)me.value=prevModo;}
  if(prevNotas){var ne=document.getElementById("cart-notas");if(ne)ne.value=prevNotas;}
  renderModoEntrega();
  if(prevEst){var ee=document.getElementById("cart-est");if(ee){ee.value=prevEst;var box=document.getElementById("nueva-dir-box");if(box)box.style.display=(prevEst==="nuevo")?"block":"none";}}
  validarConfirmar();
}

// Subtotal (sin IVA) del carrito actual, respetando precios y descuentos por volumen
function calcularSubtotalCarrito(){
  return CARRITO.reduce(function(s,i){
    var p=PRODUCTOS.find(function(x){return x.id===i.id;});
    if(!p||p.ago)return s;
    var rv=precioConVolumen(p,i.cant);
    return s+rv.precio*i.cant;
  },0);
}

// Habilita "Confirmar pedido" solo cuando forma de pago y modo de entrega están elegidos
// y, si es entrega a domicilio, cuando se alcanza el monto mínimo del distribuidor.
function validarConfirmar(){
  var pago=document.getElementById("cart-pago");
  var modo=document.getElementById("cart-modo");
  var btn=document.getElementById("confirmar-pedido");
  var hint=document.getElementById("confirmar-hint");
  if(!btn)return;
  var ok=!!(pago&&pago.value&&modo&&modo.value);
  // Validación de monto mínimo para entrega a domicilio
  var minMsg="";
  if(modo&&modo.value==="entrega"){
    var _minEnt=(USER&&USER.entrega&&USER.entrega.montoMin)||30;
    var subtotal=calcularSubtotalCarrito();
    if(subtotal<_minEnt){
      ok=false;
      minMsg="⚠️ Pedido mínimo para entrega a domicilio: "+fmt$(_minEnt);
    }
  }
  btn.disabled=!ok;
  btn.classList.toggle("btn-disabled",!ok);
  if(hint){
    if(minMsg){hint.style.display="block";hint.textContent=minMsg;hint.style.color="var(--rojo)";}
    else if(!ok){hint.style.display="block";hint.textContent="Selecciona forma de pago y modo de entrega para continuar";hint.style.color="";}
    else{hint.style.display="none";}
  }
}

// Editar cantidad directamente en carrito
function setCantCarrito(id, val){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p)return;
  var n=parseInt(val,10)||0;
  if(n<0)n=0;
  if(p.stock!=null&&n>p.stock){n=p.stock;toast("⚠️ Solo hay "+p.stock+" unidades disponibles");}
  if(n===0){
    CARRITO=CARRITO.filter(function(i){return i.id!==id;});
    guardarCarrito();
    renderCarrito();
    actualizarBadge();
    return;
  }
  var minCant=p.cantMin||1;
  if(n<minCant){n=minCant;toast("⚠️ Cantidad mínima para "+p.nm+": "+minCant+" unidades");}
  var it=CARRITO.find(function(i){return i.id===id;});
  if(it)it.cant=n;
  guardarCarrito();
  renderCarrito();
  actualizarBadge();
}

function renderModoEntrega(){
  var sel=document.getElementById("cart-modo");
  var ex=document.getElementById("entrega-extra");
  if(!sel||!ex)return;
  if(sel.value==="entrega"){
    var establecs=USER.establecimientos||[];
    var ests=establecs.map(function(e,i){return'<option value="'+i+'">'+escHtml((e.nm||"")+" — "+(e.dir||""))+'</option>';}).join("");
    var sinDirs=establecs.length===0;
    var hoy=new Date().toISOString().split("T")[0];
    ex.innerHTML='<label class="form-label">Dirección de entrega</label>'+
      (sinDirs?'':('<select class="form-select" id="cart-est">'+ests+'<option value="nuevo">+ Agregar nueva dirección</option></select>'))+
      '<div id="nueva-dir-box" style="'+(sinDirs?'':'display:none')+'">'+
        '<label class="form-label">Nombre del local</label>'+
        '<input class="form-input" id="nueva-dir-nm" placeholder="Ej: Mi local principal">'+
        '<label class="form-label">Dirección completa</label>'+
        '<input class="form-input" id="nueva-dir-dir" placeholder="Av. principal y calle, referencia...">'+
      '</div>'+
      '<label class="form-label">Fecha de entrega (opcional)</label>'+
      '<select class="form-select" id="cart-fecha-opt" onchange="toggleFechaEntrega()">'+
        '<option value="">Sin preferencia de fecha</option>'+
        '<option value="especifica">Indicar fecha</option>'+
      '</select>'+
      '<div id="fecha-input-box" style="display:none">'+
        '<input class="form-input" id="cart-fecha" type="date" min="'+hoy+'" onclick="this.showPicker&&this.showPicker()">'+
      '</div>'+
      '<label class="form-label">Horario preferido (opcional)</label>'+
      '<select class="form-select" id="cart-hora">'+
        '<option value="">Sin preferencia</option>'+
        '<option value="08:00 - 12:00">08:00 - 12:00</option>'+
        '<option value="13:00 - 17:00">13:00 - 17:00</option>'+
      '</select>';
    // Listener para nueva dirección (solo si hay establecimientos existentes)
    if(!sinDirs){
      var estSel=document.getElementById("cart-est");
      if(estSel)estSel.addEventListener("change",function(){
        var box=document.getElementById("nueva-dir-box");
        if(box)box.style.display=(this.value==="nuevo")?"block":"none";
      });
    }
  } else if(sel.value==="retiro"){
    ex.innerHTML='<p style="font-size:12px;color:var(--g3);margin-bottom:12px">📍 Portete #3007 y Gallegos Lara, Guayaquil</p>';
  } else {
    ex.innerHTML="";
  }
}

function toggleFechaEntrega(){
  var sel=document.getElementById("cart-fecha-opt");
  var box=document.getElementById("fecha-input-box");
  if(!sel||!box)return;
  box.style.display=(sel.value==="especifica")?"block":"none";
}

function cambiarCant(id,d){
  var it=CARRITO.find(function(i){return i.id===id;});
  if(!it)return;
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(d>0){
    if(p&&p.stock!=null&&it.cant>=p.stock){toast("⚠️ Solo hay "+p.stock+" unidades disponibles");return;}
  }
  it.cant+=d;
  if(it.cant<=0){CARRITO=CARRITO.filter(function(i){return i.id!==id;});guardarCarrito();renderCarrito();actualizarBadge();return;}
  // Al bajar por debajo del mínimo del producto, ajustar al mínimo (o quitar si llega a 0)
  if(p&&d<0&&it.cant>0){
    var min=cantMinProducto(p);
    if(it.cant<min){
      if(min<=(p.stock!=null?p.stock:min)){it.cant=min;toast("⚠️ Mínimo "+min+" unidades de "+p.nm);}
    }
  }
  guardarCarrito(); renderCarrito(); actualizarBadge();
}
function quitarItem(id){
  CARRITO=CARRITO.filter(function(i){return i.id!==id;});
  guardarCarrito(); renderCarrito(); actualizarBadge();
  toast("🗑 Producto eliminado");
}

// ════════════════════ BORRADORES ════════════════════
function _leerBorradores(){try{return JSON.parse(localStorage.getItem("pyro_borradores_"+(USER&&USER.ruc||"x"))||"[]");}catch(e){return[];}}
function guardarBorrador(){
  if(!USER||!USER.ruc)return;
  if(!CARRITO.length){toast("⚠️ El carrito está vacío");return;}
  var borradores=_leerBorradores();
  if(borradores.length>=3){toast("⚠️ Máximo 3 borradores. Elimina uno primero.");return;}
  borradores.push({ts:Date.now(),items:JSON.parse(JSON.stringify(CARRITO))});
  try{localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));}catch(e){avisarStorage();return;}
  toast("💾 Borrador guardado");
  renderBorradores();
}
function renderBorradores(){
  var bp=document.getElementById("borradores-panel");
  if(!bp)return;
  if(!USER||!USER.ruc){bp.innerHTML="";return;}
  var borradores=_leerBorradores();
  if(!borradores.length){bp.innerHTML="";return;}
  bp.innerHTML='<div style="margin-bottom:10px"><div class="form-label">Borradores guardados</div>'+
    borradores.map(function(b,i){
      var d=new Date(b.ts);
      var label=b.nombre==="Autoguardado"?"💾 Autoguardado":"Borrador "+(i+1);
      return '<div class="borrador-item">'+
        '<span style="font-size:12px">'+label+' — '+d.toLocaleDateString("es-EC")+'</span>'+
        '<div style="display:flex;gap:6px">'+
          '<button class="btn btn-sm btn-p" onclick="cargarBorrador('+i+')">Cargar</button>'+
          '<button class="btn btn-sm btn-s" onclick="eliminarBorrador('+i+')">✕</button>'+
        '</div>'+
      '</div>';
    }).join("")+
  '</div>';
}
function cargarBorrador(i){
  if(!USER||!USER.ruc)return;
  var borradores=_leerBorradores();
  if(!borradores[i])return;
  function _cargar(){
    var items=JSON.parse(JSON.stringify(borradores[i].items));
    var faltantes=items.filter(function(it){return!PRODUCTOS.find(function(x){return x.id===it.id;});});
    CARRITO=items.filter(function(it){return!!PRODUCTOS.find(function(x){return x.id===it.id;});});
    guardarCarrito();renderCarrito();actualizarBadge();
    if(faltantes.length)toast("⚠️ "+faltantes.length+" producto(s) del borrador ya no están disponibles y fueron omitidos.");
    else toast("✏️ Borrador cargado.");
  }
  if(CARRITO.length){confirmar("¿Reemplazar el carrito actual con este borrador?",_cargar);}
  else{_cargar();}
}
function eliminarBorrador(i){
  if(!USER||!USER.ruc)return;
  var borradores=_leerBorradores();
  borradores.splice(i,1);
  try{localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));}catch(e){avisarStorage();}
  renderBorradores(); toast("Borrador eliminado");
}

// ════════════════════ CONFIRMAR PEDIDO ════════════════════
function confirmarPedido(){
  var btnConf=document.getElementById("confirmar-pedido");
  if(btnConf)btnConf.disabled=true;
  var hayItems=CARRITO.some(function(i){var p=PRODUCTOS.find(function(x){return x.id===i.id;});return p&&!p.ago&&i.cant>0;});
  if(!hayItems){toast("⚠️ Tu carrito está vacío");if(btnConf)btnConf.disabled=false;return;}

  // Validar cantidades mínimas antes de continuar
  var errMin=null;
  CARRITO.forEach(function(it){
    if(errMin)return;
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p||p.ago)return;
    var msg=validarCantMinMsg(p,it.cant);
    if(msg)errMin=msg;
  });
  if(errMin){toast("⚠️ "+errMin);if(btnConf)btnConf.disabled=false;return;}

  var pagoSel=document.getElementById("cart-pago");
  var modoSel=document.getElementById("cart-modo");
  if(!pagoSel||!pagoSel.value){toast("⚠️ Selecciona una forma de pago");if(btnConf)btnConf.disabled=false;return;}
  if(!modoSel||!modoSel.value){toast("⚠️ Selecciona un modo de entrega");if(btnConf)btnConf.disabled=false;return;}

  var modo=document.getElementById("cart-modo").value;
  // Validar monto mínimo para entrega a domicilio
  if(modo==="entrega"){
    var _minEnt2=(USER&&USER.entrega&&USER.entrega.montoMin)||30;
    if(calcularSubtotalCarrito()<_minEnt2){
      toast("⚠️ Pedido mínimo para entrega a domicilio: "+fmt$(_minEnt2));
      if(btnConf)btnConf.disabled=false;
      return;
    }
  }
  // Validar dirección si es entrega
  if(modo==="entrega"){
    var estSel=document.getElementById("cart-est");
    // "Dirección nueva" cuando: se eligió esa opción, O el cliente no tenía
    // direcciones guardadas (sin selector, el formulario de dirección va directo).
    var usarNueva=(estSel&&estSel.value==="nuevo")||(!estSel&&!!document.getElementById("nueva-dir-nm"));
    if(usarNueva){
      var nmDir=document.getElementById("nueva-dir-nm");
      var dirDir=document.getElementById("nueva-dir-dir");
      if(!nmDir||!nmDir.value.trim()||!dirDir||!dirDir.value.trim()){
        toast("⚠️ Ingresa el nombre y dirección del local de entrega");
        if(btnConf)btnConf.disabled=false;
        return;
      }
      // Guardar nueva dirección en el distribuidor
      if(!USER.establecimientos)USER.establecimientos=[];
      USER.establecimientos.push({nm:nmDir.value.trim(),dir:dirDir.value.trim(),obs:""});
      guardarDistribuidores();
    }
  }

  var pago=document.getElementById("cart-pago").value;
  var notas=document.getElementById("cart-notas").value;
  var subtotal=0,ptsTotal=0;
  var items=[];
  var stockError=[];
  CARRITO.forEach(function(it){
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p||p.ago||it.cant<=0)return;
    if(p.stock!=null&&it.cant>p.stock){stockError.push(p.nm+" (pediste "+it.cant+", hay "+p.stock+")");return;}
    var rv=precioConVolumen(p,it.cant);
    var pr=rv.precio;
    var pts=calcPuntos(pr,p.costo)*it.cant;
    subtotal+=pr*it.cant; ptsTotal+=pts;
    items.push({id:p.id,nm:p.nm,cant:it.cant,pv:p.pv,pr:pr,descPct:rv.descPct,pts:pts,costo:p.costo||0});
  });
  if(stockError.length){if(btnConf)btnConf.disabled=false;toast("⚠️ Stock insuficiente: "+stockError.join(", "));return;}
  if(!items.length){if(btnConf)btnConf.disabled=false;toast("⚠️ No hay productos válidos en el carrito");return;}
  var iva=parseFloat((subtotal*IVA).toFixed(2)), total=parseFloat((subtotal+iva).toFixed(2));
  // Aserción de negocio: total debe ser subtotal + IVA dentro de 1 centavo
  if(Math.abs(total-subtotal-iva)>0.02){console.error("[Negocio] total inconsistente: subtotal="+subtotal+" iva="+iva+" total="+total);total=parseFloat((subtotal+iva).toFixed(2));}
  var pid="P"+Date.now()+Math.floor(Math.random()*9000+1000);
  var now=new Date();
  var entregaInfo={};
  if(modo==="entrega"){
    var estSel2=document.getElementById("cart-est");
    // Si se acaba de agregar una dirección nueva, es la última del array
    var idx;
    if(estSel2&&estSel2.value==="nuevo"){idx=(USER.establecimientos||[]).length-1;}
    else{idx=estSel2?parseInt(estSel2.value,10):0;if(isNaN(idx))idx=0;}
    var est=USER.establecimientos&&USER.establecimientos[idx]?USER.establecimientos[idx]:null;
    var fechaOpt=document.getElementById("cart-fecha-opt");
    var fechaVal=fechaOpt&&fechaOpt.value==="especifica"&&document.getElementById("cart-fecha")?document.getElementById("cart-fecha").value:"";
    var horaVal=document.getElementById("cart-hora")?document.getElementById("cart-hora").value:"";
    entregaInfo={establecimiento:est,fecha:fechaVal,hora:horaVal};
  }
  var ped={id:pid,ruc:USER.ruc,razon:USER.razon,fecha:now.toLocaleDateString("es-EC"),fechaISO:now.toISOString(),pago:pago,modo:modo,notas:notas,items:items,subtotal:subtotal,iva:iva,total:total,puntos:ptsTotal,estado:"pendiente",entregaInfo:entregaInfo,esCanje:false};
  PEDIDOS.push(ped);
  if(navigator.vibrate)navigator.vibrate([30,20,60]);
  guardarPedidos();
  if(navigator.onLine){
    sincronizarConSheets(ped, false);
  } else {
    var colaOff=cargarColaOffline();
    if(!colaOff.some(function(x){return x===pid;}))colaOff.push(pid);
    guardarColaOffline(colaOff);
  }
  registrarLogPuntos(USER.ruc,"pendiente",ptsTotal,"Pedido #"+pid);
  // Re-leer stock desde localStorage en el momento del commit para detectar cambios
  // de otra pestaña o dispositivo que haya modificado el stock entre la validación y el commit.
  cargarStock();
  var stockRaceError=[];
  items.forEach(function(it){
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p)return;
    if(p.stock!=null&&it.cant>p.stock){stockRaceError.push(p.nm+" (disponible: "+p.stock+")");return;}
    if(p.stock!=null){p.stock=Math.max(0,p.stock-it.cant);if(p.stock===0)p.ago=true;}
  });
  if(stockRaceError.length){
    // Revertir: sacar el pedido que ya fue pusheado y restaurar estado
    PEDIDOS=PEDIDOS.filter(function(x){return x.id!==pid;});
    guardarPedidos();
    CARRITO=items.map(function(it){return{id:it.id,cant:it.cant};});
    guardarCarrito();actualizarBadge();
    if(btnConf)btnConf.disabled=false;
    toast("⚠️ Stock cambió mientras confirmabas: "+stockRaceError.join(", "));
    return;
  }
  guardarStock();
  CARRITO=[];
  guardarCarrito();
  actualizarBadge();
  if(navigator.onLine){
    mostrarExito("¡Pedido confirmado!","#"+pid+" · "+fmtPts(ptsTotal)+" pts pendientes de confirmar");
  } else {
    mostrarExito("📦 Pedido guardado","#"+pid+" · Se enviará cuando vuelva la conexión");
  }
  setTimeout(function(){irTab("historial");},950);
}

// ════════════════════ HISTORIAL ════════════════════
var H_FILTRO="todos";
function setHFiltro(f,btn){
  H_FILTRO=f;
  document.querySelectorAll(".hfiltros .fbtn").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  renderHistorial();
}

function estadoLabel(e){
  var m={
    pendiente:"⏳ Pendiente",
    en_proceso:"🚚 En proceso",
    autorizado:"🚚 En proceso",
    entrega:"🚚 En proceso",
    entregado:"📦 Entregado",
    facturado:"🧾 Facturado",
    finalizado:"✔️ Finalizado",
    cancelado:"✕ Cancelado"
  };
  return m[e]||e;
}
function estadoClass(e){
  if(e==="pendiente")return"est-pendiente";
  if(e==="en_proceso"||e==="autorizado"||e==="entrega")return"est-en-proceso";
  if(e==="entregado"||e==="facturado"||e==="finalizado")return"est-finalizado";
  if(e==="cancelado")return"est-cancelado";
  return"est-pendiente";
}

function toggleFechasFiltro(){
  var wrap=document.getElementById("hfechas-wrap");
  if(!wrap)return;
  wrap.classList.toggle("open");
}
function aplicarFiltroFecha(){
  var d=document.getElementById("h-desde"),h=document.getElementById("h-hasta");
  H_DESDE=d?d.value:null;
  H_HASTA=h?h.value:null;
  renderHistorial();
}
function limpiarFiltroFecha(){
  H_DESDE=null; H_HASTA=null;
  var d=document.getElementById("h-desde"),h=document.getElementById("h-hasta");
  if(d)d.value=""; if(h)h.value="";
  renderHistorial();
}

var H_BUSQ="";
var H_FECHA_RAPIDA="todo";
function filtrarHistorial(){
  H_BUSQ=(document.getElementById("hist-busq")||{value:""}).value||"";
  renderHistorial();
}
function setHFiltroEstado(f){
  H_FILTRO=f;
  renderHistorial();
}
function setHFechaRapida(f){
  H_FECHA_RAPIDA=f;
  renderHistorial();
}
function renderHistorial(){
  var mp=misPedidos().slice().reverse();
  // Filtro de estado
  if(H_FILTRO==="pendiente")mp=mp.filter(function(p){return p.estado==="pendiente";});
  else if(H_FILTRO==="proceso")mp=mp.filter(function(p){return["en_proceso","autorizado","entrega","facturado"].indexOf(p.estado)!==-1;});
  else if(H_FILTRO==="finalizado")mp=mp.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";});
  else if(H_FILTRO==="cancelado")mp=mp.filter(function(p){return p.estado==="cancelado";});
  // Filtro de fecha rápida
  var ahora3=new Date();
  if(H_FECHA_RAPIDA==="mes"){
    var inicioMes=new Date(ahora3.getFullYear(),ahora3.getMonth(),1);
    mp=mp.filter(function(p){return parseFechaPed(p)>=inicioMes;});
  } else if(H_FECHA_RAPIDA==="3meses"){
    var hace3=new Date(ahora3);hace3.setMonth(hace3.getMonth()-3);
    mp=mp.filter(function(p){return parseFechaPed(p)>=hace3;});
  }
  // Filtro de fecha manual
  if(H_DESDE){var d0=new Date(H_DESDE+"T00:00:00");mp=mp.filter(function(p){return parseFechaPed(p)>=d0;});}
  if(H_HASTA){var d1=new Date(H_HASTA+"T23:59:59");mp=mp.filter(function(p){return parseFechaPed(p)<=d1;});}
  // Filtro de búsqueda por texto
  var busqN=(H_BUSQ||"").toLowerCase().trim();
  if(busqN){
    mp=mp.filter(function(p){
      if((p.id||"").toLowerCase().indexOf(busqN)!==-1)return true;
      if((p.estado||"").toLowerCase().indexOf(busqN)!==-1)return true;
      if(p.items&&p.items.some(function(it){return(it.nm||"").toLowerCase().indexOf(busqN)!==-1||(it.id||"").toLowerCase().indexOf(busqN)!==-1;}))return true;
      return false;
    });
  }
  // Toolbar de filtros
  var estadosFiltro=[
    {f:"todos",l:"Todos"},
    {f:"pendiente",l:"⏳ Pendiente"},
    {f:"proceso",l:"🔄 En proceso"},
    {f:"finalizado",l:"✔️ Finalizado"},
    {f:"cancelado",l:"✕ Cancelado"}
  ];
  var fechasFiltro=[
    {f:"todo",l:"Todo"},
    {f:"mes",l:"Este mes"},
    {f:"3meses",l:"Últimos 3 meses"}
  ];
  var toolbarHtml=
    '<div style="margin-bottom:10px">'+
      '<input id="hist-busq" class="form-input" style="font-size:13px;padding:8px 12px;margin-bottom:8px" placeholder="🔍 Buscar por pedido, producto o estado..." value="'+escHtml(H_BUSQ)+'" oninput="filtrarHistorial()">'+
      '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px">'+
        estadosFiltro.map(function(o){
          return '<button class="fbtn'+(H_FILTRO===o.f?" active":"")+'" onclick="setHFiltroEstado(\''+o.f+'\')" style="font-size:11px;padding:4px 10px">'+o.l+'</button>';
        }).join("")+
      '</div>'+
      '<div style="display:flex;flex-wrap:wrap;gap:4px">'+
        fechasFiltro.map(function(o){
          return '<button class="fbtn'+(H_FECHA_RAPIDA===o.f?" active":"")+'" onclick="setHFechaRapida(\''+o.f+'\')" style="font-size:11px;padding:4px 10px">'+o.l+'</button>';
        }).join("")+
      '</div>'+
    '</div>';
  var histEl=document.getElementById("hist-lista");
  if(!histEl)return;
  var pedidosHtml=mp.length?mp.map(function(p){
    var confirmados=(p.estado==="entregado"||p.estado==="finalizado");
    var ptsHtml=p.esBienvenida?
      '<div class="ped-pts" style="color:var(--oro)">🎁 Regalo de bienvenida</div>'+
      '<div style="font-size:11px;color:var(--g3);margin-top:3px">¡Gracias por unirte! Coordinaremos tu combo con tu primer pedido.</div>':
      p.esCanje?
      '<div class="ped-pts">🎁 Canjeaste '+fmtPts(p.canjePts)+' pts</div>'+
      '<div style="font-size:11px;color:var(--g3);margin-top:3px">Tu regalo será entregado en 0 a 7 días laborables.</div>':
      (confirmados
        ?'<div class="ped-pts" style="color:var(--verde)">🏆 '+fmtPts(p.puntos||0)+' puntos acreditados</div>'
        :(p.estado==="facturado"
          ?'<div class="ped-pts" style="color:var(--amar)">⏳ '+fmtPts(p.puntos||0)+' puntos confirmados al entregar</div>'
          :(p.estado!=="cancelado"?'<div class="ped-pts" style="color:var(--amar)">⏳ '+fmtPts(p.puntos||0)+' puntos pendientes</div>':'')));
    var califShow=p.calificacion?'<div style="font-size:11px;color:var(--g3);margin-top:4px">Calificación: '+"⭐".repeat(Math.max(0,Math.min(5,p.calificacion.estrellas||0)))+'</div>':"";
    var accBtns='<button class="btn btn-sm btn-s" onclick="verDetallePed(\''+p.id+'\')">Ver detalle</button>';
    if(!p.esCanje){
      if(p.estado==="pendiente"){
        accBtns+='<button class="btn btn-sm btn-s" onclick="editarPedido(\''+p.id+'\')">✏️ Editar</button>';
        accBtns+='<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border:1.5px solid var(--rojo)" onclick="cancelarPedido(\''+p.id+'\')">Cancelar</button>';
      } else if(p.estado==="finalizado"){
        accBtns+='<button class="btn btn-sm btn-s" onclick="repetirPedido(\''+p.id+'\')">↩ Repetir</button>';
        if(!p.calificacion)accBtns+='<button class="btn btn-sm btn-s" onclick="abrirCalif(\''+p.id+'\')">⭐ Calificar</button>';
      } else if(p.estado==="cancelado"){
        accBtns+='<button class="btn btn-sm btn-s" onclick="repetirPedido(\''+p.id+'\')">↩ Volver a solicitar</button>';
      }
    }
    var bordCol={"est-pendiente":"var(--amar)","est-en-proceso":"var(--azul)","est-finalizado":"var(--verde)","est-cancelado":"var(--g3)"}[estadoClass(p.estado)]||"var(--g2)";
    return '<div class="ped" style="border-left:4px solid '+bordCol+'">'+
      '<div class="ped-top"><div><div class="ped-id">'+(p.esBienvenida?"🎁 Bienvenida":(p.esCanje?"Canje":"Pedido"))+' #'+p.id+'</div><div style="font-size:12px;color:var(--g3)">'+p.fecha+'</div></div>'+
      '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabel(p.estado)+'</span></div>'+
      '<div class="ped-total">'+fmt$(p.total)+'</div>'+
      (p.esCanje?'<div class="ped-items">🎁 '+escHtml(p.canjeNm)+'</div>':'<div class="ped-items">'+(p.items?p.items.length:0)+' productos · '+escHtml(p.pago)+'</div>')+
      ptsHtml+califShow+
      '<div class="ped-acc">'+accBtns+'</div>'+
    '</div>';
  }).join(""):'<div class="empty"><div class="ico">📭</div><p>No hay pedidos en esta categoría</p></div>';
  histEl.innerHTML=toolbarHtml+pedidosHtml;
}

function cancelarPedido(pid){
  confirmar("¿Cancelar el pedido #"+pid+"? Esta acción no se puede deshacer.",function(){
    var p=PEDIDOS.find(function(x){return x.id===pid;});
    if(p){
      var estadoViejo=p.estado;
      p.estado="cancelado";
      if(p.items&&estadoViejo!=="cancelado"){
        p.items.forEach(function(it){
          var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
          if(prod){if(prod.stock!=null)prod.stock+=it.cant;prod.ago=false;}
        });
        guardarStock();
      }
      // Solo revertir puntos si ya estaban confirmados (entregado/finalizado)
      var eraConfirmado=estadoViejo==="entregado"||estadoViejo==="finalizado";
      if(!p.esCanje&&(p.puntos||0)>0&&eraConfirmado)registrarLogPuntos(p.ruc,"revertido",p.puntos,"Pedido #"+pid+" cancelado");
      if(p.esCanje&&(p.canjePts||0)>0&&estadoViejo!=="cancelado")registrarLogPuntos(p.ruc,"revertido",p.canjePts,"Canje cancelado: "+(p.canjeNm||pid));
    }
    guardarPedidos();
    if(p)sincronizarConSheets(p,true);
    renderHistorial(); toast("✕ Pedido cancelado");
  });
}

// Marca un pedido como eliminado localmente para que el sondeo de la nube no lo resucite
function marcarPedidoEliminado(pid){
  try{
    var t=JSON.parse(localStorage.getItem("pyro_ped_eliminados")||"[]");
    if(t.indexOf(pid)===-1){t.push(pid);if(t.length>200)t=t.slice(-200);localStorage.setItem("pyro_ped_eliminados",JSON.stringify(t));}
  }catch(e){}
}

function editarPedido(pid){
  confirmar("¿Devolver el pedido #"+pid+" al carrito para editarlo?",function(){
    var p=PEDIDOS.find(function(x){return x.id===pid;});
    if(!p||!p.items)return;
    if(p.estado!=="pendiente"){toast("⚠️ Solo se pueden editar pedidos pendientes");return;}
    p.items.forEach(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      if(prod){if(prod.stock!=null)prod.stock+=it.cant;prod.ago=false;}
    });
    guardarStock();
    p.items.forEach(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      if(!prod)return;
      var exist=CARRITO.find(function(c){return c.id===it.id;});
      if(exist)exist.cant+=it.cant;
      else CARRITO.push({id:it.id,cant:it.cant});
    });
    PEDIDOS=PEDIDOS.filter(function(x){return x.id!==pid;});
    guardarPedidos(); guardarCarrito(); actualizarBadge();
    // Solo revertir puntos confirmados (el botón Editar solo está en pendiente, pero por seguridad)
    var eraConfirmadoEdit=p.estado==="entregado"||p.estado==="finalizado";
    if((p.puntos||0)>0&&eraConfirmadoEdit)registrarLogPuntos(p.ruc,"revertido",p.puntos,"Pedido #"+pid+" devuelto al carrito para editar");
    marcarPedidoEliminado(pid);
    // En la nube queda como cancelado (el pedido nuevo se creará con otro número)
    var copia=null;try{copia=JSON.parse(JSON.stringify(p));}catch(e){}
    if(copia){copia.estado="cancelado";sincronizarConSheets(copia,true);}
    irTab("carrito");
    toast("✏️ Pedido #"+pid+" devuelto al carrito.");
  });
}

function repetirPedido(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p||!p.items)return;
  // Cerrar modal previo si existe
  var prev=document.getElementById("repetir-ped-ov");
  if(prev)prev.remove();
  // Construir items para el modal
  var itemsHtml=p.items.map(function(it,idx){
    var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
    var agotado=!prod||prod.ago;
    var bgColor=agotado?"var(--g1,#f5f5f5)":"var(--blanco,#fff)";
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--g2,#eee);opacity:'+(agotado?'.5':'1')+';background:'+bgColor+';border-radius:8px;margin-bottom:4px;padding:10px 12px">'+
      '<div style="flex:1;min-width:0">'+
        '<div style="font-size:13px;font-weight:600;margin-bottom:2px">'+escHtml(it.nm)+'</div>'+
        (agotado?'<span style="font-size:11px;color:var(--rojo,#e03c31);font-weight:700">⚠️ Sin stock</span>':
          '<span style="font-size:11px;color:var(--verde,#27ae60)">✓ Disponible ('+(prod&&prod.stock!=null?prod.stock+' en stock':'sin límite')+')</span>')+
      '</div>'+
      '<input type="number" id="rep-cant-'+idx+'" min="0"'+(prod&&prod.stock!=null?' max="'+prod.stock+'"':'')+' value="'+(agotado?0:it.cant)+'" '+(agotado?'disabled':'')+
        ' style="width:64px;padding:6px 8px;border:1.5px solid var(--g2,#ddd);border-radius:10px;font-size:14px;font-weight:700;text-align:center;background:'+(agotado?"var(--g1,#f5f5f5)":"var(--blanco,#fff)")+'">'+
    '</div>';
  }).join("");
  var ov=document.createElement("div");
  ov.id="repetir-ped-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,0.8);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto";
  ov.innerHTML=
    '<div style="background:var(--bg,#fff);border-radius:20px;padding:24px 20px;width:100%;max-width:440px;max-height:90vh;overflow-y:auto;box-shadow:0 16px 60px rgba(0,0,0,.5)">'+
      '<div style="font-size:18px;font-weight:800;margin-bottom:4px">↩ Repetir pedido</div>'+
      '<div style="font-size:12px;color:var(--g3);margin-bottom:16px">Ajusta las cantidades y carga al carrito</div>'+
      itemsHtml+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px">'+
        '<button class="btn btn-s" onclick="document.getElementById(\'repetir-ped-ov\').remove()">Cancelar</button>'+
        '<button class="btn btn-p" onclick="confirmarRepetirPedido(\''+pid+'\')">🛒 Cargar al carrito</button>'+
      '</div>'+
    '</div>';
  document.body.appendChild(ov);
}

function confirmarRepetirPedido(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p||!p.items)return;
  var omitidos=[];
  var cargados=0;
  p.items.forEach(function(it,idx){
    var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
    var inp=document.getElementById("rep-cant-"+idx);
    var cant=inp?parseInt(inp.value,10)||0:0;
    if(!prod||prod.ago){omitidos.push(it.nm);return;}
    if(cant<=0)return;
    var exist=CARRITO.find(function(c){return c.id===it.id;});
    var yaEnCarrito=exist?exist.cant:0;
    // No exceder el stock contando lo que ya hay en el carrito
    if(prod.stock!=null&&yaEnCarrito+cant>prod.stock)cant=prod.stock-yaEnCarrito;
    if(cant<=0){omitidos.push(it.nm);return;}
    if(exist)exist.cant+=cant;
    else CARRITO.push({id:it.id,cant:cant});
    cargados++;
  });
  var ov=document.getElementById("repetir-ped-ov");
  if(ov)ov.remove();
  guardarCarrito(); actualizarBadge();
  if(!cargados){toast("⚠️ No se cargaron productos al carrito");return;}
  if(omitidos.length)toast("⚠️ "+omitidos.length+" productos sin stock fueron omitidos");
  else toast("✅ "+cargados+" producto(s) cargados al carrito.");
  irTab("carrito");
}

function verDetallePed(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  var html='<div class="mhandle"></div><h3>Pedido #'+p.id+'</h3>'+
    '<div style="display:flex;justify-content:space-between;margin-bottom:12px">'+
      '<div style="font-size:12px;color:var(--g3)">'+p.fecha+'</div>'+
      '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabel(p.estado)+'</span>'+
    '</div>';
  if(p.items)html+=p.items.map(function(it){
    return '<div class="rrow"><span>'+escHtml(it.nm)+' x'+it.cant+'</span><span>'+fmt$(it.pr*it.cant)+'</span></div>';
  }).join("");
  html+=(p.subtotal!=null&&p.iva!=null?
    '<div class="rrow"><span style="color:var(--g3)">Subtotal</span><span>'+fmt$(p.subtotal)+'</span></div>'+
    '<div class="rrow"><span style="color:var(--g3)">IVA 15%</span><span>'+fmt$(p.iva)+'</span></div>':'')+
  '<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(p.total)+'</span></div>'+
    '<div style="margin-top:12px;font-size:13px;color:var(--g4)">'+
      '<b>Pago:</b> '+escHtml(p.pago)+'<br><b>Modo:</b> '+(p.modo==="retiro"?"Retiro en local":"Entrega a domicilio")+
    '</div>'+
    ((p.estado==="pendiente"&&!p.esCanje)?
      '<div style="margin-top:10px">'+
        '<label class="form-label">Cambiar forma de pago</label>'+
        '<select class="form-select" id="det-pago-sel">'+
          ["Efectivo","Transferencia","Cheque / Crédito 30 días","Cheque / Crédito 60 días","Cheque / Crédito 90 días"].map(function(o){return'<option value="'+o+'"'+(p.pago===o?" selected":"")+'>'+o+'</option>';}).join("")+
        '</select>'+
        '<button class="btn btn-p btn-full" style="margin-top:4px" onclick="guardarPagoCliente(\''+p.id+'\')">Guardar cambios</button>'+
      '</div>':'')+
    ((p.modo==="entrega"&&p.entregaInfo&&p.entregaInfo.establecimiento)?
      '<div style="margin-top:8px;font-size:13px;color:var(--g4)"><b>Entrega a:</b> '+
      escHtml(p.entregaInfo.establecimiento.nm||"")+' — '+escHtml(p.entregaInfo.establecimiento.dir||"")+
      (p.entregaInfo.fecha?'<br><b>Fecha solicitada:</b> '+escHtml(p.entregaInfo.fecha):'')+
      (p.entregaInfo.hora?'<br><b>Horario:</b> '+escHtml(p.entregaInfo.hora):'')+
      '</div>':'')+
    (p.notas?'<div style="margin-top:8px;font-size:13px;color:var(--g4)"><b>Notas:</b> '+escHtml(p.notas)+'</div>':'')+
    (p.puntos&&p.estado!=="cancelado"?'<div style="margin-top:8px;font-size:13px;color:var(--oro);font-weight:700">🏆 '+fmtPts(p.puntos)+' puntos '+((p.estado==="finalizado"||p.estado==="entregado")?"acreditados":p.estado==="facturado"?"confirmados al entregar":"pendientes")+'</div>':'')+
    (p.calificacion?'<div style="margin-top:8px;font-size:13px">Calificación: '+"⭐".repeat(Math.max(0,Math.min(5,p.calificacion.estrellas||0)))+'<br><i>'+escHtml(p.calificacion.comentario||"")+'</i></div>':'')+
    (!p.esCanje?renderTrackingPedido(p.estado):'')+
    ((!p.esCanje&&p.items&&p.items.length)?
      '<button class="btn btn-p btn-full" style="margin-top:16px" onclick="generarProforma(\''+p.id+'\')">📄 Descargar Proforma PDF</button>'+
      (USER&&USER.rol==="impresion"?'<button class="btn btn-s btn-full" style="margin-top:8px" onclick="generarNotaEntrega(\''+p.id+'\')">📋 Nota de entrega</button>':'')+
      (p.azurFactura
        ?'<button class="btn btn-p btn-full" style="margin-top:8px;background:var(--verde)" onclick="descargarFacturaPDF(\''+p.id+'\')">🧾 Descargar Factura PDF</button>'
        :(p.estado==="entregado"?'<button class="btn btn-s btn-full" style="margin-top:8px;opacity:.5" disabled>🧾 Pendiente de facturar</button>':''))
    :'')+
    '<button class="btn btn-s btn-full" style="margin-top:10px" onclick="cerrarModal(\'modal-pedido-det\')">Cerrar</button>';
  document.getElementById("modal-pedido-det-c").innerHTML=html;
  abrir("modal-pedido-det");
}

function guardarPagoCliente(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  var sel=document.getElementById("det-pago-sel");
  if(!p||!sel)return;
  if(p.estado!=="pendiente"){toast("⚠️ Solo se puede cambiar el pago en pedidos pendientes");return;}
  p.pago=sel.value;
  guardarPedidos();
  sincronizarConSheets(p,true);
  cerrarModal("modal-pedido-det");
  renderHistorial();
  toast("✅ Forma de pago actualizada");
}

// ════════════════════ FACTURA PDF CLIENTE ════════════════════
function descargarFacturaPDF(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p||!p.azurFactura){toast("⚠️ Esta factura aún no ha sido generada");return;}
  var dist=escHtml(p.razon||"");
  var fecha=escHtml(p.fecha||"");
  var rows=(p.items||[]).map(function(it){
    var pr=it.pr||0;
    return '<tr><td style="padding:6px 8px;border-bottom:1px solid #eee">'+escHtml(it.nm)+'</td><td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:center">'+(it.cant||0)+'</td><td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right">$'+pr.toFixed(2)+'</td><td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right">$'+(pr*(it.cant||0)).toFixed(2)+'</td></tr>';
  }).join("");
  var w=window.open("","_blank","width=800,height=700");
  if(!w)return;
  w.document.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Factura #'+p.id+'</title><style>'+
    'body{font-family:Arial,sans-serif;color:#222;margin:0;padding:32px}'+
    'h1{font-size:22px;margin:0 0 4px}'+
    '.sub{font-size:13px;color:#666;margin-bottom:24px}'+
    '.info{display:flex;justify-content:space-between;margin-bottom:20px;font-size:13px}'+
    'table{width:100%;border-collapse:collapse;font-size:13px}'+
    'thead{background:#111;color:#fff}'+
    'thead th{padding:8px;text-align:left}'+
    '.totales{margin-top:16px;text-align:right;font-size:13px}'+
    '.totales .row{margin-bottom:4px}'+
    '.totales .grand{font-size:18px;font-weight:700;color:#111;margin-top:8px}'+
    '.clave{margin-top:28px;background:#f5f5f5;border-radius:8px;padding:14px;font-size:11px;word-break:break-all}'+
    '@media print{button{display:none}}'+
  '</style></head><body>'+
  '<h1>🧾 Factura Electrónica — PyroShield</h1>'+
  '<div class="sub">Portal Distribuidores PyroShield</div>'+
  '<div class="info">'+
    '<div><b>Cliente:</b> '+dist+'<br><b>RUC:</b> '+escHtml(p.ruc||"")+'</div>'+
    '<div style="text-align:right"><b>Pedido #'+escHtml(p.id)+'</b><br><b>Fecha:</b> '+fecha+'<br><b>Pago:</b> '+escHtml(p.pago||"")+'</div>'+
  '</div>'+
  '<table><thead><tr><th>Descripción</th><th style="text-align:center">Cant.</th><th style="text-align:right">P. Unit.</th><th style="text-align:right">Total</th></tr></thead><tbody>'+rows+'</tbody></table>'+
  '<div class="totales">'+
    '<div class="row">Subtotal: <b>$'+(p.subtotal||0).toFixed(2)+'</b></div>'+
    '<div class="row">IVA 15%: <b>$'+(p.iva||0).toFixed(2)+'</b></div>'+
    '<div class="grand">TOTAL: $'+(p.total||0).toFixed(2)+'</div>'+
  '</div>'+
  '<div class="clave"><b>Clave de Acceso SRI:</b><br>'+escHtml(p.azurFactura||"")+'</div>'+
  '<br><button onclick="window.print()" style="background:#111;color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-size:14px">🖨️ Imprimir / Guardar PDF</button>'+
  '</body></html>');
  w.document.close();
}

// ════════════════════ CALIFICACIÓN ════════════════════
function abrirCalif(pid){
  CALIF_PED_ID=pid; CALIF_ESTRELLAS=0;
  document.getElementById("calif-ped-id").textContent="Pedido #"+pid;
  document.querySelectorAll(".star").forEach(function(s){s.classList.remove("active");});
  document.getElementById("calif-feedback").style.display="none";
  document.getElementById("calif-ok-msg").style.display="none";
  document.getElementById("calif-txt").value="";
  abrir("modal-calif");
}
function setEstrella(n){
  CALIF_ESTRELLAS=n;
  document.querySelectorAll(".star").forEach(function(s,i){s.classList.toggle("active",i<n);});
  document.getElementById("calif-feedback").style.display=n<5?"block":"none";
  document.getElementById("calif-ok-msg").style.display=n===5?"block":"none";
}
function enviarCalif(){
  if(!CALIF_ESTRELLAS){toast("⚠️ Selecciona una calificación");return;}
  if(CALIF_ESTRELLAS<5&&!document.getElementById("calif-txt").value.trim()){toast("⚠️ Por favor cuéntanos qué mejorar");return;}
  var p=PEDIDOS.find(function(x){return x.id===CALIF_PED_ID;});
  if(p)p.calificacion={estrellas:CALIF_ESTRELLAS,comentario:document.getElementById("calif-txt").value.trim()};
  guardarPedidos(); cerrarModal("modal-calif"); renderHistorial();
  toast(CALIF_ESTRELLAS===5?"🔥 ¡Gracias!":"✅ Gracias por tu feedback");
}

// ════════════════════ RECOMPENSAS ════════════════════
var REWARDS=[
  {pts:650,ico:"🍗",nm:"Combo KFC (3 presas + papas + cola)",costoReal:6.50},
  {pts:1500,ico:"💳",nm:"Tarjeta consumo $15 (Coral / Ferrisariato)",costoReal:15},
  {pts:3000,ico:"💳",nm:"Tarjeta consumo $30",costoReal:30},
  {pts:5000,ico:"💳",nm:"Tarjeta consumo $50",costoReal:50}
];
function cargarRewards(){try{var r=JSON.parse(localStorage.getItem("pyro_rewards")||"null");if(r&&Array.isArray(r))REWARDS=r;}catch(e){}}
function guardarRewards(){try{localStorage.setItem("pyro_rewards",JSON.stringify(REWARDS));backupCambio();}catch(e){}if(typeof sbPushRewards==="function")sbPushRewards();}
cargarRewards();

function renderRecompensas(){
  var saldo=saldoPuntos();
  var pendiente=puntosPendientes();
  setTopbarPts(saldo);
  var recPtsV=document.getElementById("rec-pts-v");if(recPtsV)recPtsV.textContent=fmtPts(saldo);
  var pendHtml=pendiente>0?'<div class="rec-pts-pend">⏳ '+fmtPts(pendiente)+' pts pendientes de entrega</div>':'';
  var _recPend=document.getElementById("rec-pts-pend-box");if(_recPend)_recPend.innerHTML=pendHtml;
  renderDetallePuntos();
  var activas=REWARDS.filter(function(r){return!r.agotado;}).slice().sort(function(a,b){return a.pts-b.pts;});
  var siguiente=activas.find(function(r){return r.pts>saldo;});
  var mot=siguiente?"¡Te faltan "+fmtPts(siguiente.pts-saldo)+" puntos para "+siguiente.nm+"!":"🎉 ¡Tienes puntos para canjear!";
  var recMot=document.getElementById("rec-mot");if(recMot)recMot.textContent=mot;
  var _recLista=document.getElementById("rec-lista");if(!_recLista)return;
  _recLista.innerHTML=REWARDS.map(function(r,i){
    var pct=r.pts>0?Math.min(100,Math.round(saldo/r.pts*100)):100;
    var puede=saldo>=r.pts&&!r.agotado;
    return '<div class="rec-item">'+
      '<div class="rec-top"><div class="rec-ico">'+escHtml(r.ico||"")+'</div>'+
      '<div><div class="rec-nm">'+escHtml(r.nm||"")+(r.agotado?' <span style="background:#e74c3c;color:#fff;font-size:10px;padding:1px 6px;border-radius:4px;font-weight:600">Agotado</span>':'')+'</div>'+
      '<div class="rec-pts-need">'+fmtPts(r.pts)+' puntos</div></div></div>'+
      '<div class="rec-bar-wrap"><div class="rec-bar" style="width:0" data-pct="'+pct+'"></div></div>'+
      (puede?'<button class="btn btn-p btn-full rec-btn" onclick="canjear('+i+')">Canjear '+fmtPts(r.pts)+' pts</button>':
       r.agotado?'<button class="btn btn-s btn-full rec-btn" disabled style="opacity:0.5">No disponible</button>':
       '<button class="btn btn-s btn-full rec-btn" disabled>Faltan '+fmtPts(r.pts-saldo)+' pts</button>')+
    '</div>';
  }).join("");
  setTimeout(function(){
    document.querySelectorAll("#rec-lista .rec-bar").forEach(function(b){b.style.width=(b.getAttribute("data-pct")||0)+"%";});
  },60);
  // Historial de puntos
  if(!USER)return;
  var logPts=[];try{logPts=JSON.parse(localStorage.getItem("pyro_log_puntos_"+USER.ruc)||"[]");}catch(e){}
  var logEl=document.getElementById("rec-log-puntos");
  if(logEl){
    var logHtml2='<div class="sec-titulo" style="margin-top:16px">📜 Historial de puntos</div>';
    var ultimos=logPts.slice(0,20);
    if(ultimos.length){
      logHtml2+='<div style="background:var(--g1);border-radius:12px;overflow:hidden">'
        +ultimos.map(function(e,i){
          var col2=e.tipo==="canjeados"||e.tipo==="revertido"?"var(--rojo)":e.tipo==="confirmado"?"var(--verde)":"var(--amar)";
          var signo2=(e.tipo==="canjeados"||e.tipo==="revertido")?"−":"+";
          var fechaFmt=escHtml(e.fecha||"")+(e.hora?" · "+escHtml(e.hora):"");
          return '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;'+(i>0?"border-top:1px solid var(--g2)":"")+'">'
            +'<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+escHtml(e.detalle)+'</div>'
            +'<div style="font-size:11px;color:var(--g3)">'+fechaFmt+'</div></div>'
            +'<div style="font-weight:800;color:'+col2+';white-space:nowrap;margin-left:10px">'+signo2+fmtPts(e.pts)+' pts</div>'
            +'</div>';
        }).join("")+'</div>';
    } else {
      logHtml2+='<div style="background:var(--g1);border-radius:12px;padding:18px;font-size:13px;color:var(--g3);text-align:center">Aún no tienes movimientos de puntos</div>';
    }
    logEl.innerHTML=logHtml2;
  }
}
function canjear(idx){
  var r=REWARDS[idx];
  if(!r){toast("⚠️ Recompensa no disponible");return;}
  var pts=r.pts, nm=r.nm;
  if(r.agotado){toast("⚠️ Esta recompensa está agotada");return;}
  if(saldoPuntos()<pts){toast("⚠️ No tienes suficientes puntos confirmados");return;}
  confirmar("¿Canjear <b>"+fmtPts(pts)+" puntos</b> por <b>"+escHtml(nm)+"</b>?<br><small>Se coordinará con tu próximo pedido.</small>",function(){
    if(saldoPuntos()<pts){toast("⚠️ Ya no tienes suficientes puntos");renderRecompensas();return;}
    var pid="C"+Date.now()+Math.floor(Math.random()*9000+1000);
    var pedCanje={id:pid,ruc:USER.ruc,razon:USER.razon,fecha:new Date().toLocaleDateString("es-EC"),fechaISO:new Date().toISOString(),esCanje:true,canjePts:pts,canjeNm:nm,estado:"pendiente",total:0,puntos:0};
    PEDIDOS.push(pedCanje);
    guardarPedidos();
    sincronizarConSheets(pedCanje,true);
    registrarLogPuntos(USER.ruc,"canjeados",pts,"Canje: "+nm);
    renderRecompensas();
    setTopbarPts(saldoPuntos());
    mostrarOverlayCanje();
  });
}
function mostrarOverlayCanje(){
  var prev=document.getElementById("canje-ov");
  if(prev)prev.remove();
  var ov=document.createElement("div");
  ov.id="canje-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;z-index:9999";
  ov.innerHTML='<div style="background:var(--bg,#fff);border-radius:20px;padding:32px 28px;max-width:320px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.4)">'+
    '<div style="font-size:52px;margin-bottom:12px">🎁</div>'+
    '<div style="font-size:16px;color:var(--g4);margin-bottom:20px;line-height:1.5">Tu regalo será entregado en 0 a 7 días laborables o en tu próximo pedido</div>'+
    '<button class="btn btn-p" style="width:100%;font-size:16px" onclick="document.getElementById(\'canje-ov\').remove()">Entendido</button>'+
  '</div>';
  document.body.appendChild(ov);
}

// ════════════════════ ADMIN ════════════════════
function admTab(t,btn){
  // Rol impresión: solo puede usar la pestaña de pedidos
  if(USER&&USER.rol==="impresion"&&t!=="pedidos")return;
  ADM_TAB=t;
  document.querySelectorAll(".adm-tab").forEach(function(b){b.classList.remove("active");});
  if(btn)btn.classList.add("active");
  else{var _ab=document.querySelector(".adm-tab[onclick*=\"'"+t+"'\"]");if(_ab)_ab.classList.add("active");}
  document.querySelectorAll(".adm-panel").forEach(function(p){p.classList.remove("active");});
  var panelEl=document.getElementById("adm-"+t);if(panelEl)panelEl.classList.add("active");
  if(t==="pedidos")renderAdmPedidos();
  if(t==="dashboard")renderAdmDashboard();
  if(t==="distribuidores")renderAdmDist();
  if(t==="stock")renderAdmStock();
  if(t==="recompensas")renderAdmRecompensas();
  if(t==="log")renderAdmLog();
  if(t==="mapa")renderAdmMapa();
}
var _mapaDistInstance=null;
function renderAdmMapa(){
  var msg=document.getElementById("mapa-dist-msg");
  var cont=document.getElementById("mapa-dist");
  if(!cont)return;
  if(!window.L){if(msg)msg.textContent="⏳ Cargando mapa... reabre la pestaña en unos segundos.";return;}
  if(!_mapaDistInstance){
    _mapaDistInstance=L.map("mapa-dist").setView([-1.83,-78.18],7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(_mapaDistInstance);
  }else{
    _mapaDistInstance.eachLayer(function(layer){if(layer instanceof L.Marker)_mapaDistInstance.removeLayer(layer);});
  }
  var conCoords=DISTRIBUIDORES.filter(function(d){return typeof d.lat==="number"&&typeof d.lng==="number"&&!isNaN(d.lat)&&!isNaN(d.lng);});
  if(!conCoords.length){if(msg)msg.textContent="Asigna coordenadas a los distribuidores desde su edición";}
  else{
    if(msg)msg.textContent="";
    conCoords.forEach(function(d){
      var dir=(d.establecimientos&&d.establecimientos[0]&&d.establecimientos[0].dir)||"";
      var popup="<b>"+escHtml(d.razon||d.empresa||d.ruc)+"</b>"+(dir?"<br>"+escHtml(dir):"");
      L.marker([d.lat,d.lng]).addTo(_mapaDistInstance).bindPopup(popup);
    });
  }
  setTimeout(function(){if(_mapaDistInstance)_mapaDistInstance.invalidateSize();},150);
}
function renderAdmin(){
  if(USER&&USER.rol==="impresion"){
    // Ocultar pestañas no permitidas y mostrar solo Pedidos
    var tabs=document.querySelectorAll(".adm-tab");
    tabs.forEach(function(b,i){b.style.display=(i===0)?"":"none";});
    document.querySelectorAll(".adm-panel").forEach(function(p){p.classList.remove("active");});
    var ped=document.getElementById("adm-pedidos");if(ped)ped.classList.add("active");
    renderRolImpresion();
    return;
  }
  // Admin completo: asegurar que TODAS las pestañas estén visibles
  // (por si una sesión previa de rol "impresion" las dejó ocultas en el DOM)
  document.querySelectorAll(".adm-tab").forEach(function(b){b.style.display="";});
  renderAdmPedidos();
  renderAdmDashboard();
}
// UI reducida para rol "impresion": lista de pedidos con filtros y botones de impresión directos
function renderRolImpresion(){
  // Ocultar el dashboard de stats/extra y el botón exportar
  var stats=document.getElementById("adm-stats");if(stats)stats.innerHTML="";
  var extra=document.getElementById("adm-dashboard-extra");if(extra)extra.innerHTML="";
  var expBtn=document.getElementById("adm-export-btn");if(expBtn)expBtn.style.display="none";
  var filtros=[
    {f:"todos",l:"Todos"},
    {f:"pendiente",l:"⏳ Pendientes"},
    {f:"proceso",l:"🔄 En proceso"},
    {f:"entregado",l:"📦 Entregados"},
    {f:"facturado",l:"🧾 Facturados"},
    {f:"finalizado",l:"✔️ Finalizados"},
    {f:"cancelado",l:"✕ Cancelados"}
  ];
  var filtrosHtml='<div class="hfiltros" style="margin-bottom:10px">'+filtros.map(function(o){
    return '<button class="fbtn'+(ADM_PED_FILTRO===o.f?" active":"")+'" onclick="setAdmPedFiltro(\''+o.f+'\')">'+o.l+'</button>';
  }).join("")+'</div>';
  var lista=PEDIDOS.slice().reverse().filter(function(p){return!p.esCanje;}).filter(filtrarPedAdmin);
  var admPedLista=document.getElementById("adm-ped-lista");if(!admPedLista)return;
  admPedLista.innerHTML=filtrosHtml+(lista.length?lista.map(function(p){
    return '<div class="card"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center">'+
        '<div><div style="font-weight:700">Pedido #'+escHtml(p.id)+'</div>'+
        '<div style="font-size:12px;color:var(--g3)">'+escHtml(p.razon)+' · '+escHtml(p.fecha)+'</div></div>'+
        '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabelAdmin(p.estado)+'</span>'+
      '</div>'+
      '<div style="font-size:18px;font-weight:800;font-family:\'Barlow Condensed\',sans-serif;margin-top:6px">'+fmt$(p.total)+'</div>'+
      '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">'+
        '<button class="btn btn-s btn-sm" style="flex:1" onclick="generarProforma(\''+p.id+'\')">📄 Proforma</button>'+
        '<button class="btn btn-s btn-sm" style="flex:1" onclick="generarNotaEntrega(\''+p.id+'\')">📋 Nota de entrega</button>'+
      '</div>'+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">📦</div><p>No hay pedidos en esta categoría.</p></div>');
}

// ════════ #15 Historial de cambios de precio ════════
function cargarHistPrecios(){try{return JSON.parse(localStorage.getItem("pyro_hist_precios")||"[]");}catch(e){return[];}}
function registrarCambioPrecio(id,nm,campo,anterior,nuevo){
  var hist=cargarHistPrecios();var ahora=new Date();
  var f=ahora.getFullYear()+"-"+String(ahora.getMonth()+1).padStart(2,"0")+"-"+String(ahora.getDate()).padStart(2,"0");
  var h=String(ahora.getHours()).padStart(2,"0")+":"+String(ahora.getMinutes()).padStart(2,"0");
  hist.unshift({id:id,nm:nm,campo:campo,valorAnterior:anterior,valorNuevo:nuevo,fecha:f,hora:h});
  if(hist.length>200)hist=hist.slice(0,200);
  try{localStorage.setItem("pyro_hist_precios",JSON.stringify(hist));}catch(e){}
}
function renderHistorialPrecios(){
  var hist=cargarHistPrecios();
  if(!hist.length)return '<div style="font-size:12px;color:var(--g3);padding:8px">Sin cambios registrados.</div>';
  return '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr style="text-align:left;color:var(--g3)"><th style="padding:4px 6px">Fecha</th><th style="padding:4px 6px">Hora</th><th style="padding:4px 6px">Producto</th><th style="padding:4px 6px">Campo</th><th style="padding:4px 6px">Antes</th><th style="padding:4px 6px">Después</th></tr></thead><tbody>'+
    hist.map(function(e){return '<tr style="border-top:1px solid var(--g2)"><td style="padding:4px 6px">'+escHtml(e.fecha)+'</td><td style="padding:4px 6px">'+escHtml(e.hora)+'</td><td style="padding:4px 6px">'+escHtml(e.nm)+' <span style="color:var(--g3)">'+escHtml(e.id)+'</span></td><td style="padding:4px 6px">'+escHtml(e.campo)+'</td><td style="padding:4px 6px;color:var(--rojo)">'+escHtml(String(e.valorAnterior))+'</td><td style="padding:4px 6px;color:var(--verde)">'+escHtml(String(e.valorNuevo))+'</td></tr>';}).join("")+'</tbody></table></div>';
}

// Cargar costos desde localStorage (editables por admin)
function cargarCostos(){
  try{return JSON.parse(localStorage.getItem("pyro_costos")||"{}");}catch(e){return{};}
}
function guardarCostos(costos){
  _costosCache=null;
  try{localStorage.setItem("pyro_costos",JSON.stringify(costos));}catch(e){}
}
var _costosCache=null;
function getCostoProducto(id){
  if(!_costosCache)_costosCache=cargarCostos();
  if(_costosCache[id]!=null)return _costosCache[id];
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  return p?p.costo:0;
}

// Costo real total de una lista de canjes, buscando la recompensa por nombre en REWARDS.
// Tutoriales, instalaciones y bienvenidas no tienen costo real → $0.
function costoCanjesEntregados(lista){
  return lista.reduce(function(s,p){
    if(p.esInstalacion||p.esBienvenida||p.esTutorial||(p.canjeNm&&p.canjeNm.indexOf("tutorial")!==-1)||( p.canjeNm&&p.canjeNm.indexOf("Tutorial")!==-1))return s;
    var rw=REWARDS.find(function(r){return r.nm===p.canjeNm;});
    var c=(rw&&rw.costoReal!=null)?rw.costoReal:0;
    return s+c;
  },0);
}

function renderAdmDashboard(){
  var ped=PEDIDOS.filter(function(p){return!p.esCanje;});
  var canjes=PEDIDOS.filter(function(p){return p.esCanje;});
  var nuevos=ped.filter(function(p){return p.estado==="pendiente";}).length;
  var totalVendido=ped.filter(function(p){return p.estado==="entregado"||p.estado==="facturado"||p.estado==="finalizado";})
    .reduce(function(s,p){return s+(p.subtotal||0);},0);
  var utilidad=ped.filter(function(p){return p.estado==="entregado"||p.estado==="facturado"||p.estado==="finalizado";})
    .reduce(function(s,p){
      var costoTotal=(p.items||[]).reduce(function(cs,it){return cs+(it.costo!=null?it.costo:getCostoProducto(it.id))*(it.cant||0);},0);
      return s+(p.subtotal||0)-costoTotal;
    },0);
  var distActivos=new Set(ped.filter(function(p){return p.estado==="entregado"||p.estado==="facturado"||p.estado==="finalizado";}).map(function(p){return p.ruc;})).size;
  var canjesPend=canjes.filter(function(p){return p.estado==="pendiente";}).length;
  var canjesEntregadosArr=canjes.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";});
  var canjesEntregados=canjesEntregadosArr.length;
  var costoCanjes=costoCanjesEntregados(canjesEntregadosArr);
  var admStats=document.getElementById("adm-stats");if(admStats)admStats.innerHTML=
    '<div class="adm-stat"><div class="v">'+nuevos+'</div><div class="l">Nuevos pedidos</div></div>'+
    '<div class="adm-stat"><div class="v">'+fmt$(totalVendido)+'</div><div class="l">Total vendido (subtotal)</div></div>'+
    '<div class="adm-stat"><div class="v">'+fmt$(utilidad)+'</div><div class="l">Utilidad generada</div></div>'+
    '<div class="adm-stat"><div class="v">'+distActivos+'</div><div class="l">Distribuidores activos</div></div>'+
    '<div class="adm-stat"><div class="v">'+canjesPend+'</div><div class="l">Canjes pendientes</div></div>'+
    '<div class="adm-stat"><div class="v">'+canjesEntregados+' canjes entregados</div><div class="l">me costaron '+fmt$(costoCanjes)+'</div></div>';
  var extraEl=document.getElementById("adm-dashboard-extra");
  if(extraEl){
    extraEl.innerHTML=
      renderAdmAlertas()+
      renderGraficoVentas6Meses()+
      renderTop5MesActual()+
      renderDistribuidoresInactivos()+
      renderTicketPromedioDist()+
      renderTop5Distribuidores()+
      '<div id="adm-charts-canvas" style="margin-bottom:14px"></div>'+
      '<button class="btn btn-s btn-full" style="margin-bottom:14px" onclick="generarReporteMensual()">📊 Reporte mensual PDF</button>';
    setTimeout(function(){dibujarGraficasCanvas();},50);
  }
}

function renderAdmPedidos(){
  // Barra de filtros de estado (chips)
  var filtros=[
    {f:"todos",l:"Todos"},
    {f:"pendiente",l:"⏳ Pendientes"},
    {f:"proceso",l:"🔄 En proceso"},
    {f:"entregado",l:"📦 Entregados"},
    {f:"facturado",l:"🧾 Facturados"},
    {f:"finalizado",l:"✔️ Finalizados"},
    {f:"cancelado",l:"✕ Cancelados"}
  ];
  var filtrosHtml='<div class="hfiltros" style="margin-bottom:10px">'+filtros.map(function(o){
    return '<button class="fbtn'+(ADM_PED_FILTRO===o.f?" active":"")+'" onclick="setAdmPedFiltro(\''+o.f+'\')">'+o.l+'</button>';
  }).join("")+'</div>';

  var _busqEl=document.getElementById("adm-ped-busq");
  var busqPedRaw=(_busqEl||{value:""}).value.trim();
  var busqPed=busqPedRaw.toLowerCase();
  var _busqFocused=_busqEl&&document.activeElement===_busqEl;
  // Excluir canjes/bienvenida de la lista de pedidos admin
  var lista=PEDIDOS.slice().reverse().filter(function(p){return!p.esCanje;}).filter(filtrarPedAdmin).filter(function(p){
    if(!busqPed)return true;
    return (p.id||"").toLowerCase().indexOf(busqPed)!==-1||(p.razon||"").toLowerCase().indexOf(busqPed)!==-1||(p.ruc||"").toLowerCase().indexOf(busqPed)!==-1;
  });
  var busqHtml='<div style="margin-bottom:8px"><input id="adm-ped-busq" class="form-input" placeholder="🔍 Buscar por pedido, distribuidor o RUC..." oninput="renderAdmPedidos()" value="'+escHtml(busqPedRaw)+'" style="font-size:13px;padding:6px 10px"></div>';
  var admPL=document.getElementById("adm-ped-lista");if(!admPL)return;
  admPL.innerHTML=busqHtml+filtrosHtml+(lista.length?lista.map(function(p){
    var facBadge="";
    if(!p.esCanje){
      if(p.azurFactura)facBadge='<span class="badge b-verde" style="font-size:10px">✔️ Facturado</span>';
      else if(p.estado==="entregado")facBadge='<span class="badge b-amar" style="font-size:10px">⚠️ Pendiente facturar</span>';
    }
    return '<div class="card" onclick="admVerPedido(\''+p.id+'\')" style="cursor:pointer"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center">'+
        '<div><div style="font-weight:700">'+(p.esCanje?"🎁 Canje":"Pedido #"+p.id)+'</div>'+
        '<div style="font-size:12px;color:var(--g3)">'+escHtml(p.razon)+' · '+escHtml(p.fecha)+'</div></div>'+
        '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">'+
        '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabelAdmin(p.estado)+'</span>'+
        facBadge+
        '</div>'+
      '</div>'+
      (!p.esCanje?'<div style="font-size:18px;font-weight:800;font-family:\'Barlow Condensed\',sans-serif;margin-top:6px">'+fmt$(p.total)+'</div>':'')+
      (function(){if(p.esCanje)return'';var mg=(p.items||[]).reduce(function(s,it){return s+(it.cant||0)*((it.pr||0)-(it.costo!=null?it.costo:getCostoProducto(it.id)));},0);var pct=p.subtotal>0?(mg/p.subtotal*100):0;var col=mg>=0?"var(--verde)":"var(--rojo)";return'<div style="font-size:11px;color:'+col+';margin-top:2px">Margen est.: '+fmt$(mg)+' ('+pct.toFixed(1)+'%)</div>';}())+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">📦</div><p>No hay pedidos en esta categoría.</p></div>');
  // Restaurar foco en el buscador si el usuario estaba escribiendo
  if(_busqFocused){var nb=document.getElementById("adm-ped-busq");if(nb){nb.focus();var l=nb.value.length;try{nb.setSelectionRange(l,l);}catch(e){}}}
}

// Filtra un pedido según ADM_PED_FILTRO
function filtrarPedAdmin(p){
  if(ADM_PED_FILTRO==="todos")return true;
  if(ADM_PED_FILTRO==="pendiente")return p.estado==="pendiente";
  if(ADM_PED_FILTRO==="proceso")return["en_proceso","autorizado","entrega"].indexOf(p.estado)!==-1;
  if(ADM_PED_FILTRO==="entregado")return p.estado==="entregado";
  if(ADM_PED_FILTRO==="facturado")return p.estado==="facturado";
  if(ADM_PED_FILTRO==="finalizado")return p.estado==="finalizado";
  if(ADM_PED_FILTRO==="cancelado")return p.estado==="cancelado";
  return true;
}
function setAdmPedFiltro(f){
  ADM_PED_FILTRO=f;
  if(USER&&USER.rol==="impresion")renderRolImpresion();
  else renderAdmPedidos();
}

// Label de estado completo para admin (más detallado)
function estadoLabelAdmin(e){
  var m={
    pendiente:"⏳ Pendiente",
    en_proceso:"🚚 En proceso",
    autorizado:"🚚 En proceso",
    entrega:"🚚 En proceso",
    entregado:"📦 Entregado",
    facturado:"🧾 Facturado",
    finalizado:"✔️ Finalizado",
    cancelado:"✕ Cancelado"
  };
  return m[e]||e;
}

function admVerPedido(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  // Estados editables por admin (finalizado se asigna automáticamente al facturar)
  var estadosAdmin=['pendiente','en_proceso','entregado','facturado','finalizado','cancelado'];
  // El estado actual SIEMPRE debe estar en la lista; si no (ej. facturado/finalizado),
  // se antepone seleccionado para no degradar el pedido al guardar.
  if(p.estado&&estadosAdmin.indexOf(p.estado)===-1)estadosAdmin=[p.estado].concat(estadosAdmin);
  var html='<div class="mhandle"></div><h3>'+(p.esCanje?"Canje":"Pedido")+" #"+p.id+'</h3>'+
    (p.esCanje&&p.canjeNm?'<div style="font-size:15px;font-weight:700;color:var(--oro);margin-bottom:8px">🎁 '+escHtml(p.canjeNm)+'</div>':'')+
    '<div style="font-size:12px;color:var(--g3);margin-bottom:12px">'+escHtml(p.razon)+' · '+tipoDocLabel(DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{ruc:p.ruc})+': '+escHtml(p.ruc)+' · '+escHtml(p.fecha)+'</div>'+
    '<label class="form-label">Estado</label>'+
    '<select class="form-select" id="adm-estado-sel">'+estadosAdmin.map(function(e){return'<option value="'+e+'"'+(p.estado===e?" selected":"")+'>'+estadoLabelAdmin(e)+'</option>';}).join("")+'</select>';

  // Observaciones internas (solo admin)
  if(!p.esCanje){
    html+='<label class="form-label" style="margin-top:4px">Observaciones internas (solo admin)</label>'+
      '<div style="display:flex;gap:8px;margin-bottom:8px">'+
        '<select class="form-select" id="adm-obs-sel" style="margin:0;flex:1">'+
          '<option value="">Sin observación adicional</option>'+
          '<option value="Cheque recibido">✅ Cheque recibido</option>'+
          '<option value="Pago pendiente">💰 Pago pendiente</option>'+
        '</select>'+
      '</div>';
    if(p.obsAdmin)html+='<div style="font-size:12px;color:var(--azul);margin-bottom:8px">Obs. actual: '+escHtml(p.obsAdmin)+'</div>';
    // Editar forma de pago (si el pedido no está finalizado)
    if(p.estado!=="finalizado"){
      var opcionesPagoAdm=["Efectivo","Transferencia","Cheque / Crédito 30 días","Cheque / Crédito 60 días","Cheque / Crédito 90 días"];
      html+='<label class="form-label" style="margin-top:4px">Forma de pago</label>'+
        '<select class="form-select" id="adm-pago-sel">'+
          opcionesPagoAdm.map(function(o){return'<option value="'+o+'"'+(p.pago===o?" selected":"")+'>'+o+'</option>';}).join("")+
          (opcionesPagoAdm.indexOf(p.pago)===-1&&p.pago?'<option value="'+escHtml(p.pago)+'" selected>'+escHtml(p.pago)+'</option>':'')+
        '</select>';
    }
  }

  if(!p.esCanje&&p.items){
    html+=p.items.map(function(it){
      return '<div class="rrow"><span>'+escHtml(it.nm)+' x'+it.cant+'</span><span>'+fmt$(it.pr*it.cant)+'</span></div>';
    }).join("")+'<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(p.total)+'</span></div>';
    html+='<div style="margin-top:10px;font-size:13px"><b>Pago:</b> '+escHtml(p.pago)+'</div>';
    if(p.puntos)html+='<div style="font-size:13px;color:var(--oro);font-weight:700;margin-top:4px">🏆 '+fmtPts(p.puntos)+' puntos</div>';
    if(p.calificacion)html+='<div style="margin-top:8px;font-size:13px">Calificación: '+"⭐".repeat(Math.max(0,Math.min(5,p.calificacion.estrellas||0)))+' '+( p.calificacion.comentario?'<i>"'+escHtml(p.calificacion.comentario)+'"</i>':"")+' </div>';
    // Botones de acción
    html+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">'+
      '<button class="btn btn-s" style="flex:1;background:#25D366;color:#fff;border-color:#25D366" onclick="generarWA(\''+p.id+'\')">📲 WhatsApp</button>'+
      '<button class="btn btn-s" style="flex:1" onclick="generarProforma(\''+p.id+'\')">📄 Proforma</button>'+
      '<button class="btn btn-s" style="flex:1" onclick="generarNotaEntrega(\''+p.id+'\')">📋 Nota de entrega</button>'+
    '</div>';
    if(p.azurFactura){
      html+='<div style="margin-top:10px;background:var(--verdec);border:1.5px solid var(--verde);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--verde)">✅ <b>Factura emitida en Azur</b><br><span style="font-size:10px;word-break:break-all;color:var(--g4)">Clave: '+p.azurFactura+'</span>'+(p.azurEstado?'<br><b>Estado SRI:</b> '+escHtml(p.azurEstado):'')+'</div>';
      html+='<button class="btn btn-s btn-full" style="margin-top:8px" onclick="consultarEstadoAzur(\''+p.id+'\')">🔍 Verificar estado SRI</button>';
      html+='<button class="btn btn-s btn-full" style="margin-top:8px" onclick="generarAzur(\''+p.id+'\')">🔄 Re-enviar a Azur</button>';
    } else if(p.estado!=="cancelado"){
      html+='<button class="btn btn-s btn-full" style="margin-top:8px" onclick="generarAzur(\''+p.id+'\')">🧾 Generar factura en Azur</button>';
    }
    html+=renderResumenDist(p.ruc);
  }
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px">'+
    '<button class="btn btn-s" onclick="cerrarModal(\'modal-pedido-det\')">Cerrar</button>'+
    '<button class="btn btn-p" onclick="guardarEstadoPed(\''+p.id+'\')">Guardar cambios</button>'+
  '</div>';
  document.getElementById("modal-pedido-det-c").innerHTML=html;
  // Seleccionar observación actual
  if(p.obsAdmin){var os=document.getElementById("adm-obs-sel");if(os)os.value=p.obsAdmin;}
  abrir("modal-pedido-det");
}

function parseFechaPed(p){try{if(p.fechaISO)return new Date(p.fechaISO);var parts=(p.fecha||"").split("/");if(parts.length===3){var y=parseInt(parts[2],10),m=parseInt(parts[1],10)-1,d=parseInt(parts[0],10);if(!isNaN(y)&&!isNaN(m)&&!isNaN(d))return new Date(y,m,d);}var t=new Date(p.fecha||"");return isNaN(t.getTime())?new Date():t;}catch(e){return new Date();}}

function renderResumenDist(ruc){
  var peds=PEDIDOS.filter(function(p){return p.ruc===ruc&&!p.esCanje&&p.estado!=="cancelado";});
  var ahora=new Date();
  var esteMes=peds.filter(function(p){var d=parseFechaPed(p);return d.getMonth()===ahora.getMonth()&&d.getFullYear()===ahora.getFullYear();});
  var mesPas=peds.filter(function(p){var d=parseFechaPed(p);var m=ahora.getMonth()-1;var y=ahora.getFullYear();if(m<0){m=11;y--;}return d.getMonth()===m&&d.getFullYear()===y;});
  var anio=peds.filter(function(p){var d=parseFechaPed(p);return d.getFullYear()===ahora.getFullYear();});
  var totEste=esteMes.reduce(function(s,p){return s+(p.subtotal||0);},0);
  var totPas=mesPas.reduce(function(s,p){return s+(p.subtotal||0);},0);
  var totAnio=anio.reduce(function(s,p){return s+(p.subtotal||0);},0);
  var ptsAcum=peds.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";}).reduce(function(s,p){return s+(p.puntos||0);},0);
  return '<div style="background:var(--g1);border-radius:10px;padding:12px;margin-top:12px;font-size:12px">'+
    '<div style="font-weight:700;margin-bottom:8px">Resumen de compras (subtotales sin IVA)</div>'+
    '<div class="rrow"><span>Este mes</span><span>'+fmt$(totEste)+'</span></div>'+
    '<div class="rrow"><span>Mes anterior</span><span>'+fmt$(totPas)+'</span></div>'+
    '<div class="rrow"><span>Este año</span><span>'+fmt$(totAnio)+'</span></div>'+
    '<div class="rrow"><span>Puntos confirmados</span><span>'+fmtPts(ptsAcum)+' pts</span></div>'+
    '<div class="rrow"><span>Total pedidos</span><span>'+peds.length+'</span></div>'+
  '</div>';
}

function guardarEstadoPed(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  var sel=document.getElementById("adm-estado-sel");
  var obsSel=document.getElementById("adm-obs-sel");
  if(!p||!sel)return;
  var estadoViejo=p.estado;
  p.estado=sel.value;
  if(obsSel)p.obsAdmin=obsSel.value;
  // Guardar forma de pago editada (si el selector existe y el pedido no está finalizado)
  var pagoSel=document.getElementById("adm-pago-sel");
  if(pagoSel&&estadoViejo!=="finalizado"&&!p.azurFactura)p.pago=pagoSel.value;
  // Restaurar stock si cancela — solo si los items aún no salieron del almacén
  var estadosPreEntrega=["pendiente","en_proceso","autorizado","entrega","facturado"];
  if(sel.value==="cancelado"&&estadoViejo!=="cancelado"&&estadosPreEntrega.indexOf(estadoViejo)!==-1&&p.items){
    p.items.forEach(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      if(prod){if(prod.stock!=null)prod.stock+=it.cant;prod.ago=false;}
    });
    guardarStock();
  }
  // Registrar confirmación de puntos cuando el pedido pasa a entregado/finalizado
  var confirmaEstados=["entregado","finalizado"];
  var pendiaEstados=["pendiente","en_proceso","autorizado","entrega","facturado"];
  if(!p.esCanje&&(p.puntos||0)>0&&confirmaEstados.indexOf(sel.value)!==-1&&pendiaEstados.indexOf(estadoViejo)!==-1){
    registrarLogPuntos(p.ruc,"confirmado",p.puntos,"Pedido #"+p.id+" confirmado");
  }
  // Registrar reversión de puntos cuando un pedido ya confirmado es cancelado
  if(!p.esCanje&&(p.puntos||0)>0&&sel.value==="cancelado"&&confirmaEstados.indexOf(estadoViejo)!==-1){
    registrarLogPuntos(p.ruc,"revertido",p.puntos,"Pedido #"+p.id+" cancelado (puntos revertidos)");
  }
  // Bug 89: Registrar reversión cuando admin regresa un pedido de confirmado a pendiente
  if(!p.esCanje&&(p.puntos||0)>0&&pendiaEstados.indexOf(sel.value)!==-1&&confirmaEstados.indexOf(estadoViejo)!==-1){
    registrarLogPuntos(p.ruc,"revertido",p.puntos,"Pedido #"+p.id+" revertido a "+sel.value);
  }
  // Bug 92: Registrar reversión de canje cuando admin cancela un canje
  if(p.esCanje&&(p.canjePts||0)>0&&sel.value==="cancelado"&&estadoViejo!=="cancelado"){
    registrarLogPuntos(p.ruc,"revertido",p.canjePts,"Canje cancelado por admin: "+(p.canjeNm||p.id));
  }
  guardarPedidos();
  sincronizarConSheets(p,true);
  cerrarModal("modal-pedido-det"); renderAdmPedidos();
  toast("✅ Estado actualizado");
  // Notificación WhatsApp al distribuidor
  var nuevoEstado=sel.value;
  if(nuevoEstado==="en_proceso"||nuevoEstado==="entregado"||nuevoEstado==="facturado"||nuevoEstado==="finalizado"){
    var distWA=DISTRIBUIDORES.find(function(x){return x.ruc===p.ruc;});
    var telWA=(distWA&&distWA.tel)?distWA.tel.replace(/\D/g,""):"";
    if(telWA){
      var nmWA=(distWA&&distWA.encargado)||primerNombre((distWA&&distWA.razon)||p.razon||"");
      var msgWATexto;
      if(nuevoEstado==="en_proceso")msgWATexto="Hola "+nmWA+", tu pedido #"+p.id+" está siendo preparado 🔄";
      else if(nuevoEstado==="entregado")msgWATexto="Hola "+nmWA+", tu pedido #"+p.id+" está listo para entrega/retiro 📦";
      else if(nuevoEstado==="facturado")msgWATexto="Hola "+nmWA+", tu pedido #"+p.id+" ha sido facturado 🧾 Pronto lo recibirás.";
      else msgWATexto="Hola "+nmWA+", tu pedido #"+p.id+" ha sido finalizado ✅ ¡Gracias por tu preferencia!";
      var msgWA=encodeURIComponent(msgWATexto);
      setTimeout(function(){
        if(confirm("¿Notificar al distribuidor por WhatsApp?")){
          var telNorm=telWA.replace(/^593/,"").replace(/^0/,"");
        window.open("https://wa.me/593"+telNorm+"?text="+msgWA,"_blank");
        }
      },300);
    }
  }
}

function generarProforma(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{};
  var fecha=new Date().toLocaleDateString("es-EC");
  var baseHref=window.location.href.substring(0,window.location.href.lastIndexOf("/")+1);
  var ahorroTotal=0;
  var itemsHtml=(p.items||[]).map(function(it,i){
    var pvUnit=it.pv||it.pr;
    var descUnit=pvUnit-it.pr;
    var descTotal=descUnit*it.cant;
    ahorroTotal+=descTotal;
    return '<tr>'+
      '<td>'+(i+1)+'</td>'+
      '<td>'+escHtml(it.id)+'</td>'+
      '<td>'+escHtml(it.nm)+'</td>'+
      '<td style="text-align:center">'+it.cant+'</td>'+
      '<td style="text-align:right">'+fmt$(pvUnit)+'</td>'+
      '<td style="text-align:right">'+fmt$(it.pr)+'</td>'+
      (descUnit>0.005?
        '<td style="text-align:right;color:#27ae60">-'+fmt$(descUnit)+'</td>'+
        '<td style="text-align:right;color:#27ae60">-'+fmt$(descTotal)+'</td>':
        '<td style="text-align:right;color:#bbb">—</td>'+
        '<td style="text-align:right;color:#bbb">—</td>')+
      '<td style="text-align:right;font-weight:600">'+fmt$(it.pr*it.cant)+'</td>'+
    '</tr>';
  }).join("");
  var win=window.open("","_blank","width=860,height=960");
  if(!win){toast("⚠️ Permite las ventanas emergentes para generar el PDF");return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Proforma #'+p.id+'</title>'+
    '<base href="'+baseHref+'">'+
    '<style>body{font-family:Arial,sans-serif;font-size:12px;color:#111;padding:24px;max-width:820px;margin:0 auto}'+
    '.header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #C0392B;padding-bottom:14px;margin-bottom:18px}'+
    '.logo{height:64px;width:auto;display:block}'+
    '.company{color:#C0392B;font-weight:900;font-size:22px;letter-spacing:1px;margin-top:4px}'+
    'table{width:100%;border-collapse:collapse;margin-top:12px}'+
    'th{background:#1A1A1A;color:#fff;padding:7px 10px;text-align:left;font-size:11px}'+
    'td{padding:7px 10px;border-bottom:1px solid #eee;font-size:11px}'+
    'tr:nth-child(even)td{background:#f9f9f9}'+
    '.totals{margin-top:16px;text-align:right}'+
    '.totals table{width:300px;margin-left:auto}'+
    '.totals td{border:none;padding:4px 8px}'+
    '.total-final td{font-weight:700;font-size:14px;color:#C0392B;border-top:2px solid #C0392B}'+
    '.ahorro-box{background:#eafaf1;border:1.5px solid #27ae60;border-radius:8px;padding:10px 16px;margin-top:14px;font-size:13px;color:#1e8449;font-weight:700;text-align:center}'+
    '.footer{margin-top:24px;font-size:10px;color:#888;border-top:1px solid #eee;padding-top:10px}'+
    '@media print{button{display:none}}'+
    '</style></head><body>'+
    '<div class="header">'+
      '<div style="display:flex;align-items:center;gap:14px">'+
        '<img src="img/logo.jpg" class="logo" alt="PyroShield">'+
        '<div>'+
          '<div class="company">PYROSHIELD</div>'+
          '<div style="font-size:10px;color:#666">Portete #3007 y Gallegos Lara, Guayaquil</div>'+
          '<div style="font-size:10px;color:#666">RUC: 0992220835001</div>'+
        '</div>'+
      '</div>'+
      '<div style="text-align:right">'+
        '<div style="font-size:20px;font-weight:700;color:#1A1A1A">PROFORMA</div>'+
        '<div style="font-size:11px;color:#666">N° '+p.id+'</div>'+
        '<div style="font-size:11px;color:#666">Fecha: '+fecha+'</div>'+
      '</div>'+
    '</div>'+
    '<div style="background:#f5f5f5;padding:10px 14px;border-radius:8px;margin-bottom:12px">'+
      '<div style="font-weight:700">'+escHtml(p.razon||"")+'</div>'+
      '<div>RUC / Cédula: '+escHtml(p.ruc||"")+'</div>'+
      (dist.tel?'<div>Tel: '+escHtml(dist.tel)+'</div>':'')+
      (dist.correo?'<div>Correo: '+escHtml(dist.correo)+'</div>':'')+
    '</div>'+
    '<table>'+
      '<thead><tr>'+
        '<th>#</th><th>Código</th><th>Descripción</th>'+
        '<th style="text-align:center">Cant.</th>'+
        '<th style="text-align:right">P.Lista</th>'+
        '<th style="text-align:right">P.Unit.</th>'+
        '<th style="text-align:right;color:#27ae60">Desc.Unit.</th>'+
        '<th style="text-align:right;color:#27ae60">Desc.Total</th>'+
        '<th style="text-align:right">Total</th>'+
      '</tr></thead>'+
      '<tbody>'+itemsHtml+'</tbody>'+
    '</table>'+
    '<div class="totals"><table>'+
      '<tr><td>Subtotal:</td><td style="text-align:right;font-weight:700">'+fmt$(p.subtotal)+'</td></tr>'+
      '<tr><td>IVA 15%:</td><td style="text-align:right">'+fmt$(p.iva)+'</td></tr>'+
      '<tr class="total-final"><td>TOTAL:</td><td style="text-align:right">'+fmt$(p.total)+'</td></tr>'+
    '</table></div>'+
    (ahorroTotal>0.005?'<div class="ahorro-box">🎉 Ahorro total en este pedido: '+fmt$(ahorroTotal)+'</div>':'')+
    '<div style="margin-top:16px;font-size:11px"><b>Forma de pago:</b> '+escHtml(p.pago||"—")+'</div>'+
    '<div class="footer">'+
      'Esta proforma tiene validez de 15 días a partir de la fecha de emisión.<br>'+
      'PyroShield — Soluciones contra incendios'+
    '</div>'+
    '<div style="margin-top:16px;text-align:center">'+
      '<button onclick="window.print()" style="padding:10px 24px;background:#C0392B;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer">🖨️ Imprimir / Guardar PDF</button>'+
    '</div>'+
    '</body></html>');
  win.document.close();
}

function generarNotaEntrega(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p||!p.items)return;
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{};
  var fecha=new Date().toLocaleDateString("es-EC");
  var baseHref=window.location.href.substring(0,window.location.href.lastIndexOf("/")+1);
  var itemsHtml=p.items.map(function(it,i){
    return '<tr>'+
      '<td>'+(i+1)+'</td>'+
      '<td>'+escHtml(it.id)+'</td>'+
      '<td>'+escHtml(it.nm)+'</td>'+
      '<td style="text-align:center;font-weight:700;font-size:14px">'+(it.cant||0)+'</td>'+
    '</tr>';
  }).join("");
  var entregaDir="";
  if(p.modo==="entrega"&&p.entregaInfo&&p.entregaInfo.establecimiento){
    entregaDir=escHtml((p.entregaInfo.establecimiento.nm||"")+(p.entregaInfo.establecimiento.dir?" — "+p.entregaInfo.establecimiento.dir:""));
  }
  var win=window.open("","_blank","width=800,height=900");
  if(!win){toast("⚠️ Permite las ventanas emergentes para generar el PDF");return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Nota de Entrega #'+p.id+'</title>'+
    '<base href="'+baseHref+'">'+
    '<style>body{font-family:Arial,sans-serif;font-size:12px;color:#111;padding:28px;max-width:720px;margin:0 auto}'+
    '.header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #1A1A1A;padding-bottom:14px;margin-bottom:18px}'+
    '.logo{height:64px;width:auto;display:block}'+
    '.company{font-weight:900;font-size:20px;color:#C0392B}'+
    '.doc-title{font-size:22px;font-weight:700;text-align:right;letter-spacing:2px}'+
    '.info-box{background:#f5f5f5;padding:12px 14px;border-radius:8px;margin-bottom:16px;font-size:13px}'+
    'table{width:100%;border-collapse:collapse;margin-top:8px}'+
    'th{background:#1A1A1A;color:#fff;padding:9px 12px;text-align:left;font-size:12px}'+
    'td{padding:9px 12px;border-bottom:1px solid #ddd;font-size:12px}'+
    'tr:nth-child(even)td{background:#f9f9f9}'+
    '.firma-section{margin-top:40px;border-top:1px solid #ccc;padding-top:20px}'+
    '.firma-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:20px}'+
    '.firma-box{border-top:1.5px solid #333;padding-top:8px;font-size:11px;color:#555}'+
    '.firma-line{height:40px}'+
    '.footer{margin-top:30px;font-size:10px;color:#aaa;border-top:1px solid #eee;padding-top:8px;text-align:center}'+
    '@media print{button{display:none}}'+
    '</style></head><body>'+
    '<div class="header">'+
      '<div style="display:flex;align-items:center;gap:14px">'+
        '<img src="img/logo.jpg" class="logo" alt="PyroShield">'+
        '<div>'+
          '<div class="company">PYROSHIELD</div>'+
          '<div style="font-size:10px;color:#666">Portete #3007 y Gallegos Lara, Guayaquil</div>'+
          '<div style="font-size:10px;color:#666">RUC: 0992220835001</div>'+
        '</div>'+
      '</div>'+
      '<div class="doc-title">NOTA DE<br>ENTREGA</div>'+
    '</div>'+
    '<div class="info-box">'+
      '<div><b>N° Pedido:</b> '+p.id+'</div>'+
      '<div><b>Fecha:</b> '+fecha+'</div>'+
      '<div style="margin-top:8px"><b>Cliente:</b> '+escHtml(p.razon||"")+'</div>'+
      '<div><b>RUC / Cédula:</b> '+escHtml(p.ruc||"")+'</div>'+
      (entregaDir?'<div><b>Dirección de entrega:</b> '+entregaDir+'</div>':'')+
      (dist.tel?'<div><b>Teléfono:</b> '+escHtml(dist.tel)+'</div>':'')+
    '</div>'+
    '<table>'+
      '<thead><tr><th>#</th><th>Código</th><th>Descripción</th><th style="text-align:center">Cantidad</th></tr></thead>'+
      '<tbody>'+itemsHtml+'</tbody>'+
    '</table>'+
    '<div class="firma-section">'+
      '<div style="font-weight:700;font-size:14px;margin-bottom:6px">RECIBÍ CONFORME</div>'+
      '<div style="font-size:12px;color:#555;margin-bottom:18px">Los artículos descritos arriba fueron recibidos en perfecto estado y en las cantidades indicadas.</div>'+
      '<div class="firma-grid">'+
        '<div><div class="firma-line"></div><div class="firma-box">Firma</div></div>'+
        '<div><div class="firma-line"></div><div class="firma-box">Nombre completo</div></div>'+
        '<div><div class="firma-line"></div><div class="firma-box">N° Cédula</div></div>'+
        '<div><div class="firma-line"></div><div class="firma-box">Fecha de recepción</div></div>'+
      '</div>'+
    '</div>'+
    '<div class="footer">PyroShield — Soluciones contra incendios · Portete #3007 y Gallegos Lara, Guayaquil</div>'+
    '<div style="margin-top:16px;text-align:center">'+
      '<button onclick="window.print()" style="padding:10px 24px;background:#1A1A1A;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer">🖨️ Imprimir / Guardar PDF</button>'+
    '</div>'+
    '</body></html>');
  win.document.close();
}

function generarWA(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;});
  var tel=dist&&dist.tel?dist.tel.replace(/[^0-9]/g,""):"";
  if(!tel)tel="593978997247";
  if(tel.charAt(0)==="0")tel="593"+tel.slice(1);
  var msg="*PyroShield — Pedido #"+p.id+"*\n\nHola "+p.razon+"!\n\n";
  if(p.items)p.items.forEach(function(it){msg+="• "+it.nm+" x"+it.cant+" — "+fmt$(it.pr*it.cant)+"\n";});
  msg+="\n*Subtotal:* "+fmt$(p.subtotal)+"\n*IVA 15%:* "+fmt$(p.iva)+"\n*Total:* "+fmt$(p.total)+"\n";
  msg+="\n*Forma de pago:* "+(p.pago||"—")+"\n";
  var pg=(p.pago||"").toUpperCase();
  if(pg.indexOf("EFECTIVO")!==-1)msg+="Por favor ten listo el pago en efectivo al momento de la entrega.";
  else if(pg.indexOf("TRANSFERENCIA")!==-1)msg+="Por favor ayúdanos con el comprobante de transferencia.";
  else if(pg.indexOf("CHEQUE")!==-1||pg.indexOf("CRÉDITO")!==-1||pg.indexOf("CREDITO")!==-1)msg+="Recuerda que el pago es únicamente válido con cheque a la fecha al momento de la entrega.";
  if(p.puntos)msg+="\n\n🏆 Este pedido te dará *"+fmtPts(p.puntos)+" puntos* PyroShield al ser entregado.";
  msg+="\n\n¡Gracias por tu compra!";
  window.open("https://wa.me/"+tel+"?text="+encodeURIComponent(msg),"_blank");
}

var _azurBusy=false;
function generarAzur(pid){
  if(_azurBusy){toast("⏳ Factura en proceso, espera...");return;}
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  if(p.esCanje){toast("⚠️ Los canjes no se facturan por Azur");return;}
  if(!AZUR_TOKEN){toast("⚠️ Configura el token de Azur primero");return;}
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{};
  var numDoc=(p.ruc||"").replace(/[^0-9]/g,"");
  var tipoIdent="04";
  if(dist.tipoDoc==="cedula"||numDoc.length===10) tipoIdent="05";
  if(numDoc==="9999999999999"||numDoc==="9999999999") tipoIdent="07";
  // Identificación que se envía al SRI: siempre numérica. Consumidor final = 13 nueves.
  var identAzur=(tipoIdent==="07")?"9999999999999":numDoc;
  var ahora=new Date();
  var fechaAzur=ahora.getFullYear()+"/"+String(ahora.getMonth()+1).padStart(2,"0")+"/"+String(ahora.getDate()).padStart(2,"0");
  var itemsAzur=(p.items||[]).filter(function(it){return it.pr>0&&it.cant>0;}).map(function(it){
    var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
    var codAzur=(prod&&prod.codigoAzur)?prod.codigoAzur:it.id;
    return {codigo_principal:codAzur,codigo_auxiliar:null,descripcion:it.nm,tipoproducto:1,tipo_iva:4,precio_unitario:parseFloat(it.pr.toFixed(2)),cantidad:it.cant,descuento:0};
  });
  if(!itemsAzur.length){toast("⚠️ El pedido no tiene productos válidos para facturar");return;}
  var pagoMap={"Efectivo":"01","Transferencia":"20","Cheque":"20","Cheque / Crédito 30 días":"20","Cheque / Crédito 60 días":"20","Cheque / Crédito 90 días":"20"};
  var codigoPago=pagoMap[p.pago]||"20";
  var payload={api_key:AZUR_TOKEN,codigoDoc:"01",emisor:{manejo_interno_secuencia:"SI",fecha_emision:fechaAzur},comprador:{tipo_identificacion:tipoIdent,identificacion:identAzur,razon_social:dist.razon||p.razon,direccion:(dist.establecimientos&&dist.establecimientos[0]&&dist.establecimientos[0].dir)?dist.establecimientos[0].dir:"S/N",telefono:dist.tel||null,celular:null,correo:dist.correo||null},items:itemsAzur,pagos:[{tipo:codigoPago,total:parseFloat((p.total||0).toFixed(2))}],informacion_adicional:[{nombre:"Pedido Portal",detalle:"#"+p.id},{nombre:"Forma de Pago",detalle:p.pago}]};
  _azurBusy=true;
  toast("⏳ Enviando a Azur...");
  var _azurCtrl=typeof AbortController!=="undefined"?new AbortController():null;
  var _azurTimer=_azurCtrl?setTimeout(function(){_azurCtrl.abort();},30000):null;
  fetch(AZUR_API+"factura/emision",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),signal:_azurCtrl?_azurCtrl.signal:undefined})
  .then(function(r){return r.json();})
  .then(function(data){
    if(_azurTimer)clearTimeout(_azurTimer);
    _azurBusy=false;
    if(data.creado==="true"||data.creado===true){
      p.azurFactura=data.claveacceso||data.clave_acceso||data.claveAcceso; p.azurEstado="enviado";
      guardarPedidos(); toastGold("🧾 Factura enviada a Azur ✅"); admVerPedido(pid);
    } else {
      var errArr=Array.isArray(data.errors)?data.errors:(data.errors?[String(data.errors)]:(data.mensaje?[data.mensaje]:["Error desconocido"]));
      var errores=errArr.join(" · ");
      toast("⚠️ Azur: "+errores.substring(0,90));
    }
  })
  .catch(function(e){if(_azurTimer)clearTimeout(_azurTimer);_azurBusy=false;toast(e&&e.name==="AbortError"?"⚠️ Azur no respondió en 30 s. Intenta de nuevo.":"⚠️ Error de conexión con Azur");});
}

function consultarEstadoAzur(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p||!p.azurFactura){toast("⚠️ Esta factura aún no ha sido generada");return;}
  toast("⏳ Consultando estado en el SRI...");
  var _sriCtrl=typeof AbortController!=="undefined"?new AbortController():null;
  var _sriTimer=_sriCtrl?setTimeout(function(){_sriCtrl.abort();},20000):null;
  fetch(AZUR_API+"factura/consulta/"+encodeURIComponent(p.azurFactura)+"?api_key="+encodeURIComponent(AZUR_TOKEN),{signal:_sriCtrl?_sriCtrl.signal:undefined})
    .then(function(r){return r.json();})
    .then(function(data){
      if(_sriTimer)clearTimeout(_sriTimer);
      var estado=data.estado||data.estadoSri||data.estado_sri||data.estadoComprobante||(data.autorizado?"AUTORIZADO":null)||(data.creado==="false"?"RECHAZADO":null)||"DESCONOCIDO";
      p.azurEstado=estado;
      guardarPedidos();
      toast("📋 Estado SRI: "+estado);
      admVerPedido(pid);
    })
    .catch(function(e){if(_sriTimer)clearTimeout(_sriTimer);toast(e&&e.name==="AbortError"?"⚠️ El SRI no respondió en 20 s.":"⚠️ No se pudo consultar el estado SRI");});
}

function tipoDocLabel(d){
  if(d.tipoDoc==="cedula")return"Cédula";
  if(d.tipoDoc==="ruc")return"RUC";
  var n=(d.ruc||"").replace(/[^0-9]/g,"");
  if(n.length===10)return"Cédula";
  if(n.length===13)return"RUC";
  return"Doc";
}

// ════════════════════ ADMIN DISTRIBUIDORES ════════════════════
function renderAdmAlertas(){
  var alertas=[];var ahora=new Date();
  var pedViejos=PEDIDOS.filter(function(p){if(p.estado!=="pendiente"||p.esCanje||p.esBienvenida)return false;var f=parseFechaPed(p);return f&&(ahora-f)>30*24*60*60*1000;});
  if(pedViejos.length)alertas.push({tipo:"rojo",ico:"⏰",msg:pedViejos.length+" pedidos en 'pendiente' hace más de 30 días",accion:"admTab('pedidos')"});
  var umbrales={};try{umbrales=JSON.parse(localStorage.getItem("pyro_umbrales")||"{}");}catch(e){}
  var stockCrit=PRODUCTOS.filter(function(p){var u=umbrales[p.id]!=null?umbrales[p.id]:20;return p.stock<=u&&p.stock>0;});
  if(stockCrit.length)alertas.push({tipo:"amar",ico:"📦",msg:stockCrit.length+" productos con stock bajo umbral",accion:"admTab('stock')"});
  var agotados=PRODUCTOS.filter(function(p){return p.ago||(p.stock!=null&&p.stock<=0);});
  if(agotados.length)alertas.push({tipo:"rojo",ico:"🚨",msg:agotados.length+" productos agotados",accion:"admTab('stock')"});
  var inactivos=DISTRIBUIDORES.filter(function(d){
    if(d.esAdmin||d.rol==="impresion")return false;
    var misPeds=PEDIDOS.filter(function(p){return p.ruc===d.ruc&&!p.esCanje&&p.estado!=="cancelado";});
    if(!misPeds.length)return true;
    var ultimo=misPeds.slice().sort(function(a,b){return parseFechaPed(b).getTime()-parseFechaPed(a).getTime();})[0];
    var f=parseFechaPed(ultimo);return !f||(ahora-f)>30*24*60*60*1000;
  });
  if(inactivos.length)alertas.push({tipo:"amar",ico:"😴",msg:inactivos.length+" distribuidor(es) sin pedidos en 30+ días",accion:"admTab('distribuidores')"});
  if(!alertas.length)return'<div style="background:var(--verdec);border:1.5px solid var(--verde);border-radius:10px;padding:12px 14px;font-size:13px;color:var(--verde);margin-bottom:14px">✅ Todo en orden — sin alertas críticas</div>';
  return'<div style="display:grid;gap:8px;margin-bottom:14px">'+alertas.map(function(a){
    var bg=a.tipo==="rojo"?"var(--rojoc)":"var(--amarc)";
    var col=a.tipo==="rojo"?"var(--rojo)":"var(--amar)";
    var border=a.tipo==="rojo"?"var(--rojo)":"var(--amar)";
    return'<div onclick="'+a.accion+'" style="background:'+bg+';border:1.5px solid '+border+';border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;cursor:pointer"><span style="font-size:20px">'+a.ico+'</span><span style="font-size:13px;font-weight:600;color:'+col+'">'+escHtml(a.msg)+'</span><span style="margin-left:auto;font-size:12px;color:'+col+'">Ver →</span></div>';
  }).join("")+'</div>';
}
function exportarExcelDist(){
  var todos=DISTRIBUIDORES.filter(function(d){return!d.esAdmin&&d.rol!=="impresion";});
  var rows=todos.map(function(d){
    var misPeds=PEDIDOS.filter(function(p){return p.ruc===d.ruc&&!p.esCanje&&p.estado!=="cancelado";});
    var total=misPeds.reduce(function(s,p){return s+(p.subtotal||0);},0);
    var sorted=misPeds.slice().sort(function(a,b){return parseFechaPed(b).getTime()-parseFechaPed(a).getTime();});
    var ultimo=sorted.length?sorted[0].fecha:"Nunca";
    return[d.ruc,d.razon||"",d.encargado||"",d.correo||"",d.tel||"",misPeds.length,fmt$(total),ultimo,d.bloqueado?"Bloqueado":"Activo"];
  });
  var header=["RUC","Razón Social","Encargado","Email","Teléfono","Nº Pedidos","Total Comprado","Último Pedido","Estado"];
  var xml='<?xml version="1.0"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Distribuidores"><Table>'
    +'<Row>'+header.map(function(h){return'<Cell><Data ss:Type="String">'+h+'</Data></Cell>';}).join("")+'</Row>'
    +rows.map(function(r){return'<Row>'+r.map(function(c){return'<Cell><Data ss:Type="String">'+String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+'</Data></Cell>';}).join("")+'</Row>';}).join("")
    +'</Table></Worksheet></Workbook>';
  var blob=new Blob([xml],{type:"application/vnd.ms-excel"});
  var a=document.createElement("a");var u=URL.createObjectURL(blob);a.href=u;
  a.download="distribuidores_pyroshield_"+new Date().toISOString().slice(0,10)+".xls";
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  setTimeout(function(){URL.revokeObjectURL(u);},1000);
}
function renderAdmDist(){
  if(USER&&USER.rol==="impresion")return;
  var lista=DISTRIBUIDORES.filter(function(d){return!d.esAdmin&&d.rol!=="impresion";});
  var _dss=document.getElementById("adm-dist-search");
  var q=(_dss?_dss.value||"":"").toLowerCase();
  if(q)lista=lista.filter(function(d){return norm(d.razon).indexOf(norm(q))!==-1||d.ruc.indexOf(q)!==-1||norm(d.empresa||"").indexOf(norm(q))!==-1||norm(d.encargado||"").indexOf(norm(q))!==-1;});
  var admDistLista=document.getElementById("adm-dist-lista");if(!admDistLista)return;
  admDistLista.innerHTML='<div style="margin-bottom:10px"><button class="btn btn-s btn-sm" onclick="exportarExcelDist()">📥 Exportar Excel</button></div>'+(lista.length?lista.map(function(d){
    var nped=PEDIDOS.filter(function(p){return p.ruc===d.ruc&&!p.esCanje&&p.estado!=="cancelado";}).length;
    var esp=d.preciosEsp?Object.keys(d.preciosEsp).length:0;
    return '<div class="card"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start">'+
        '<div>'+
          '<div style="font-weight:700;font-size:15px">'+escHtml(d.razon)+'</div>'+
          (d.empresa?'<div style="font-size:12px;color:var(--azul);font-weight:600">'+escHtml(d.empresa)+'</div>':'')+
          '<div style="font-size:12px;color:var(--g3);margin-top:3px">'+tipoDocLabel(d)+': '+escHtml(d.ruc)+(d.tel?' · Tel: '+escHtml(d.tel):'')+'</div>'+
          '<div style="font-size:11px;color:var(--g3)">Pass: <span style="font-family:monospace;background:var(--g1);padding:1px 6px;border-radius:4px">••••••</span></div>'+
        '</div>'+
        '<div style="display:flex;gap:6px">'+
          '<button class="btn btn-sm btn-s" onclick="abrirEditarDist(\''+d.ruc+'\')">✏️</button>'+
          '<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border:1.5px solid var(--rojo)" onclick="eliminarDist(\''+d.ruc+'\')">🗑</button>'+
        '</div>'+
      '</div>'+
      '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">'+
        '<span class="badge b-verde">'+nped+' pedidos</span>'+
        (esp?'<span class="badge b-oro">★ '+esp+' precios esp.</span>':'')+
        (d.sinDescVol?'<span class="badge b-rojo">Sin desc. volumen</span>':'')+
        (d.entrega&&d.entrega.habilitada?'<span class="badge b-azul">🚚 Entrega $'+(d.entrega.montoMin||30)+'+</span>':'<span class="badge b-gris">Solo retiro</span>')+
        (d.bloqueado?'<span class="badge b-rojo">🚫 Bloqueado'+(d.bloqueoRazon?' — '+escHtml(d.bloqueoRazon):'')+' </span>':'')+
        (d.saldoPendiente>0?'<span class="badge b-rojo">💲 Debe $'+(+d.saldoPendiente||0).toFixed(2)+'</span>':'')+
      '</div>'+
      (d.notasInternas?'<div style="margin-top:6px;font-size:11px;color:var(--g3);background:var(--g1);border-radius:8px;padding:6px 8px">📝 '+escHtml(d.notasInternas)+'</div>':'')+
      '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">'+
        '<button class="btn btn-sm btn-s" onclick="abrirPreciosEsp(\''+d.ruc+'\')">💲 Precios especiales</button>'+
        '<button class="btn btn-sm btn-s" onclick="verResumenDist(\''+d.ruc+'\')">📊 Resumen</button>'+
      '</div>'+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">🏢</div><p>No se encontraron distribuidores</p></div>');
}

function filtrarDist(){renderAdmDist();}
function abrirNuevoDist(){abrir("modal-nuevo-dist");}

function eliminarDist(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  if(d.esAdmin){toast("⚠️ No se puede eliminar al administrador");return;}
  confirmar("¿Eliminar al distribuidor <b>"+escHtml(d.razon)+"</b>?<br><small>Esta acción no se puede deshacer.</small>",function(){
    var idx=DISTRIBUIDORES.indexOf(d);
    if(idx>-1)DISTRIBUIDORES.splice(idx,1);
    // Lápida: evita que un distribuidor base (datos.js) reaparezca al recargar
    try{
      var elim=JSON.parse(localStorage.getItem("pyro_dist_eliminados")||"[]");
      if(elim.indexOf(ruc)===-1){elim.push(ruc);localStorage.setItem("pyro_dist_eliminados",JSON.stringify(elim));}
    }catch(e){}
    guardarDistribuidores();
    renderAdmDist();
    toast("✅ Distribuidor eliminado");
  });
}

function abrirEditarDist(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  var html='<div class="mhandle"></div><h3>Editar distribuidor</h3>'+
    '<label class="form-label">Razón social</label>'+
    '<input class="form-input" id="ed-razon" value="'+escHtml(d.razon)+'">'+
    '<label class="form-label">Nombre comercial</label>'+
    '<input class="form-input" id="ed-empresa" value="'+escHtml(d.empresa||"")+'">'+
    '<label class="form-label">Nombre del encargado</label>'+
    '<input class="form-input" id="ed-encargado" value="'+escHtml(d.encargado||"")+'">'+
    '<label class="form-label">Teléfono</label>'+
    '<input class="form-input" id="ed-tel" value="'+escHtml(d.tel||"")+'">'+
    '<label class="form-label">Correo</label>'+
    '<input class="form-input" id="ed-correo" value="'+escHtml(d.correo||"")+'">'+
    '<label class="form-label">Contraseña <span style="font-weight:400;color:var(--g3);font-size:11px">(dejar vacío para no cambiarla)</span></label>'+
    '<input class="form-input" id="ed-pass" type="password" value="" placeholder="Escribe una nueva para resetear el acceso" autocomplete="new-password">'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">'+
      '<input type="checkbox" id="ed-entrega" '+(d.entrega&&d.entrega.habilitada?"checked":"")+' style="width:18px;height:18px">'+
      '<label for="ed-entrega" style="font-size:14px">Entrega a domicilio habilitada</label>'+
    '</div>'+
    '<label class="form-label">Monto mínimo entrega ($)</label>'+
    '<input class="form-input" id="ed-min" type="number" value="'+((d.entrega&&d.entrega.montoMin!=null)?d.entrega.montoMin:30)+'">'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">'+
      '<input type="checkbox" id="ed-sinvol" '+(d.sinDescVol?"checked":"")+' style="width:18px;height:18px">'+
      '<label for="ed-sinvol" style="font-size:14px;color:var(--rojo)">Sin descuentos por volumen</label>'+
    '</div>'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">'+
      '<input type="checkbox" id="ed-bloqueado" '+(d.bloqueado?"checked":"")+' style="width:18px;height:18px">'+
      '<label for="ed-bloqueado" style="font-size:14px;color:var(--rojo)">🚫 Bloquear acceso (no puede iniciar sesión)</label>'+
    '</div>'+
    '<input class="form-input" id="ed-bloqueo-razon" placeholder="Motivo del bloqueo (opcional)" value="'+escHtml(d.bloqueoRazon||"")+'" style="margin-bottom:12px">'+
    '<label class="form-label">Saldo pendiente ($)</label>'+
    '<input class="form-input" id="ed-saldo" type="number" step="0.01" value="'+(d.saldoPendiente||0)+'">'+
    '<div style="display:flex;gap:8px"><div style="flex:1"><label class="form-label">Latitud (mapa)</label>'+
    '<input class="form-input" id="ed-lat" type="number" step="any" placeholder="-1.83" value="'+(typeof d.lat==="number"?d.lat:"")+'"></div>'+
    '<div style="flex:1"><label class="form-label">Longitud (mapa)</label>'+
    '<input class="form-input" id="ed-lng" type="number" step="any" placeholder="-78.18" value="'+(typeof d.lng==="number"?d.lng:"")+'"></div></div>'+
    '<label class="form-label">Notas internas (solo admin)</label>'+
    '<textarea class="form-input" id="ed-notas" rows="2" style="resize:none" placeholder="Notas privadas sobre este distribuidor">'+escHtml(d.notasInternas||"")+'</textarea>'+
    '<label class="form-label">Establecimientos / Direcciones de entrega</label>'+
    '<div id="ed-dirs-lista" style="margin-bottom:8px"></div>'+
    '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">'+
      '<input class="form-input" id="ed-dir-nm" placeholder="Nombre del local" style="margin:0;flex:1;min-width:120px">'+
      '<input class="form-input" id="ed-dir-dir" placeholder="Dirección" style="margin:0;flex:1.5;min-width:140px">'+
      '<button class="btn btn-s btn-sm" type="button" onclick="agregarDirEditar(\''+ruc+'\')" style="margin:0">+ Agregar</button>'+
    '</div>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px">'+
      '<button class="btn btn-s" onclick="cerrarModal(\'modal-editar-dist\')">Cancelar</button>'+
      '<button class="btn btn-p" onclick="guardarEditarDist(\''+ruc+'\')">Guardar</button>'+
    '</div>';
  document.getElementById("modal-editar-dist-c").innerHTML=html;
  renderDirsEditar(ruc);
  abrir("modal-editar-dist");
}

// Renderiza la lista de direcciones del distribuidor en el modal de edición
function renderDirsEditar(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  var cont=document.getElementById("ed-dirs-lista");
  if(!d||!cont)return;
  var ests=d.establecimientos||[];
  if(!ests.length){cont.innerHTML='<div style="font-size:12px;color:var(--g3);padding:4px 0">Sin direcciones registradas</div>';return;}
  cont.innerHTML=ests.map(function(e,i){
    return '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:var(--g1);border-radius:8px;padding:8px 10px;margin-bottom:6px">'+
      '<div style="font-size:12px;flex:1"><b>'+escHtml(e.nm||"")+'</b><br><span style="color:var(--g3)">'+escHtml(e.dir||"")+'</span></div>'+
      '<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border:1.5px solid var(--rojo);margin:0" onclick="eliminarDirEditar(\''+ruc+'\','+i+')">🗑 Eliminar</button>'+
    '</div>';
  }).join("");
}
function agregarDirEditar(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  var nmEl=document.getElementById("ed-dir-nm"),dirEl=document.getElementById("ed-dir-dir");
  var nm=(nmEl&&nmEl.value||"").trim(),dir=(dirEl&&dirEl.value||"").trim();
  if(!nm||!dir){toast("⚠️ Ingresa nombre y dirección del local");return;}
  if(!d.establecimientos)d.establecimientos=[];
  d.establecimientos.push({nm:nm,dir:dir,obs:""});
  if(nmEl)nmEl.value="";if(dirEl)dirEl.value="";
  guardarDistribuidores();
  renderDirsEditar(ruc);
}
function eliminarDirEditar(ruc,i){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d||!d.establecimientos)return;
  d.establecimientos.splice(i,1);
  guardarDistribuidores();
  renderDirsEditar(ruc);
}

function guardarEditarDist(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  var _edRazon=document.getElementById("ed-razon").value.trim();if(_edRazon)d.razon=_edRazon;
  d.empresa=document.getElementById("ed-empresa").value.trim()||"";
  var encEl=document.getElementById("ed-encargado");
  if(encEl)d.encargado=encEl.value.trim();
  d.tel=document.getElementById("ed-tel").value.trim();
  d.correo=document.getElementById("ed-correo").value.trim();
  var newPass=document.getElementById("ed-pass").value.trim();
  if(newPass){d.pass=sha256(newPass);d.passModificado=true;try{localStorage.removeItem("pyro_biometria_"+d.ruc);}catch(e){}}
  d.sinDescVol=document.getElementById("ed-sinvol").checked;
  if(!d.entrega)d.entrega={};
  d.entrega.habilitada=document.getElementById("ed-entrega").checked;
  d.entrega.montoMin=(function(){var v=parseFloat(document.getElementById("ed-min").value);return isNaN(v)?30:v;})();
  var bloqEl=document.getElementById("ed-bloqueado");if(bloqEl)d.bloqueado=bloqEl.checked;
  var bloqRazonEl=document.getElementById("ed-bloqueo-razon");if(bloqRazonEl)d.bloqueoRazon=bloqRazonEl.value||"";
  var saldoEl=document.getElementById("ed-saldo");if(saldoEl)d.saldoPendiente=parseFloat(saldoEl.value)||0;
  var notasEl=document.getElementById("ed-notas");if(notasEl)d.notasInternas=notasEl.value.trim();
  var latEl=document.getElementById("ed-lat"),lngEl=document.getElementById("ed-lng");
  if(latEl){var _lat=parseFloat(latEl.value);d.lat=latEl.value.trim()===""||isNaN(_lat)?undefined:_lat;}
  if(lngEl){var _lng=parseFloat(lngEl.value);d.lng=lngEl.value.trim()===""||isNaN(_lng)?undefined:_lng;}
  guardarDistribuidores();
  cerrarModal("modal-editar-dist");
  renderAdmDist();
  toast("✅ Distribuidor actualizado");
}

// Precios especiales por distribuidor
function abrirPreciosEsp(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  if(!d.preciosEsp)d.preciosEsp={};
  var html='<div class="mhandle"></div><h3>Precios especiales<br><span style="font-size:13px;color:var(--g3);font-weight:400">'+escHtml(d.razon)+'</span></h3>'+
    '<div style="font-size:12px;color:var(--g3);margin-bottom:12px">Deja en blanco para usar el precio base del distribuidor.</div>'+
    PRODUCTOS.map(function(p){
      var esp=d.preciosEsp[p.id]!=null?d.preciosEsp[p.id]:"";
      return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+
        '<div style="flex:1;font-size:12px;font-weight:600">'+escHtml(p.nm)+'<span style="color:var(--g3);font-weight:400;font-size:11px"> (base: '+fmt$(p.pb)+')</span></div>'+
        '<input type="number" step="0.01" min="0" class="form-input" id="esp-'+p.id+'" value="'+esp+'" placeholder="'+fmt$(p.pb)+'" style="width:90px;margin:0;padding:8px 10px;font-size:13px">'+
      '</div>';
    }).join("")+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">'+
      '<button class="btn btn-s" onclick="cerrarModal(\'modal-precios-esp\')">Cancelar</button>'+
      '<button class="btn btn-p" onclick="guardarPreciosEsp(\''+ruc+'\')">Guardar precios</button>'+
    '</div>';
  document.getElementById("modal-precios-esp-c").innerHTML=html;
  abrir("modal-precios-esp");
}

function guardarPreciosEsp(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  if(!d.preciosEsp)d.preciosEsp={};
  var errores=[];
  PRODUCTOS.forEach(function(p){
    var inp=document.getElementById("esp-"+p.id);
    if(!inp)return;
    var v=inp.value.trim();
    if(v===""||isNaN(parseFloat(v))){
      delete d.preciosEsp[p.id];
    } else {
      var val=parseFloat(v);
      if(val<(p.costo||0)){
        errores.push((p.nm||p.id)+": mínimo $"+(p.costo||0).toFixed(2));
      } else {
        d.preciosEsp[p.id]=val;
      }
    }
  });
  guardarDistribuidores();
  cerrarModal("modal-precios-esp");
  renderAdmDist();
  if(errores.length){toast("⚠️ "+errores.length+" precio(s) omitidos por debajo del costo: "+errores.slice(0,2).join(", ")+(errores.length>2?" y "+(errores.length-2)+" más":""));}
  else{toast("✅ Precios especiales guardados");}
}

function verResumenDist(ruc){
  var html='<div class="mhandle"></div><h3>Resumen</h3>'+renderResumenDist(ruc)+
    '<button class="btn btn-s btn-full" style="margin-top:16px" onclick="cerrarModal(\'modal-resumen-dist\')">Cerrar</button>';
  document.getElementById("modal-resumen-dist-c").innerHTML=html;
  abrir("modal-resumen-dist");
}

function escHtml(s){return String(s||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

// ════════════════════ ADMIN NUEVO DISTRIBUIDOR ════════════════════
function buscarSRI(){
  var ruc=document.getElementById("nd-ruc").value.trim().replace(/[^0-9]/g,"");
  if(ruc.length!==10&&ruc.length!==13){toast("⚠️ Ingresa una cédula (10) o RUC (13) válido");return;}
  var tipoSel=document.getElementById("nd-tipodoc");
  if(tipoSel)tipoSel.value=(ruc.length===10)?"cedula":"ruc";
  toast("🔍 Consultando SRI...");
  var rucConsulta=(ruc.length===10)?ruc+"001":ruc;
  var url="https://azur-proxy.alejosl0801.workers.dev/sri/"+rucConsulta;
  fetch(url)
    .then(function(r){return r.json();})
    .then(function(data){
      var c=Array.isArray(data)?data[0]:data;
      if(!c||(!c.razonSocial&&!c.nombreComercial)){toast("⚠️ No se encontró en el SRI. Llena los datos a mano.");return;}
      document.getElementById("nd-razon").value=c.razonSocial||c.nombreComercial||"";
      if(c.nombreComercial&&c.nombreComercial!==c.razonSocial)document.getElementById("nd-empresa").value=c.nombreComercial;
      var dir="";
      if(c.informacionFechasContribuyente&&c.informacionFechasContribuyente.direccionMatriz)dir=c.informacionFechasContribuyente.direccionMatriz;
      if(c.direccionMatriz)dir=c.direccionMatriz;
      if(dir)document.getElementById("nd-dir").value=dir;
      toast("✅ Datos cargados del SRI.");
    })
    .catch(function(e){toast("⚠️ No se pudo consultar el SRI. Llena los datos a mano.");});
}

function confirmarLimpiarDatos(){
  // Claves fijas a borrar
  ["pyro_pedidos","pyro_stock","pyro_sesion","pyro_dist_extra",
   "pyro_cola_offline","pyro_sync_pendientes","pyro_ultimo_backup",
   "pyro_log_accesos","pyro_notif_vistas","pyro_last_ruc",
   "pyro_descvol","pyro_dist_eliminados","pyro_ped_eliminados","pyro_cat_grid","pyro_costos","pyro_umbrales",
   "pyro_rewards","pyro_hist_precios","pyro_recuerdo"
  ].forEach(function(k){try{localStorage.removeItem(k);}catch(e){}});
  // Claves por prefijo (por RUC o por sesión)
  var keys=[];try{for(var i=0;i<localStorage.length;i++)keys.push(localStorage.key(i));}catch(e){}
  var prefijos=[
    "pyro_cart_","pyro_borradores_","pyro_tut_","pyro_tipsec_","pyro_tut_pts_",
    "pyro_log_puntos_","pyro_avatar_","pyro_pwa_","pyro_biometria_",
    "pyro_bio_skip_","pyro_busquedas_","pyro_deseos_","pyro_favs_",
    "pyro_logro_madrug_","pyro_logro_noct_","pyro_primer_ingreso_",
    "pyro_tut_resetado_","pyro_ultima_tab_",
    "pyro_pass_alerta_","pyro_bienvenida_","pyro_umbral_",
    "pyro_inst_mobile_","pyro_inst_desktop_"
  ];
  keys.filter(function(k){return k&&prefijos.some(function(p){return k.startsWith(p);});})
    .forEach(function(k){try{localStorage.removeItem(k);}catch(e){}});
  _costosCache=null;
  toast("✅ Datos de prueba eliminados. Recargando...");
  setTimeout(function(){window.location.reload();},1200);
}

function copiarNuevoCred(){
  var rucEl=document.getElementById("nd-cred-ruc");
  var passEl=document.getElementById("nd-cred-pass");
  if(!rucEl||!passEl)return;
  var txt="Usuario: "+rucEl.textContent+"\nContraseña: "+passEl.textContent;
  if(navigator.clipboard){navigator.clipboard.writeText(txt).then(function(){toast("📋 Credenciales copiadas");}).catch(function(){toast("⚠️ No se pudo copiar");});}
  else{toast("📋 "+txt);}
}

function guardarNuevoDist(){
  var btnNd=document.querySelector("#modal-nuevo-dist .btn-p");
  if(btnNd)btnNd.disabled=true;
  var r=document.getElementById("nd-razon").value.trim();
  var emp=document.getElementById("nd-empresa").value.trim();
  var enc=document.getElementById("nd-encargado")?document.getElementById("nd-encargado").value.trim():"";
  var tipoDoc=document.getElementById("nd-tipodoc")?document.getElementById("nd-tipodoc").value:"ruc";
  var ruc=document.getElementById("nd-ruc").value.trim();
  var tel=document.getElementById("nd-tel").value.trim();
  var co=document.getElementById("nd-correo").value.trim();
  var pw=document.getElementById("nd-pass").value.trim();
  var dir=document.getElementById("nd-dir").value.trim();
  var ent=document.getElementById("nd-entrega").checked;
  var min=(function(){var v=parseFloat(document.getElementById("nd-min").value);return isNaN(v)?30:v;})();
  var sinVol=document.getElementById("nd-sinvol")?document.getElementById("nd-sinvol").checked:false;
  if(!r||!ruc||!pw){toast("⚠️ Completa razón social, documento y contraseña");if(btnNd)btnNd.disabled=false;return;}
  var soloNum=ruc.replace(/[^0-9]/g,"");
  if(tipoDoc==="cedula"&&soloNum.length!==10){toast("⚠️ La cédula debe tener 10 dígitos");if(btnNd)btnNd.disabled=false;return;}
  if(tipoDoc==="ruc"&&soloNum.length!==13){toast("⚠️ El RUC debe tener 13 dígitos");if(btnNd)btnNd.disabled=false;return;}
  var existe=DISTRIBUIDORES.find(function(d){return d.ruc.toLowerCase()===soloNum.toLowerCase();});
  if(existe){toast("⚠️ Ya existe un distribuidor con ese documento");if(btnNd)btnNd.disabled=false;return;}
  var nd={ruc:soloNum,tipoDoc:tipoDoc,razon:r,pass:sha256(pw),tel:tel,correo:co,entrega:{habilitada:ent,montoMin:min},sinDescVol:sinVol,_nuevo:true};
  if(emp)nd.empresa=emp;
  if(enc)nd.encargado=enc;
  if(dir)nd.establecimientos=[{nm:"Local principal",dir:dir,obs:""}];
  DISTRIBUIDORES.push(nd);
  // Si este documento fue eliminado antes, quitarlo de la lápida: si no, el nuevo
  // distribuidor desaparecería al recargar (cargarDistribuidoresExtra lo filtraría).
  try{
    var elim=JSON.parse(localStorage.getItem("pyro_dist_eliminados")||"[]");
    var idxElim=elim.indexOf(soloNum);
    if(idxElim!==-1){elim.splice(idxElim,1);localStorage.setItem("pyro_dist_eliminados",JSON.stringify(elim));}
  }catch(e){}
  guardarDistribuidores();
  if(btnNd)btnNd.disabled=false;
  cerrarModal("modal-nuevo-dist");
  renderAdmDist();
  var credRucEl=document.getElementById("nd-cred-ruc");
  var credPassEl=document.getElementById("nd-cred-pass");
  if(credRucEl)credRucEl.textContent=soloNum;
  if(credPassEl)credPassEl.textContent=pw;
  abrir("modal-cred-nuevo");
  ["nd-razon","nd-empresa","nd-encargado","nd-ruc","nd-tel","nd-correo","nd-pass","nd-dir"].forEach(function(x){var el=document.getElementById(x);if(el)el.value="";});
  if(document.getElementById("nd-tipodoc"))document.getElementById("nd-tipodoc").value="ruc";
  if(document.getElementById("nd-sinvol"))document.getElementById("nd-sinvol").checked=false;
  if(document.getElementById("nd-min"))document.getElementById("nd-min").value="";
  if(document.getElementById("nd-entrega"))document.getElementById("nd-entrega").checked=false;
}

// ════════════════════ ADMIN STOCK ════════════════════
function cargarUmbrales(){try{return JSON.parse(localStorage.getItem("pyro_umbrales")||"{}");}catch(e){return{};}}
function guardarUmbral(id,val){var u=cargarUmbrales();u[id]=val;try{localStorage.setItem("pyro_umbrales",JSON.stringify(u));}catch(e){}}

function renderAdmStock(){
  if(USER&&USER.rol==="impresion")return;
  var cont=document.getElementById("adm-stock-lista");
  if(!cont)return;
  var costos=cargarCostos();
  var umbrales=cargarUmbrales();
  var topHtml='<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">'+
    '<button class="btn btn-s btn-sm" onclick="exportarExcelStock()">📥 Exportar Excel</button>'+
    '<label class="btn btn-s btn-sm" style="cursor:pointer">📤 Importar CSV<input type="file" accept=".csv" style="display:none" onchange="importarStock(event)"></label>'+
    '</div>'+
    '<details style="background:var(--g1);border-radius:10px;padding:12px 14px;margin-bottom:14px"><summary style="font-weight:700;font-size:14px;cursor:pointer;list-style:none">📈 Historial de cambios de precios ▸</summary><div style="margin-top:10px">'+renderHistorialPrecios()+'</div></details>'+
  '<div style="background:var(--amarc);border:1.5px solid var(--amar);border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:var(--amar)">'+
    '💡 <b>Para importar:</b> Exporta el Excel, edita solo la columna <b>Stock</b> (número), guarda como CSV y reimporta. El estado se recalcula automáticamente.'+
  '</div>';
  // Notificación agrupada de productos bajo umbral
  var bajosUmbral=[];
  var html=renderProductosSinMovimiento()+renderAnalisisABC();
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    cat.subs.forEach(function(sn){
      var ps=PRODUCTOS.filter(function(p){return p.cat===ck&&p.sub===sn;});
      if(!ps.length)return;
      html+='<div class="subcat">'+cat.ico+' '+cat.nombre+' · '+sn+'</div>';
      html+=ps.map(function(p){
        var umbral=umbrales[p.id]!=null?umbrales[p.id]:20;
        var _bajoUmbral=(p.stock!=null&&p.stock<=umbral&&p.stock>0);
        var bajoBorde=_bajoUmbral?"border:2px solid var(--amar);":"";
        if(_bajoUmbral)bajosUmbral.push(p.nm);
        var col=p.ago?"b-rojo":_bajoUmbral?"b-amar":"b-verde";
        var lab=p.ago?"Agotado":_bajoUmbral?"Bajo umbral":"OK";
        var umbralBadge=_bajoUmbral?'<span class="badge b-amar">⚠️ Bajo umbral</span>':'';
        var costoActual=costos[p.id]!=null?costos[p.id]:p.costo;
        return '<div class="card" style="margin-bottom:8px;'+bajoBorde+'"><div class="card-b">'+
          '<div style="font-size:13px;font-weight:700;margin-bottom:8px">'+escHtml(p.nm)+' <span style="font-size:10px;color:var(--g3);font-weight:400">'+escHtml(p.id)+'</span></div>'+
          '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'+
            '<span class="badge '+col+'">'+lab+'</span>'+umbralBadge+
            '<div style="display:flex;align-items:center;gap:4px">'+
              '<span style="font-size:11px;color:var(--g3)">Stock:</span>'+
              '<input type="number" min="0" value="'+(p.stock!=null?p.stock:'')+'" id="st-'+p.id+'" style="width:70px;padding:6px 8px;border:1.5px solid var(--g2);border-radius:8px;font-size:14px;font-weight:700;text-align:center" placeholder="∞">'+
              '<button class="btn btn-sm btn-p" style="padding:7px 12px;min-height:0" onclick="ajustarStock(\''+p.id+'\',document.getElementById(\'st-'+p.id+'\').value)">✓</button>'+
            '</div>'+
            '<div style="display:flex;align-items:center;gap:4px;border-left:1.5px solid var(--g2);padding-left:8px">'+
              '<span style="font-size:11px;color:var(--g3)">Umbral:</span>'+
              '<input type="number" min="0" value="'+umbral+'" id="umb-'+p.id+'" style="width:60px;padding:6px 8px;border:1.5px solid var(--amarc);border-radius:8px;font-size:13px;text-align:center;background:var(--amarc)" onchange="guardarUmbral(\''+p.id+'\',parseInt(this.value,10)||20)">'+
            '</div>'+
            '<div style="display:flex;align-items:center;gap:4px;border-left:1.5px solid var(--g2);padding-left:8px">'+
              '<span style="font-size:11px;color:var(--g3)">Costo $:</span>'+
              '<input type="number" step="0.01" min="0" value="'+costoActual+'" id="cst-'+p.id+'" style="width:80px;padding:6px 8px;border:1.5px solid var(--azulc);border-radius:8px;font-size:13px;text-align:center;background:var(--azulc)">'+
              '<button class="btn btn-sm btn-s" style="padding:7px 12px;min-height:0;color:var(--azul)" onclick="ajustarCosto(\''+p.id+'\',document.getElementById(\'cst-'+p.id+'\').value)">✓</button>'+
            '</div>'+
            '<button class="btn btn-sm" style="padding:7px 12px;min-height:0;background:var(--g1);border:1.5px solid var(--g2);color:var(--g4);font-size:11px" onclick="abrirEditarDescVol(\''+p.id+'\')">⚙️ Desc. Vol.</button>'+
          '</div>'+
        '</div></div>';
      }).join("");
    });
  });
  cont.innerHTML=topHtml+html;
  // Notificación de productos bajo umbral
  if(bajosUmbral.length&&typeof Notification!=="undefined"&&Notification.permission==="granted"){
    new Notification("PyroShield — Stock bajo umbral",{body:bajosUmbral.length+" productos bajo umbral: "+bajosUmbral.slice(0,3).join(", ")+(bajosUmbral.length>3?"…":""),icon:"img/logo.jpg"});
  }
}

function ajustarCosto(id,val){
  var n=parseFloat(val);
  if(isNaN(n)||n<0){toast("⚠️ Ingresa un costo válido");return;}
  var costos=cargarCostos();
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  var anterior=costos[id]!=null?costos[id]:(p?p.costo:0);
  if(p&&anterior!==n)registrarCambioPrecio(id,p.nm,"Costo",fmt$(anterior),fmt$(n));
  costos[id]=n;
  guardarCostos(costos);
  if(p)p.costo=n;
  backupCambio();
  renderAdmStock();
  toast("✅ Costo actualizado");
}

function ajustarStock(id,val){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p)return;
  var sVal=String(val).trim();
  if(sVal===""||sVal==="∞"){p.stock=null;p.ago=false;guardarStock();backupCambio();renderAdmStock();toast("✅ Stock ilimitado: "+p.nm);return;}
  var n=parseInt(sVal,10);
  if(isNaN(n)||n<0){toast("⚠️ Ingresa un número válido (o deja vacío para ilimitado)");return;}
  p.stock=n; p.ago=(n===0);
  guardarStock(); backupCambio(); renderAdmStock();
  toast("✅ Stock actualizado: "+p.nm);
}

function exportarExcelStock(){
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  var costos=cargarCostos();
  var umbComp=cargarUmbrales();
  var cabeceras=["ID","Nombre","Categoría","Subcategoría","Stock","Estado","Costo Unitario"];
  var filas=[];
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    cat.subs.forEach(function(sn){
      PRODUCTOS.filter(function(p){return p.cat===ck&&p.sub===sn;}).forEach(function(p){
        var costoAct=costos[p.id]!=null?costos[p.id]:p.costo;
        var umbStock=umbComp[p.id]||20;filas.push([p.id,p.nm,cat.nombre,sn,p.stock!=null?p.stock:"Ilimitado",p.ago?"Agotado":(p.stock!=null&&p.stock<=umbStock&&p.stock>0)?"Bajo":"OK",costoAct]);
      });
    });
  });
  var xml='<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?>'+
    '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'+
    '<Styles><Style ss:ID="h"><Interior ss:Color="#1A1A1A" ss:Pattern="Solid"/><Font ss:Bold="1" ss:Color="#FFFFFF"/></Style></Styles>'+
    '<Worksheet ss:Name="Stock"><Table>'+
    '<Column ss:Width="100"/><Column ss:Width="200"/><Column ss:Width="100"/><Column ss:Width="100"/><Column ss:Width="60"/><Column ss:Width="70"/><Column ss:Width="80"/>';
  xml+='<Row>';
  cabeceras.forEach(function(c){xml+='<Cell ss:StyleID="h"><Data ss:Type="String">'+esc(c)+'</Data></Cell>';});
  xml+='</Row>';
  filas.forEach(function(fila){
    xml+='<Row>';
    fila.forEach(function(cel,i){
      var isNum=(i===4||i===6)&&typeof cel==="number";xml+='<Cell><Data ss:Type="'+(isNum?"Number":"String")+'">'+esc(String(cel))+'</Data></Cell>';
    });
    xml+='</Row>';
  });
  xml+='</Table></Worksheet></Workbook>';
  var blob=new Blob([xml],{type:"application/vnd.ms-excel;charset=utf-8"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a");
  a.href=url; a.download="stock_pyroshield_"+new Date().toISOString().slice(0,10)+".xls";
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
  toast("📥 "+filas.length+" productos exportados");
}

function importarStock(event){
  var file=event.target.files[0];
  if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    var lines=e.target.result.replace(/^﻿/,"").replace(/\r/g,"").split("\n");
    if(lines.length<2){toast("⚠️ Archivo vacío");return;}
    var sep=lines[0].indexOf(";")!==-1?";":",";
    var header=lines[0].toLowerCase().split(sep).map(function(h){return h.trim();});
    var idIdx=header.indexOf("id");
    var stIdx=header.indexOf("stock");
    if(idIdx<0||stIdx<0){toast("⚠️ El CSV debe tener columnas 'id' y 'stock'");return;}
    var actualizados=0;
    lines.slice(1).forEach(function(line){
      if(!line.trim())return;
      var cols=line.split(sep);
      if(!cols[idIdx])return;
      var id=cols[idIdx].trim().replace(/^"|"$/g,"");
      var rawSt=(cols[stIdx]||"").trim().replace(/^"|"$/g,"");
      var p=PRODUCTOS.find(function(x){return x.id===id;});
      if(!p)return;
      if(rawSt===""||rawSt.toLowerCase()==="ilimitado"||rawSt==="∞"){p.stock=null;p.ago=false;actualizados++;}
      else{var stock=parseInt(rawSt,10);if(isNaN(stock))return;p.stock=Math.max(0,stock);p.ago=(p.stock===0);actualizados++;}
    });
    guardarStock(); renderAdmStock();
    toast("✅ "+actualizados+" productos actualizados desde CSV");
    event.target.value="";
  };
  reader.readAsText(file);
}

// ════════════════════ EXPORTAR EXCEL PEDIDOS ════════════════════
function exportarExcel(){
  // Mostrar modal de filtros antes de exportar
  var distLista=DISTRIBUIDORES.filter(function(d){return!d.esAdmin;}).sort(function(a,b){return(a.razon||"").localeCompare(b.razon||"");});
  var distOpts='<option value="">Todos los distribuidores</option>'+distLista.map(function(d){return'<option value="'+escHtml(d.ruc)+'">'+escHtml(d.empresa||d.razon)+'</option>';}).join("");
  var ov=document.createElement("div");
  ov.id="export-filter-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;box-sizing:border-box";
  ov.innerHTML='<div style="background:var(--blanco,#fff);border-radius:18px;padding:24px;max-width:420px;width:100%;box-shadow:0 12px 50px rgba(0,0,0,.4)">'+
    '<h3 style="margin:0 0 16px;font-size:17px">📥 Exportar pedidos — Filtros</h3>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">'+
      '<div><label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Desde</label>'+
      '<input type="date" id="exp-desde" style="width:100%;padding:8px 10px;border:1.5px solid var(--g2,#ddd);border-radius:8px;font-size:13px;box-sizing:border-box"></div>'+
      '<div><label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Hasta</label>'+
      '<input type="date" id="exp-hasta" style="width:100%;padding:8px 10px;border:1.5px solid var(--g2,#ddd);border-radius:8px;font-size:13px;box-sizing:border-box"></div>'+
    '</div>'+
    '<label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Estado</label>'+
    '<select id="exp-estado" style="width:100%;padding:8px 10px;border:1.5px solid var(--g2,#ddd);border-radius:8px;font-size:13px;margin-bottom:12px;box-sizing:border-box">'+
      '<option value="">Todos</option>'+
      '<option value="pendiente">Pendiente</option>'+
      '<option value="en_proceso">En proceso</option>'+
      '<option value="entregado">Entregado</option>'+
      '<option value="facturado">Facturado</option>'+
      '<option value="finalizado">Finalizado</option>'+
      '<option value="cancelado">Cancelado</option>'+
    '</select>'+
    '<label style="font-size:12px;font-weight:600;display:block;margin-bottom:4px">Distribuidor</label>'+
    '<select id="exp-dist" style="width:100%;padding:8px 10px;border:1.5px solid var(--g2,#ddd);border-radius:8px;font-size:13px;margin-bottom:18px;box-sizing:border-box">'+distOpts+'</select>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+
      '<button onclick="document.getElementById(\'export-filter-ov\').remove()" style="padding:11px;border:1.5px solid var(--g2,#ddd);border-radius:10px;background:transparent;font-size:14px;cursor:pointer">Cancelar</button>'+
      '<button onclick="exportarExcelFiltrado()" style="padding:11px;border:none;border-radius:10px;background:#C0392B;color:#fff;font-size:14px;font-weight:700;cursor:pointer">Exportar</button>'+
    '</div>'+
  '</div>';
  document.body.appendChild(ov);
}

function exportarExcelFiltrado(){
  var desde=document.getElementById("exp-desde")?document.getElementById("exp-desde").value:"";
  var hasta=document.getElementById("exp-hasta")?document.getElementById("exp-hasta").value:"";
  var estadoFiltro=document.getElementById("exp-estado")?document.getElementById("exp-estado").value:"";
  var distFiltro=document.getElementById("exp-dist")?document.getElementById("exp-dist").value:"";
  var ov=document.getElementById("export-filter-ov");if(ov)ov.remove();
  var estadosMap={pendiente:"Pendiente",en_proceso:"En proceso",autorizado:"En proceso",entrega:"En proceso",entregado:"Entregado",facturado:"Facturado",finalizado:"Finalizado",cancelado:"Cancelado"};
  function parseFiltroFecha(str){var p=str.split("-");return new Date(parseInt(p[0],10),parseInt(p[1],10)-1,parseInt(p[2],10));}
  var pedsFiltrados=PEDIDOS.slice().reverse().filter(function(p){
    if(desde){var fd=parseFechaPed(p);if(fd<parseFiltroFecha(desde))return false;}
    if(hasta){var fd2=parseFechaPed(p);var hastaD=parseFiltroFecha(hasta);hastaD.setHours(23,59,59,999);if(fd2>hastaD)return false;}
    if(estadoFiltro){
      var estNorm=(p.estado==="autorizado"||p.estado==="entrega")?"en_proceso":p.estado;
      if(estNorm!==estadoFiltro)return false;
    }
    if(distFiltro&&p.ruc!==distFiltro)return false;
    return true;
  });
  var cabeceras=["ID","Fecha","Tipo","Distribuidor","RUC","Estado","Forma de pago","Modo entrega","Productos / Premio","Subtotal","IVA 15%","Total","Puntos","Notas"];
  var filas=pedsFiltrados.map(function(p){
    var dist=DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{};
    var nombre=(dist.empresa||p.razon||"").trim();
    if(p.esCanje){return [p.id,p.fecha,"Canje",nombre,p.ruc,estadosMap[p.estado]||p.estado,"—","—",p.canjeNm||"",0,0,0,p.canjePts||0,""];}
    var prods=(p.items||[]).map(function(it){return it.nm+" x"+it.cant;}).join(" | ");
    return [p.id,p.fecha,"Pedido",nombre,p.ruc,estadosMap[p.estado]||p.estado,p.pago||"",p.modo==="retiro"?"Retiro en local":"Entrega a domicilio",prods,parseFloat((p.subtotal||0).toFixed(2)),parseFloat((p.iva||0).toFixed(2)),parseFloat((p.total||0).toFixed(2)),p.puntos||0,p.notas||""];
  });
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  var NUM_COLS={9:1,10:1,11:1,12:1};
  var xml='<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?>'+
    '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'+
    '<Styles><Style ss:ID="h"><Interior ss:Color="#1A1A1A" ss:Pattern="Solid"/><Font ss:Bold="1" ss:Color="#FFFFFF"/></Style>'+
    '<Style ss:ID="n"><NumberFormat ss:Format="0.00"/></Style></Styles>'+
    '<Worksheet ss:Name="Pedidos"><Table>'+
    '<Column ss:Width="55"/><Column ss:Width="80"/><Column ss:Width="60"/><Column ss:Width="160"/><Column ss:Width="100"/>'+
    '<Column ss:Width="85"/><Column ss:Width="110"/><Column ss:Width="120"/><Column ss:Width="220"/>'+
    '<Column ss:Width="70"/><Column ss:Width="60"/><Column ss:Width="70"/><Column ss:Width="60"/><Column ss:Width="120"/>';
  xml+='<Row>';
  cabeceras.forEach(function(c){xml+='<Cell ss:StyleID="h"><Data ss:Type="String">'+esc(c)+'</Data></Cell>';});
  xml+='</Row>';
  filas.forEach(function(fila){
    xml+='<Row>';
    fila.forEach(function(cel,i){
      if(NUM_COLS[i]){xml+='<Cell ss:StyleID="n"><Data ss:Type="Number">'+parseFloat(cel)+'</Data></Cell>';}
      else{xml+='<Cell><Data ss:Type="String">'+esc(String(cel))+'</Data></Cell>';}
    });
    xml+='</Row>';
  });
  xml+='</Table></Worksheet></Workbook>';
  var blob=new Blob([xml],{type:"application/vnd.ms-excel;charset=utf-8"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a");
  a.href=url; a.download="pedidos_pyroshield_"+new Date().toISOString().slice(0,10)+".xls";
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
  toast("📥 "+filas.length+" registros exportados");
}

// ════════════════════ TOP 5 DISTRIBUIDORES ════════════════════
function renderTop5Distribuidores(){
  var montosDist={};
  PEDIDOS.filter(function(p){return!p.esCanje&&(p.estado==="entregado"||p.estado==="facturado"||p.estado==="finalizado");}).forEach(function(p){
    if(!montosDist[p.ruc])montosDist[p.ruc]={ruc:p.ruc,razon:p.razon,total:0,utilidad:0};
    montosDist[p.ruc].total+=(p.subtotal||0);
    var costoTotal=(p.items||[]).reduce(function(cs,it){return cs+(it.costo!=null?it.costo:getCostoProducto(it.id))*(it.cant||0);},0);
    montosDist[p.ruc].utilidad+=(p.subtotal||0)-costoTotal;
  });
  var top5=Object.values(montosDist).sort(function(a,b){return b.total-a.total;}).slice(0,5);
  if(!top5.length)return'';
  return '<div style="background:var(--g1);border-radius:10px;padding:12px 14px;margin-bottom:14px">'+
    '<div style="font-weight:700;margin-bottom:10px;font-size:14px">🏆 Top 5 distribuidores</div>'+
    top5.map(function(d,i){
      var dist=DISTRIBUIDORES.find(function(x){return x.ruc===d.ruc;})||{};
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--g2)">'+
        '<div><span style="font-weight:700;color:var(--azul);margin-right:8px">#'+(i+1)+'</span>'+
        '<span style="font-size:13px">'+escHtml(dist.empresa||d.razon||"")+'</span></div>'+
        '<span style="font-weight:700;font-size:12px;text-align:right">'+fmt$(d.total)+' subtotal<br><span style="color:var(--verde);font-weight:600">utilidad: '+fmt$(d.utilidad)+'</span></span>'+
      '</div>';
    }).join("")+
  '</div>';
}

// ════════════════════ REPORTE MENSUAL PDF ════════════════════
function generarReporteMensual(){
  var ahora=new Date();
  var mes=ahora.getMonth(),anio=ahora.getFullYear();
  var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  var nombreMes=meses[mes]+" "+anio;
  var pedMes=PEDIDOS.filter(function(p){
    if(p.esCanje)return false;
    var d=parseFechaPed(p);
    return d.getMonth()===mes&&d.getFullYear()===anio&&(p.estado==="entregado"||p.estado==="finalizado"||p.estado==="facturado");
  });
  var totalVentas=pedMes.reduce(function(s,p){return s+(p.subtotal||0);},0);
  var totalCosto=pedMes.reduce(function(s,p){
    return s+(p.items||[]).reduce(function(cs,it){return cs+(it.costo!=null?it.costo:getCostoProducto(it.id))*(it.cant||0);},0);
  },0);
  var utilidad=totalVentas-totalCosto;
  var numPedidos=pedMes.length;
  var prodCounts={};
  pedMes.forEach(function(p){(p.items||[]).forEach(function(it){
    if(!prodCounts[it.id])prodCounts[it.id]={id:it.id,nm:it.nm,cant:0,subtotal:0};
    prodCounts[it.id].cant+=(it.cant||0);
    prodCounts[it.id].subtotal+=(it.pr||0)*(it.cant||0);
  });});
  var topProds=Object.values(prodCounts).sort(function(a,b){return b.subtotal-a.subtotal;}).slice(0,10);
  var baseHref=window.location.href.substring(0,window.location.href.lastIndexOf("/")+1);
  var win=window.open("","_blank","width=800,height=950");
  if(!win){toast("⚠️ Permite las ventanas emergentes para generar el PDF");return;}
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Reporte Mensual '+nombreMes+'</title>'+
    '<base href="'+baseHref+'">'+
    '<style>body{font-family:Arial,sans-serif;font-size:12px;color:#111;padding:28px;max-width:720px;margin:0 auto}'+
    '.header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #C0392B;padding-bottom:14px;margin-bottom:20px}'+
    '.logo{height:64px;width:auto}'+
    '.company{font-weight:900;font-size:20px;color:#C0392B}'+
    '.kpis{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px}'+
    '.kpi{background:#f5f5f5;border-radius:10px;padding:14px;text-align:center}'+
    '.kpi-v{font-size:22px;font-weight:800;color:#C0392B}'+
    '.kpi-l{font-size:11px;color:#888;margin-top:4px}'+
    '.kpi-util{background:#eafaf1;border:1.5px solid #27ae60}'+
    '.kpi-util .kpi-v{color:#1e8449}'+
    'table{width:100%;border-collapse:collapse;margin-top:8px}'+
    'th{background:#1A1A1A;color:#fff;padding:8px 10px;font-size:11px;text-align:left}'+
    'td{padding:8px 10px;border-bottom:1px solid #eee;font-size:11px}'+
    'tr:nth-child(even)td{background:#f9f9f9}'+
    '.sec{font-weight:700;font-size:14px;margin:20px 0 8px}'+
    '.footer{margin-top:24px;font-size:10px;color:#aaa;text-align:center;border-top:1px solid #eee;padding-top:8px}'+
    '@media print{button{display:none}}'+
    '</style></head><body>'+
    '<div class="header">'+
      '<div style="display:flex;align-items:center;gap:14px">'+
        '<img src="img/logo.jpg" class="logo" alt="PyroShield">'+
        '<div><div class="company">PYROSHIELD</div><div style="font-size:10px;color:#666">RUC: 0992220835001</div></div>'+
      '</div>'+
      '<div style="text-align:right"><div style="font-size:18px;font-weight:700">REPORTE MENSUAL</div><div style="font-size:13px;color:#666">'+nombreMes+'</div></div>'+
    '</div>'+
    '<div class="kpis">'+
      '<div class="kpi"><div class="kpi-v">'+fmt$(totalVentas)+'</div><div class="kpi-l">Ventas del mes (subtotal)</div></div>'+
      '<div class="kpi"><div class="kpi-v">'+fmt$(totalCosto)+'</div><div class="kpi-l">Costo total</div></div>'+
      '<div class="kpi kpi-util"><div class="kpi-v">'+fmt$(utilidad)+'</div><div class="kpi-l">Utilidad generada</div></div>'+
      '<div class="kpi"><div class="kpi-v">'+numPedidos+'</div><div class="kpi-l">Pedidos entregados/facturados</div></div>'+
    '</div>'+
    '<div class="sec">Top productos vendidos del mes</div>'+
    (topProds.length?
      '<table><thead><tr><th>#</th><th>Producto</th><th style="text-align:center">Cant.</th><th style="text-align:right">Subtotal</th></tr></thead>'+
      '<tbody>'+topProds.map(function(p,i){
        return '<tr><td>'+(i+1)+'</td><td>'+escHtml(p.nm)+'</td><td style="text-align:center">'+p.cant+'</td><td style="text-align:right">'+fmt$(p.subtotal)+'</td></tr>';
      }).join("")+'</tbody></table>':
      '<div style="color:#aaa;font-size:12px;padding:8px 0">No hay datos este mes.</div>')+
    '<div class="footer">PyroShield · Reporte generado el '+new Date().toLocaleDateString("es-EC")+'</div>'+
    '<div style="margin-top:16px;text-align:center"><button onclick="window.print()" style="padding:10px 24px;background:#C0392B;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer">🖨️ Imprimir / Guardar PDF</button></div>'+
    '</body></html>');
  win.document.close();
}

// ════════════════════ ADMIN RECOMPENSAS ════════════════════
function renderAdmRecompensas(){
  if(USER&&USER.rol==="impresion")return;
  var html='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">'+
    '<div style="font-size:15px;font-weight:700">Recompensas del programa de puntos</div>'+
    '<button class="btn btn-p btn-sm" onclick="abrirNuevaRecompensa()">+ Nueva</button>'+
  '</div>'+
  (REWARDS.length?REWARDS.map(function(r,i){
    return '<div class="card" style="margin-bottom:8px"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">'+
        '<div style="display:flex;align-items:center;gap:10px">'+
          '<div style="font-size:28px">'+escHtml(r.ico||"")+'</div>'+
          '<div>'+
            '<div style="font-weight:700">'+escHtml(r.nm||"")+'</div>'+
            '<div style="font-size:12px;color:var(--azul);font-weight:600">'+fmtPts(r.pts)+' puntos</div>'+
            '<div style="display:flex;align-items:center;gap:4px;margin-top:4px">'+
              '<span style="font-size:11px;color:var(--g3)">Costo real $</span>'+
              '<input type="number" step="0.01" min="0" value="'+(r.costoReal!=null?r.costoReal:"")+'" onchange="setCostoRealRecompensa('+i+',this.value)" style="width:80px;padding:5px 8px;border:1.5px solid var(--azulc);border-radius:8px;font-size:13px;text-align:center;background:var(--azulc)">'+
            '</div>'+
            (r.agotado?'<span style="background:#e74c3c;color:#fff;font-size:10px;padding:2px 8px;border-radius:4px;font-weight:600">AGOTADO</span>':'<span style="background:var(--verdec);color:var(--verde);font-size:10px;padding:2px 8px;border-radius:4px;font-weight:600">Disponible</span>')+
          '</div>'+
        '</div>'+
        '<div style="display:flex;gap:6px;flex-wrap:wrap">'+
          '<button class="btn btn-sm btn-s" onclick="editarRecompensa('+i+')">✏️ Editar</button>'+
          '<button class="btn btn-sm" style="background:'+(r.agotado?"var(--verdec)":"var(--amarc)")+';color:'+(r.agotado?"var(--verde)":"var(--amar)")+';border-color:'+(r.agotado?"var(--verde)":"var(--amar)")+'" onclick="toggleAgotadoRecompensa('+i+')">'+(r.agotado?"✅ Disponible":"⚠️ Agotar")+'</button>'+
          '<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border-color:var(--rojo)" onclick="eliminarRecompensa('+i+')">🗑</button>'+
        '</div>'+
      '</div>'+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">🎁</div><p>No hay recompensas configuradas</p></div>');
  var admRwEl=document.getElementById("adm-recompensas");if(admRwEl)admRwEl.innerHTML=html;
}

function abrirNuevaRecompensa(){
  document.getElementById("modal-rw-edit-c").innerHTML=
    '<div class="mhandle"></div><h3>Nueva recompensa</h3>'+
    '<label class="form-label">Ícono (emoji)</label>'+
    '<input class="form-input" id="rw-ico" placeholder="🎁" maxlength="4">'+
    '<label class="form-label">Nombre</label>'+
    '<input class="form-input" id="rw-nm" placeholder="Ej: Tarjeta consumo $20">'+
    '<label class="form-label">Puntos requeridos</label>'+
    '<input class="form-input" id="rw-pts" type="number" min="1" placeholder="2000">'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">'+
      '<button class="btn btn-s" onclick="cerrarModal(\'modal-rw-edit\')">Cancelar</button>'+
      '<button class="btn btn-p" onclick="guardarNuevaRecompensa()">Guardar</button>'+
    '</div>';
  abrir("modal-rw-edit");
}

function guardarNuevaRecompensa(){
  var ico=document.getElementById("rw-ico").value.trim()||"🎁";
  var nm=document.getElementById("rw-nm").value.trim();
  var pts=parseInt(document.getElementById("rw-pts").value,10);
  if(!nm||isNaN(pts)||pts<1){toast("⚠️ Completa todos los campos");return;}
  REWARDS.push({pts:pts,ico:ico,nm:nm,agotado:false});
  guardarRewards(); cerrarModal("modal-rw-edit"); renderAdmRecompensas();
  toast("✅ Recompensa agregada");
}

function editarRecompensa(idx){
  var r=REWARDS[idx];
  if(!r)return;
  document.getElementById("modal-rw-edit-c").innerHTML=
    '<div class="mhandle"></div><h3>Editar recompensa</h3>'+
    '<label class="form-label">Ícono (emoji)</label>'+
    '<input class="form-input" id="rw-ico" value="'+escHtml(r.ico)+'" maxlength="4">'+
    '<label class="form-label">Nombre</label>'+
    '<input class="form-input" id="rw-nm" value="'+escHtml(r.nm)+'">'+
    '<label class="form-label">Puntos requeridos</label>'+
    '<input class="form-input" id="rw-pts" type="number" min="1" value="'+r.pts+'">'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">'+
      '<button class="btn btn-s" onclick="cerrarModal(\'modal-rw-edit\')">Cancelar</button>'+
      '<button class="btn btn-p" onclick="guardarEditarRecompensa('+idx+')">Guardar</button>'+
    '</div>';
  abrir("modal-rw-edit");
}

function guardarEditarRecompensa(idx){
  var r=REWARDS[idx];
  if(!r)return;
  var ico=document.getElementById("rw-ico").value.trim()||r.ico;
  var nm=document.getElementById("rw-nm").value.trim();
  var pts=parseInt(document.getElementById("rw-pts").value,10);
  if(!nm||isNaN(pts)||pts<1){toast("⚠️ Completa todos los campos");return;}
  r.ico=ico; r.nm=nm; r.pts=pts;
  guardarRewards(); cerrarModal("modal-rw-edit"); renderAdmRecompensas();
  toast("✅ Recompensa actualizada");
}

function setCostoRealRecompensa(idx,val){
  var r=REWARDS[idx];
  if(!r)return;
  var n=parseFloat(val);
  r.costoReal=isNaN(n)||val===""?null:n;
  guardarRewards();
  toast("✅ Costo real actualizado");
}

function toggleAgotadoRecompensa(idx){
  var r=REWARDS[idx];
  if(!r)return;
  r.agotado=!r.agotado;
  guardarRewards(); renderAdmRecompensas();
  toast(r.agotado?"⚠️ Recompensa marcada como agotada":"✅ Recompensa disponible");
}

function eliminarRecompensa(idx){
  confirmar("¿Eliminar esta recompensa?",function(){
    REWARDS.splice(idx,1);
    guardarRewards(); renderAdmRecompensas();
    toast("✅ Recompensa eliminada");
  });
}

// ════════════════════ NOTIFICACIONES ADMIN ════════════════════
var _notifInterval=null;
var _storageListenerAdded=false;
function iniciarNotificacionesAdmin(){
  if(typeof Notification==="undefined")return;
  Notification.requestPermission();
  setTimeout(chequearPedidosNuevos,1200);
  if(_notifInterval)clearInterval(_notifInterval);
  _notifInterval=setInterval(function(){
    chequearPedidosNuevos();
    if(Notification.permission!=="granted")return;
    var pendientes=PEDIDOS.filter(function(p){return p.estado==="pendiente"&&!p.esCanje;}).length;
    var canjesPend=PEDIDOS.filter(function(p){return p.estado==="pendiente"&&p.esCanje;}).length;
    if(pendientes>0||canjesPend>0){
      var msg=[];
      if(pendientes>0)msg.push(pendientes+" pedidos pendiente(s)");
      if(canjesPend>0)msg.push(canjesPend+" canje(s) pendiente(s)");
      new Notification("PyroShield — Pendientes sin procesar",{body:"Tienes "+msg.join(" y ")+" de procesar.",icon:"img/logo.jpg"});
    }
  },30*60*1000);
  if(!_storageListenerAdded){
    _storageListenerAdded=true;
    window.addEventListener("storage",function(e){
      if(e.key==="pyro_pedidos"&&USER&&USER.esAdmin){
        PEDIDOS=cargarPedidos(); chequearPedidosNuevos();
      }
    });
  }
}

function chequearPedidosNuevos(){
  if(Notification.permission!=="granted")return;
  var vistos;
  try{vistos=JSON.parse(localStorage.getItem("pyro_notif_vistas")||"[]");}catch(e){vistos=[];}
  var nuevos=PEDIDOS.filter(function(p){return p.estado==="pendiente"&&vistos.indexOf(p.id)===-1;});
  nuevos.forEach(function(p){
    new Notification(p.esCanje?"PyroShield — Nuevo canje":"PyroShield — Nuevo pedido",{
      body:p.esCanje?"Canje solicitado por "+p.razon:"Te ha llegado un pedido de "+p.razon,
      icon:"img/logo.jpg"
    });
    vistos.push(p.id);
  });
  // Siempre podar IDs de pedidos eliminados para evitar crecimiento ilimitado
  var idsPedidos=PEDIDOS.map(function(p){return p.id;});
  var vistosLimpios=vistos.filter(function(id){return idsPedidos.indexOf(id)!==-1;});
  if(nuevos.length||vistosLimpios.length!==vistos.length){
    try{localStorage.setItem("pyro_notif_vistas",JSON.stringify(vistosLimpios));}catch(e){}
  }
}

// ════════════════════ SINCRONIZACIÓN GOOGLE SHEETS ════════════════════
// NOTA para doPost en Apps Script: parsear con JSON.parse(e.postData.contents)
var GAS_URL="https://script.google.com/macros/s/AKfycbwiIAupZxy2T33EiDHbwkLBHTw0Q2Uv98r8pc9L351b6lXwY_mOD6kI2tvfzqdIUdxG/exec";
var GAS_TOKEN="PyroShield-portal-2026";

function cargarSyncPendientes(){
  try{return JSON.parse(localStorage.getItem("pyro_sync_pendientes")||"[]");}catch(e){return[];}
}
function guardarSyncPendientes(lista){
  try{localStorage.setItem("pyro_sync_pendientes",JSON.stringify(lista));}catch(e){}
}

function sincronizarConSheets(ped, silencioso){
  // Validar y sanitizar campos antes de enviar a GAS
  // GAS tiene límite ~50,000 chars por celda
  var MAX_CELL=45000;
  var itemsStr=JSON.stringify(ped.items||[]);
  var pedJson=JSON.stringify(ped);
  // Truncar si excede límite (nunca debería, pero previene error 400 en GAS)
  if(itemsStr.length>MAX_CELL)itemsStr=itemsStr.slice(0,MAX_CELL);
  if(pedJson.length>MAX_CELL)pedJson=pedJson.slice(0,MAX_CELL);
  // Validar campos críticos
  if(!ped.id||!ped.ruc){_encolar();return;}
  var payload={
    accion:"guardarPedidoPyro",
    token:GAS_TOKEN,
    id_pedido:ped.id,
    fecha:ped.fechaISO,
    ruc_dist:ped.ruc,
    nombre_dist:ped.razon,
    items_json:itemsStr,
    total:ped.total,
    estado:ped.estado,
    pedido_json:pedJson
  };
  // En caso de fallo, guarda una copia con el estado actual (reemplaza la anterior)
  function _encolar(){
    var pend=cargarSyncPendientes();
    pend=pend.filter(function(x){return x.id!==ped.id;});
    pend.push(ped);
    guardarSyncPendientes(pend);
    if(!silencioso)toast("☁️ Pendiente de sincronización (se reintentará)");
  }
  fetch(GAS_URL,{
    method:"POST",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify(payload)
  }).then(function(r){return r.json();}).then(function(d){
    if(d&&d.ok){
      var pend=cargarSyncPendientes();
      pend=pend.filter(function(x){return x.id!==ped.id;});
      guardarSyncPendientes(pend);
    } else {
      if(d&&!d.ok&&d.error){
        console.warn("[GAS] error:",d.error);
        // Error de configuración (token/autorización): no reintentar
        if(typeof d.error==="string"&&/(token|autorizado)/i.test(d.error)){
          if(USER&&USER.esAdmin)toast("⚠️ GAS: error de configuración — "+d.error);
          return;
        }
      }
      _encolar();
    }
  }).catch(function(){
    _encolar();
  });
}

function reintentarSyncPendientes(){
  if(!navigator.onLine)return;
  var pend=cargarSyncPendientes();
  if(!pend.length)return;
  pend.forEach(function(ped){sincronizarConSheets(ped,true);});
}

// ════════════════════ MODALES / UTIL ════════════════════
function abrir(id){var el=document.getElementById(id);if(el)el.classList.add("open");}
function cerrarModal(id){var el=document.getElementById(id);if(el)el.classList.remove("open");}
function abrirContacto(){abrir("modal-contacto");}
var _tt;
function toast(m){var t=document.getElementById("toast");t.className="toast";t.textContent=m;t.classList.add("show");clearTimeout(_tt);_tt=setTimeout(function(){t.classList.remove("show");},2400);}
function toastGold(m){var t=document.getElementById("toast");t.className="toast gold";t.textContent=m;t.classList.add("show");clearTimeout(_tt);_tt=setTimeout(function(){t.classList.remove("show");},3200);}
function confirmar(html,cb){
  document.getElementById("modal-conf-c").innerHTML='<div class="mhandle"></div><div style="font-size:15px;line-height:1.5;margin-bottom:18px">'+html+'</div>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="btn btn-s" onclick="cerrarModal(\'modal-conf\')">Cancelar</button><button class="btn btn-p" id="conf-ok">Confirmar</button></div>';
  abrir("modal-conf");
  var ok=document.getElementById("conf-ok");
  ok.onclick=function(){cerrarModal("modal-conf");ok.onclick=null;cb();};
}

// Persistencia
function cargarCarrito(){if(!USER||!USER.ruc)return[];try{return JSON.parse(localStorage.getItem("pyro_cart_"+USER.ruc)||"[]");}catch(e){return[];}}
function guardarCarrito(){if(!USER||!USER.ruc)return;try{localStorage.setItem("pyro_cart_"+USER.ruc,JSON.stringify(CARRITO));}catch(e){avisarStorage();}}
function cargarPedidos(){try{return JSON.parse(localStorage.getItem("pyro_pedidos")||"[]");}catch(e){return[];}}
function checkStorageQuota(){
  try{
    var total=0;
    for(var k in localStorage){if(localStorage.hasOwnProperty(k))total+=localStorage[k].length+k.length;}
    var mb=(total*2/1024/1024).toFixed(1);
    if(total*2>4*1024*1024&&USER&&USER.esAdmin){
      toast("⚠️ Almacenamiento local al "+Math.round(total*2/4/1024/1024*100)+"% ("+mb+"MB) — haz backup desde Config");
    }
  }catch(e){}
}

// ════════════════════ PODA DE PEDIDOS VIEJOS (solo admin) ════════════════════
// El Google Sheet conserva TODO para siempre. En el dispositivo del admin solo
// mantenemos los pedidos recientes para no llenar el localStorage (~5MB). Los
// clientes NUNCA se podan (tienen pocos pedidos y los necesitan para sus puntos).
var _RETEN_MESES_ADMIN=13;
// Gestor = admin o rol impresión: ambos ven TODOS los pedidos y por eso se podan.
function _esGestor(){return!!(USER&&(USER.esAdmin||USER.rol==="impresion"));}
function _cutoffPodaAdmin(){var d=new Date();d.setMonth(d.getMonth()-_RETEN_MESES_ADMIN);d.setHours(0,0,0,0);return d;}
// ¿Conservar este pedido en el dispositivo del gestor?
function _conservarPedidoAdmin(p){
  // Activo (no terminal) → siempre se conserva, sin importar la antigüedad
  if(p.estado!=="finalizado"&&p.estado!=="cancelado")return true;
  // Terminal pero reciente (dentro de la ventana de retención) → se conserva
  var f=parseFechaPed(p);
  if(f&&f.getTime()>=_cutoffPodaAdmin().getTime())return true;
  return false;
}
function podarPedidosAdmin(){
  if(!_esGestor())return false;
  var antes=PEDIDOS.length;
  PEDIDOS=PEDIDOS.filter(_conservarPedidoAdmin);
  if(PEDIDOS.length!==antes){
    guardarPedidos();
    return true;
  }
  return false;
}
function guardarPedidos(){
  _logrosCache=null;
  checkStorageQuota();
  try{
    localStorage.setItem("pyro_pedidos",JSON.stringify(PEDIDOS));
    backupCambio();
  }catch(e){
    _recuperarStorage("pyro_pedidos", JSON.stringify(PEDIDOS));
  }
  if(typeof sbPushPedidos==="function")sbPushPedidos();
}
function guardarStock(){var st={};PRODUCTOS.forEach(function(p){st[p.id]={stock:p.stock,ago:p.ago};});try{localStorage.setItem("pyro_stock",JSON.stringify(st));backupCambio();}catch(e){}if(typeof sbPushStock==="function")sbPushStock();}
function cargarStock(){try{var st=JSON.parse(localStorage.getItem("pyro_stock")||"{}");PRODUCTOS.forEach(function(p){if(st[p.id]!=null){p.stock=st[p.id].stock;p.ago=st[p.id].ago;}});}catch(e){}}
function guardarDistribuidores(){
  try{
    // Excluir admins y usuarios de sistema (rol:"impresion") — su fuente de verdad es datos.js
    var todos=DISTRIBUIDORES.filter(function(d){return!d.esAdmin&&d.rol!=="impresion";});
    localStorage.setItem("pyro_dist_extra",JSON.stringify(todos));
    backupCambio();
  }catch(e){avisarStorage();}
  if(typeof sbPushDistribuidores==="function")sbPushDistribuidores();
}
function cargarDistribuidoresExtra(){
  try{
    // Quitar los distribuidores marcados como eliminados (incluye los de datos.js)
    var elim=[];try{elim=JSON.parse(localStorage.getItem("pyro_dist_eliminados")||"[]");}catch(e){}
    if(elim.length){
      for(var k=DISTRIBUIDORES.length-1;k>=0;k--){
        if(!DISTRIBUIDORES[k].esAdmin&&DISTRIBUIDORES[k].rol!=="impresion"&&elim.indexOf(DISTRIBUIDORES[k].ruc)!==-1)DISTRIBUIDORES.splice(k,1);
      }
    }
    var extra=[];try{extra=JSON.parse(localStorage.getItem("pyro_dist_extra")||"[]");}catch(e){}
    extra.forEach(function(d){
      if(elim.indexOf(d.ruc)!==-1)return;
      var idx=DISTRIBUIDORES.findIndex(function(x){return x.ruc===d.ruc;});
      if(idx>-1){
        // No sobreescribir usuarios de sistema (admin, impresion) — sus datos vienen de datos.js
        if(DISTRIBUIDORES[idx].esAdmin||DISTRIBUIDORES[idx].rol==="impresion")return;
        // La contraseña de datos.js es la fuente de verdad — solo la sobreescribimos si el usuario la cambió explícitamente
        var passOrig=DISTRIBUIDORES[idx].pass;
        Object.assign(DISTRIBUIDORES[idx],d);
        if(!d.passModificado)DISTRIBUIDORES[idx].pass=passOrig;
      } else {
        DISTRIBUIDORES.push(d);
      }
    });
  }catch(e){}
}
var _storageAvisado=false;
var _storageBannerShown=false;
function _recuperarStorage(key, value){
  // 1. Intentar liberar espacio eliminando claves no críticas
  var nonCritical=[];
  try{for(var k in localStorage){if(/^pyro_busquedas_|^pyro_tipsec_|^pyro_tut_pts_|^pyro_logro_/.test(k)||k==="pyro_log_accesos")nonCritical.push(k);}}catch(e){}
  nonCritical.forEach(function(k){try{localStorage.removeItem(k);}catch(e){}});
  // 2. Reintentar
  try{
    localStorage.setItem(key, value);
    return; // éxito tras liberar espacio
  }catch(e2){}
  // 3. Si sigue fallando: mostrar modal con los datos para que el usuario los copie
  var safeVal=value;
  try{
    var existing=document.getElementById("modal-storage-recovery");
    if(existing)existing.parentNode.removeChild(existing);
    var div=document.createElement("div");
    div.id="modal-storage-recovery";
    div.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px";
    div.innerHTML='<div style="background:#fff;color:#000;border-radius:12px;padding:20px;max-width:520px;width:100%;max-height:90vh;overflow:auto">'+
      '<h3 style="margin:0 0 10px;color:#c0392b">⚠️ Error al guardar — copia este texto</h3>'+
      '<p style="font-size:13px;margin:0 0 10px">El almacenamiento local está lleno. Tus datos <b>NO se han perdido</b>. Copia el texto a continuación y envíalo al administrador.</p>'+
      '<textarea id="storage-recovery-txt" style="width:100%;height:180px;font-size:11px;font-family:monospace;border:1px solid #ccc;border-radius:6px;padding:8px" readonly>'+safeVal.replace(/</g,"&lt;")+'</textarea>'+
      '<div style="margin-top:10px;display:flex;gap:8px">'+
      '<button onclick="(function(){var t=document.getElementById(\'storage-recovery-txt\');t.select();document.execCommand(\'copy\');alert(\'Copiado.\');})()" style="padding:8px 16px;background:#e74c3c;color:#fff;border:none;border-radius:6px;cursor:pointer">Copiar</button>'+
      '<button onclick="document.getElementById(\'modal-storage-recovery\').remove()" style="padding:8px 16px;background:#666;color:#fff;border:none;border-radius:6px;cursor:pointer">Cerrar</button>'+
      '</div></div>';
    document.body.appendChild(div);
  }catch(e3){}
}
function avisarStorage(){
  // Detectar modo privado / localStorage completamente no disponible
  var lsAvailable=true;
  try{localStorage.setItem("_pyro_test","1");localStorage.removeItem("_pyro_test");}catch(e){lsAvailable=false;}
  if(!lsAvailable&&!_storageBannerShown){
    _storageBannerShown=true;
    try{
      var banner=document.createElement("div");
      banner.style.cssText="position:fixed;top:0;left:0;right:0;background:#c0392b;color:#fff;text-align:center;padding:10px 16px;font-size:14px;z-index:99998";
      banner.innerHTML="⚠️ <b>Modo privado detectado:</b> los datos no se guardarán entre sesiones. Usa una ventana normal para continuar.";
      document.body.insertBefore(banner,document.body.firstChild);
    }catch(e){}
    return;
  }
  if(_storageAvisado)return;
  _storageAvisado=true;
  toast("⚠️ No se pudo guardar localmente. Revisa el espacio o modo privado.");
}

// ═══════════ TRACKING VISUAL DEL PEDIDO ═══════════
function renderTrackingPedido(estado){
  var pasos=["pendiente","en_proceso","entregado","finalizado"];
  var labels=["Pendiente","En proceso","Entregado","Finalizado"];
  var iconos=["⏳","🚚","📦","✅"];
  // Normalizar estados
  var estadoNorm=estado;
  if(estado==="autorizado"||estado==="entrega")estadoNorm="en_proceso";
  if(estado==="facturado")estadoNorm="en_proceso";
  var idxActual=pasos.indexOf(estadoNorm);
  if(idxActual===-1)idxActual=estado==="cancelado"?-2:0;
  if(estado==="cancelado"){
    return '<div class="track-wrap"><div style="text-align:center;color:var(--g3);font-size:13px;padding:12px 0">✕ Pedido cancelado</div></div>';
  }
  var html='<div class="track-wrap">';
  pasos.forEach(function(p,i){
    var done=i<=idxActual;
    var active=i===idxActual;
    html+='<div class="track-step'+(done?" done":"")+(active?" current":"")+'">'+
      '<div class="track-dot">'+iconos[i]+'</div>'+
      '<div class="track-label">'+labels[i]+'</div>'+
    '</div>';
    if(i<pasos.length-1)html+='<div class="track-line'+(i<idxActual?" done":"")+'"></div>';
  });
  html+='</div>';
  return html;
}

// ═══════════ HISTORIAL DE PUNTOS ═══════════
function togglePtsHistorial(){
  var lista=document.getElementById("pts-historial-lista");
  var btn=document.querySelector("#pts-historial-wrap button");
  if(!lista)return;
  var visible=lista.style.display!=="none";
  lista.style.display=visible?"none":"block";
  if(btn)btn.textContent=visible?"📊 Ver historial de puntos":"📊 Ocultar historial";
  if(!visible)renderPtsHistorial();
}
function renderPtsHistorial(){
  var lista=document.getElementById("pts-historial-lista");
  if(!lista)return;
  var mp=misPedidos().filter(function(p){return!p.esCanje&&(p.puntos||0)>0;}).slice().reverse();
  if(!mp.length){lista.innerHTML='<div class="empty"><p>Sin pedidos con puntos aún</p></div>';return;}
  lista.innerHTML='<div class="sec-titulo" style="font-size:16px">Pedidos con puntos</div>'+
    mp.map(function(p){
      var confirmado=p.estado==="entregado"||p.estado==="finalizado";
      var cancelado=p.estado==="cancelado";
      var color=cancelado?"var(--g3)":confirmado?"var(--verde)":"var(--amar)";
      var label=cancelado?"cancelado":confirmado?"acreditados":"pendientes";
      return '<div class="ped" style="padding:10px 14px">'+
        '<div style="display:flex;justify-content:space-between;align-items:center">'+
          '<div><div style="font-size:12px;color:var(--g3)">Pedido #'+p.id+' · '+p.fecha+'</div>'+
          '<div style="font-size:13px;font-weight:700;color:'+color+'">🏆 '+fmtPts(p.puntos)+' pts '+label+'</div></div>'+
          '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabel(p.estado)+'</span>'+
        '</div>'+
      '</div>';
    }).join("");
}

// ═══════════ MODO OFFLINE ═══════════
function actualizarBannerOffline(){
  mostrarBannerOffline(!navigator.onLine);
}

function mostrarBannerOffline(offline){
  var ID="pyro-offline-bar";
  if(offline){
    var bar=document.getElementById(ID);
    if(!bar){
      bar=document.createElement("div");
      bar.id=ID;
      bar.style.cssText="position:fixed;top:0;left:0;right:0;z-index:9999;background:#e74c3c;color:#fff;text-align:center;padding:10px 16px;font-size:14px;font-weight:600;letter-spacing:.2px;box-shadow:0 2px 8px rgba(0,0,0,.25)";
      document.body.prepend(bar);
    }
    bar.textContent="📡 Sin conexión — tus pedidos se guardarán y enviarán automáticamente cuando vuelva la red";
    bar.style.display="block";
  } else {
    var bar2=document.getElementById(ID);
    if(bar2){
      var _eraVisible=bar2.style.display!=="none";
      bar2.style.display="none";
      if(_eraVisible){toast("✅ Conexión restaurada — sincronizando...");procesarColaOffline();}
    }
  }
}

function cargarColaOffline(){
  try{return JSON.parse(localStorage.getItem("pyro_cola_offline")||"[]");}catch(e){return[];}
}
function guardarColaOffline(cola){
  try{localStorage.setItem("pyro_cola_offline",JSON.stringify(cola));}catch(e){}
}

function procesarColaOffline(){
  if(!navigator.onLine)return;
  var cola=cargarColaOffline();
  if(!cola.length)return;
  var enviados=0;
  cola.forEach(function(pedId){
    var ped=PEDIDOS.find(function(p){return p.id===pedId;});
    if(!ped)return;
    // sincronizarConSheets ya incluye token, pedido_json y reintentos propios
    sincronizarConSheets(ped,true);
    enviados++;
  });
  guardarColaOffline([]);
  if(enviados>0){
    toast("☁️ "+enviados+" pedido(s) enviado(s) a la nube");
    // Refrescar banner de inicio si está visible
    if(document.getElementById("offline-cola-banner"))renderInicio();
  }
}

// ═══════════ TEMA CLARO / OSCURO (persistente) ═══════════
// Estados: "auto" (sigue al sistema), "light", "dark"
function temaGuardado(){try{return localStorage.getItem("pyro_tema")||"auto";}catch(e){return"auto";}}
function aplicarTema(modo){
  var html=document.documentElement;
  if(modo==="auto"){
    var osDark=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;
    html.setAttribute("data-theme",osDark?"dark":"light");
  } else {
    html.setAttribute("data-theme",modo);
  }
  try{localStorage.setItem("pyro_tema",modo);}catch(e){}
  var lbl=document.getElementById("tema-actual-lbl");
  if(lbl)lbl.textContent=modo==="auto"?"Automático":(modo==="dark"?"Oscuro":"Claro");
}
function cambiarTema(){
  var orden=["auto","light","dark"];
  var actual=temaGuardado();
  var sig=orden[(orden.indexOf(actual)+1)%orden.length];
  aplicarTema(sig);
  toast(sig==="auto"?"🌓 Tema automático":(sig==="dark"?"🌙 Tema oscuro":"☀️ Tema claro"));
}

// ═══════════ SWIPE PARA ELIMINAR EN CARRITO ═══════════
function activarSwipeCarrito(){
  var items=document.querySelectorAll('#cart-lista .item[data-cart-id]');
  items.forEach(function(el){
    var startX=0,startY=0,curX=0,dragging=false;
    el.style.transition="transform .2s ease";
    el.addEventListener("touchstart",function(e){
      startX=e.touches[0].clientX;startY=e.touches[0].clientY;dragging=false;el.style.transition="none";
    },{passive:true});
    el.addEventListener("touchmove",function(e){
      curX=e.touches[0].clientX;
      var dx=curX-startX,dy=e.touches[0].clientY-startY;
      if(Math.abs(dx)>Math.abs(dy)&&dx<0){
        dragging=true;
        el.style.transform="translateX("+Math.max(dx,-120)+"px)";
        el.style.background=dx<-60?"var(--rojoc)":"";
      }
    },{passive:true});
    el.addEventListener("touchend",function(e){
      el.style.transition="transform .2s ease";
      // Actualizar curX desde changedTouches si está disponible (más preciso en Safari)
      if(e.changedTouches&&e.changedTouches[0])curX=e.changedTouches[0].clientX;
      var dx=curX-startX;
      if(dragging&&dx<-80){
        el.style.transform="translateX(-100%)";
        var id=el.getAttribute("data-cart-id");
        setTimeout(function(){quitarItem(id);},150);
      } else {
        el.style.transform="";el.style.background="";
      }
    });
  });
}

// ═══════════ BOTÓN VOLVER ARRIBA ═══════════
function activarScrollTop(){
  var contentEl=document.querySelector("#s-main .content");
  var btn=document.getElementById("btn-top");
  if(!contentEl||!btn)return;
  contentEl.addEventListener("scroll",function(){
    btn.style.display=contentEl.scrollTop>400?"flex":"none";
  });
}
function scrollTop(){
  var contentEl=document.querySelector("#s-main .content");
  if(contentEl)contentEl.scrollTo({top:0,behavior:"smooth"});
}

// ═══════════ SWIPE ENTRE TABS ═══════════
function activarSwipe(){
  var contentEl=document.querySelector("#s-main .content");
  if(!contentEl)return;
  var tabsOrder=["inicio","catalogo","carrito","historial","recompensas"];
  var sx=0,sy=0;
  contentEl.addEventListener("touchstart",function(e){
    if(e.touches&&e.touches[0]){sx=e.touches[0].clientX;sy=e.touches[0].clientY;}
  },{passive:true});
  contentEl.addEventListener("touchend",function(e){
    // Safari iOS puede no incluir changedTouches si el dedo salió del viewport
    var touch=e.changedTouches&&e.changedTouches[0];
    if(!touch)return;
    var dx=touch.clientX-sx;
    var dy=touch.clientY-sy;
    if(Math.abs(dx)>60&&Math.abs(dy)<50){
      var current=document.querySelector("#s-main .bnav.active");
      if(!current)return;
      var id=current.id.replace("bnav-","");
      var idx=tabsOrder.indexOf(id);
      if(dx<0&&idx<tabsOrder.length-1)irTab(tabsOrder[idx+1]);
      else if(dx>0&&idx>0)irTab(tabsOrder[idx-1]);
    }
  },{passive:true});
}

// ═══════════ PULL TO REFRESH ═══════════
function activarPullToRefresh(){
  var contentEl=document.querySelector("#s-main .content");
  var indicator=document.getElementById("ptr-indicator");
  if(!contentEl||!indicator)return;
  var startY=0,pulling=false,threshold=80;
  contentEl.addEventListener("touchstart",function(e){
    if(contentEl.scrollTop===0){startY=e.touches[0].clientY;pulling=true;}
    else{pulling=false;}
  },{passive:true});
  contentEl.addEventListener("touchmove",function(e){
    if(!pulling)return;
    var dy=e.touches[0].clientY-startY;
    if(dy>20){indicator.style.display="block";indicator.textContent=dy>threshold?"✓ Suelta para actualizar":"↓ Tira para actualizar";}
  },{passive:true});
  contentEl.addEventListener("touchend",function(e){
    if(!pulling)return;
    var touch=e.changedTouches&&e.changedTouches[0];
    if(!touch){indicator.style.display="none";pulling=false;return;}
    var dy=touch.clientY-startY;
    indicator.style.display="none";
    pulling=false;
    if(dy>threshold){
      var current=document.querySelector("#s-main .bnav.active");
      if(!current)return;
      var id=current.id.replace("bnav-","");
      irTab(id);
    }
  },{passive:true});
}

// ═══════════ AUTOGUARDADO CARRITO ═══════════
function iniciarAutoguardado(){
  if(_autoguardadoInterval)clearInterval(_autoguardadoInterval);
  _autoguardadoInterval=setInterval(function(){
    if(!USER||USER.esAdmin||!CARRITO.length)return;
    var borradores=[];
    try{borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+USER.ruc)||"[]");}catch(e){}
    var idx=-1;
    for(var i=0;i<borradores.length;i++){if(borradores[i].nombre==="Autoguardado"){idx=i;break;}}
    var entry={ts:Date.now(),nombre:"Autoguardado",items:JSON.parse(JSON.stringify(CARRITO))};
    if(idx>-1){borradores[idx]=entry;}
    else if(borradores.length<3){borradores.push(entry);}
    // Si ya hay 3 borradores manuales y ninguno es autoguardado, NO pisar los del usuario
    try{localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));}catch(e){}
  },60000);
}

document.addEventListener("click",function(e){if(e.target.classList.contains("ov"))e.target.classList.remove("open");});

// ════════════════════ ERROR MONITORING ════════════════════
var _errLog=[];
function _capturarError(msg,src,linea,col,err){
  try{
    var entrada={ts:new Date().toISOString(),msg:String(msg).substring(0,200),src:(src||"").replace(/.*\//,""),linea:linea,col:col,stack:err&&err.stack?String(err.stack).substring(0,400):""};
    _errLog.push(entrada);
    if(_errLog.length>50)_errLog=_errLog.slice(-50);
    // Persistir en localStorage para que el admin pueda verlos
    try{localStorage.setItem("pyro_errlog",JSON.stringify(_errLog));}catch(e){}
    // Si es admin, mostrar badge de error
    if(window._USER&&window._USER.esAdmin)_actualizarBadgeErrores();
  }catch(e){}
}
function _actualizarBadgeErrores(){
  var badge=document.getElementById("err-monitor-badge");
  if(!badge)return;
  var count=_errLog.filter(function(e){return!e.visto;}).length;
  badge.style.display=count>0?"flex":"none";
  badge.textContent=count>9?"9+":String(count);
}
function _iniciarMonitorErrores(){
  // Cargar log previo
  try{var prev=JSON.parse(localStorage.getItem("pyro_errlog")||"[]");if(Array.isArray(prev))_errLog=prev;}catch(e){}
  window.onerror=function(msg,src,linea,col,err){_capturarError(msg,src,linea,col,err);return false;};
  window.addEventListener("unhandledrejection",function(e){_capturarError("UnhandledPromise: "+(e.reason&&e.reason.message?e.reason.message:String(e.reason)),"promise",0,0,e.reason instanceof Error?e.reason:null);});
}
function verLogErrores(){
  try{_errLog=JSON.parse(localStorage.getItem("pyro_errlog")||"[]");}catch(e){_errLog=[];}
  _errLog.forEach(function(e){e.visto=true;});
  try{localStorage.setItem("pyro_errlog",JSON.stringify(_errLog));}catch(e){}
  _actualizarBadgeErrores();
  if(!_errLog.length){toast("✅ Sin errores registrados");return;}
  var html='<div class="mhandle"></div><h3>🔴 Log de errores ('+_errLog.length+')</h3>'+
    '<button class="btn btn-s" style="margin-bottom:10px" onclick="limpiarLogErrores()">🗑️ Limpiar log</button>'+
    _errLog.slice().reverse().map(function(e){
      return '<div style="background:var(--g1);border-radius:8px;padding:8px 10px;margin-bottom:6px;font-size:11px;font-family:monospace">'+
        '<div style="color:var(--g3);margin-bottom:2px">'+e.ts.replace('T',' ').substring(0,19)+(e.src?' · '+e.src+':'+e.linea:'')+'</div>'+
        '<div style="color:var(--rojo);font-weight:700">'+escHtml(e.msg)+'</div>'+
        (e.stack?'<div style="color:var(--g3);margin-top:2px;white-space:pre-wrap">'+escHtml(e.stack.substring(0,200))+'</div>':'')+'</div>';
    }).join('')+
    '<button class="btn btn-s btn-full" style="margin-top:8px" onclick="cerrarModal(\'modal-err-log\')">Cerrar</button>';
  document.getElementById("modal-err-log-c").innerHTML=html;
  abrir("modal-err-log");
}
function limpiarLogErrores(){
  _errLog=[];
  try{localStorage.removeItem("pyro_errlog");}catch(e){}
  cerrarModal("modal-err-log");
  toast("✅ Log de errores limpiado");
}

function verificarIntegridadStorage(){
  var claves=[
    {k:"pyro_pedidos",def:"[]",validator:function(v){return Array.isArray(v);}},
    {k:"pyro_stock",def:"{}",validator:function(v){return v&&typeof v==="object"&&!Array.isArray(v);}},
    {k:"pyro_dist_extra",def:"[]",validator:function(v){return Array.isArray(v);}},
    {k:"pyro_dist_eliminados",def:"[]",validator:function(v){return Array.isArray(v);}},
    {k:"pyro_rewards",def:"[]",validator:function(v){return Array.isArray(v);}}
  ];
  claves.forEach(function(c){
    try{
      var raw=localStorage.getItem(c.k);
      if(raw===null)return; // no existe aún, OK
      var parsed=JSON.parse(raw);
      if(!c.validator(parsed)){
        console.warn("[Storage] Dato corrupto en "+c.k+", restaurando...");
        localStorage.setItem(c.k,c.def);
      }
    }catch(e){
      console.warn("[Storage] JSON inválido en "+c.k+", restaurando...");
      try{localStorage.setItem(c.k,c.def);}catch(e2){}
    }
  });
}
// ════════ RESET DE PRODUCCIÓN ════════
// Visita ?reset=PYRO2026 una sola vez para borrar todos los datos de prueba.
// Limpia: localStorage, Supabase (pedidos/stock/distribuidores), Google Sheets.
async function _ejecutarResetProduccion() {
  document.body.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;background:#0a0a1a;color:#fff;gap:16px"><div style="font-size:2rem">🧹</div><div id="_rst_msg" style="font-size:1.1rem">Limpiando datos de prueba…</div><div id="_rst_log" style="font-size:.85rem;color:#aaa;max-width:400px;text-align:center"></div></div>';
  var msg = document.getElementById("_rst_msg");
  var log = document.getElementById("_rst_log");
  function step(t) { log.textContent = t; }

  // Borra una tabla Supabase via REST directo (sin SDK — siempre funciona)
  async function _sbDel(table, col) {
    var url = "https://flxweylyksddssvuqdzq.supabase.co/rest/v1/" + table + "?" + col + "=not.is.null";
    var r = await fetch(url, {
      method: "DELETE",
      headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZseHdleWx5a3NkZHNzdnVxZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NTg0NDMsImV4cCI6MjA5NzAzNDQ0M30.hJRfemrsIaOKKl5HWJCSI6myxrqzOl6zuhIcSZHIFwE",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZseHdleWx5a3NkZHNzdnVxZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NTg0NDMsImV4cCI6MjA5NzAzNDQ0M30.hJRfemrsIaOKKl5HWJCSI6myxrqzOl6zuhIcSZHIFwE",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      }
    });
    var txt = await r.text();
    step(table + ": HTTP " + r.status + " → " + txt.substring(0,80));
    if (!r.ok) throw new Error(table + " delete failed: " + r.status + " " + txt);
  }

  try {
    // 1. localStorage
    step("Limpiando localStorage…");
    Object.keys(localStorage).filter(function(k){ return k.startsWith("pyro_"); }).forEach(function(k){ localStorage.removeItem(k); });

    // 2. Supabase via REST directo (no depende del SDK)
    step("Limpiando Supabase…");
    await _sbDel("pedidos", "id");
    await _sbDel("stock", "id");
    await _sbDel("distribuidores_extra", "ruc");
    await _sbDel("puntos_log", "ruc");
    // app_config: borrar solo las claves conocidas
    await fetch("https://flxweylyksddssvuqdzq.supabase.co/rest/v1/app_config?key=in.(dist_eliminados,rewards)", {
      method: "DELETE",
      headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZseHdleWx5a3NkZHNzdnVxZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NTg0NDMsImV4cCI6MjA5NzAzNDQ0M30.hJRfemrsIaOKKl5HWJCSI6myxrqzOl6zuhIcSZHIFwE",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZseHdleWx5a3NkZHNzdnVxZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NTg0NDMsImV4cCI6MjA5NzAzNDQ0M30.hJRfemrsIaOKKl5HWJCSI6myxrqzOl6zuhIcSZHIFwE",
        "Prefer": "return=minimal"
      }
    });

    // 3. Google Sheets
    step("Limpiando Google Sheets…");
    await fetch(GAS_URL + "?accion=limpiarDatos&token=" + encodeURIComponent(GAS_TOKEN));

    msg.textContent = "✅ Listo. Todos los datos de prueba fueron borrados.";
    step("Redirigiendo en 8 segundos…");
    setTimeout(function(){ window.location.href = window.location.pathname; }, 8000);
  } catch(e) {
    msg.textContent = "❌ Error en reset";
    step("ERROR: " + e.message);
    setTimeout(function(){ window.location.href = window.location.pathname; }, 10000);
  }
}

window.addEventListener("load",function(){
  // Reset de producción: visitar ?reset=PYRO2026 limpia todo automáticamente
  if (new URLSearchParams(window.location.search).get("reset") === "PYRO2026") {
    _ejecutarResetProduccion(); return;
  }
  _iniciarMonitorErrores();
  verificarIntegridadStorage();
  actualizarBannerOffline();
  window.addEventListener("online",function(){actualizarBannerOffline();reintentarSyncPendientes();});
  window.addEventListener("offline",function(){actualizarBannerOffline();});
  setTimeout(function(){
    var sp=document.getElementById("splash");
    if(sp){sp.classList.add("hide");setTimeout(function(){sp.style.display="none";},600);}
  },1500);
  cargarDistribuidoresExtra();
  // Aplicar tema guardado (claro/oscuro/auto)
  aplicarTema(temaGuardado());
  // Si está en auto, reaccionar a cambios del sistema operativo
  try{if(window.matchMedia){window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change",function(){if(temaGuardado()==="auto")aplicarTema("auto");});}}catch(e){}
  // Mostrar versión del portal
  try{var vt=document.getElementById("app-version-tag");if(vt&&typeof APP_VERSION!=="undefined")vt.textContent="Portal PyroShield v"+APP_VERSION;}catch(e){}
  // Mostrar/ocultar credenciales demo según MODO_DEMO
  var demoBox=document.getElementById("login-demo-box");
  if(demoBox)demoBox.style.display=(typeof MODO_DEMO!=="undefined"&&MODO_DEMO)?"block":"none";
  try{
    var s=JSON.parse(localStorage.getItem("pyro_sesion")||"null");
    if(s&&s.ruc){var lu2=document.getElementById("login-user");if(lu2&&!lu2.value)lu2.value=s.ruc;}
  }catch(e){}
  var lp=document.getElementById("login-pass"),lu=document.getElementById("login-user");
  if(lp)lp.addEventListener("keydown",function(e){if(e.key==="Enter")hacerLogin();});
  if(lu)lu.addEventListener("keydown",function(e){if(e.key==="Enter"&&lp)lp.focus();});
  // Recordar último RUC: prellenar y enfocar la contraseña
  try{var lastRuc=localStorage.getItem("pyro_last_ruc");if(lastRuc&&lu&&!lu.value){lu.value=lastRuc;if(lp)setTimeout(function(){lp.focus();},100);}}catch(e){}
  if('serviceWorker' in navigator){
    // Si ya había un SW controlando la página, un controllerchange posterior es una
    // actualización real y sí debe recargar. En la primera visita (sin controller
    // previo) NO debe recargar: recargaría la página mientras el usuario está
    // recién iniciando sesión, devolviéndolo al login sin aviso.
    var _yaControlada=!!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('./sw.js').then(function(reg){
      // Forzar actualización inmediata si hay nuevo SW esperando
      if(reg.waiting){reg.waiting.postMessage({type:'SKIP_WAITING'});}
      reg.addEventListener('updatefound',function(){
        var newSW=reg.installing;
        newSW.addEventListener('statechange',function(){
          if(newSW.state==='installed'&&navigator.serviceWorker.controller){
            newSW.postMessage({type:'SKIP_WAITING'});
            window.location.reload();
          }
        });
      });
    }).catch(function(){});
    // Recargar solo si ya había una sesión de SW activa (actualización real)
    navigator.serviceWorker.addEventListener('controllerchange',function(){
      if(_yaControlada)window.location.reload();
    });
  }
  mostrarBotonBiometria();
  // Auto-login si el usuario marcó "Recordarme"
  setTimeout(intentarAutoLogin, 300);
  // Detectar si la sesión actual es PWA instalada y registrar
  setTimeout(registrarInstalacionActual, 1500);
  // Fix teclado virtual iOS: scroll el input activo dentro del viewport
  _fixTecladoVirtualiOS();
  // Fix rendimiento hardware bajo: detectar y activar modo lite
  _detectarHardwareLento();
});

// ── Fix teclado virtual iOS ───────────────────────────────────────────────
// En Safari iOS el teclado virtual empuja el viewport hacia arriba pero NO
// redimensiona window.innerHeight, lo que tapa el input activo.
// Solución: escuchar el evento visualViewport.resize y hacer scrollIntoView.
function _fixTecladoVirtualiOS(){
  if(typeof window.visualViewport==="undefined")return;
  var _vvTimer=null;
  window.visualViewport.addEventListener("resize",function(){
    clearTimeout(_vvTimer);
    _vvTimer=setTimeout(function(){
      var el=document.activeElement;
      if(!el)return;
      var tag=el.tagName;
      if(tag!=="INPUT"&&tag!=="TEXTAREA"&&tag!=="SELECT")return;
      // Esperar un tick para que el browser termine de posicionar el teclado
      requestAnimationFrame(function(){
        try{el.scrollIntoView({block:"center",behavior:"smooth"});}catch(e){
          try{el.scrollIntoView(false);}catch(e2){}
        }
      });
    },100);
  });
}

// ── Detección de hardware lento y modo lite ───────────────────────────────
// En dispositivos lentos (iPhone 6/7/8 old, Android gama baja) con <2GB RAM
// o CPU <2 núcleos se activa un modo lite que reduce animaciones y sombras.
function _detectarHardwareLento(){
  var lento=false;
  // navigator.hardwareConcurrency: núcleos lógicos de CPU (undefined en Safari antiguo)
  if(typeof navigator.hardwareConcurrency!=="undefined"&&navigator.hardwareConcurrency<=2)lento=true;
  // deviceMemory: GB de RAM (solo Chrome/Android, undefined en Safari)
  if(typeof navigator.deviceMemory!=="undefined"&&navigator.deviceMemory<2)lento=true;
  // Medir FPS real con un micro-benchmark de 3 frames
  if(!lento){
    var t0=performance.now(),frames=0;
    var rafCheck=function(){
      frames++;
      if(frames<4){requestAnimationFrame(rafCheck);return;}
      var fps=frames/((performance.now()-t0)/1000);
      if(fps<30)_activarModoLite();
    };
    requestAnimationFrame(rafCheck);
  }else{
    _activarModoLite();
  }
}
function _activarModoLite(){
  // Reducir animaciones CSS sin afectar la funcionalidad
  try{
    var st=document.createElement("style");
    st.id="modo-lite-css";
    st.textContent=
      "*{animation-duration:.01ms!important;transition-duration:.1ms!important}"+
      ".tab-panel{will-change:auto!important}"+
      "[class*='fade'],[class*='slide']{animation:none!important;opacity:1!important;transform:none!important}";
    document.head.appendChild(st);
  }catch(e){}
}

// ════════ FEATURE 11/12/13/14/25/82/83/84/87 — Dashboard Admin ════════

function renderGraficoVentas6Meses(){
  var meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  var ahora=new Date();
  var datos=[];
  for(var i=5;i>=0;i--){var d=new Date(ahora.getFullYear(),ahora.getMonth()-i,1);datos.push({m:d.getMonth(),a:d.getFullYear(),nm:meses[d.getMonth()],total:0});}
  PEDIDOS.forEach(function(p){
    if(p.esCanje)return;
    if(p.estado!=="entregado"&&p.estado!=="finalizado"&&p.estado!=="facturado")return;
    var fd=parseFechaPed(p);
    for(var k=0;k<datos.length;k++){if(datos[k].m===fd.getMonth()&&datos[k].a===fd.getFullYear()){datos[k].total+=(p.subtotal||0);break;}}
  });
  var max=0;for(var j=0;j<datos.length;j++){if(datos[j].total>max)max=datos[j].total;}
  var H=120,barW=30,gap=12,pad=8,svgBars="";
  for(var n=0;n<datos.length;n++){
    var x=pad+n*(barW+gap);
    var bh=max>0?Math.round((datos[n].total/max)*(H-40)):2;
    var by=H-20-bh;
    svgBars+='<rect x="'+x+'" y="'+by+'" width="'+barW+'" height="'+bh+'" rx="4" fill="var(--rojo,#e53935)"/>';
    svgBars+='<text x="'+(x+barW/2)+'" y="'+(H-6)+'" text-anchor="middle" font-size="10" fill="var(--g3,#888)">'+datos[n].nm+'</text>';
    if(datos[n].total>0)svgBars+='<text x="'+(x+barW/2)+'" y="'+(by-4)+'" text-anchor="middle" font-size="9" fill="var(--g4,#444)">$'+Math.round(datos[n].total)+'</text>';
  }
  var totalW=datos.length*(barW+gap)-gap+pad*2;
  return '<div style="background:var(--g1);border-radius:10px;padding:12px 14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px;font-size:14px">📊 Ventas últimos 6 meses</div><svg viewBox="0 0 '+totalW+' '+H+'" width="100%" height="'+H+'">'+svgBars+'</svg></div>';
}
function renderTop5MesActual(){
  var ahora=new Date(),mes=ahora.getMonth(),anio=ahora.getFullYear();
  var montos={};
  PEDIDOS.forEach(function(p){
    if(p.esCanje)return;if(p.estado!=="entregado"&&p.estado!=="finalizado"&&p.estado!=="facturado")return;
    var fd=parseFechaPed(p);if(fd.getMonth()!==mes||fd.getFullYear()!==anio)return;
    if(!montos[p.ruc])montos[p.ruc]={ruc:p.ruc,razon:p.razon,total:0};
    montos[p.ruc].total+=(p.subtotal||0);
  });
  var top5=Object.values(montos).sort(function(a,b){return b.total-a.total;}).slice(0,5);
  var mesesNm=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  if(!top5.length)return'';
  return '<div style="background:var(--g1);border-radius:10px;padding:12px 14px;margin-bottom:14px"><div style="font-weight:700;margin-bottom:8px;font-size:14px">🥇 Top 5 — '+mesesNm[mes]+'</div>'+
    top5.map(function(d,i){var dist=DISTRIBUIDORES.find(function(x){return x.ruc===d.ruc;})||{};return '<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid var(--g2)"><span><b style="color:var(--rojo)">#'+(i+1)+'</b> '+escHtml(dist.empresa||d.razon)+'</span><b>'+fmt$(d.total)+'</b></div>';}).join("")+'</div>';
}
function renderDistribuidoresInactivos(){
  var ahora=Date.now(),umbral30=30*24*60*60*1000,ultPedido={};
  PEDIDOS.forEach(function(p){if(p.esCanje||p.estado==="cancelado")return;var fd=parseFechaPed(p),ts=fd.getTime();if(!ultPedido[p.ruc]||ts>ultPedido[p.ruc].ts)ultPedido[p.ruc]={ts:ts,fecha:p.fecha};});
  var inactivos=[];
  DISTRIBUIDORES.forEach(function(d){if(d.esAdmin||d.bloqueado||d.rol==="impresion")return;var ul=ultPedido[d.ruc];if(!ul){inactivos.push({razon:d.razon,fecha:"Sin pedidos"});return;}if(ahora-ul.ts>umbral30)inactivos.push({razon:d.razon,fecha:ul.fecha});});
  if(!inactivos.length)return'';
  return '<div style="background:var(--amarc);border:1.5px solid var(--amar);border-radius:10px;padding:12px 14px;margin-bottom:14px;color:var(--amar)"><div style="font-weight:700;margin-bottom:8px;font-size:14px">⚠️ Sin pedidos hace >30 días ('+inactivos.length+')</div>'+
    inactivos.map(function(d){return '<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:1px solid var(--g2)"><span>'+escHtml(d.razon)+'</span><span style="color:var(--g3)">'+escHtml(d.fecha)+'</span></div>';}).join("")+'</div>';
}
function renderTicketPromedioDist(){
  var map={};
  PEDIDOS.forEach(function(p){if(p.esCanje||p.estado==="cancelado")return;if(!map[p.ruc])map[p.ruc]={ruc:p.ruc,total:0,n:0};map[p.ruc].total+=(p.subtotal||0);map[p.ruc].n++;});
  var lista=Object.values(map).sort(function(a,b){return(b.n?b.total/b.n:0)-(a.n?a.total/a.n:0);});
  if(!lista.length)return'';
  return '<details style="background:var(--g1);border-radius:10px;padding:12px 14px;margin-bottom:14px"><summary style="font-weight:700;font-size:14px;cursor:pointer;list-style:none">🎫 Ticket promedio por distribuidor ▸</summary>'+
    '<table style="width:100%;border-collapse:collapse;margin-top:10px"><thead><tr><th style="font-size:11px;text-align:left;color:var(--g3);padding:4px 6px">Distribuidor</th><th style="font-size:11px;text-align:right;color:var(--g3);padding:4px 6px">Pedidos</th><th style="font-size:11px;text-align:right;color:var(--g3);padding:4px 6px">Ticket</th></tr></thead><tbody>'+
    lista.map(function(d){var dist=DISTRIBUIDORES.find(function(x){return x.ruc===d.ruc;})||{};var tkt=d.n?d.total/d.n:0;return '<tr><td style="padding:4px 6px;font-size:12px">'+escHtml(dist.empresa||d.ruc)+'</td><td style="padding:4px 6px;font-size:12px;text-align:right">'+d.n+'</td><td style="padding:4px 6px;font-size:12px;text-align:right;font-weight:700">'+fmt$(tkt)+'</td></tr>';}).join("")+
    '</tbody></table></details>';
}
function renderProductosSinMovimiento(){
  var ahora=Date.now(),umbral=60*24*60*60*1000,movidos={};
  PEDIDOS.forEach(function(p){if(p.esCanje||p.estado==="cancelado")return;var fd=parseFechaPed(p);if(ahora-fd.getTime()>umbral)return;(p.items||[]).forEach(function(it){movidos[it.id]=true;});});
  var sinMov=PRODUCTOS.filter(function(p){return!movidos[p.id];});
  if(!sinMov.length)return'';
  return '<details style="background:var(--rojoc);border:1.5px solid var(--rojo);border-radius:10px;padding:12px 14px;margin-bottom:14px"><summary style="font-weight:700;font-size:14px;cursor:pointer;list-style:none;color:var(--rojo)">🚫 Sin movimiento en 60 días ('+sinMov.length+') ▸</summary><div style="margin-top:8px">'+sinMov.map(function(p){return '<div style="font-size:12px;padding:3px 0;border-bottom:1px solid var(--g2)">'+escHtml(p.nm)+'<span style="color:var(--g3);margin-left:6px">'+p.id+'</span></div>';}).join("")+'</div></details>';
}
function renderAnalisisABC(){
  var ventas={};
  PEDIDOS.forEach(function(p){if(p.esCanje||p.estado==="cancelado"||p.estado==="pendiente"||p.estado==="en_proceso"||p.estado==="autorizado"||p.estado==="entrega")return;(p.items||[]).forEach(function(it){if(!ventas[it.id])ventas[it.id]={id:it.id,nm:it.nm,total:0};ventas[it.id].total+=((it.pr||0)*(it.cant||0));});});
  var lista=Object.values(ventas).sort(function(a,b){return b.total-a.total;});
  if(!lista.length)return'';
  var gran=lista.reduce(function(s,x){return s+x.total;},0),acum=0;
  lista.forEach(function(x){acum+=x.total;var pct=gran>0?acum/gran:0;x.clase=pct<=0.70?"A":pct<=0.90?"B":"C";x.pctPartic=gran>0?x.total/gran*100:0;});
  var col={"A":"var(--verde)","B":"var(--azul)","C":"var(--g3)"};
  return '<details style="background:var(--g1);border-radius:10px;padding:12px 14px;margin-bottom:14px"><summary style="font-weight:700;font-size:14px;cursor:pointer;list-style:none">📐 Análisis ABC de productos ▸</summary><div style="font-size:11px;color:var(--g3);margin:6px 0 8px">A=top 70% ventas · B=siguiente 20% · C=resto</div><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;min-width:260px"><thead><tr><th style="font-size:11px;text-align:left;color:var(--g3);padding:4px 6px">Producto</th><th style="font-size:11px;text-align:right;color:var(--g3);padding:4px 6px">Ventas</th><th style="font-size:11px;text-align:right;color:var(--g3);padding:4px 6px">%</th><th style="font-size:11px;text-align:center;color:var(--g3);padding:4px 6px">Clase</th></tr></thead><tbody>'+
    lista.map(function(x){return '<tr><td style="padding:4px 6px;font-size:11px">'+escHtml(x.nm)+'</td><td style="padding:4px 6px;font-size:11px;text-align:right">'+fmt$(x.total)+'</td><td style="padding:4px 6px;font-size:11px;text-align:right">'+x.pctPartic.toFixed(1)+'%</td><td style="padding:4px 6px;text-align:center"><b style="color:'+col[x.clase]+'">'+x.clase+'</b></td></tr>';}).join("")+'</tbody></table></div></details>';
}

// ════════════════════ GRÁFICAS CANVAS DASHBOARD ADMIN ════════════════════
function dibujarGraficasCanvas(){
  var cont=document.getElementById("adm-charts-canvas");
  if(!cont)return;
  var isDark=document.documentElement.getAttribute("data-theme")==="dark";
  var textColor=isDark?"#ccc":"#444";
  var bgCard=isDark?"#2a2a2a":"#f5f5f5";
  cont.innerHTML=
    '<div style="font-weight:700;font-size:15px;margin-bottom:10px">📊 Resumen de ventas</div>'+
    '<div style="font-size:12px;color:var(--g3,#888);margin-bottom:6px">Ventas por mes — últimos 6 meses</div>'+
    '<canvas id="chart-ventas-mes" width="600" height="200" style="width:100%;height:auto;border-radius:10px;background:'+bgCard+';padding:12px;box-sizing:border-box;margin-bottom:14px;display:block"></canvas>'+
    '<div style="font-size:12px;color:var(--g3,#888);margin-bottom:6px">Top 5 distribuidores por monto total</div>'+
    '<canvas id="chart-top5-dist" width="600" height="220" style="width:100%;height:auto;border-radius:10px;background:'+bgCard+';padding:12px;box-sizing:border-box;margin-bottom:14px;display:block"></canvas>'+
    '<div style="font-size:12px;color:var(--g3,#888);margin-bottom:6px">Distribución de pedidos por estado</div>'+
    '<canvas id="chart-estados-dona" width="340" height="220" style="width:min(340px,100%);height:auto;border-radius:10px;background:'+bgCard+';padding:12px;box-sizing:border-box;margin-bottom:14px;display:block"></canvas>';
  (function(){
    var cv=document.getElementById("chart-ventas-mes");
    if(!cv||!cv.getContext)return;
    var ctx=cv.getContext("2d"),W=cv.width,H=cv.height;
    ctx.clearRect(0,0,W,H);
    var mNm=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    var now=new Date(),datos=[];
    for(var i=5;i>=0;i--){var dd=new Date(now.getFullYear(),now.getMonth()-i,1);datos.push({m:dd.getMonth(),a:dd.getFullYear(),nm:mNm[dd.getMonth()],total:0});}
    PEDIDOS.forEach(function(p){
      if(p.esCanje||!(p.estado==="entregado"||p.estado==="finalizado"||p.estado==="facturado"))return;
      var fd=parseFechaPed(p);
      for(var k=0;k<datos.length;k++){if(datos[k].m===fd.getMonth()&&datos[k].a===fd.getFullYear()){datos[k].total+=(p.subtotal||0);break;}}
    });
    var mx=datos.reduce(function(s,d){return Math.max(s,d.total);},0)||1;
    var pL=12,pR=12,pT=28,pB=32,cH=H-pT-pB,gap=Math.floor((W-pL-pR)/datos.length),bW=Math.floor(gap*0.55);
    for(var n=0;n<datos.length;n++){
      var x=pL+n*gap+gap/2,bh=Math.max(2,Math.round(datos[n].total/mx*cH)),by=pT+cH-bh;
      ctx.fillStyle="#C0392B";
      if(ctx.roundRect){ctx.beginPath();ctx.roundRect(x-bW/2,by,bW,bh,4);ctx.fill();}else{ctx.fillRect(x-bW/2,by,bW,bh);}
      ctx.fillStyle=textColor;ctx.font="11px Arial,sans-serif";ctx.textAlign="center";ctx.fillText(datos[n].nm,x,H-pB+14);
      if(datos[n].total>0){ctx.font="bold 10px Arial,sans-serif";ctx.fillText("$"+Math.round(datos[n].total),x,by-5);}
    }
  })();
  (function(){
    var cv=document.getElementById("chart-top5-dist");
    if(!cv||!cv.getContext)return;
    var ctx=cv.getContext("2d"),W=cv.width,H=cv.height;
    ctx.clearRect(0,0,W,H);
    var mp={};
    PEDIDOS.forEach(function(p){
      if(p.esCanje||!(p.estado==="entregado"||p.estado==="facturado"||p.estado==="finalizado"))return;
      if(!mp[p.ruc])mp[p.ruc]={ruc:p.ruc,razon:p.razon,total:0};
      mp[p.ruc].total+=(p.subtotal||0);
    });
    var top=Object.values(mp).sort(function(a,b){return b.total-a.total;}).slice(0,5);
    if(!top.length){ctx.fillStyle=textColor;ctx.font="13px Arial,sans-serif";ctx.textAlign="center";ctx.fillText("Sin datos aún",W/2,H/2);return;}
    var mxT=top[0].total||1,cols=["#C0392B","#E8B923","#27AE60","#2980B9","#8e44ad"];
    var pL=145,pR=75,pT2=8,rowH=Math.floor((H-pT2)/Math.max(top.length,1));
    for(var i=0;i<top.length;i++){
      var y=pT2+i*rowH+rowH/2;
      var dist2=DISTRIBUIDORES.find(function(d){return d.ruc===top[i].ruc;})||{};
      var nm=((dist2.empresa||top[i].razon||"")).slice(0,22);
      ctx.fillStyle=textColor;ctx.font="12px Arial,sans-serif";ctx.textAlign="right";ctx.fillText("#"+(i+1)+" "+nm,pL-8,y+4);
      var bw=Math.max(4,Math.round(top[i].total/mxT*(W-pL-pR)));
      ctx.fillStyle=cols[i%cols.length];
      if(ctx.roundRect){ctx.beginPath();ctx.roundRect(pL,y-11,bw,22,4);ctx.fill();}else{ctx.fillRect(pL,y-11,bw,22);}
      ctx.fillStyle=textColor;ctx.font="bold 11px Arial,sans-serif";ctx.textAlign="left";ctx.fillText("$"+Math.round(top[i].total),pL+bw+6,y+4);
    }
  })();
  (function(){
    var cv=document.getElementById("chart-estados-dona");
    if(!cv||!cv.getContext)return;
    var ctx=cv.getContext("2d"),W=cv.width,H=cv.height;
    ctx.clearRect(0,0,W,H);
    var defs=[
      {key:"pendiente",label:"Pendiente",color:"#E8B923"},
      {key:"en_proceso",label:"En proceso",color:"#2980B9"},
      {key:"entregado",label:"Entregado",color:"#27AE60"},
      {key:"facturado",label:"Facturado",color:"#16a085"},
      {key:"finalizado",label:"Finalizado",color:"#1e8449"},
      {key:"cancelado",label:"Cancelado",color:"#888"}
    ];
    var counts={pendiente:0,en_proceso:0,entregado:0,facturado:0,finalizado:0,cancelado:0};
    PEDIDOS.forEach(function(p){
      if(p.esCanje)return;
      var est=(p.estado==="autorizado"||p.estado==="entrega")?"en_proceso":p.estado;
      if(counts[est]!==undefined)counts[est]++;
    });
    var total=defs.reduce(function(s,e){return s+counts[e.key];},0);
    var donaR=Math.min(H/2-20,76),cx=donaR+18,cy=H/2,ri=donaR*0.52,startA=-Math.PI/2;
    if(total===0){ctx.fillStyle=textColor;ctx.font="13px Arial,sans-serif";ctx.textAlign="center";ctx.fillText("Sin pedidos registrados",cx,cy);return;}
    defs.forEach(function(e){
      var sa=(counts[e.key]/total)*2*Math.PI;
      if(sa<=0.001)return;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,donaR,startA,startA+sa);ctx.closePath();ctx.fillStyle=e.color;ctx.fill();
      startA+=sa;
    });
    ctx.beginPath();ctx.arc(cx,cy,ri,0,2*Math.PI);ctx.fillStyle=bgCard;ctx.fill();
    var lx=cx+donaR+14,ly=cy-defs.length*16;
    defs.forEach(function(e,i){
      var ty=ly+i*34;
      ctx.fillStyle=e.color;ctx.fillRect(lx,ty,14,14);
      ctx.fillStyle=textColor;ctx.font="11px Arial,sans-serif";ctx.textAlign="left";ctx.fillText(e.label,lx+18,ty+11);
      ctx.font="bold 12px Arial,sans-serif";ctx.fillText(counts[e.key]+" ("+(total>0?Math.round(counts[e.key]/total*100):0)+"%)",lx+18,ty+25);
    });
  })();
}

function renderAdmLog(){
  var cont=document.getElementById("adm-log");if(!cont)return;
  var log=[];try{log=JSON.parse(localStorage.getItem("pyro_log_accesos")||"[]");}catch(e){}
  if(!log.length){cont.innerHTML='<div class="empty"><div class="ico">📋</div><p>No hay registros aún.</p></div>';return;}
  cont.innerHTML='<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;min-width:300px"><thead><tr style="border-bottom:2px solid var(--g2)"><th style="font-size:11px;text-align:left;color:var(--g3);padding:6px 8px">RUC</th><th style="font-size:11px;text-align:left;color:var(--g3);padding:6px 8px">Razón social</th><th style="font-size:11px;text-align:left;color:var(--g3);padding:6px 8px">Fecha</th><th style="font-size:11px;text-align:left;color:var(--g3);padding:6px 8px">Hora</th></tr></thead><tbody>'+
    log.map(function(e){return '<tr><td style="padding:6px 8px;font-size:12px;font-weight:700">'+escHtml(e.ruc)+'</td><td style="padding:6px 8px;font-size:12px">'+escHtml(e.razon)+'</td><td style="padding:6px 8px;font-size:12px;white-space:nowrap">'+escHtml(e.fecha)+'</td><td style="padding:6px 8px;font-size:12px;white-space:nowrap">'+escHtml(e.hora)+'</td></tr>';}).join("")+
  '</tbody></table></div>';
}

/* ═══════════════════════════════════════════
   DESCUENTOS POR VOLUMEN — editor admin
═══════════════════════════════════════════ */
var _descvolId=null;
function cargarDescVol(){
  try{
    var dv=JSON.parse(localStorage.getItem("pyro_descvol")||"{}");
    PRODUCTOS.forEach(function(p){if(dv[p.id])p.descVol=dv[p.id];});
  }catch(e){}
}
function abrirEditarDescVol(id){
  var p=PRODUCTOS.find(function(x){return x.id===id;});if(!p)return;
  _descvolId=id;
  var el=document.getElementById("descvol-prod-nm");
  if(el)el.textContent=p.nm+" ("+id+")";
  _renderDescVolRows(p.descVol||[]);
  abrir("modal-descvol");
}
function _renderDescVolRows(tiers){
  var c=document.getElementById("descvol-rows");if(!c)return;
  if(!tiers.length){c.innerHTML='<p style="font-size:13px;color:var(--g3);text-align:center;padding:10px 0">Sin tiers. Agrega uno ▼</p>';return;}
  c.innerHTML=tiers.map(function(t,i){
    return '<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">'+
      '<div style="flex:1"><div style="font-size:10px;color:var(--g3)">Desde (unid.)</div>'+
      '<input class="form-input" style="font-size:13px;padding:8px" type="number" min="1" id="dv-q-'+i+'" value="'+t[0]+'"></div>'+
      '<div style="flex:1"><div style="font-size:10px;color:var(--g3)">Desc. extra %</div>'+
      '<input class="form-input" style="font-size:13px;padding:8px" type="number" min="0" max="50" id="dv-p-'+i+'" value="'+t[1]+'"></div>'+
      '<button onclick="quitarDescVolRow('+i+')" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--g3);padding:0 4px;margin-top:14px">✕</button>'+
    '</div>';
  }).join("");
}
function agregarDescVolRow(){
  var tiers=_leerDescVolRows();
  tiers.push([tiers.length?tiers[tiers.length-1][0]+5:5,5]);
  _renderDescVolRows(tiers);
}
function quitarDescVolRow(i){
  var tiers=_leerDescVolRows();tiers.splice(i,1);_renderDescVolRows(tiers);
}
function _leerDescVolRows(){
  var tiers=[];var i=0;
  while(document.getElementById("dv-q-"+i)){
    var q=parseInt(document.getElementById("dv-q-"+i).value)||0;
    var p=parseFloat(document.getElementById("dv-p-"+i).value)||0;
    tiers.push([q,p]);i++;
  }
  return tiers;
}
function guardarDescVol(){
  if(!_descvolId)return;
  var tiers=_leerDescVolRows();
  tiers.sort(function(a,b){return a[0]-b[0];});
  var dv={};try{dv=JSON.parse(localStorage.getItem("pyro_descvol")||"{}");}catch(e){}
  dv[_descvolId]=tiers;
  try{localStorage.setItem("pyro_descvol",JSON.stringify(dv));}catch(e){avisarStorage();}
  var p=PRODUCTOS.find(function(x){return x.id===_descvolId;});
  if(p)p.descVol=tiers;
  backupCambio();
  cerrarModal("modal-descvol");
  toast("✅ Descuentos actualizados");
  if(document.getElementById("adm-stock")&&document.getElementById("adm-stock").classList.contains("active")){admTab("stock");}
}

/* ═══════════════════════════════════════════
   BIOMETRÍA (WebAuthn)
═══════════════════════════════════════════ */
function soportaBiometria(){
  return !!(window.PublicKeyCredential&&navigator.credentials&&navigator.credentials.create);
}
function mostrarBotonBiometria(){
  var btn=document.getElementById("btn-biometria");if(!btn)return;
  try{
    var last=localStorage.getItem("pyro_last_ruc");
    if(!last||!soportaBiometria()){btn.style.display="none";return;}
    var bio=JSON.parse(localStorage.getItem("pyro_biometria_"+last)||"null");
    btn.style.display=bio?"block":"none";
  }catch(e){btn.style.display="none";}
}
function _ofrecerBiometria(ruc,pw){
  if(!soportaBiometria())return;
  try{
    var bio=JSON.parse(localStorage.getItem("pyro_biometria_"+ruc)||"null");
    if(bio)return;
    var ya=localStorage.getItem("pyro_bio_skip_"+ruc);if(ya)return;
    setTimeout(function(){
      if(confirm("¿Deseas activar el acceso con huella / Face ID en este dispositivo?")){
        registrarBiometria(ruc,pw);
      }else{
        localStorage.setItem("pyro_bio_skip_"+ruc,"1");
      }
    },1200);
  }catch(e){}
}
function registrarBiometria(ruc,pw){
  if(!soportaBiometria()){alert("Tu dispositivo no soporta autenticación biométrica.");return;}
  var challenge=new Uint8Array(32);crypto.getRandomValues(challenge);
  var userId=new TextEncoder().encode(ruc);
  navigator.credentials.create({publicKey:{
    challenge:challenge,
    rp:{name:"Portal PyroShield"},
    user:{id:userId,name:ruc,displayName:ruc},
    pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],
    authenticatorSelection:{userVerification:"preferred"},
    timeout:60000
  }}).then(function(cred){
    // Guardar hash en vez de la contraseña en texto plano
    var data={id:cred.id,ruc:ruc,pw:sha256(pw)};
    localStorage.setItem("pyro_biometria_"+ruc,JSON.stringify(data));
    toast("✅ Biometría activada");
    mostrarBotonBiometria();
  }).catch(function(e){toast("No se pudo activar la biometría: "+e.message);});
}
function loginBiometrico(){
  try{
    var last=localStorage.getItem("pyro_last_ruc");if(!last)return;
    var bio=JSON.parse(localStorage.getItem("pyro_biometria_"+last)||"null");if(!bio)return;
    var challenge=new Uint8Array(32);crypto.getRandomValues(challenge);
    navigator.credentials.get({publicKey:{
      challenge:challenge,
      userVerification:"preferred",
      timeout:60000,
      allowCredentials:[{type:"public-key",id:_b64ToUint8(bio.id)}]
    }}).then(function(){
      // Autenticar directamente con el hash almacenado (passCoincide soporta hash directo)
      if(loginConCredenciales(bio.ruc,bio.pw)){
        var errEl=document.getElementById("login-err");if(errEl)errEl.style.display="none";
        finalizarLogin(bio.ruc,bio.pw);
      } else {
        toast("⚠️ Biometría: usuario no encontrado. Inicia sesión manualmente.");
      }
    }).catch(function(e){toast("Biometría fallida: "+e.message);});
  }catch(e){toast("Error biometría: "+e);}
}
function _b64ToUint8(b64){
  var bin=atob(b64.replace(/-/g,"+").replace(/_/g,"/"));
  var arr=new Uint8Array(bin.length);
  for(var i=0;i<bin.length;i++)arr[i]=bin.charCodeAt(i);
  return arr;
}

/* ═══════════════════════════════════════════
   SINCRONIZACIÓN DESDE LA NUBE (restaurar)
═══════════════════════════════════════════ */
function sincronizarDesdeNube(ruc){
  if(!GAS_URL)return;
  var url=GAS_URL+"?accion=obtenerPedidos&token="+encodeURIComponent(GAS_TOKEN)+(ruc?"&ruc="+encodeURIComponent(ruc):"");
  fetch(url).then(function(r){return r.json();}).then(function(data){
    if(!data||!data.ok||!data.pedidos||!data.pedidos.length)return;
    var local=[];try{local=JSON.parse(localStorage.getItem("pyro_pedidos")||"[]");}catch(e){}
    var porId={};local.forEach(function(p){porId[p.id]=p;});
    // Pedidos eliminados localmente (ej. al editar) — no resucitarlos desde la nube
    var tumba={};try{JSON.parse(localStorage.getItem("pyro_ped_eliminados")||"[]").forEach(function(id){tumba[id]=true;});}catch(e){}
    // Pedidos con subida pendiente: su estado local es más nuevo que el de la nube
    var pendSubida={};try{cargarSyncPendientes().forEach(function(p){pendSubida[p.id]=true;});}catch(e){}
    var cambio=false;
    var esGestor=_esGestor();
    data.pedidos.forEach(function(pc){
      if(tumba[pc.id])return;
      var pl=porId[pc.id];
      // En admin/impresión no re-traemos pedidos viejos ya podados (siguen en el Sheet)
      if(!pl&&esGestor&&!_conservarPedidoAdmin(pc))return;
      if(!pl){local.push(pc);cambio=true;return;}
      if(pendSubida[pc.id])return;
      // El estado de la nube manda (lo asigna el admin); también factura y observaciones
      if(pc.estado&&pc.estado!==pl.estado){pl.estado=pc.estado;cambio=true;}
      if(pc.azurFactura&&!pl.azurFactura){pl.azurFactura=pc.azurFactura;cambio=true;}
      if(pc.obsAdmin&&pc.obsAdmin!==pl.obsAdmin){pl.obsAdmin=pc.obsAdmin;cambio=true;}
    });
    if(!cambio)return;
    local.sort(function(a,b){return parseFechaPed(a).getTime()-parseFechaPed(b).getTime();});
    localStorage.setItem("pyro_pedidos",JSON.stringify(local));
    PEDIDOS=local;
    _logrosCache=null;
    // Refrescar la pantalla activa (sin tocar modales abiertos)
    try{
      if(document.querySelector(".ov.open"))return;
      if(document.getElementById("s-main")&&document.getElementById("s-main").classList.contains("active")){
        var tabAct=document.querySelector("#s-main .bnav.active");
        if(tabAct){var t=tabAct.id.replace("bnav-","");if(t==="inicio"||t==="historial"||t==="recompensas")irTab(t);}
      } else if(USER&&USER.esAdmin&&document.getElementById("s-admin")&&document.getElementById("s-admin").classList.contains("active")){
        if(ADM_TAB==="pedidos"){if(USER&&USER.rol==="impresion")renderRolImpresion();else renderAdmPedidos();}
        chequearPedidosNuevos();
      }
    }catch(e){}
  }).catch(function(){});
}

// Sondeo periódico: trae pedidos nuevos y cambios de estado cada 2 minutos
var _nubeInterval=null;
function iniciarSondeoNube(){
  if(_nubeInterval)clearInterval(_nubeInterval);
  _nubeInterval=setInterval(function(){
    if(!USER||!navigator.onLine)return;
    sincronizarDesdeNube(USER.esAdmin||USER.rol==="impresion"?null:USER.ruc);
  },120000);
}

/* ═══════════════════════════════════════════
   BACKUP AUTOMÁTICO → Google Apps Script
═══════════════════════════════════════════ */
function _buildBackupPayload(){
  var stock={};PRODUCTOS.forEach(function(p){stock[p.id]={stock:p.stock,ago:p.ago};});
  var distExtra=[];try{distExtra=JSON.parse(localStorage.getItem("pyro_dist_extra")||"[]");}catch(e){}
  var descvol={};try{descvol=JSON.parse(localStorage.getItem("pyro_descvol")||"{}");}catch(e){}
  var umbrales={};try{umbrales=JSON.parse(localStorage.getItem("pyro_umbrales")||"{}");}catch(e){}
  var costos={};try{costos=JSON.parse(localStorage.getItem("pyro_costos")||"{}");}catch(e){}
  var rewards=[];try{rewards=JSON.parse(localStorage.getItem("pyro_rewards")||"[]");}catch(e){}
  // Recopilar logs de puntos de todos los distribuidores (base + extra)
  var logsPuntos={};
  try{
    var rucsAll=DISTRIBUIDORES.filter(function(d){return!d.esAdmin&&d.rol!=="impresion";}).map(function(d){return d.ruc;});
    rucsAll.forEach(function(ruc){
      var k="pyro_log_puntos_"+ruc;
      var v=localStorage.getItem(k);
      if(v)try{logsPuntos[ruc]=JSON.parse(v);}catch(e){}
    });
  }catch(e){}
  return {
    accion:"backup",
    token:GAS_TOKEN,
    fecha:new Date().toISOString(),
    pedidos:PEDIDOS||[],
    stock:stock,
    meta:{dist_extra:distExtra,descvol:descvol,umbrales:umbrales,costos:costos,rewards:rewards,logs_puntos:logsPuntos}
  };
}

function backupAutomatico(forzado){
  // Solo el admin envía el backup global: la vista de un cliente es parcial
  // y sobreescribiría el snapshot de la nube con datos incompletos.
  if(!USER||!USER.esAdmin)return;
  if(!forzado){
    var hoy=new Date().toISOString().slice(0,10);
    var ultimo=localStorage.getItem("pyro_ultimo_backup")||"";
    if(ultimo===hoy)return;
  }
  if(!GAS_URL){if(forzado)toast("⚠️ GAS_URL no configurado");return;}
  fetch(GAS_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(_buildBackupPayload())})
    .then(function(r){return r.json();})
    .then(function(){
      localStorage.setItem("pyro_ultimo_backup",new Date().toISOString().slice(0,10));
      if(forzado)toast("☁️ Backup enviado — "+new Date().toLocaleString());
    })
    .catch(function(e){if(forzado)toast("⚠️ Backup falló: "+e.message);});
}

// Backup de cambio: se lanza tras cada modificación crítica (con debounce de 3s)
var _backupCambioTimer=null;
function backupCambio(){
  if(!GAS_URL)return;
  // Solo el admin: ver nota en backupAutomatico
  if(!USER||!USER.esAdmin)return;
  clearTimeout(_backupCambioTimer);
  _backupCambioTimer=setTimeout(function(){
    fetch(GAS_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(_buildBackupPayload())})
      .then(function(r){return r.json();})
      .then(function(){localStorage.setItem("pyro_ultimo_backup",new Date().toISOString().slice(0,10));})
      .catch(function(){});
  },3000);
}

// Restaura dist_extra, descvol, umbrales desde el último snapshot en nube
function restaurarMetaDesdeNube(){
  if(!GAS_URL)return;
  var url=GAS_URL+"?accion=obtenerMeta&token="+encodeURIComponent(GAS_TOKEN);
  fetch(url).then(function(r){return r.json();}).then(function(data){
    if(!data.ok||!data.meta)return;
    var m=data.meta;
    if(m.dist_extra&&m.dist_extra.length){
      var localExtra=[];try{localExtra=JSON.parse(localStorage.getItem("pyro_dist_extra")||"[]");}catch(e){}
      if(!localExtra.length){
        localStorage.setItem("pyro_dist_extra",JSON.stringify(m.dist_extra));
        cargarDistribuidoresExtra();
        toast("☁️ Distribuidores restaurados desde nube ("+m.dist_extra.length+")");
      }
    }
    if(m.descvol){
      var localDv={};try{localDv=JSON.parse(localStorage.getItem("pyro_descvol")||"{}");}catch(e){}
      if(!Object.keys(localDv).length&&Object.keys(m.descvol).length){
        localStorage.setItem("pyro_descvol",JSON.stringify(m.descvol));
        cargarDescVol();
        toast("☁️ Descuentos por volumen restaurados desde nube");
      }
    }
    if(m.umbrales){
      var localU={};try{localU=JSON.parse(localStorage.getItem("pyro_umbrales")||"{}");}catch(e){}
      if(!Object.keys(localU).length)localStorage.setItem("pyro_umbrales",JSON.stringify(m.umbrales));
    }
    if(m.costos){
      var localC={};try{localC=JSON.parse(localStorage.getItem("pyro_costos")||"{}");}catch(e){}
      if(!Object.keys(localC).length){localStorage.setItem("pyro_costos",JSON.stringify(m.costos));_costosCache=null;}
    }
    // Restaurar logs de puntos de distribuidores (solo si no existen localmente)
    if(m.logs_puntos){
      try{
        Object.keys(m.logs_puntos).forEach(function(ruc){
          var k="pyro_log_puntos_"+ruc;
          if(!localStorage.getItem(k)){
            try{localStorage.setItem(k,JSON.stringify(m.logs_puntos[ruc]));}catch(e){}
          }
        });
      }catch(e){}
    }
  }).catch(function(){});
}

// ════════════════════ PWA INSTALL GAMIFICADO ════════════════════
var _deferredInstallPrompt=null;
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();_deferredInstallPrompt=e;});

// Detecta tipo de dispositivo
function _esMobile(){return/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);}

// Detecta si está corriendo como PWA instalada
function _esInstalado(){
  return window.matchMedia('(display-mode: standalone)').matches||
    window.navigator.standalone===true||
    document.referrer.includes('android-app://');
}

// Claves localStorage para tracking de instalaciones
function _keyInstMobile(ruc){return"pyro_inst_mobile_"+ruc;}
function _keyInstDesktop(ruc){return"pyro_inst_desktop_"+ruc;}

// Registra instalación actual
function registrarInstalacionActual(){
  if(!USER||USER.esAdmin)return;
  if(!_esInstalado())return;
  var tipo=_esMobile()?"mobile":"desktop";
  var key=tipo==="mobile"?_keyInstMobile(USER.ruc):_keyInstDesktop(USER.ruc);
  // ID estable por cuenta+dispositivo: si ya existe (aquí o en la nube), no se duplica el premio
  var pid="INST_"+tipo+"_"+USER.ruc;
  var yaTiene=PEDIDOS.some(function(p){return p.id===pid||(p.esInstalacion&&p.ruc===USER.ruc&&p.instTipo===tipo);});
  if(yaTiene){try{localStorage.setItem(key,"1");}catch(e){}return;}
  if(!localStorage.getItem(key)){
    try{localStorage.setItem(key,"1");}catch(e){}
    // Otorgar 20 puntos por instalación
    var tipoLabel=tipo==="mobile"?"celular":"computadora";
    var pedInst={
      id:pid,ruc:USER.ruc,razon:USER.razon,
      fecha:new Date().toLocaleDateString("es-EC"),fechaISO:new Date().toISOString(),
      esCanje:true,esBienvenida:false,canjePts:0,
      canjeNm:"🎁 Premio por instalar app en tu "+tipoLabel+" — 20 pts",
      estado:"finalizado",total:0,puntos:20,esInstalacion:true,instTipo:tipo
    };
    PEDIDOS.push(pedInst);
    registrarLogPuntos(USER.ruc,"confirmado",20,"Premio instalación PWA en "+tipoLabel);
    guardarPedidos();
    sincronizarConSheets(pedInst,true);
    setTimeout(function(){
      mostrarOverlayInstalacion(tipo);
    },800);
  }
}

function mostrarOverlayInstalacion(tipo){
  var tipoLabel=tipo==="mobile"?"celular":"computadora";
  var ov=document.createElement("div");
  ov.id="inst-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:24px";
  ov.innerHTML=
    '<div style="background:var(--bg,#fff);border-radius:24px;padding:36px 28px;width:100%;max-width:380px;text-align:center">'+
      '<div style="font-size:56px;margin-bottom:12px">🎉</div>'+
      '<div style="font-size:22px;font-weight:800;color:var(--verde);margin-bottom:8px">¡Genial! Instalaste la app</div>'+
      '<div style="font-size:15px;color:var(--g4,#555);margin-bottom:6px;line-height:1.5">Instalaste PyroShield en tu <b>'+tipoLabel+'</b>.</div>'+
      '<div style="background:var(--verdec);border-radius:14px;padding:14px;margin-bottom:20px">'+
        '<div style="font-size:24px;font-weight:800;color:var(--verde)">+20 puntos</div>'+
        '<div style="font-size:13px;color:var(--verde)">acreditados en tu cuenta 🏆</div>'+
      '</div>'+
      '<button class="btn btn-p btn-full" style="font-size:16px" onclick="document.getElementById(\'inst-ov\').remove();renderInicio();">¡Reclamar puntos! 🔥</button>'+
    '</div>';
  document.body.appendChild(ov);
}

// Banner en inicio: invita a instalar en el otro dispositivo
function renderBannerInstalacion(){
  var el=document.getElementById("banner-instalacion");
  if(!el||!USER||USER.esAdmin)return;
  var tieneMobile=!!localStorage.getItem(_keyInstMobile(USER.ruc));
  var tieneDesktop=!!localStorage.getItem(_keyInstDesktop(USER.ruc));
  var esMobile=_esMobile();
  // Si ya tiene ambas instalaciones, ocultar
  if(tieneMobile&&tieneDesktop){el.style.display="none";return;}
  // Determinar qué le falta: si solo falta uno, sugerir ese; si faltan ambos, sugerir el del dispositivo actual
  var faltaDesktop=!tieneDesktop,faltaMobile=!tieneMobile;
  var sugerirComp=(faltaDesktop&&!faltaMobile)||(faltaDesktop&&!esMobile);
  var falta=sugerirComp?"computadora":"celular";
  var faltaIco=sugerirComp?"💻":"📱";
  var esIphone=/iPhone|iPad|iPod/i.test(navigator.userAgent);
  var subtexto=sugerirComp
    ?"Instala la app en tu <b>computadora</b> (Chrome) y reclámalos ahora."
    :esIphone
      ?"Instala la app en tu <b>iPhone</b> usando <b>Safari</b> y reclámalos ahora."
      :"Instala la app en tu <b>celular</b> (Android: Chrome) y reclámalos ahora.";
  el.style.display="";
  el.innerHTML=
    '<div style="background:var(--oro-claro,#fff7e0);border:2px solid var(--oro);border-radius:16px;padding:14px 16px;margin-bottom:16px">'+
      '<div style="display:flex;align-items:center;gap:12px">'+
        '<span style="font-size:32px">'+faltaIco+'</span>'+
        '<div style="flex:1">'+
          '<div style="font-size:13px;font-weight:800;color:var(--negro);margin-bottom:2px">¡Tienes 20 puntos esperándote!</div>'+
          '<div style="font-size:12px;color:#666;line-height:1.4">'+subtexto+'</div>'+
        '</div>'+
      '</div>'+
      '<button class="btn btn-p btn-full" style="margin-top:10px;font-size:13px" onclick="mostrarGuiaInstalacion(\''+falta+'\')">'+
        '📲 Cómo instalar en mi '+falta+' →'+
      '</button>'+
    '</div>';
}

function mostrarGuiaInstalacion(dispositivo){
  var esIphone=/iPhone|iPad|iPod/i.test(navigator.userAgent);
  var esCel=dispositivo==="celular";
  var pasosAndroid=[
    {ico:"📱",t:"Abre en Chrome (Android)",d:"En tu celular Android, abre Chrome y entra a: alejosl0801.github.io/PORTAL_DISTRIBUIDORES"},
    {ico:"⚙️",t:"Toca el menú ⋮",d:"Toca los 3 puntos (⋮) arriba a la derecha de Chrome. Luego toca 'Instalar app' o 'Agregar a pantalla de inicio'."},
    {ico:"✅",t:"Confirma la instalación",d:"Toca 'Instalar' en el popup. La app aparecerá en tu pantalla de inicio como cualquier otra app."},
    {ico:"🎁",t:"¡Listo! Abre la app instalada",d:"Ábrela desde tu pantalla de inicio. Recibirás 20 puntos automáticamente. ¡Disfruta tu premio!"}
  ];
  var pasosIphone=[
    {ico:"🍎",t:"Abre en Safari (iPhone/iPad)",d:"En tu iPhone o iPad, abre Safari — NO Chrome. Entra a: alejosl0801.github.io/PORTAL_DISTRIBUIDORES\n\n⚠️ Solo funciona en Safari, no en Chrome."},
    {ico:"📤",t:"Toca el botón Compartir",d:"Toca el ícono de compartir (□↑) en la barra inferior de Safari. Si no lo ves, desliza la barra hacia arriba."},
    {ico:"🏠",t:"Toca 'Agregar a pantalla de inicio'",d:"Desplázate en el menú y toca 'Agregar a pantalla de inicio'. Dale un nombre y toca 'Agregar' arriba a la derecha."},
    {ico:"🎁",t:"¡Listo! Abre la app instalada",d:"Ábrela desde tu pantalla de inicio. Recibirás 20 puntos automáticamente. ¡Disfruta tu premio!"}
  ];
  var pasosDesktop=[
    {ico:"💻",t:"Abre en Chrome (PC o Mac)",d:"Desde tu PC o Mac, abre Chrome y entra a: alejosl0801.github.io/PORTAL_DISTRIBUIDORES e inicia sesión."},
    {ico:"⬇️",t:"Busca el ícono de instalar",d:"En la barra de direcciones de Chrome verás un ícono de instalación (⊕ o una pantalla con flecha ↓). Haz clic en él."},
    {ico:"✅",t:"Confirma la instalación",d:"Aparecerá un popup que dice 'Instalar PyroShield'. Haz clic en 'Instalar'. La app se abrirá como ventana independiente."},
    {ico:"🎁",t:"¡Listo! Abre la app instalada",d:"Ábrela desde el acceso directo en tu escritorio. Recibirás 20 puntos automáticamente al abrirla instalada."}
  ];
  var pasos=esCel?(esIphone?pasosIphone:pasosAndroid):pasosDesktop;
  // Mostrar overlay con los pasos
  var paso=0;
  var ov=document.createElement("div");
  ov.id="guia-inst-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.85);z-index:9000;display:flex;align-items:center;justify-content:center;padding:24px";
  function renderPaso(){
    var p=pasos[paso];
    var pct=Math.round((paso+1)/pasos.length*100);
    ov.innerHTML=
      '<div style="background:var(--bg,#fff);border-radius:24px;padding:36px 28px;width:100%;max-width:380px;text-align:center">'+
        '<div style="font-size:52px;margin-bottom:12px">'+p.ico+'</div>'+
        '<div style="font-size:11px;font-weight:700;color:var(--oro);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px">Paso '+(paso+1)+' de '+pasos.length+'</div>'+
        '<div style="font-size:19px;font-weight:800;margin-bottom:10px">'+escHtml(p.t)+'</div>'+
        '<div style="font-size:14px;color:var(--g4,#555);line-height:1.6;margin-bottom:20px">'+escHtml(p.d)+'</div>'+
        '<div style="background:#eee;border-radius:6px;height:6px;margin-bottom:20px">'+
          '<div style="background:var(--rojo);height:6px;border-radius:6px;width:'+pct+'%"></div>'+
        '</div>'+
        '<div style="display:flex;gap:10px">'+
          (paso>0?'<button onclick="document.getElementById(\'guia-inst-ov\')._prev()" style="flex:1;padding:12px;border:1.5px solid #ddd;border-radius:12px;font-size:14px;font-weight:600;background:#fff;cursor:pointer">← Atrás</button>':'')+
          (paso<pasos.length-1
            ?'<button onclick="document.getElementById(\'guia-inst-ov\')._next()" style="flex:2;padding:12px;background:var(--rojo);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer">Siguiente →</button>'
            :'<button onclick="document.getElementById(\'guia-inst-ov\').remove()" style="flex:2;padding:12px;background:var(--verde);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer">¡Ya la instalé! ✓</button>'
          )+
        '</div>'+
        '<button onclick="document.getElementById(\'guia-inst-ov\').remove()" style="margin-top:12px;background:none;border:none;color:#aaa;font-size:12px;cursor:pointer;width:100%">Cerrar</button>'+
      '</div>';
    ov._next=function(){
      paso++;
      if(paso===1&&_deferredInstallPrompt){_deferredInstallPrompt.prompt();_deferredInstallPrompt.userChoice.then(function(){_deferredInstallPrompt=null;});}
      renderPaso();
    };
    ov._prev=function(){paso--;renderPaso();};
  }
  renderPaso();
  document.body.appendChild(ov);
}


// ════════════════════ PERFIL DEL DISTRIBUIDOR ════════════════════
function _avatarKey(){return"pyro_avatar_"+(USER&&USER.ruc);}

function cargarAvatar(){
  if(!USER||USER.esAdmin)return;
  var b64=localStorage.getItem(_avatarKey());
  var btn=document.getElementById("topbar-avatar-btn");
  var txt=document.getElementById("topbar-avatar-txt");
  if(!btn)return;
  if(b64){
    btn.style.background="transparent";
    btn.style.padding="0";
    if(txt)txt.innerHTML='<img src="'+b64+'" style="width:36px;height:36px;border-radius:50%;object-fit:cover">';
  } else {
    var iniciales=((USER.encargado||USER.razon||"").trim().split(" ").slice(0,2).map(function(w){return w[0]||"";}).join("")).toUpperCase()||"U";
    if(txt)txt.textContent=iniciales;
  }
}

function _renderEstablecimientosPerfil(){
  var ests=USER.establecimientos||[];
  var html='<div style="margin-bottom:16px">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'+
      '<div style="font-size:12px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:.5px">📍 Mis establecimientos</div>'+
      '<button onclick="abrirAgregarEstablecimiento()" style="padding:4px 10px;font-size:12px;font-weight:700;background:var(--rojo);color:#fff;border:none;border-radius:8px;cursor:pointer">+ Agregar</button>'+
    '</div>';
  if(!ests.length){
    html+='<div style="font-size:13px;color:var(--g3);padding:10px;background:var(--g1);border-radius:8px;text-align:center">Sin establecimientos registrados</div>';
  } else {
    ests.forEach(function(est,idx){
      html+='<div style="background:var(--g1);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:flex-start">'+
        '<div style="flex:1;min-width:0">'+
          '<div style="font-size:13px;font-weight:700;color:var(--negro)">'+escHtml(est.nm||"Local")+'</div>'+
          '<div style="font-size:12px;color:var(--g3);margin-top:2px">'+escHtml(est.dir||"—")+'</div>'+
          (est.obs?'<div style="font-size:11px;color:var(--g3);margin-top:2px;font-style:italic">'+escHtml(est.obs)+'</div>':'')+
        '</div>'+
        '<div style="display:flex;gap:4px;margin-left:8px">'+
          '<button onclick="abrirEditarEstablecimiento('+idx+')" style="padding:4px 8px;font-size:12px;background:var(--g2);border:none;border-radius:6px;cursor:pointer">✏️</button>'+
          (ests.length>1?'<button onclick="eliminarEstablecimiento('+idx+')" style="padding:4px 8px;font-size:12px;background:#fce4e4;border:none;border-radius:6px;cursor:pointer;color:#c62828">🗑️</button>':'')+
        '</div>'+
      '</div>';
    });
  }
  html+='</div>';
  return html;
}

function abrirPerfil(){
  if(!USER||USER.esAdmin)return;
  var b64=localStorage.getItem(_avatarKey());
  var iniciales=((USER.encargado||USER.razon||"").trim().split(" ").slice(0,2).map(function(w){return w[0]||"";}).join("")).toUpperCase()||"U";
  var avatarHtml=b64
    ?'<img src="'+b64+'" style="width:88px;height:88px;border-radius:50%;object-fit:cover;border:3px solid var(--oro)">'
    :'<div style="width:88px;height:88px;border-radius:50%;background:var(--rojo);color:#fff;font-size:28px;font-weight:800;display:flex;align-items:center;justify-content:center;border:3px solid var(--oro)">'+escHtml(iniciales)+'</div>';
  var ov=document.createElement("div");
  ov.id="perfil-ov";
  ov.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:9000;display:flex;align-items:flex-end;justify-content:center;padding-bottom:0";
  function renderPerfil(){
    ov.innerHTML=
      '<div style="background:var(--bg,#fff);border-radius:24px 24px 0 0;padding:28px 22px 36px;width:100%;max-width:500px;max-height:90vh;overflow-y:auto">'+
        '<div style="text-align:center;margin-bottom:20px">'+
          '<div style="display:flex;justify-content:center;margin-bottom:12px">'+avatarHtml+'</div>'+
          '<div style="font-size:17px;font-weight:800">'+escHtml(USER.encargado||primerNombre(USER.razon))+'</div>'+
          '<div style="font-size:13px;color:var(--g3)">'+escHtml(USER.empresa||USER.razon)+'</div>'+
          '<div style="font-size:12px;color:var(--g3);margin-top:2px">RUC: '+escHtml(USER.ruc)+'</div>'+
          '<label style="display:inline-block;margin-top:10px;padding:8px 16px;background:var(--g1);border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;border:1.5px solid var(--g2)">'+
            '📷 Cambiar foto'+
            '<input type="file" accept="image/*" style="display:none" onchange="subirFotoPerfil(event)">'+
          '</label>'+
          (b64?'<button onclick="eliminarFotoPerfil()" style="display:block;margin:6px auto 0;background:none;border:none;color:var(--g3);font-size:12px;cursor:pointer">Eliminar foto</button>':'')+
        '</div>'+
        '<hr style="border:none;border-top:1px solid var(--g2);margin-bottom:16px">'+
        '<div style="margin-bottom:14px">'+
          '<div style="font-size:12px;font-weight:700;color:var(--g3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Mis datos de contacto</div>'+
          _filaPerfilEditable("👤 Nombre encargado","perfil-enc",USER.encargado||"")+
          _filaPerfilEditable("📧 Email","perfil-correo",USER.correo||"")+
          _filaPerfilEditable("📱 Teléfono","perfil-tel",USER.tel||"")+
          '<button class="btn btn-p btn-full" style="margin-top:10px" onclick="guardarDatosPerfil()">💾 Guardar datos</button>'+
        '</div>'+
        '<hr style="border:none;border-top:1px solid var(--g2);margin-bottom:16px">'+
        _renderEstablecimientosPerfil()+
        '<hr style="border:none;border-top:1px solid var(--g2);margin-bottom:16px">'+
        '<button class="btn btn-s btn-full" style="margin-bottom:10px" onclick="mostrarCambioPassOpcional()">🔐 Cambiar contraseña</button>'+
        '<button class="btn btn-s btn-full" style="margin-bottom:10px" onclick="reiniciarTutoriales()">📖 Ver tutoriales otra vez</button>'+
        '<button class="btn btn-s btn-full" onclick="cambiarTema()">🌙 Modo oscuro</button>'+
        '<button onclick="document.getElementById(\'perfil-ov\').remove()" style="display:block;width:100%;margin-top:14px;padding:12px;border:none;background:var(--g1);border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;color:var(--g4)">Cerrar</button>'+
      '</div>';
  }
  renderPerfil();
  document.body.appendChild(ov);
  ov.addEventListener("click",function(e){if(e.target===ov)ov.remove();});
}

function reiniciarTutoriales(){
  if(!USER)return;
  var ruc=USER.ruc;
  var keys=[];try{for(var i=0;i<localStorage.length;i++)keys.push(localStorage.key(i));}catch(e){}
  keys.filter(function(k){return k&&(k.startsWith("pyro_tipsec_"+ruc)||k.startsWith("pyro_tut_pts_"+ruc)||k==="pyro_tut_"+ruc);}).forEach(function(k){try{localStorage.removeItem(k);}catch(e){}});
  // Marcar reset para que la sync del servidor no restaure los flags
  try{localStorage.setItem("pyro_tut_resetado_"+ruc,"1");}catch(e){}
  // Intentar borrar también en servidor (requiere GAS republicado, pero no es bloqueante)
  try{fetch(GAS_URL,{method:"POST",body:JSON.stringify({token:GAS_TOKEN,accion:"reiniciarTutoriales",ruc:ruc})});}catch(e){}
  var prev=document.getElementById("perfil-ov");if(prev)prev.remove();
  toast("✅ Tutoriales reiniciados. Navega entre secciones para verlos.");
}

function _filaPerfilEditable(label,id,val){
  return'<div style="margin-bottom:10px">'+
    '<div style="font-size:11px;color:var(--g3);font-weight:600;margin-bottom:3px">'+escHtml(label)+'</div>'+
    '<input id="'+id+'" class="form-input" value="'+escHtml(val)+'" placeholder="'+escHtml(label)+'" style="font-size:14px">'+
  '</div>';
}

function guardarDatosPerfil(){
  var enc=(document.getElementById("perfil-enc")||{}).value||"";
  var correo=(document.getElementById("perfil-correo")||{}).value||"";
  var tel=(document.getElementById("perfil-tel")||{}).value||"";
  if(!enc.trim()){toast("⚠️ El nombre del encargado no puede estar vacío");return;}
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===USER.ruc;});
  if(!dist){toast("⚠️ Error al encontrar tu perfil");return;}
  dist.encargado=enc.trim();
  dist.correo=correo.trim();
  dist.tel=tel.trim();
  USER.encargado=dist.encargado;
  USER.correo=dist.correo;
  USER.tel=dist.tel;
  guardarDistribuidores();
  cargarAvatar();
  toast("✅ Datos guardados");
}

function abrirAgregarEstablecimiento(){
  var ov2=document.createElement("div");
  ov2.id="est-modal-ov";
  ov2.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:9100;display:flex;align-items:center;justify-content:center;padding:24px";
  ov2.innerHTML=
    '<div style="background:var(--bg,#fff);border-radius:20px;padding:28px 22px;width:100%;max-width:420px">'+
      '<h3 style="margin:0 0 16px">➕ Nuevo establecimiento</h3>'+
      '<label class="form-label">Nombre del local</label>'+
      '<input id="est-nm" class="form-input" placeholder="Ej: Sucursal Norte" style="margin-bottom:10px">'+
      '<label class="form-label">Dirección</label>'+
      '<input id="est-dir" class="form-input" placeholder="Calle, número, sector" style="margin-bottom:10px">'+
      '<label class="form-label">Observaciones (opcional)</label>'+
      '<input id="est-obs" class="form-input" placeholder="Ej: Horario de entrega 8am-5pm" style="margin-bottom:20px">'+
      '<div style="display:flex;gap:8px">'+
        '<button class="btn btn-s" style="flex:1" onclick="document.getElementById(\'est-modal-ov\').remove()">Cancelar</button>'+
        '<button class="btn btn-p" style="flex:2" onclick="confirmarAgregarEstablecimiento()">✓ Guardar</button>'+
      '</div>'+
    '</div>';
  ov2.addEventListener("click",function(e){if(e.target===ov2)ov2.remove();});
  document.body.appendChild(ov2);
}

function confirmarAgregarEstablecimiento(){
  var nm=(document.getElementById("est-nm")||{}).value||"";
  var dir=(document.getElementById("est-dir")||{}).value||"";
  var obs=(document.getElementById("est-obs")||{}).value||"";
  if(!nm.trim()||!dir.trim()){toast("⚠️ Nombre y dirección son obligatorios");return;}
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===USER.ruc;});
  if(!dist)return;
  if(!dist.establecimientos)dist.establecimientos=[];
  dist.establecimientos.push({nm:nm.trim(),dir:dir.trim(),obs:obs.trim()});
  USER.establecimientos=dist.establecimientos;
  guardarDistribuidores();
  document.getElementById("est-modal-ov").remove();
  toast("✅ Establecimiento guardado");
  var prev=document.getElementById("perfil-ov");if(prev)prev.remove();
  abrirPerfil();
}

function abrirEditarEstablecimiento(idx){
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===USER.ruc;});
  if(!dist||!dist.establecimientos||!dist.establecimientos[idx])return;
  var est=dist.establecimientos[idx];
  var ov2=document.createElement("div");
  ov2.id="est-modal-ov";
  ov2.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:9100;display:flex;align-items:center;justify-content:center;padding:24px";
  ov2.innerHTML=
    '<div style="background:var(--bg,#fff);border-radius:20px;padding:28px 22px;width:100%;max-width:420px">'+
      '<h3 style="margin:0 0 16px">✏️ Editar establecimiento</h3>'+
      '<label class="form-label">Nombre del local</label>'+
      '<input id="est-nm" class="form-input" value="'+escHtml(est.nm||"")+'" style="margin-bottom:10px">'+
      '<label class="form-label">Dirección</label>'+
      '<input id="est-dir" class="form-input" value="'+escHtml(est.dir||"")+'" style="margin-bottom:10px">'+
      '<label class="form-label">Observaciones (opcional)</label>'+
      '<input id="est-obs" class="form-input" value="'+escHtml(est.obs||"")+'" style="margin-bottom:20px">'+
      '<div style="display:flex;gap:8px">'+
        '<button class="btn btn-s" style="flex:1" onclick="document.getElementById(\'est-modal-ov\').remove()">Cancelar</button>'+
        '<button class="btn btn-p" style="flex:2" onclick="confirmarEditarEstablecimiento('+idx+')">💾 Guardar</button>'+
      '</div>'+
    '</div>';
  ov2.addEventListener("click",function(e){if(e.target===ov2)ov2.remove();});
  document.body.appendChild(ov2);
}

function confirmarEditarEstablecimiento(idx){
  var nm=(document.getElementById("est-nm")||{}).value||"";
  var dir=(document.getElementById("est-dir")||{}).value||"";
  var obs=(document.getElementById("est-obs")||{}).value||"";
  if(!nm.trim()||!dir.trim()){toast("⚠️ Nombre y dirección son obligatorios");return;}
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===USER.ruc;});
  if(!dist||!dist.establecimientos||!dist.establecimientos[idx])return;
  dist.establecimientos[idx]={nm:nm.trim(),dir:dir.trim(),obs:obs.trim()};
  USER.establecimientos=dist.establecimientos;
  guardarDistribuidores();
  document.getElementById("est-modal-ov").remove();
  toast("✅ Establecimiento actualizado");
  var prev=document.getElementById("perfil-ov");if(prev)prev.remove();
  abrirPerfil();
}

function eliminarEstablecimiento(idx){
  confirmar("¿Eliminar este establecimiento?",function(){
    var dist=DISTRIBUIDORES.find(function(d){return d.ruc===USER.ruc;});
    if(!dist||!dist.establecimientos)return;
    dist.establecimientos.splice(idx,1);
    USER.establecimientos=dist.establecimientos;
    guardarDistribuidores();
    toast("🗑️ Establecimiento eliminado");
    var prev=document.getElementById("perfil-ov");if(prev)prev.remove();
    abrirPerfil();
  });
}

function _filaPerfilDato(label,val){
  return'<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--g1);font-size:14px">'+
    '<span style="color:var(--g3)">'+escHtml(label)+'</span>'+
    '<span style="font-weight:600">'+escHtml(val)+'</span>'+
  '</div>';
}

function subirFotoPerfil(e){
  var file=e.target.files&&e.target.files[0];
  if(!file)return;
  var reader=new FileReader();
  reader.onload=function(ev){
    var img=new Image();
    img.onload=function(){
      var canvas=document.createElement("canvas");
      var MAX=200;
      var ratio=Math.min(MAX/img.width,MAX/img.height,1);
      canvas.width=Math.round(img.width*ratio);
      canvas.height=Math.round(img.height*ratio);
      canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);
      var b64=canvas.toDataURL("image/jpeg",0.82);
      try{localStorage.setItem(_avatarKey(),b64);}catch(ex){toast("⚠️ No se pudo guardar la foto (memoria llena)");return;}
      cargarAvatar();
      var ov=document.getElementById("perfil-ov");if(ov)ov.remove();
      abrirPerfil();
      toast("✅ Foto actualizada");
    };
    img.src=ev.target.result;
  };
  reader.readAsDataURL(file);
}

function eliminarFotoPerfil(){
  try{localStorage.removeItem(_avatarKey());}catch(e){}
  cargarAvatar();
  var ov=document.getElementById("perfil-ov");if(ov)ov.remove();
  abrirPerfil();
  toast("🗑️ Foto eliminada");
}
