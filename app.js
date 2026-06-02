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
  {id:"VENT10PQS",nm:"Extintor 10 LBS PQS",cat:"extintores",sub:"PQS",pv:12.89,pb:11.88,costo:9.02,stock:874,ago:false,img:"VENT10PQS",descVol:[[10,1],[20,2],[30,3],[40,5],[60,7]]},
  {id:"VENT20PQS",nm:"Extintor 20 LBS PQS",cat:"extintores",sub:"PQS",pv:21.35,pb:20.15,costo:15.03,stock:0,ago:true,img:"VENT20PQS",descVol:[[10,1],[20,2],[30,3],[40,5],[50,7]]},
  {id:"VENT50PQS",nm:"Extintor 50 LBS PQS",cat:"extintores",sub:"PQS",pv:169.05,pb:132.31,costo:90.17,stock:7,ago:false,img:"VENT50PQS",descVol:[[2,1],[3,2],[5,3],[8,5],[12,6]]},
  {id:"VENT100PQS",nm:"Extintor 100 LBS PQS",cat:"extintores",sub:"PQS",pv:216.05,pb:168.88,costo:120.22,stock:26,ago:false,img:"VENT100PQS",descVol:[[2,1],[3,2],[5,3],[8,5],[10,6]]},
  {id:"VENT150PQS",nm:"Extintor 150 LBS PQS",cat:"extintores",sub:"PQS",pv:280.25,pb:217.99,costo:153.81,stock:12,ago:false,img:"VENT150PQS",descVol:[[2,1],[3,2],[4,3],[6,5],[8,6]]},
  // EXTINTORES CO2
  {id:"VENT5CO2",nm:"Extintor 5 LBS CO2",cat:"extintores",sub:"CO2",pv:26.70,pb:22.40,costo:15.03,stock:59,ago:false,img:"VENT5CO2",descVol:[[5,1],[8,2],[12,3],[15,5],[20,6]]},
  {id:"VENT10CO2",nm:"Extintor 10 LBS CO2",cat:"extintores",sub:"CO2",pv:34.65,pb:33.85,costo:23.92,stock:0,ago:true,img:"VENT10CO2",descVol:[[3,1],[5,2],[8,3],[10,5],[15,6]]},
  {id:"VENT20CO2C",nm:"Extintor 20 LBS CO2 + Carro",cat:"extintores",sub:"CO2",pv:106.99,pb:104.99,costo:40.99,stock:19,ago:false,img:"VENT20CO2C",descVol:[[2,1],[3,2],[4,3],[5,5],[8,6]]},
  {id:"VENT25AQ",nm:"Extintor 2.5 Glns Agua Química",cat:"extintores",sub:"H2O",pv:63.00,pb:61.25,costo:38.25,stock:24,ago:false,img:"VENT25AQ",descVol:[[2,1],[3,2],[4,3],[5,5],[8,5]]},
  // ACCESORIOS - CABEZALES
  {id:"CABPQS1020",nm:"Cabezal PQS 10/20 LBS",cat:"accesorios",sub:"Cabezales",pv:2.95,pb:2.80,costo:1.24,stock:0,ago:true,img:null,descVol:[[20,1],[40,2],[60,3],[80,5],[120,6]]},
  {id:"CABCO2510",nm:"Cabezal CO2 5/10 LBS",cat:"accesorios",sub:"Cabezales",pv:7.80,pb:7.00,costo:4.71,stock:222,ago:false,img:"CABCO2510",descVol:[[10,1],[20,2],[30,3],[40,5],[50,6]]},
  {id:"CO2CABMAR",nm:"Cabezal Marítimo CO2",cat:"accesorios",sub:"Cabezales",pv:42.25,pb:38.46,costo:18.93,stock:73,ago:false,img:"CO2CABMAR",descVol:[[2,1],[3,2],[5,3],[8,5],[10,6]]},
  {id:"CO2DISRAP",nm:"CO2 Disparo Rápido (50-100 LBS)",cat:"accesorios",sub:"Cabezales",pv:16.80,pb:13.95,costo:5.92,stock:121,ago:false,img:"CO2DISRAP",descVol:[[5,1],[10,2],[15,3],[20,5],[30,6]]},
  // ACCESORIOS - MANÓMETROS
  {id:"MANOPQS",nm:"Manómetro 195 PSI",cat:"accesorios",sub:"Manómetros",pv:0.85,pb:0.70,costo:0.36,stock:0,ago:true,img:null,descVol:[[30,1],[50,2],[100,3],[150,5],[300,6]],cantMin:10},
  // ACCESORIOS - MANGUERAS
  {id:"MANG10PQS",nm:"Manguera 10 PQS",cat:"accesorios",sub:"Mangueras",pv:0.90,pb:0.80,costo:0.36,stock:327,ago:false,img:null,descVol:[[30,1],[50,2],[80,3],[100,5],[150,6]]},
  {id:"MANG20PQS",nm:"Manguera 20 PQS",cat:"accesorios",sub:"Mangueras",pv:0.90,pb:0.80,costo:0.34,stock:679,ago:false,img:null,descVol:[[30,1],[50,2],[80,3],[100,5],[150,6]]},
  {id:"CORN5CO2",nm:"Corneta 5 CO2",cat:"accesorios",sub:"Mangueras",pv:2.80,pb:2.20,costo:0.95,stock:626,ago:false,img:null,descVol:[[10,1],[15,2],[25,3],[50,5],[80,6]]},
  {id:"MANG10CO2",nm:"Manguera con corneta 10 CO2",cat:"accesorios",sub:"Mangueras",pv:7.20,pb:6.40,costo:2.37,stock:588,ago:false,img:"MANG10CO2",descVol:[[10,1],[20,2],[30,3],[40,5],[60,6]]},
  // ACCESORIOS - SOPORTES
  {id:"SOPCO2R",nm:"Soporte CO2 Rojo",cat:"accesorios",sub:"Soportes",pv:1.20,pb:1.15,costo:0.41,stock:352,ago:false,img:null,descVol:[[50,1],[100,2],[150,3],[200,5],[400,6]]},
  {id:"SOPPQS10",nm:"Soporte PQS 10",cat:"accesorios",sub:"Soportes",pv:0.98,pb:0.85,costo:0.25,stock:440,ago:false,img:null,descVol:[[50,1],[100,2],[150,3],[200,5],[400,6]]},
  {id:"SOPPQS20",nm:"Soporte PQS 20",cat:"accesorios",sub:"Soportes",pv:0.98,pb:0.85,costo:0.28,stock:506,ago:false,img:null,descVol:[[50,1],[100,2],[150,3],[200,5],[400,6]]},
  // ACCESORIOS - OTROS
  {id:"ABRPQS",nm:"Abrazaderas Plásticas",cat:"accesorios",sub:"Otros",pv:0.26,pb:0.24,costo:0.12,stock:2619,ago:false,img:null,descVol:[[100,1],[200,2],[300,3],[500,5],[1000,6]]},
  {id:"SEGPLAM",nm:"Seguros Plásticos Amarillo",cat:"accesorios",sub:"Otros",pv:0.08,pb:0.06,costo:0.03,stock:14767,ago:false,img:null,descVol:[[200,1],[500,2],[800,3],[1000,5],[2000,6]],cantMin:200},
  // MANGUERAS HID
  {id:"MANG15M",nm:"Manguera 15M doble chaqueta 1½\"",cat:"mangueras_hid",sub:"Mangueras",pv:38.61,pb:36.98,costo:29.93,stock:162,ago:false,img:"MANG15M",descVol:[[3,1],[5,2],[8,3]]},
  {id:"MANG30M",nm:"Manguera 30M doble chaqueta 1½\"",cat:"mangueras_hid",sub:"Mangueras",pv:69.10,pb:64.28,costo:46.14,stock:99,ago:false,img:"MANG30M",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]]},
  // GABINETES - VÁLVULAS
  {id:"ANG112",nm:"Angular 1½\" 300 lbs bronce",cat:"gabinetes",sub:"Válvulas",pv:33.83,pb:31.48,costo:23.19,stock:149,ago:false,img:"ANG112",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]]},
  {id:"ANG212",nm:"Angular 2½\" 300 lbs bronce",cat:"gabinetes",sub:"Válvulas",pv:67.11,pb:61.26,costo:46.85,stock:76,ago:false,img:"ANG212",descVol:[[3,1],[5,2],[8,3],[10,4]]},
  // GABINETES - HIDRANTES
  {id:"PIT112",nm:"Pitón 1½\" bronce",cat:"gabinetes",sub:"Hidrantes",pv:19.80,pb:17.80,costo:14.91,stock:168,ago:false,img:"PIT112",descVol:null},
  {id:"NIP112",nm:"Niple 1½\" bronce",cat:"gabinetes",sub:"Hidrantes",pv:7.68,pb:6.88,costo:5.68,stock:292,ago:false,img:"NIP112",descVol:[[5,1],[10,2]]},
  // GABINETES - OTROS
  {id:"BRAZOPOR",nm:"Brazo Portamanguera",cat:"gabinetes",sub:"Otros",pv:12.91,pb:11.71,costo:7.10,stock:97,ago:false,img:"BRAZOPOR",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]]},
  {id:"HACHA",nm:"Hacha Reforzada",cat:"gabinetes",sub:"Otros",pv:12.40,pb:11.78,costo:9.23,stock:70,ago:false,img:"HACHA",descVol:[[3,1],[5,2],[8,3],[10,4]]},
  {id:"SPANNER",nm:"Llave Spanner",cat:"gabinetes",sub:"Otros",pv:6.98,pb:5.98,costo:4.50,stock:95,ago:false,img:"SPANNER",descVol:[[5,1],[10,2],[15,3],[20,4],[30,5]]}
];

// ════════════════════ ESTADO GLOBAL ════════════════════
var USER=null, CARRITO=[], PEDIDOS=[], FILTRO="todos", SUB_FILTRO=null, ADM_TAB="pedidos";
var ADM_PED_FILTRO="pendiente";
var CALIF_PED_ID=null, CALIF_ESTRELLAS=0;
var FAVORITOS=[];
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
var TUT_PASO=0;
var TUT_PASOS=[
  {ico:"🧯",t:"Catálogo",d:"Encuentra todos nuestros productos con precios exclusivos para ti."},
  {ico:"🛒",t:"Pedidos",d:"Arma tu pedido y nosotros coordinamos la entrega hasta tu local."},
  {ico:"🏆",t:"Puntos",d:"Cada compra te da puntos canjeables por premios reales como KFC y tarjetas de consumo."},
  {ico:"📋",t:"Historial",d:"Revisa y repite tus pedidos anteriores fácilmente."}
];

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
  var pv=p.pv;
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
function misPedidos(){return PEDIDOS.filter(function(p){return p.ruc===USER.ruc;});}

function puntosConfirmados(){
  return misPedidos().reduce(function(s,p){
    // Solo cuentan pedidos entregados o finalizados, no cancelados ni pendientes
    if(p.esCanje)return s;
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
    return s+(p.canjePts||0);
  },0);
}

function saldoPuntos(){
  // Solo puntos confirmados menos canjeados
  return Math.max(0, puntosConfirmados()-puntosCanjeados());
}

// ════════════════════ LOGIN ════════════════════
// SHA-256 síncrono (impl. compacta de Geraint Luff, dominio público) para
// soportar contraseñas guardadas como hash (ej. ADMIN) sin texto plano.
function sha256(ascii){
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
  USER=d; PEDIDOS=cargarPedidos(); cargarStock();
  setTimeout(reintentarSyncPendientes,2000);
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
    // Cargar preferencia de grid
    CAT_GRID=localStorage.getItem("pyro_cat_grid")==="1";
    mostrar("s-main");
    // Iniciar activadores UX
    activarScrollTop();
    activarSwipe();
    activarPullToRefresh();
    iniciarAutoguardado();
    // Restaurar última tab (si ya vio tutorial y no hay bienvenida pendiente)
    var ultimaTab=localStorage.getItem("pyro_ultima_tab_"+USER.ruc)||"inicio";
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
function hacerLogin(){
  var u=document.getElementById("login-user").value.trim();
  var pw=document.getElementById("login-pass").value.trim();
  var err=document.getElementById("login-err");
  err.style.display="none";
  if(!loginConCredenciales(u,pw)){err.style.display="block";return;}
  try{localStorage.setItem("pyro_sesion",JSON.stringify({ruc:u,pass:pw}));}catch(e){}
  if(!USER.esAdmin&&USER.rol!=="impresion"){
    mostrarSaludoFlash();
    otorgarBienvenida();
    // Flujo de primer ingreso (bienvenida + cambio de contraseña + tutorial)
    var keyPrimer="pyro_primer_ingreso_"+USER.ruc;
    if(!localStorage.getItem(keyPrimer)){
      mostrarPrimerIngreso();
    } else {
      var key="pyro_tut_"+USER.ruc;
      if(!localStorage.getItem(key)){iniciarTutorial();}
    }
  }
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
  ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:9998;padding:20px";
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
    '<button class="btn btn-p btn-full" style="margin-top:4px" onclick="primerIngresoGuardarPass()">Guardar contraseña</button>'+
    '<button class="btn btn-s btn-full" style="margin-top:8px" onclick="primerIngresoPaso3()">Omitir por ahora</button>'
  );
}
function primerIngresoGuardarPass(){
  var p1=document.getElementById("pi-pass1"),p2=document.getElementById("pi-pass2");
  var v1=p1?p1.value:"",v2=p2?p2.value:"";
  if(v1.length<6){toast("⚠️ La contraseña debe tener al menos 6 caracteres");return;}
  if(v1!==v2){toast("⚠️ Las contraseñas no coinciden");return;}
  USER.pass=v1;
  guardarDistribuidores();
  try{localStorage.setItem("pyro_sesion",JSON.stringify({ruc:USER.ruc,pass:v1}));}catch(e){}
  toast("✅ Contraseña actualizada");
  primerIngresoPaso3();
}
function primerIngresoPaso3(){
  _cerrarPrimerIngresoOv();
  try{localStorage.setItem("pyro_primer_ingreso_"+USER.ruc,"1");}catch(e){}
  iniciarTutorial();
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
  var bid="B"+now.getTime().toString().slice(-5);
  PEDIDOS.push({
    id:bid,ruc:USER.ruc,razon:USER.razon,
    fecha:now.toLocaleDateString(),fechaISO:now.toISOString(),
    esCanje:true,esBienvenida:true,canjePts:0,
    canjeNm:"Combo KFC 3 presas + papas + cola",
    estado:"pendiente",total:0,puntos:0
  });
  guardarPedidos();
  try{localStorage.setItem(flag,"1");}catch(e){}
  if(typeof renderInicio==="function")renderInicio();
  setTimeout(function(){mostrarOverlayBienvenida();},1400);
}
function mostrarOverlayBienvenida(){
  var ov=document.createElement("div");
  ov.id="bienvenida-ov";
  ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;z-index:9999";
  ov.innerHTML='<div style="background:var(--bg);border-radius:20px;padding:32px 28px;max-width:320px;width:90%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.4)">'+
    '<div style="font-size:52px;margin-bottom:12px">🎁</div>'+
    '<div style="font-size:20px;font-weight:800;color:var(--oro);margin-bottom:8px">¡Tienes un regalo de bienvenida!</div>'+
    '<div style="font-size:15px;color:var(--g4);margin-bottom:20px;line-height:1.5">Combo KFC por registrarte<br><span style="font-size:13px;color:var(--g3)">3 presas + papas + cola 🍗</span></div>'+
    '<button class="btn btn-p" style="width:100%;font-size:16px" onclick="document.getElementById(\'bienvenida-ov\').remove()">¡Genial! 🔥</button>'+
  '</div>';
  document.body.appendChild(ov);
}
function logout(){
  USER=null;CARRITO=[];
  try{localStorage.removeItem("pyro_sesion");}catch(e){}
  mostrar("s-login");
  document.getElementById("login-user").value="";
  document.getElementById("login-pass").value="";
}
function mostrar(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active");});document.getElementById(id).classList.add("active");window.scrollTo(0,0);}

function mostrarSaludoFlash(){
  var nm=USER.empresa||USER.razon.split(" ").slice(0,2).join(" ");
  var d=document.createElement("div");
  d.className="saludo-flash";
  d.textContent="¡Hola "+nm+"! Es un gusto tenerte de vuelta 🔥";
  document.body.appendChild(d);
  setTimeout(function(){d.remove();},3200);
}

// ════════════════════ TUTORIAL ════════════════════
function iniciarTutorial(){
  TUT_PASO=0; renderTutPaso();
  document.getElementById("tutorial").style.display="flex";
}
function renderTutPaso(){
  var p=TUT_PASOS[TUT_PASO];
  document.getElementById("tut-ico").textContent=p.ico;
  document.getElementById("tut-t").textContent=p.t;
  document.getElementById("tut-d").textContent=p.d;
  var dots="";
  for(var i=0;i<TUT_PASOS.length;i++)dots+='<div class="tutorial-dot'+(i===TUT_PASO?" active":"")+'"></div>';
  document.getElementById("tut-dots").innerHTML=dots;
  document.getElementById("tut-next").textContent=(TUT_PASO===TUT_PASOS.length-1)?"Empezar ✓":"Siguiente";
}
function tutNext(){
  if(TUT_PASO<TUT_PASOS.length-1){TUT_PASO++;renderTutPaso();}
  else{cerrarTutorial();}
}
function cerrarTutorial(){
  document.getElementById("tutorial").style.display="none";
  localStorage.setItem("pyro_tut_"+USER.ruc,"1");
}

// ════════════════════ NAV ════════════════════
function irTab(t){
  document.querySelectorAll("#s-main .tab-panel").forEach(function(x){x.classList.remove("active");});
  var el=document.getElementById("tab-"+t);if(el)el.classList.add("active");
  document.querySelectorAll("#s-main .bnav").forEach(function(b){b.classList.remove("active");});
  var bn=document.getElementById("bnav-"+t);if(bn)bn.classList.add("active");
  if(t==="inicio")renderInicio();
  if(t==="carrito")renderCarrito();
  if(t==="historial")renderHistorial();
  if(t==="recompensas")renderRecompensas();
  var cb=document.getElementById("cart-bar");
  if(cb)cb.style.display="none"; // barra amarilla inferior del carrito desactivada
  document.querySelector("#s-main .content").scrollTo(0,0);
  if(USER&&!USER.esAdmin){try{localStorage.setItem("pyro_ultima_tab_"+USER.ruc,t);}catch(e){}}
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
  var pend=mp.filter(function(p){return p.estado==="pendiente"||p.estado==="en_proceso"||p.estado==="autorizado"||p.estado==="facturado";});
  var saludoNm=USER.encargado||primerNombre(USER.razon);
  var empresaNm=USER.empresa||USER.razon;
  var heroTxt=(empresaNm&&empresaNm!==saludoNm)?saludoNm+" / "+empresaNm:saludoNm;
  document.getElementById("hero-nombre").textContent=heroTxt;
  var fe=document.getElementById("hero-frase");
  if(fe&&!fe.textContent){fe.textContent=FRASES_MOTIVACIONALES[Math.floor(Math.random()*FRASES_MOTIVACIONALES.length)];}
  setTopbarPts(saldoPuntos());
  animarContador(document.getElementById("hero-pts"),saldoPuntos(),600);
  animarContador(document.getElementById("hs-pedidos"),entregados.length,600);
  animarContador(document.getElementById("hs-proceso"),pend.length,600);
  animarContador(document.getElementById("hs-carrito"),CARRITO.reduce(function(s,i){return s+i.cant;},0),600);
  renderPromosHome();
  renderPedidoFrecuente();
  var up=mp.slice().reverse().slice(0,3);
  document.getElementById("ultimos-pedidos").innerHTML=up.length?up.map(function(p){
    return '<div class="ped" onclick="verDetallePed(\''+p.id+'\')" style="cursor:pointer">'+
      '<div class="ped-top"><div><div class="ped-id">Pedido #'+p.id+'</div>'+
      '<div style="font-size:12px;color:var(--g3)">'+p.fecha+'</div></div>'+
      '<span class="est-chip est-'+estadoClass(p.estado).replace('est-','')+'">'+estadoLabel(p.estado)+'</span></div>'+
      '<div class="ped-total">'+fmt$(p.total)+'</div>'+
    '</div>';
  }).join(""):'<div class="empty"><div class="ico">📭</div><p>Aún no tienes pedidos. ¡Haz tu primero!</p></div>';
}

function renderPedidoFrecuente(){
  var el=document.getElementById("ultimos-pedidos");
  if(!el)return;
  var prev=document.getElementById("card-frecuente-wrap");
  if(prev)prev.remove();
  var mp=misPedidos().filter(function(p){return!p.esCanje&&p.items&&p.items.length;});
  if(!mp.length)return;
  var conteo={};
  mp.forEach(function(p){p.items.forEach(function(it){conteo[it.id]=(conteo[it.id]||0)+it.cant;});});
  var topId=null,topCant=0;
  Object.keys(conteo).forEach(function(k){if(conteo[k]>topCant){topCant=conteo[k];topId=k;}});
  if(!topId)return;
  var topProd=PRODUCTOS.find(function(x){return x.id===topId;});
  if(!topProd)return;
  // Último pedido que contenía ese producto
  var ultimoPed=null;
  for(var i=mp.length-1;i>=0;i--){
    if(mp[i].items.some(function(it){return it.id===topId;})){ultimoPed=mp[i];break;}
  }
  if(!ultimoPed)return;
  var wrap=document.createElement("div");
  wrap.id="card-frecuente-wrap";
  wrap.innerHTML='<div class="sec-titulo">Tu producto más pedido</div>'+
    '<div class="card-frecuente">'+
      '<div style="display:flex;align-items:center;gap:12px">'+
        '<div style="font-size:28px">🔁</div>'+
        '<div style="flex:1"><div style="font-weight:700;font-size:14px">'+topProd.nm+'</div>'+
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
  var activas=promosVigentes();
  if(!activas.length){cont.innerHTML='<div class="sec-titulo">Promociones</div><div class="empty" style="padding:12px 0"><p>No hay promociones disponibles en este momento</p></div>';return;}
  cont.innerHTML="<div class='sec-titulo'>Promociones</div>"+activas.map(function(pr){
    var items=pr.items.map(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      var imgHtml=prod&&prod.img&&IMGS[prod.img]?'<img src="'+IMGS[prod.img]+'" alt="'+it.nm+'" onerror="this.style.display=\'none\'" style="width:60px;height:60px;object-fit:contain;background:#000;border-radius:8px;margin-bottom:6px">':'';
      // Controles de cantidad + agregar al carrito (idénticos al catálogo)
      var addCtl='';
      if(prod&&!prod.ago){
        var cartItem=CARRITO.find(function(i){return i.id===prod.id;});
        var cantActual=cartItem?cartItem.cant:0;
        addCtl='<div class="prod-add-row" style="align-items:center;margin-top:8px">'+
          '<div class="qty-inline">'+
            '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+prod.id+'\',-1)" '+(cantActual===0?'style="opacity:.3;pointer-events:none"':'')+'>−</button>'+
            '<input class="qty-inp" id="qty-cat-'+prod.id+'" type="number" min="0" max="'+prod.stock+'" value="'+cantActual+'" onchange="setCantCatalogo(\''+prod.id+'\',this.value)" onclick="this.select()">'+
            '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+prod.id+'\',1)">+</button>'+
          '</div>'+
          '<button class="badd'+(cantActual>0?' inc':'')+'" onclick="agregarAlCarrito(\''+prod.id+'\')">'+(cantActual>0?'✓ Añadir':'+ Añadir')+'</button>'+
        '</div>';
      } else if(prod&&prod.ago){
        addCtl='<div style="margin-top:8px;font-size:10px;color:#fff;opacity:.6">Agotado</div>';
      }
      return '<div class="promo-it">'+
        imgHtml+
        '<div class="nm">'+it.nm+'</div>'+
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
  function actualizar(){
    var el=document.getElementById(elId);if(!el)return;
    var fin=new Date(fechaVence+"T23:59:59");
    var ahora=new Date();
    var diff=fin-ahora;
    if(diff<=0){el.textContent="¡Terminó!";return;}
    var d=Math.floor(diff/86400000);
    var h=Math.floor((diff%86400000)/3600000);
    var m=Math.floor((diff%3600000)/60000);
    el.textContent="Vence en "+d+"d "+h+"h "+m+"m";
  }
  actualizar();
  _contadores.push(setInterval(actualizar,60000));
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
      try{busqs=JSON.parse(localStorage.getItem("pyro_busquedas")||"[]");}catch(e){}
      if(busqs.indexOf(q)===-1){busqs.unshift(q);busqs=busqs.slice(0,5);try{localStorage.setItem("pyro_busquedas",JSON.stringify(busqs));}catch(e){}}
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
  try{busqs=JSON.parse(localStorage.getItem("pyro_busquedas")||"[]");}catch(e){}
  if(!busqs.length){el.innerHTML="";return;}
  el.innerHTML='<div class="busq-recientes">'+
    '<span style="font-size:10px;color:var(--g3);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-right:4px">Recientes:</span>'+
    busqs.map(function(b){return'<button class="busq-chip" onclick="usarBusquedaReciente(\''+escHtml(b)+'\')">'+escHtml(b)+'</button>';}).join("")+
  '</div>';
}

function usarBusquedaReciente(q){
  var searchEl=document.getElementById("cat-search");
  if(!searchEl)return;
  searchEl.value=q;
  renderSearchRecientes();
  renderCatalogo();
}

function renderCatToolbar(){
  var el=document.getElementById("cat-toolbar");
  if(!el)return;
  el.innerHTML='<button class="cat-grid-btn fbtn'+(CAT_GRID?" active":"")+'\" onclick="toggleCatGrid()" title="'+(CAT_GRID?"Vista lista":"Vista cuadrícula")+'">'+(CAT_GRID?"☰ Lista":"⊞ Cuadrícula")+'</button>';
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
    if(q)favProds=favProds.filter(function(p){return p.nm.toLowerCase().indexOf(q)!==-1||p.id.toLowerCase().indexOf(q)!==-1;});
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

  if(FILTRO==="todos"){
    var prodsEnPromo=[];
    promosVigentes().forEach(function(pr){
      pr.items.forEach(function(it){
        var p=PRODUCTOS.find(function(x){return x.id===it.id;});
        if(!p||p.ago)return;
        if(q&&p.nm.toLowerCase().indexOf(q)===-1&&p.id.toLowerCase().indexOf(q)===-1)return;
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
        if(q&&p.nm.toLowerCase().indexOf(q)===-1&&p.id.toLowerCase().indexOf(q)===-1)return false;
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
  var stockBadge=p.ago?'<span class="badge b-rojo">Agotado</span>':(p.stock<=20&&p.stock>0?'<span class="badge b-amar">⚠️ Pocas ('+p.stock+')</span>':'<span class="badge b-verde">Stock: '+p.stock+'</span>');
  var promoBadge=promoIt?'<span class="badge b-rojo" style="font-size:9px">🔥 PROMO</span>':'';
  var volBadge=(!USER||!USER.sinDescVol)&&p.descVol&&!promoIt?'<span class="badge b-azul" style="font-size:9px">Desc. volumen disponible</span>':'';
  var imgSrc=p.img&&IMGS[p.img]?IMGS[p.img]:null;
  var imgHtml=imgSrc?'<img src="'+imgSrc+'" alt="'+p.nm+'" loading="lazy" onerror="this.onerror=null;this.src=IMG_PLACEHOLDER" onclick="zoomImg(\''+imgSrc+'\')" style="cursor:zoom-in">':"<div class='ph'>🧯</div>";
  var favBtn='<button class="fav-btn'+(isFav?" active":"")+'\" onclick="toggleFav(\''+p.id+'\')">'+(isFav?"❤️":"🤍")+'</button>';

  // Indicador próximo descuento
  var proxDescHtml="";
  if(p.descVol&&!USER.sinDescVol&&cantActual>0){
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
          '<input class="qty-inp" id="qty-cat-'+p.id+'" type="number" min="0" max="'+p.stock+'" value="'+cantActual+'" onchange="setCantCatalogo(\''+p.id+'\',this.value)" onclick="this.select()">'+
          '<button class="qb-sm" onclick="cambiarCantCatalogo(\''+p.id+'\',1)">+</button>'+
        '</div>'+
        '<button class="badd'+(cantActual>0?' inc':'')+'" onclick="agregarAlCarrito(\''+p.id+'\')">'+
          (cantActual>0?'✓ Añadir':'+ Añadir')+
        '</button>'+
      '</div>';

  var descPctDisp=rv.descPct>0?Math.round(rv.descPct):0;

  if(CAT_GRID){
    return '<div class="prod prod-grid'+(p.ago?" ago":"")+'">'+
      '<div class="prod-grid-img">'+(imgSrc?'<img src="'+imgSrc+'" alt="'+p.nm+'" loading="lazy" onerror="this.onerror=null;this.src=IMG_PLACEHOLDER" onclick="zoomImg(\''+imgSrc+'\')" style="cursor:zoom-in">':'<div class="ph" style="font-size:36px">🧯</div>')+'</div>'+
      favBtn+
      '<div class="prod-grid-body">'+
        '<div class="prod-nm">'+p.nm+'</div>'+
        '<div class="prod-meta" style="margin:4px 0">'+stockBadge+promoBadge+'</div>'+
        '<div class="prod-pu">'+fmt$(pc)+'</div>'+
        (descPctDisp>0?'<div class="prod-desc-badge" style="display:inline-block;margin-bottom:4px">−'+descPctDisp+'%</div>':'')+
        proxDescHtml+
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

  return '<div class="prod'+(p.ago?" ago":"")+'\" style="position:relative">'+
    favBtn+
    '<div class="prod-img">'+imgHtml+'</div>'+
    '<div class="prod-info">'+
      '<div class="prod-nm">'+p.nm+'</div>'+
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
  renderCatalogo();
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
  // Actualizar solo el input de esa tarjeta
  var inp=document.getElementById("qty-cat-"+id);
  if(inp)inp.value=nueva;
  // Actualizar estilo del botón
  renderCatalogo();
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
  renderCatalogo();
  refrescarPromosSiVisible();
}

function agregarAlCarrito(id){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p||p.ago)return;
  var item=CARRITO.find(function(i){return i.id===id;});
  if(!item){
    var min=cantMinProducto(p);
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
  renderCatalogo();
  refrescarPromosSiVisible();
}

function animarVueloCarrito(id){
  var qb=document.getElementById("qty-cat-"+id);
  var destEl=document.getElementById("bnav-carrito");
  if(!qb||!destEl)return;
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  var emoji=(p&&p.img)?'🛒':'🛒';
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
  var cont=document.getElementById("cart-lista");
  var res=document.getElementById("cart-resumen");
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
    return '<div class="item">'+
      '<div class="item-i">'+
        '<div class="item-nm">'+p.nm+'</div>'+
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
        '<input class="qty-cart-inp" type="number" min="0" max="'+p.stock+'" value="'+it.cant+'" onchange="setCantCarrito(\''+it.id+'\',this.value)" onclick="this.select()">'+
        '<button class="qb" onclick="cambiarCant(\''+it.id+'\',1)">+</button>'+
      '</div>'+
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">'+
        '<span class="item-t">'+fmt$(total)+'</span>'+
        '<button class="brm" onclick="quitarItem(\''+it.id+'\')">🗑</button>'+
      '</div>'+
    '</div>';
  }).join("");
  if(omitidos.length)html='<div style="background:var(--amarc);border:1.5px solid var(--amar);border-radius:10px;padding:10px 14px;margin-bottom:10px;font-size:12px;color:#8a6600">⚠️ '+omitidos.length+' producto(s) agotado(s) fueron omitidos: '+omitidos.join(", ")+'</div>'+html;
  cont.innerHTML=html;
  var iva=subtotal*IVA;
  var total=subtotal+iva;

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
        (USER.entrega&&USER.entrega.habilitada?'<option value="entrega">Entrega a domicilio</option>':'')+
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
  // Restaurar selección previa
  if(prevPago){var pe=document.getElementById("cart-pago");if(pe)pe.value=prevPago;}
  if(prevModo){var me=document.getElementById("cart-modo");if(me)me.value=prevModo;}
  renderModoEntrega();
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
  if(modo&&modo.value==="entrega"&&USER&&USER.entrega&&USER.entrega.montoMin){
    var subtotal=calcularSubtotalCarrito();
    if(subtotal<USER.entrega.montoMin){
      ok=false;
      minMsg="⚠️ Pedido mínimo para entrega a domicilio: "+fmt$(USER.entrega.montoMin);
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
  var it=CARRITO.find(function(i){return i.id===id;});
  if(it)it.cant=n;
  var msg=validarCantMinMsg(p,n);
  if(msg)toast("⚠️ "+msg);
  guardarCarrito();
  renderCarrito();
  actualizarBadge();
}

function renderModoEntrega(){
  var sel=document.getElementById("cart-modo");
  var ex=document.getElementById("entrega-extra");
  if(!sel||!ex)return;
  if(sel.value==="entrega"){
    var ests=(USER.establecimientos||[]).map(function(e,i){return'<option value="'+i+'">'+e.nm+" — "+e.dir+'</option>';}).join("");
    var hoy=new Date().toISOString().split("T")[0];
    ex.innerHTML='<label class="form-label">Establecimiento</label>'+
      '<select class="form-select" id="cart-est">'+ests+'<option value="nuevo">+ Agregar dirección</option></select>'+
      '<div id="nueva-dir-box" style="display:none">'+
        '<label class="form-label">Nombre del local</label>'+
        '<input class="form-input" id="nueva-dir-nm" placeholder="Ej: Sucursal Norte">'+
        '<label class="form-label">Dirección</label>'+
        '<input class="form-input" id="nueva-dir-dir" placeholder="Av. principal y calle...">'+
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
    // Listener para nueva dirección
    var estSel=document.getElementById("cart-est");
    if(estSel)estSel.addEventListener("change",function(){
      var box=document.getElementById("nueva-dir-box");
      if(box)box.style.display=(this.value==="nuevo")?"block":"none";
    });
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
  if(p){var msg=validarCantMinMsg(p,it.cant);if(msg&&it.cant>0)toast("⚠️ "+msg);}
  if(it.cant<0)it.cant=0;
  guardarCarrito(); renderCarrito(); actualizarBadge();
}
function quitarItem(id){
  CARRITO=CARRITO.filter(function(i){return i.id!==id;});
  guardarCarrito(); renderCarrito(); actualizarBadge();
  toast("🗑 Producto eliminado");
}

// ════════════════════ BORRADORES ════════════════════
function guardarBorrador(){
  if(!CARRITO.length){toast("⚠️ El carrito está vacío");return;}
  var borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+USER.ruc)||"[]");
  if(borradores.length>=3){toast("⚠️ Máximo 3 borradores. Elimina uno primero.");return;}
  borradores.push({ts:Date.now(),items:JSON.parse(JSON.stringify(CARRITO))});
  localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));
  toast("💾 Borrador guardado");
  renderBorradores();
}
function renderBorradores(){
  var bp=document.getElementById("borradores-panel");
  if(!bp)return;
  var borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+USER.ruc)||"[]");
  if(!borradores.length){bp.innerHTML="";return;}
  bp.innerHTML='<div style="margin-bottom:10px"><div class="form-label">Borradores guardados</div>'+
    borradores.map(function(b,i){
      var d=new Date(b.ts);
      var label=b.nombre==="Autoguardado"?"💾 Autoguardado":"Borrador "+(i+1);
      return '<div class="borrador-item">'+
        '<span style="font-size:12px">'+label+' — '+d.toLocaleDateString()+'</span>'+
        '<div style="display:flex;gap:6px">'+
          '<button class="btn btn-sm btn-p" onclick="cargarBorrador('+i+')">Cargar</button>'+
          '<button class="btn btn-sm btn-s" onclick="eliminarBorrador('+i+')">✕</button>'+
        '</div>'+
      '</div>';
    }).join("")+
  '</div>';
}
function cargarBorrador(i){
  var borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+USER.ruc)||"[]");
  if(!borradores[i])return;
  CARRITO=JSON.parse(JSON.stringify(borradores[i].items));
  guardarCarrito(); renderCarrito(); actualizarBadge();
  toast("✏️ Borrador cargado.");
}
function eliminarBorrador(i){
  var borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+USER.ruc)||"[]");
  borradores.splice(i,1);
  localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));
  renderBorradores(); toast("Borrador eliminado");
}

// ════════════════════ CONFIRMAR PEDIDO ════════════════════
function confirmarPedido(){
  var hayItems=CARRITO.some(function(i){var p=PRODUCTOS.find(function(x){return x.id===i.id;});return p&&!p.ago&&i.cant>0;});
  if(!hayItems){toast("⚠️ Tu carrito está vacío");return;}

  // Validar cantidades mínimas antes de continuar
  var errMin=null;
  CARRITO.forEach(function(it){
    if(errMin)return;
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p||p.ago)return;
    var msg=validarCantMinMsg(p,it.cant);
    if(msg)errMin=msg;
  });
  if(errMin){toast("⚠️ "+errMin);return;}

  var pagoSel=document.getElementById("cart-pago");
  var modoSel=document.getElementById("cart-modo");
  if(!pagoSel||!pagoSel.value){toast("⚠️ Selecciona una forma de pago");return;}
  if(!modoSel||!modoSel.value){toast("⚠️ Selecciona un modo de entrega");return;}

  var modo=document.getElementById("cart-modo").value;
  // Validar monto mínimo para entrega a domicilio
  if(modo==="entrega"&&USER&&USER.entrega&&USER.entrega.montoMin){
    if(calcularSubtotalCarrito()<USER.entrega.montoMin){
      toast("⚠️ Pedido mínimo para entrega a domicilio: "+fmt$(USER.entrega.montoMin));
      return;
    }
  }
  // Validar dirección si es entrega
  if(modo==="entrega"){
    var estSel=document.getElementById("cart-est");
    if(estSel&&estSel.value==="nuevo"){
      var nmDir=document.getElementById("nueva-dir-nm");
      var dirDir=document.getElementById("nueva-dir-dir");
      if(!nmDir||!nmDir.value.trim()||!dirDir||!dirDir.value.trim()){
        toast("⚠️ Ingresa el nombre y dirección del local de entrega");
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
  CARRITO.forEach(function(it){
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p||p.ago||it.cant<=0)return;
    var rv=precioConVolumen(p,it.cant);
    var pr=rv.precio;
    var pts=calcPuntos(pr,p.costo)*it.cant;
    subtotal+=pr*it.cant; ptsTotal+=pts;
    items.push({id:p.id,nm:p.nm,cant:it.cant,pv:p.pv,pr:pr,descPct:rv.descPct,pts:pts,costo:p.costo||0});
  });
  var iva=subtotal*IVA, total=subtotal+iva;
  var pid=Date.now().toString().slice(-6);
  var now=new Date();
  var entregaInfo={};
  if(modo==="entrega"){
    var estSel2=document.getElementById("cart-est");
    var idx=estSel2?parseInt(estSel2.value,10):0;
    var est=USER.establecimientos&&USER.establecimientos[idx]?USER.establecimientos[idx]:null;
    var fechaOpt=document.getElementById("cart-fecha-opt");
    var fechaVal=fechaOpt&&fechaOpt.value==="especifica"&&document.getElementById("cart-fecha")?document.getElementById("cart-fecha").value:"";
    var horaVal=document.getElementById("cart-hora")?document.getElementById("cart-hora").value:"";
    entregaInfo={establecimiento:est,fecha:fechaVal,hora:horaVal};
  }
  var ped={id:pid,ruc:USER.ruc,razon:USER.razon,fecha:now.toLocaleDateString(),fechaISO:now.toISOString(),pago:pago,modo:modo,notas:notas,items:items,subtotal:subtotal,iva:iva,total:total,puntos:ptsTotal,estado:"pendiente",entregaInfo:entregaInfo,esCanje:false};
  PEDIDOS.push(ped);
  if(navigator.vibrate)navigator.vibrate([30,20,60]);
  guardarPedidos();
  sincronizarConSheets(ped, false);
  items.forEach(function(it){
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(p){p.stock=Math.max(0,p.stock-it.cant);if(p.stock===0)p.ago=true;}
  });
  guardarStock();
  CARRITO=[];
  guardarCarrito();
  actualizarBadge();
  mostrarExito("¡Pedido confirmado!","#"+pid+" · "+fmtPts(ptsTotal)+" pts pendientes de confirmar");
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
    facturado:"🚚 En proceso",
    finalizado:"📦 Entregado",
    cancelado:"✕ Cancelado"
  };
  return m[e]||e;
}
function estadoClass(e){
  if(e==="pendiente")return"est-pendiente";
  if(e==="en_proceso"||e==="autorizado"||e==="entrega"||e==="facturado")return"est-en-proceso";
  if(e==="entregado"||e==="finalizado")return"est-finalizado";
  if(e==="cancelado")return"est-cancelado";
  return"est-pendiente";
}

function toggleFechasFiltro(){
  var wrap=document.getElementById("hfechas-wrap");
  if(!wrap)return;
  wrap.classList.toggle("open");
}
function aplicarFiltroFecha(){
  H_DESDE=document.getElementById("h-desde")?document.getElementById("h-desde").value:null;
  H_HASTA=document.getElementById("h-hasta")?document.getElementById("h-hasta").value:null;
  renderHistorial();
}
function limpiarFiltroFecha(){
  H_DESDE=null; H_HASTA=null;
  var d=document.getElementById("h-desde"),h=document.getElementById("h-hasta");
  if(d)d.value=""; if(h)h.value="";
  renderHistorial();
}

function renderHistorial(){
  var mp=misPedidos().slice().reverse();
  if(H_FILTRO==="pendiente")mp=mp.filter(function(p){return p.estado==="pendiente";});
  else if(H_FILTRO==="proceso")mp=mp.filter(function(p){return["en_proceso","autorizado","entrega","facturado"].indexOf(p.estado)!==-1;});
  else if(H_FILTRO==="finalizado")mp=mp.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";});
  if(H_DESDE){var d0=new Date(H_DESDE+"T00:00:00");mp=mp.filter(function(p){return parseFechaPed(p)>=d0;});}
  if(H_HASTA){var d1=new Date(H_HASTA+"T23:59:59");mp=mp.filter(function(p){return parseFechaPed(p)<=d1;});}
  document.getElementById("hist-lista").innerHTML=mp.length?mp.map(function(p){
    var confirmados=(p.estado==="entregado"||p.estado==="finalizado");
    var ptsHtml=p.esBienvenida?
      '<div class="ped-pts" style="color:#B8860B">🎁 Regalo de bienvenida</div>'+
      '<div style="font-size:11px;color:var(--g3);margin-top:3px">¡Gracias por unirte! Coordinaremos tu combo con tu primer pedido.</div>':
      p.esCanje?
      '<div class="ped-pts">🎁 Canjeaste '+fmtPts(p.canjePts)+' pts</div>'+
      '<div style="font-size:11px;color:var(--g3);margin-top:3px">Tu regalo será entregado en 0 a 7 días laborables.</div>':
      (confirmados
        ?'<div class="ped-pts" style="color:var(--verde)">🏆 '+fmtPts(p.puntos||0)+' puntos acreditados</div>'
        :(p.estado!=="cancelado"?'<div class="ped-pts" style="color:var(--amar)">⏳ '+fmtPts(p.puntos||0)+' puntos pendientes de entrega</div>':''));
    var califShow=p.calificacion?'<div style="font-size:11px;color:var(--g3);margin-top:4px">Calificación: '+"⭐".repeat(p.calificacion.estrellas)+'</div>':"";
    var accBtns='<button class="btn btn-sm btn-s" onclick="verDetallePed(\''+p.id+'\')">Ver detalle</button>';
    if(!p.esCanje){
      if(p.estado==="pendiente"){
        accBtns+='<button class="btn btn-sm btn-s" onclick="editarPedido(\''+p.id+'\')">✏️ Editar</button>';
        accBtns+='<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border:1.5px solid var(--rojo)" onclick="cancelarPedido(\''+p.id+'\')">Cancelar</button>';
      } else if(p.estado==="entregado"||p.estado==="finalizado"){
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
      (p.esCanje?'<div class="ped-items">🎁 '+p.canjeNm+'</div>':'<div class="ped-items">'+(p.items?p.items.length:0)+' producto(s) · '+p.pago+'</div>')+
      ptsHtml+califShow+
      '<div class="ped-acc">'+accBtns+'</div>'+
    '</div>';
  }).join(""):'<div class="empty"><div class="ico">📭</div><p>No hay pedidos en esta categoría</p></div>';
}

function cancelarPedido(pid){
  confirmar("¿Cancelar el pedido #"+pid+"? Esta acción no se puede deshacer.",function(){
    var p=PEDIDOS.find(function(x){return x.id===pid;});
    if(p){
      p.estado="cancelado";
      if(p.items){
        p.items.forEach(function(it){
          var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
          if(prod){prod.stock+=it.cant;prod.ago=false;}
        });
        guardarStock();
      }
    }
    guardarPedidos(); renderHistorial(); toast("✕ Pedido cancelado");
  });
}

function editarPedido(pid){
  confirmar("¿Devolver el pedido #"+pid+" al carrito para editarlo?",function(){
    var p=PEDIDOS.find(function(x){return x.id===pid;});
    if(!p||!p.items)return;
    p.items.forEach(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      if(prod){prod.stock+=it.cant;prod.ago=false;}
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
    irTab("carrito");
    toast("✏️ Pedido #"+pid+" devuelto al carrito.");
  });
}

function repetirPedido(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p||!p.items)return;
  var omitidos=[];
  p.items.forEach(function(it){
    var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!prod||prod.ago){omitidos.push(it.nm);return;}
    var exist=CARRITO.find(function(c){return c.id===it.id;});
    if(exist)exist.cant+=it.cant;
    else CARRITO.push({id:it.id,cant:it.cant});
  });
  guardarCarrito(); actualizarBadge();
  if(omitidos.length)toast("⚠️ "+omitidos.length+" producto(s) no disponibles omitidos");
  else toast("✏️ Pedido cargado al carrito.");
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
    return '<div class="rrow"><span>'+it.nm+' x'+it.cant+'</span><span>'+fmt$(it.pr*it.cant)+'</span></div>';
  }).join("");
  html+='<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(p.total)+'</span></div>'+
    '<div style="margin-top:12px;font-size:13px;color:var(--g4)">'+
      '<b>Pago:</b> '+p.pago+'<br><b>Modo:</b> '+(p.modo==="retiro"?"Retiro en local":"Entrega a domicilio")+
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
      (p.entregaInfo.establecimiento.nm||"")+' — '+(p.entregaInfo.establecimiento.dir||"")+
      (p.entregaInfo.fecha?'<br><b>Fecha solicitada:</b> '+p.entregaInfo.fecha:'')+
      (p.entregaInfo.hora?'<br><b>Horario:</b> '+p.entregaInfo.hora:'')+
      '</div>':'')+
    (p.notas?'<div style="margin-top:8px;font-size:13px;color:var(--g4)"><b>Notas:</b> '+p.notas+'</div>':'')+
    (p.puntos?'<div style="margin-top:8px;font-size:13px;color:#B8860B;font-weight:700">🏆 '+fmtPts(p.puntos)+' puntos '+(p.estado==="entregado"||p.estado==="finalizado"?"acreditados":"pendientes de entrega")+'</div>':'')+
    (p.calificacion?'<div style="margin-top:8px;font-size:13px">Calificación: '+"⭐".repeat(p.calificacion.estrellas)+'<br><i>'+(p.calificacion.comentario||"")+'</i></div>':'')+
    (!p.esCanje?renderTrackingPedido(p.estado):'')+
    ((!p.esCanje&&p.items&&p.items.length)?
      '<button class="btn btn-p btn-full" style="margin-top:16px" onclick="generarProforma(\''+p.id+'\')">📄 Descargar Proforma PDF</button>'+
      '<button class="btn btn-s btn-full" style="margin-top:8px" onclick="generarNotaEntrega(\''+p.id+'\')">📋 Nota de entrega</button>':'')+
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
  cerrarModal("modal-pedido-det");
  renderHistorial();
  toast("✅ Forma de pago actualizada");
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
function cargarRewards(){try{var r=JSON.parse(localStorage.getItem("pyro_rewards")||"null");if(r&&r.length)REWARDS=r;}catch(e){}}
function guardarRewards(){try{localStorage.setItem("pyro_rewards",JSON.stringify(REWARDS));}catch(e){}}
cargarRewards();

function renderRecompensas(){
  var saldo=saldoPuntos();
  var pendiente=puntosPendientes();
  document.getElementById("rec-pts-v").textContent=fmtPts(saldo);
  var pendHtml=pendiente>0?'<div class="rec-pts-pend">⏳ '+fmtPts(pendiente)+' pts pendientes de entrega</div>':'';
  document.getElementById("rec-pts-pend-box").innerHTML=pendHtml;
  var activas=REWARDS.filter(function(r){return!r.agotado;});
  var siguiente=activas.find(function(r){return r.pts>saldo;});
  var mot=siguiente?"¡Te faltan "+fmtPts(siguiente.pts-saldo)+" puntos para "+siguiente.nm+"!":"🎉 ¡Tienes puntos para canjear!";
  document.getElementById("rec-mot").textContent=mot;
  document.getElementById("rec-lista").innerHTML=REWARDS.map(function(r){
    var pct=Math.min(100,Math.round(saldo/r.pts*100));
    var puede=saldo>=r.pts&&!r.agotado;
    return '<div class="rec-item">'+
      '<div class="rec-top"><div class="rec-ico">'+r.ico+'</div>'+
      '<div><div class="rec-nm">'+r.nm+(r.agotado?' <span style="background:#e74c3c;color:#fff;font-size:10px;padding:1px 6px;border-radius:4px;font-weight:600">Agotado</span>':'')+'</div>'+
      '<div class="rec-pts-need">'+fmtPts(r.pts)+' puntos</div></div></div>'+
      '<div class="rec-bar-wrap"><div class="rec-bar" style="width:0" data-pct="'+pct+'"></div></div>'+
      (puede?'<button class="btn btn-p btn-full rec-btn" onclick="canjear('+r.pts+',\''+r.nm+'\')">Canjear '+fmtPts(r.pts)+' pts</button>':
       r.agotado?'<button class="btn btn-s btn-full rec-btn" disabled style="opacity:0.5">No disponible</button>':
       '<button class="btn btn-s btn-full rec-btn" disabled>Faltan '+fmtPts(r.pts-saldo)+' pts</button>')+
    '</div>';
  }).join("");
  setTimeout(function(){
    document.querySelectorAll("#rec-lista .rec-bar").forEach(function(b){b.style.width=(b.getAttribute("data-pct")||0)+"%";});
  },60);
}
function canjear(pts,nm){
  if(saldoPuntos()<pts){toast("⚠️ No tienes suficientes puntos confirmados");return;}
  confirmar("¿Canjear <b>"+fmtPts(pts)+" puntos</b> por <b>"+nm+"</b>?<br><small>Se coordinará con tu próximo pedido.</small>",function(){
    if(saldoPuntos()<pts){toast("⚠️ Ya no tienes suficientes puntos");renderRecompensas();return;}
    var pid="C"+Date.now().toString().slice(-5);
    PEDIDOS.push({id:pid,ruc:USER.ruc,razon:USER.razon,fecha:new Date().toLocaleDateString(),fechaISO:new Date().toISOString(),esCanje:true,canjePts:pts,canjeNm:nm,estado:"pendiente",total:0,puntos:0});
    guardarPedidos(); renderRecompensas();
    setTopbarPts(saldoPuntos());
    mostrarOverlayCanje();
  });
}
function mostrarOverlayCanje(){
  var prev=document.getElementById("canje-ov");
  if(prev)prev.remove();
  var ov=document.createElement("div");
  ov.id="canje-ov";
  ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;z-index:9999";
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
  document.querySelectorAll(".adm-panel").forEach(function(p){p.classList.remove("active");});
  document.getElementById("adm-"+t).classList.add("active");
  if(t==="pedidos")renderAdmPedidos();
  if(t==="distribuidores")renderAdmDist();
  if(t==="stock")renderAdmStock();
  if(t==="recompensas")renderAdmRecompensas();
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
    {f:"finalizado",l:"✔️ Finalizados"},
    {f:"cancelado",l:"✕ Cancelados"}
  ];
  var filtrosHtml='<div class="hfiltros" style="margin-bottom:10px">'+filtros.map(function(o){
    return '<button class="fbtn'+(ADM_PED_FILTRO===o.f?" active":"")+'" onclick="setAdmPedFiltro(\''+o.f+'\')">'+o.l+'</button>';
  }).join("")+'</div>';
  var lista=PEDIDOS.slice().reverse().filter(function(p){return!p.esCanje;}).filter(filtrarPedAdmin);
  document.getElementById("adm-ped-lista").innerHTML=filtrosHtml+(lista.length?lista.map(function(p){
    return '<div class="card"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center">'+
        '<div><div style="font-weight:700">Pedido #'+p.id+'</div>'+
        '<div style="font-size:12px;color:var(--g3)">'+p.razon+' · '+p.fecha+'</div></div>'+
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

// Cargar costos desde localStorage (editables por admin)
function cargarCostos(){
  try{return JSON.parse(localStorage.getItem("pyro_costos")||"{}");}catch(e){return{};}
}
function guardarCostos(costos){
  try{localStorage.setItem("pyro_costos",JSON.stringify(costos));}catch(e){}
}
function getCostoProducto(id){
  var costos=cargarCostos();
  if(costos[id]!=null)return costos[id];
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  return p?p.costo:0;
}

// Costo real total de una lista de canjes, buscando la recompensa por nombre en REWARDS.
// Si no se encuentra el costoReal, usa el promedio de costos reales conocidos.
function costoCanjesEntregados(lista){
  var conocidos=REWARDS.filter(function(r){return r.costoReal!=null;});
  var prom=conocidos.length?conocidos.reduce(function(s,r){return s+r.costoReal;},0)/conocidos.length:0;
  return lista.reduce(function(s,p){
    var rw=REWARDS.find(function(r){return r.nm===p.canjeNm;});
    var c=(rw&&rw.costoReal!=null)?rw.costoReal:prom;
    return s+c;
  },0);
}

function renderAdmPedidos(){
  // Solo pedidos reales (no canjes) para estadísticas
  var ped=PEDIDOS.filter(function(p){return!p.esCanje;});
  var canjes=PEDIDOS.filter(function(p){return p.esCanje;});

  // Nuevos = solo pendientes activos (no cancelados)
  var nuevos=ped.filter(function(p){return p.estado==="pendiente";}).length;

  // Total vendido = suma de SUBTOTALES de pedidos entregados/finalizados (sin IVA)
  var totalVendido=ped.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";})
    .reduce(function(s,p){return s+(p.subtotal||0);},0);

  // Utilidad generada = subtotal - costos, de pedidos entregados/finalizados
  var utilidad=ped.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";})
    .reduce(function(s,p){
      var costoTotal=(p.items||[]).reduce(function(cs,it){
        return cs+getCostoProducto(it.id)*(it.cant||0);
      },0);
      return s+(p.subtotal||0)-costoTotal;
    },0);

  // Distribuidores únicos con al menos un pedido entregado
  var distActivos=new Set(ped.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";}).map(function(p){return p.ruc;})).size;

  // Canjes pendientes (solo estado pendiente, no cancelados, no finalizados)
  var canjesPend=canjes.filter(function(p){return p.estado==="pendiente";}).length;
  var canjesEntregadosArr=canjes.filter(function(p){return p.estado==="entregado"||p.estado==="finalizado";});
  var canjesEntregados=canjesEntregadosArr.length;

  // Costo real de canjes entregados/finalizados (usando costoReal de REWARDS por nombre del canje)
  var costoCanjes=costoCanjesEntregados(canjesEntregadosArr);

  document.getElementById("adm-stats").innerHTML=
    '<div class="adm-stat"><div class="v">'+nuevos+'</div><div class="l">Nuevos pedidos</div></div>'+
    '<div class="adm-stat"><div class="v">'+fmt$(totalVendido)+'</div><div class="l">Total vendido (subtotal)</div></div>'+
    '<div class="adm-stat"><div class="v">'+fmt$(utilidad)+'</div><div class="l">Utilidad generada</div></div>'+
    '<div class="adm-stat"><div class="v">'+distActivos+'</div><div class="l">Distribuidores activos</div></div>'+
    '<div class="adm-stat"><div class="v">'+canjesPend+'</div><div class="l">Canjes pendientes</div></div>'+
    '<div class="adm-stat"><div class="v">'+canjesEntregados+' canjes entregados</div><div class="l">me costaron '+fmt$(costoCanjes)+'</div></div>';
  var extraEl=document.getElementById("adm-dashboard-extra");
  if(extraEl)extraEl.innerHTML=renderTop5Distribuidores()+
    '<button class="btn btn-s btn-full" style="margin-bottom:14px" onclick="generarReporteMensual()">📊 Reporte mensual PDF</button>';

  // Barra de filtros de estado (chips)
  var filtros=[
    {f:"todos",l:"Todos"},
    {f:"pendiente",l:"⏳ Pendientes"},
    {f:"proceso",l:"🔄 En proceso"},
    {f:"entregado",l:"📦 Entregados"},
    {f:"finalizado",l:"✔️ Finalizados"},
    {f:"cancelado",l:"✕ Cancelados"}
  ];
  var filtrosHtml='<div class="hfiltros" style="margin-bottom:10px">'+filtros.map(function(o){
    return '<button class="fbtn'+(ADM_PED_FILTRO===o.f?" active":"")+'" onclick="setAdmPedFiltro(\''+o.f+'\')">'+o.l+'</button>';
  }).join("")+'</div>';

  var lista=PEDIDOS.slice().reverse().filter(filtrarPedAdmin);
  document.getElementById("adm-ped-lista").innerHTML=filtrosHtml+(lista.length?lista.map(function(p){
    var facBadge="";
    if(!p.esCanje){
      if(p.azurFactura)facBadge='<span class="badge b-verde" style="font-size:10px">✔️ Facturado</span>';
      else if(p.estado==="entregado")facBadge='<span class="badge b-amar" style="font-size:10px">⚠️ Pendiente facturar</span>';
    }
    return '<div class="card" onclick="admVerPedido(\''+p.id+'\')" style="cursor:pointer"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center">'+
        '<div><div style="font-weight:700">'+(p.esCanje?"🎁 Canje":"Pedido #"+p.id)+'</div>'+
        '<div style="font-size:12px;color:var(--g3)">'+p.razon+' · '+p.fecha+'</div></div>'+
        '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">'+
        '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabelAdmin(p.estado)+'</span>'+
        facBadge+
        '</div>'+
      '</div>'+
      (!p.esCanje?'<div style="font-size:18px;font-weight:800;font-family:\'Barlow Condensed\',sans-serif;margin-top:6px">'+fmt$(p.total)+'</div>':'')+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">📦</div><p>No hay pedidos en esta categoría.</p></div>');
}

// Filtra un pedido según ADM_PED_FILTRO
function filtrarPedAdmin(p){
  if(ADM_PED_FILTRO==="todos")return true;
  if(ADM_PED_FILTRO==="pendiente")return p.estado==="pendiente";
  if(ADM_PED_FILTRO==="proceso")return["en_proceso","autorizado","entrega","facturado"].indexOf(p.estado)!==-1;
  if(ADM_PED_FILTRO==="entregado")return p.estado==="entregado";
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
  var estadosAdmin=['pendiente','en_proceso','entregado','cancelado'];
  var html='<div class="mhandle"></div><h3>'+(p.esCanje?"Canje":"Pedido")+" #"+p.id+'</h3>'+
    (p.esCanje&&p.canjeNm?'<div style="font-size:15px;font-weight:700;color:var(--oro);margin-bottom:8px">🎁 '+p.canjeNm+'</div>':'')+
    '<div style="font-size:12px;color:var(--g3);margin-bottom:12px">'+p.razon+' · '+tipoDocLabel(DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{ruc:p.ruc})+': '+p.ruc+' · '+p.fecha+'</div>'+
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
    if(p.obsAdmin)'<div style="font-size:12px;color:var(--azul);margin-bottom:8px">Obs. actual: '+p.obsAdmin+'</div>';
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
      return '<div class="rrow"><span>'+it.nm+' x'+it.cant+'</span><span>'+fmt$(it.pr*it.cant)+'</span></div>';
    }).join("")+'<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(p.total)+'</span></div>';
    html+='<div style="margin-top:10px;font-size:13px"><b>Pago:</b> '+p.pago+'</div>';
    if(p.puntos)html+='<div style="font-size:13px;color:#B8860B;font-weight:700;margin-top:4px">🏆 '+fmtPts(p.puntos)+' puntos</div>';
    if(p.calificacion)html+='<div style="margin-top:8px;font-size:13px">Calificación: '+"⭐".repeat(p.calificacion.estrellas)+' '+( p.calificacion.comentario?'<i>"'+p.calificacion.comentario+'"</i>':"")+' </div>';
    // Botones de acción
    html+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">'+
      '<button class="btn btn-s" style="flex:1;background:#25D366;color:#fff;border-color:#25D366" onclick="generarWA(\''+p.id+'\')">📲 WhatsApp</button>'+
      '<button class="btn btn-s" style="flex:1" onclick="generarProforma(\''+p.id+'\')">📄 Proforma</button>'+
      '<button class="btn btn-s" style="flex:1" onclick="generarNotaEntrega(\''+p.id+'\')">📋 Nota de entrega</button>'+
    '</div>';
    if(p.azurFactura){
      html+='<div style="margin-top:10px;background:var(--verdec);border:1.5px solid var(--verde);border-radius:10px;padding:10px 12px;font-size:12px;color:var(--verde)">✅ <b>Factura emitida en Azur</b><br><span style="font-size:10px;word-break:break-all;color:var(--g4)">Clave: '+p.azurFactura+'</span></div>';
      html+='<button class="btn btn-s btn-full" style="margin-top:8px" onclick="generarAzur(\''+p.id+'\')">🔄 Re-enviar a Azur</button>';
    } else {
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

function parseFechaPed(p){
  if(p.fechaISO)return new Date(p.fechaISO);
  if(p.fecha&&p.fecha.indexOf("/")!==-1){
    var partes=p.fecha.split("/");
    return new Date(parseInt(partes[2],10),parseInt(partes[1],10)-1,parseInt(partes[0],10));
  }
  return new Date(p.fecha);
}

function renderResumenDist(ruc){
  var peds=PEDIDOS.filter(function(p){return p.ruc===ruc&&!p.esCanje;});
  var ahora=new Date();
  var esteMes=peds.filter(function(p){var d=parseFechaPed(p);return d.getMonth()===ahora.getMonth()&&d.getFullYear()===ahora.getFullYear();});
  var mesPas=peds.filter(function(p){var d=parseFechaPed(p);var m=ahora.getMonth()-1;var y=ahora.getFullYear();if(m<0){m=11;y--;}return d.getMonth()===m&&d.getFullYear()===y;});
  var anio=peds.filter(function(p){var d=parseFechaPed(p);return d.getFullYear()===ahora.getFullYear();});
  var totEste=esteMes.reduce(function(s,p){return s+p.subtotal;},0);
  var totPas=mesPas.reduce(function(s,p){return s+p.subtotal;},0);
  var totAnio=anio.reduce(function(s,p){return s+p.subtotal;},0);
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
  if(obsSel&&obsSel.value)p.obsAdmin=obsSel.value;
  // Guardar forma de pago editada (si el selector existe y el pedido no está finalizado)
  var pagoSel=document.getElementById("adm-pago-sel");
  if(pagoSel&&p.estado!=="finalizado")p.pago=pagoSel.value;
  // Restaurar stock si cancela
  if(sel.value==="cancelado"&&estadoViejo!=="cancelado"&&p.items){
    p.items.forEach(function(it){
      var prod=PRODUCTOS.find(function(x){return x.id===it.id;});
      if(prod){prod.stock+=it.cant;prod.ago=false;}
    });
    guardarStock();
  }
  guardarPedidos(); cerrarModal("modal-pedido-det"); renderAdmPedidos();
  toast("✅ Estado actualizado");
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
      '<td>'+it.id+'</td>'+
      '<td>'+it.nm+'</td>'+
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
      '<div style="font-weight:700">'+p.razon+'</div>'+
      '<div>RUC / Cédula: '+p.ruc+'</div>'+
      (dist.tel?'<div>Tel: '+dist.tel+'</div>':'')+
      (dist.correo?'<div>Correo: '+dist.correo+'</div>':'')+
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
    '<div style="margin-top:16px;font-size:11px"><b>Forma de pago:</b> '+p.pago+'</div>'+
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
      '<td>'+it.id+'</td>'+
      '<td>'+it.nm+'</td>'+
      '<td style="text-align:center;font-weight:700;font-size:14px">'+it.cant+'</td>'+
    '</tr>';
  }).join("");
  var entregaDir="";
  if(p.modo==="entrega"&&p.entregaInfo&&p.entregaInfo.establecimiento){
    entregaDir=(p.entregaInfo.establecimiento.nm||"")+(p.entregaInfo.establecimiento.dir?" — "+p.entregaInfo.establecimiento.dir:"");
  }
  var win=window.open("","_blank","width=800,height=900");
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
      '<div style="margin-top:8px"><b>Cliente:</b> '+p.razon+'</div>'+
      '<div><b>RUC / Cédula:</b> '+p.ruc+'</div>'+
      (entregaDir?'<div><b>Dirección de entrega:</b> '+entregaDir+'</div>':'')+
      (dist.tel?'<div><b>Teléfono:</b> '+dist.tel+'</div>':'')+
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
  var tel=dist&&dist.tel?dist.tel.replace(/[^0-9]/g,""):"593978997247";
  if(tel.startsWith("09"))tel="593"+tel.slice(1);
  var msg="*PyroShield — Pedido #"+p.id+"*\n\nHola "+p.razon+"!\n\n";
  if(p.items)p.items.forEach(function(it){msg+="• "+it.nm+" x"+it.cant+" — "+fmt$(it.pr*it.cant)+"\n";});
  msg+="\n*Subtotal:* "+fmt$(p.subtotal)+"\n*IVA 15%:* "+fmt$(p.iva)+"\n*Total:* "+fmt$(p.total)+"\n";
  msg+="\n*Forma de pago:* "+p.pago+"\n";
  var pg=p.pago.toUpperCase();
  if(pg.indexOf("EFECTIVO")!==-1)msg+="Por favor ten listo el pago en efectivo al momento de la entrega.";
  else if(pg.indexOf("TRANSFERENCIA")!==-1)msg+="Por favor ayúdanos con el comprobante de transferencia.";
  else if(pg.indexOf("CHEQUE")!==-1||pg.indexOf("CRÉDITO")!==-1||pg.indexOf("CREDITO")!==-1)msg+="Recuerda que el pago es únicamente válido con cheque a la fecha al momento de la entrega.";
  if(p.puntos)msg+="\n\n🏆 Este pedido te dará *"+fmtPts(p.puntos)+" puntos* PyroShield al ser entregado.";
  msg+="\n\n¡Gracias por tu compra!";
  window.open("https://wa.me/"+tel+"?text="+encodeURIComponent(msg),"_blank");
}

function generarAzur(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  if(!AZUR_TOKEN){toast("⚠️ Configura el token de Azur primero");return;}
  var dist=DISTRIBUIDORES.find(function(d){return d.ruc===p.ruc;})||{};
  var numDoc=(p.ruc||"").replace(/[^0-9]/g,"");
  var tipoIdent="04";
  if(dist.tipoDoc==="cedula"||numDoc.length===10) tipoIdent="05";
  if(numDoc==="9999999999999"||numDoc==="9999999999") tipoIdent="07";
  var ahora=new Date();
  var fechaAzur=ahora.getFullYear()+"/"+String(ahora.getMonth()+1).padStart(2,"0")+"/"+String(ahora.getDate()).padStart(2,"0");
  var itemsAzur=(p.items||[]).map(function(it){
    return {codigo_principal:it.id,codigo_auxiliar:null,descripcion:it.nm,tipoproducto:1,tipo_iva:4,precio_unitario:parseFloat(it.pr.toFixed(2)),cantidad:it.cant,descuento:0};
  });
  var pagoMap={"Efectivo":"01","Transferencia":"20","Cheque":"20","Cheque / Crédito 30 días":"20","Cheque / Crédito 60 días":"20","Cheque / Crédito 90 días":"20"};
  var codigoPago=pagoMap[p.pago]||"20";
  var payload={api_key:AZUR_TOKEN,codigoDoc:"01",emisor:{manejo_interno_secuencia:"SI",fecha_emision:fechaAzur},comprador:{tipo_identificacion:tipoIdent,identificacion:p.ruc,razon_social:dist.razon||p.razon,direccion:(dist.establecimientos&&dist.establecimientos[0]&&dist.establecimientos[0].dir)?dist.establecimientos[0].dir:"S/N",telefono:dist.tel||null,celular:null,correo:dist.correo||null},items:itemsAzur,pagos:[{tipo:codigoPago,total:parseFloat(p.total.toFixed(2))}],informacion_adicional:[{nombre:"Pedido Portal",detalle:"#"+p.id},{nombre:"Forma de Pago",detalle:p.pago}]};
  toast("⏳ Enviando a Azur...");
  fetch(AZUR_API+"factura/emision",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)})
  .then(function(r){return r.json();})
  .then(function(data){
    if(data.creado==="true"||data.creado===true){
      p.azurFactura=data.claveacceso; p.azurEstado="enviado";
      guardarPedidos(); toastGold("🧾 Factura enviada a Azur ✅"); admVerPedido(pid);
    } else {
      var errores=(data.errors||["Error desconocido"]).join(" · ");
      toast("⚠️ Azur: "+errores.substring(0,90));
    }
  })
  .catch(function(e){toast("⚠️ Error de conexión con Azur");});
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
function renderAdmDist(){
  var lista=DISTRIBUIDORES.filter(function(d){return!d.esAdmin;});
  var q=(document.getElementById("adm-dist-search").value||"").toLowerCase();
  if(q)lista=lista.filter(function(d){return d.razon.toLowerCase().indexOf(q)!==-1||d.ruc.indexOf(q)!==-1;});
  document.getElementById("adm-dist-lista").innerHTML=lista.length?lista.map(function(d){
    var nped=PEDIDOS.filter(function(p){return p.ruc===d.ruc&&!p.esCanje;}).length;
    var esp=d.preciosEsp?Object.keys(d.preciosEsp).length:0;
    return '<div class="card"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start">'+
        '<div>'+
          '<div style="font-weight:700;font-size:15px">'+d.razon+'</div>'+
          (d.empresa?'<div style="font-size:12px;color:var(--azul);font-weight:600">'+d.empresa+'</div>':'')+
          '<div style="font-size:12px;color:var(--g3);margin-top:3px">'+tipoDocLabel(d)+': '+d.ruc+(d.tel?' · Tel: '+d.tel:'')+'</div>'+
          '<div style="font-size:11px;color:var(--g3)">Pass: <span style="font-family:monospace;background:var(--g1);padding:1px 6px;border-radius:4px">'+d.pass+'</span></div>'+
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
        (d.entrega&&d.entrega.habilitada?'<span class="badge b-azul">🚚 Entrega $'+d.entrega.montoMin+'+</span>':'<span class="badge b-gris">Solo retiro</span>')+
      '</div>'+
      '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">'+
        '<button class="btn btn-sm btn-s" onclick="abrirPreciosEsp(\''+d.ruc+'\')">💲 Precios especiales</button>'+
        '<button class="btn btn-sm btn-s" onclick="verResumenDist(\''+d.ruc+'\')">📊 Resumen</button>'+
      '</div>'+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">🏢</div><p>No se encontraron distribuidores</p></div>';
}

function filtrarDist(){renderAdmDist();}
function abrirNuevoDist(){abrir("modal-nuevo-dist");}

function eliminarDist(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  confirmar("¿Eliminar al distribuidor <b>"+d.razon+"</b>?<br><small>Esta acción no se puede deshacer.</small>",function(){
    var idx=DISTRIBUIDORES.indexOf(d);
    if(idx>-1)DISTRIBUIDORES.splice(idx,1);
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
    '<label class="form-label">Contraseña</label>'+
    '<input class="form-input" id="ed-pass" type="text" value="'+escHtml(d.pass||"")+'">'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">'+
      '<input type="checkbox" id="ed-entrega" '+(d.entrega&&d.entrega.habilitada?"checked":"")+' style="width:18px;height:18px">'+
      '<label for="ed-entrega" style="font-size:14px">Entrega a domicilio habilitada</label>'+
    '</div>'+
    '<label class="form-label">Monto mínimo entrega ($)</label>'+
    '<input class="form-input" id="ed-min" type="number" value="'+(d.entrega?d.entrega.montoMin:30)+'">'+
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">'+
      '<input type="checkbox" id="ed-sinvol" '+(d.sinDescVol?"checked":"")+' style="width:18px;height:18px">'+
      '<label for="ed-sinvol" style="font-size:14px;color:var(--rojo)">Sin descuentos por volumen</label>'+
    '</div>'+
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
  renderDirsEditar(ruc);
}
function eliminarDirEditar(ruc,i){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d||!d.establecimientos)return;
  d.establecimientos.splice(i,1);
  renderDirsEditar(ruc);
}

function guardarEditarDist(ruc){
  var d=DISTRIBUIDORES.find(function(x){return x.ruc===ruc;});
  if(!d)return;
  d.razon=document.getElementById("ed-razon").value.trim()||d.razon;
  d.empresa=document.getElementById("ed-empresa").value.trim()||undefined;
  var encEl=document.getElementById("ed-encargado");
  if(encEl)d.encargado=encEl.value.trim();
  d.tel=document.getElementById("ed-tel").value.trim();
  d.correo=document.getElementById("ed-correo").value.trim();
  d.pass=document.getElementById("ed-pass").value.trim()||d.pass;
  d.sinDescVol=document.getElementById("ed-sinvol").checked;
  if(!d.entrega)d.entrega={};
  d.entrega.habilitada=document.getElementById("ed-entrega").checked;
  d.entrega.montoMin=parseFloat(document.getElementById("ed-min").value)||30;
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
  var html='<div class="mhandle"></div><h3>Precios especiales<br><span style="font-size:13px;color:var(--g3);font-weight:400">'+d.razon+'</span></h3>'+
    '<div style="font-size:12px;color:var(--g3);margin-bottom:12px">Deja en blanco para usar el precio base del distribuidor.</div>'+
    PRODUCTOS.map(function(p){
      var esp=d.preciosEsp[p.id]!=null?d.preciosEsp[p.id]:"";
      return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+
        '<div style="flex:1;font-size:12px;font-weight:600">'+p.nm+'<span style="color:var(--g3);font-weight:400;font-size:11px"> (base: '+fmt$(p.pb)+')</span></div>'+
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
  PRODUCTOS.forEach(function(p){
    var inp=document.getElementById("esp-"+p.id);
    if(!inp)return;
    var v=inp.value.trim();
    if(v===""||isNaN(parseFloat(v))){
      delete d.preciosEsp[p.id];
    } else {
      d.preciosEsp[p.id]=parseFloat(v);
    }
  });
  guardarDistribuidores();
  cerrarModal("modal-precios-esp");
  renderAdmDist();
  toast("✅ Precios especiales guardados");
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

function guardarNuevoDist(){
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
  var min=parseFloat(document.getElementById("nd-min").value)||30;
  var sinVol=document.getElementById("nd-sinvol")?document.getElementById("nd-sinvol").checked:false;
  if(!r||!ruc||!pw){toast("⚠️ Completa razón social, documento y contraseña");return;}
  var soloNum=ruc.replace(/[^0-9]/g,"");
  if(tipoDoc==="cedula"&&soloNum.length!==10){toast("⚠️ La cédula debe tener 10 dígitos");return;}
  if(tipoDoc==="ruc"&&soloNum.length!==13){toast("⚠️ El RUC debe tener 13 dígitos");return;}
  var existe=DISTRIBUIDORES.find(function(d){return d.ruc.toLowerCase()===ruc.toLowerCase();});
  if(existe){toast("⚠️ Ya existe un distribuidor con ese documento");return;}
  var nd={ruc:ruc,tipoDoc:tipoDoc,razon:r,pass:pw,tel:tel,correo:co,entrega:{habilitada:ent,montoMin:min},sinDescVol:sinVol,_nuevo:true};
  if(emp)nd.empresa=emp;
  if(enc)nd.encargado=enc;
  if(dir)nd.establecimientos=[{nm:"Local principal",dir:dir,obs:""}];
  DISTRIBUIDORES.push(nd);
  guardarDistribuidores();
  cerrarModal("modal-nuevo-dist");
  renderAdmDist();
  toast("✅ "+r+" registrado");
  ["nd-razon","nd-empresa","nd-encargado","nd-ruc","nd-tel","nd-correo","nd-pass","nd-dir"].forEach(function(x){var el=document.getElementById(x);if(el)el.value="";});
  if(document.getElementById("nd-tipodoc"))document.getElementById("nd-tipodoc").value="ruc";
  if(document.getElementById("nd-sinvol"))document.getElementById("nd-sinvol").checked=false;
}

// ════════════════════ ADMIN STOCK ════════════════════
function cargarUmbrales(){try{return JSON.parse(localStorage.getItem("pyro_umbral")||"{}");}catch(e){return{};}}
function guardarUmbral(id,val){var u=cargarUmbrales();u[id]=val;try{localStorage.setItem("pyro_umbral",JSON.stringify(u));}catch(e){}}

function renderAdmStock(){
  var cont=document.getElementById("adm-stock-lista");
  var costos=cargarCostos();
  var umbrales=cargarUmbrales();
  var topHtml='<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">'+
    '<button class="btn btn-s btn-sm" onclick="exportarExcelStock()">📥 Exportar Excel</button>'+
    '<label class="btn btn-s btn-sm" style="cursor:pointer">📤 Importar CSV<input type="file" accept=".csv" style="display:none" onchange="importarStock(event)"></label>'+
  '</div>'+
  '<div style="background:var(--amarc);border:1.5px solid var(--amar);border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#8a6600">'+
    '💡 <b>Para importar:</b> Exporta el Excel, edita solo la columna <b>Stock</b> (número), guarda como CSV y reimporta. El estado se recalcula automáticamente.'+
  '</div>';
  // Notificación agrupada de productos bajo umbral
  var bajosUmbral=[];
  var html="";
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    cat.subs.forEach(function(sn){
      var ps=PRODUCTOS.filter(function(p){return p.cat===ck&&p.sub===sn;});
      if(!ps.length)return;
      html+='<div class="subcat">'+cat.ico+' '+cat.nombre+' · '+sn+'</div>';
      html+=ps.map(function(p){
        var umbral=umbrales[p.id]!=null?umbrales[p.id]:20;
        var bajoBorde=(p.stock<=umbral&&p.stock>0)?"border:2px solid var(--amar);":"";
        if(p.stock<=umbral&&p.stock>0)bajosUmbral.push(p.nm);
        var col=p.ago?"b-rojo":p.stock<=umbral?"b-amar":"b-verde";
        var lab=p.ago?"Agotado":p.stock<=umbral?"Bajo umbral":"OK";
        var umbralBadge=(p.stock<=umbral&&p.stock>0)?'<span class="badge b-amar">⚠️ Bajo umbral</span>':'';
        var costoActual=costos[p.id]!=null?costos[p.id]:p.costo;
        return '<div class="card" style="margin-bottom:8px;'+bajoBorde+'"><div class="card-b">'+
          '<div style="font-size:13px;font-weight:700;margin-bottom:8px">'+p.nm+' <span style="font-size:10px;color:var(--g3);font-weight:400">'+p.id+'</span></div>'+
          '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'+
            '<span class="badge '+col+'">'+lab+'</span>'+umbralBadge+
            '<div style="display:flex;align-items:center;gap:4px">'+
              '<span style="font-size:11px;color:var(--g3)">Stock:</span>'+
              '<input type="number" min="0" value="'+p.stock+'" id="st-'+p.id+'" style="width:70px;padding:6px 8px;border:1.5px solid var(--g2);border-radius:8px;font-size:14px;font-weight:700;text-align:center">'+
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
          '</div>'+
        '</div></div>';
      }).join("");
    });
  });
  cont.innerHTML=topHtml+html;
  // Notificación de productos bajo umbral
  if(bajosUmbral.length&&typeof Notification!=="undefined"&&Notification.permission==="granted"){
    new Notification("PyroShield — Stock bajo umbral",{body:bajosUmbral.length+" producto(s) bajo umbral: "+bajosUmbral.slice(0,3).join(", ")+(bajosUmbral.length>3?"…":""),icon:"img/logo.jpg"});
  }
}

function ajustarCosto(id,val){
  var n=parseFloat(val);
  if(isNaN(n)||n<0){toast("⚠️ Ingresa un costo válido");return;}
  var costos=cargarCostos();
  costos[id]=n;
  guardarCostos(costos);
  // También actualizar el producto en memoria
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(p)p.costo=n;
  toast("✅ Costo actualizado");
}

function ajustarStock(id,val){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p)return;
  var n=parseInt(val,10);
  if(isNaN(n)||n<0){toast("⚠️ Ingresa un número válido");return;}
  p.stock=n; p.ago=(n===0);
  guardarStock(); renderAdmStock();
  toast("✅ Stock actualizado: "+p.nm);
}

function exportarExcelStock(){
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  var costos=cargarCostos();
  var cabeceras=["ID","Nombre","Categoría","Subcategoría","Stock","Estado","Costo Unitario"];
  var filas=[];
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    cat.subs.forEach(function(sn){
      PRODUCTOS.filter(function(p){return p.cat===ck&&p.sub===sn;}).forEach(function(p){
        var costoAct=costos[p.id]!=null?costos[p.id]:p.costo;
        filas.push([p.id,p.nm,cat.nombre,sn,p.stock,p.ago?"Agotado":p.stock<20?"Bajo":"OK",costoAct]);
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
      xml+='<Cell><Data ss:Type="'+(i===4||i===6?"Number":"String")+'">'+esc(String(cel))+'</Data></Cell>';
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
    var lines=e.target.result.replace(/\r/g,"").split("\n");
    if(!lines.length){toast("⚠️ Archivo vacío");return;}
    var header=lines[0].toLowerCase().split(",").map(function(h){return h.trim();});
    var idIdx=header.indexOf("id");
    var stIdx=header.indexOf("stock");
    if(idIdx<0||stIdx<0){toast("⚠️ El CSV debe tener columnas 'id' y 'stock'");return;}
    var actualizados=0;
    lines.slice(1).forEach(function(line){
      if(!line.trim())return;
      var cols=line.split(",");
      if(!cols[idIdx])return;
      var id=cols[idIdx].trim().replace(/^"|"$/g,"");
      var stock=parseInt(cols[stIdx],10);
      if(isNaN(stock))return;
      var p=PRODUCTOS.find(function(x){return x.id===id;});
      if(p){p.stock=Math.max(0,stock);p.ago=(p.stock===0);actualizados++;}
    });
    guardarStock(); renderAdmStock();
    toast("✅ "+actualizados+" productos actualizados desde CSV");
    event.target.value="";
  };
  reader.readAsText(file);
}

// ════════════════════ EXPORTAR EXCEL PEDIDOS ════════════════════
function exportarExcel(){
  var estadosMap={pendiente:"Pendiente",en_proceso:"En proceso",autorizado:"En proceso",entrega:"En proceso",entregado:"Entregado",facturado:"Facturado",finalizado:"Finalizado",cancelado:"Cancelado"};
  var cabeceras=["ID","Fecha","Tipo","Distribuidor","RUC","Estado","Forma de pago","Modo entrega","Productos / Premio","Subtotal","IVA 15%","Total","Puntos","Notas"];
  var filas=PEDIDOS.slice().reverse().map(function(p){
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
  PEDIDOS.filter(function(p){return!p.esCanje&&(p.estado==="entregado"||p.estado==="finalizado");}).forEach(function(p){
    if(!montosDist[p.ruc])montosDist[p.ruc]={ruc:p.ruc,razon:p.razon,total:0,utilidad:0};
    montosDist[p.ruc].total+=(p.subtotal||0);
    var costoTotal=(p.items||[]).reduce(function(cs,it){return cs+getCostoProducto(it.id)*(it.cant||0);},0);
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
        '<span style="font-size:13px">'+(dist.empresa||d.razon)+'</span></div>'+
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
    return s+(p.items||[]).reduce(function(cs,it){return cs+getCostoProducto(it.id)*(it.cant||0);},0);
  },0);
  var utilidad=totalVentas-totalCosto;
  var numPedidos=pedMes.length;
  var prodCounts={};
  pedMes.forEach(function(p){(p.items||[]).forEach(function(it){
    if(!prodCounts[it.id])prodCounts[it.id]={id:it.id,nm:it.nm,cant:0,subtotal:0};
    prodCounts[it.id].cant+=it.cant;
    prodCounts[it.id].subtotal+=it.pr*it.cant;
  });});
  var topProds=Object.values(prodCounts).sort(function(a,b){return b.subtotal-a.subtotal;}).slice(0,10);
  var baseHref=window.location.href.substring(0,window.location.href.lastIndexOf("/")+1);
  var win=window.open("","_blank","width=800,height=950");
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
        return '<tr><td>'+(i+1)+'</td><td>'+p.nm+'</td><td style="text-align:center">'+p.cant+'</td><td style="text-align:right">'+fmt$(p.subtotal)+'</td></tr>';
      }).join("")+'</tbody></table>':
      '<div style="color:#aaa;font-size:12px;padding:8px 0">No hay datos este mes.</div>')+
    '<div class="footer">PyroShield · Reporte generado el '+new Date().toLocaleDateString("es-EC")+'</div>'+
    '<div style="margin-top:16px;text-align:center"><button onclick="window.print()" style="padding:10px 24px;background:#C0392B;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer">🖨️ Imprimir / Guardar PDF</button></div>'+
    '</body></html>');
  win.document.close();
}

// ════════════════════ ADMIN RECOMPENSAS ════════════════════
function renderAdmRecompensas(){
  var html='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">'+
    '<div style="font-size:15px;font-weight:700">Recompensas del programa de puntos</div>'+
    '<button class="btn btn-p btn-sm" onclick="abrirNuevaRecompensa()">+ Nueva</button>'+
  '</div>'+
  (REWARDS.length?REWARDS.map(function(r,i){
    return '<div class="card" style="margin-bottom:8px"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">'+
        '<div style="display:flex;align-items:center;gap:10px">'+
          '<div style="font-size:28px">'+r.ico+'</div>'+
          '<div>'+
            '<div style="font-weight:700">'+r.nm+'</div>'+
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
          '<button class="btn btn-sm" style="background:'+(r.agotado?"var(--verdec)":"var(--amarc)")+';color:'+(r.agotado?"var(--verde)":"#8a6600")+';border-color:'+(r.agotado?"var(--verde)":"var(--amar)")+'" onclick="toggleAgotadoRecompensa('+i+')">'+(r.agotado?"✅ Disponible":"⚠️ Agotar")+'</button>'+
          '<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border-color:var(--rojo)" onclick="eliminarRecompensa('+i+')">🗑</button>'+
        '</div>'+
      '</div>'+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">🎁</div><p>No hay recompensas configuradas</p></div>');
  document.getElementById("adm-recompensas").innerHTML=html;
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
  r.costoReal=isNaN(n)?0:n;
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
      if(pendientes>0)msg.push(pendientes+" pedido(s) pendiente(s)");
      if(canjesPend>0)msg.push(canjesPend+" canje(s) pendiente(s)");
      new Notification("PyroShield — Pendientes sin procesar",{body:"Tienes "+msg.join(" y ")+" de procesar.",icon:"img/logo.jpg"});
    }
  },30*60*1000);
  window.addEventListener("storage",function(e){
    if(e.key==="pyro_pedidos"&&USER&&USER.esAdmin){
      PEDIDOS=cargarPedidos(); chequearPedidosNuevos();
    }
  });
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
  if(nuevos.length)try{localStorage.setItem("pyro_notif_vistas",JSON.stringify(vistos));}catch(e){}
}

// ════════════════════ SINCRONIZACIÓN GOOGLE SHEETS ════════════════════
// NOTA para doPost en Apps Script: parsear con JSON.parse(e.postData.contents)
var GAS_URL="https://script.google.com/macros/s/AKfycbwiIAupZxy2T33EiDHbwkLBHTw0Q2Uv98r8pc9L351b6lXwY_mOD6kI2tvfzqdIUdxG/exec";

function cargarSyncPendientes(){
  try{return JSON.parse(localStorage.getItem("pyro_sync_pendientes")||"[]");}catch(e){return[];}
}
function guardarSyncPendientes(lista){
  try{localStorage.setItem("pyro_sync_pendientes",JSON.stringify(lista));}catch(e){}
}

function sincronizarConSheets(ped, silencioso){
  var payload={
    accion:"guardarPedidoPyro",
    id_pedido:ped.id,
    fecha:ped.fechaISO,
    ruc_dist:ped.ruc,
    nombre_dist:ped.razon,
    items_json:JSON.stringify(ped.items||[]),
    total:ped.total,
    estado:ped.estado
  };
  fetch(GAS_URL,{
    method:"POST",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify(payload)
  }).then(function(){
    var pend=cargarSyncPendientes();
    pend=pend.filter(function(x){return x.id!==ped.id;});
    guardarSyncPendientes(pend);
  }).catch(function(){
    var pend=cargarSyncPendientes();
    if(!pend.some(function(x){return x.id===ped.id;})){
      pend.push(ped);
      guardarSyncPendientes(pend);
    }
    if(!silencioso)toast("☁️ Pendiente de sincronización (se reintentará)");
  });
}

function reintentarSyncPendientes(){
  if(!navigator.onLine)return;
  var pend=cargarSyncPendientes();
  if(!pend.length)return;
  pend.forEach(function(ped){sincronizarConSheets(ped,true);});
}

// ════════════════════ MODALES / UTIL ════════════════════
function abrir(id){document.getElementById(id).classList.add("open");}
function cerrarModal(id){document.getElementById(id).classList.remove("open");}
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
function cargarCarrito(){try{return JSON.parse(localStorage.getItem("pyro_cart_"+USER.ruc)||"[]");}catch(e){return[];}}
function guardarCarrito(){try{localStorage.setItem("pyro_cart_"+USER.ruc,JSON.stringify(CARRITO));}catch(e){avisarStorage();}}
function cargarPedidos(){try{return JSON.parse(localStorage.getItem("pyro_pedidos")||"[]");}catch(e){return[];}}
function guardarPedidos(){try{localStorage.setItem("pyro_pedidos",JSON.stringify(PEDIDOS));}catch(e){avisarStorage();}}
function guardarStock(){var st={};PRODUCTOS.forEach(function(p){st[p.id]={stock:p.stock,ago:p.ago};});try{localStorage.setItem("pyro_stock",JSON.stringify(st));}catch(e){}}
function cargarStock(){try{var st=JSON.parse(localStorage.getItem("pyro_stock")||"{}");PRODUCTOS.forEach(function(p){if(st[p.id]!=null){p.stock=st[p.id].stock;p.ago=st[p.id].ago;}});}catch(e){}}
function guardarDistribuidores(){
  try{
    // Excluir admins y usuarios de sistema (rol:"impresion") — su fuente de verdad es datos.js
    var todos=DISTRIBUIDORES.filter(function(d){return!d.esAdmin&&d.rol!=="impresion";});
    localStorage.setItem("pyro_dist_extra",JSON.stringify(todos));
  }catch(e){avisarStorage();}
}
function cargarDistribuidoresExtra(){
  try{
    var extra=JSON.parse(localStorage.getItem("pyro_dist_extra")||"[]");
    extra.forEach(function(d){
      var idx=DISTRIBUIDORES.findIndex(function(x){return x.ruc===d.ruc;});
      if(idx>-1){
        // No sobreescribir usuarios de sistema (admin, impresion) — sus datos vienen de datos.js
        if(DISTRIBUIDORES[idx].esAdmin||DISTRIBUIDORES[idx].rol==="impresion")return;
        Object.assign(DISTRIBUIDORES[idx],d);
      } else {
        DISTRIBUIDORES.push(d);
      }
    });
  }catch(e){}
}
var _storageAvisado=false;
function avisarStorage(){
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
  if(estado==="autorizado"||estado==="facturado"||estado==="entrega")estadoNorm="en_proceso";
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
      return '<div class="ped" style="padding:10px 14px">'+
        '<div style="display:flex;justify-content:space-between;align-items:center">'+
          '<div><div style="font-size:12px;color:var(--g3)">Pedido #'+p.id+' · '+p.fecha+'</div>'+
          '<div style="font-size:13px;font-weight:700;color:'+(confirmado?"var(--verde)":"var(--amar)")+'">🏆 '+fmtPts(p.puntos)+' pts '+(confirmado?"acreditados":"pendientes")+'</div></div>'+
          '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabel(p.estado)+'</span>'+
        '</div>'+
      '</div>';
    }).join("");
}

// ═══════════ MODO OFFLINE ═══════════
function actualizarBannerOffline(){
  var banner=document.getElementById("offline-banner");
  if(!banner)return;
  banner.style.display=navigator.onLine?"none":"block";
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
  contentEl.addEventListener("touchstart",function(e){sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
  contentEl.addEventListener("touchend",function(e){
    var dx=e.changedTouches[0].clientX-sx;
    var dy=e.changedTouches[0].clientY-sy;
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
    var dy=e.changedTouches[0].clientY-startY;
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
    else{
      // Reemplazar el borrador autoguardado más viejo (o el primero sin nombre)
      borradores[0]=entry;
    }
    try{localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));}catch(e){}
  },60000);
}

document.addEventListener("click",function(e){if(e.target.classList.contains("ov"))e.target.classList.remove("open");});
window.addEventListener("load",function(){
  actualizarBannerOffline();
  window.addEventListener("online",function(){actualizarBannerOffline();reintentarSyncPendientes();});
  window.addEventListener("offline",actualizarBannerOffline);
  setTimeout(function(){
    var sp=document.getElementById("splash");
    if(sp){sp.classList.add("hide");setTimeout(function(){sp.style.display="none";},600);}
  },1500);
  cargarDistribuidoresExtra();
  // Mostrar/ocultar credenciales demo según MODO_DEMO
  var demoBox=document.getElementById("login-demo-box");
  if(demoBox)demoBox.style.display=(typeof MODO_DEMO!=="undefined"&&MODO_DEMO)?"block":"none";
  try{
    var s=JSON.parse(localStorage.getItem("pyro_sesion")||"null");
    if(s&&s.ruc&&s.pass){loginConCredenciales(s.ruc,s.pass);}
  }catch(e){}
  var lp=document.getElementById("login-pass"),lu=document.getElementById("login-user");
  if(lp)lp.addEventListener("keydown",function(e){if(e.key==="Enter")hacerLogin();});
  if(lu)lu.addEventListener("keydown",function(e){if(e.key==="Enter")lp.focus();});
});
