// ════════════════════ PRODUCTOS ════════════════════
var CATS = {
  extintores:{nombre:"Extintores",ico:"🧯",subs:["PQS","CO2"]},
  accesorios:{nombre:"Accesorios",ico:"🔧",subs:["Cabezales","Manómetros","Mangueras","Soportes","Otros"]},
  gabinetes:{nombre:"Gabinetes",ico:"🏗️",subs:["Mangueras","Válvulas","Hidrantes","Otros"]}
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
  {id:"VENT25AQ",nm:"Extintor 2.5 Glns Agua Química",cat:"extintores",sub:"CO2",pv:63.00,pb:61.25,costo:38.25,stock:24,ago:false,img:"VENT25AQ",descVol:[[2,1],[3,2],[4,3],[5,5],[8,5]]},
  // ACCESORIOS - CABEZALES
  {id:"CABPQS1020",nm:"Cabezal PQS 10/20 LBS",cat:"accesorios",sub:"Cabezales",pv:2.95,pb:2.80,costo:1.24,stock:0,ago:true,img:null,descVol:[[20,1],[40,2],[60,3],[80,5],[120,6]]},
  {id:"CABCO2510",nm:"Cabezal CO2 5/10 LBS",cat:"accesorios",sub:"Cabezales",pv:7.80,pb:7.00,costo:4.71,stock:222,ago:false,img:"CABCO2510",descVol:[[10,1],[20,2],[30,3],[40,5],[50,6]]},
  {id:"CO2CABMAR",nm:"Cabezal Marítimo CO2",cat:"accesorios",sub:"Cabezales",pv:42.25,pb:38.46,costo:18.93,stock:73,ago:false,img:"CO2CABMAR",descVol:[[2,1],[3,2],[5,3],[8,5],[10,6]]},
  {id:"CO2DISRAP",nm:"CO2 Disparo Rápido (50-100 LBS)",cat:"accesorios",sub:"Cabezales",pv:16.80,pb:13.95,costo:5.92,stock:121,ago:false,img:"CO2DISRAP",descVol:[[5,1],[10,2],[15,3],[20,5],[30,6]]},
  // ACCESORIOS - MANÓMETROS
  {id:"MANOPQS",nm:"Manómetro 195 PSI",cat:"accesorios",sub:"Manómetros",pv:0.85,pb:0.70,costo:0.36,stock:0,ago:true,img:null,descVol:[[30,1],[50,2],[100,3],[150,5],[300,6]]},
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
  {id:"SEGPLAM",nm:"Seguros Plásticos Amarillo",cat:"accesorios",sub:"Otros",pv:0.08,pb:0.06,costo:0.03,stock:14767,ago:false,img:null,descVol:[[200,1],[500,2],[800,3],[1000,5],[2000,6]]},
  // GABINETES - MANGUERAS
  {id:"MANG15M",nm:"Manguera 15M doble chaqueta 1½\"",cat:"gabinetes",sub:"Mangueras",pv:38.61,pb:36.98,costo:29.93,stock:162,ago:false,img:"MANG15M",descVol:[[3,1],[5,2],[8,3]]},
  {id:"MANG30M",nm:"Manguera 30M doble chaqueta 1½\"",cat:"gabinetes",sub:"Mangueras",pv:69.10,pb:64.28,costo:46.14,stock:99,ago:false,img:"MANG30M",descVol:[[3,1],[5,2],[8,3],[10,4],[15,5]]},
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
var USER=null, CARRITO=[], PEDIDOS=[], FILTRO="todos", ADM_TAB="pedidos";
var CALIF_PED_ID=null, CALIF_ESTRELLAS=0;
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
  if(USER&&USER.preciosEsp&&USER.preciosEsp[p.id]!=null)return USER.preciosEsp[p.id];
  return p.pb;
}
function tieneEspecial(p){return!!(USER&&USER.preciosEsp&&USER.preciosEsp[p.id]!=null);}

// Precio con descuento por volumen
function precioConVolumen(p, cant){
  var pv=p.pv;
  var precioBase=precioCliente(p);
  var descBase=(pv-precioBase)/pv*100;
  var dvPct=0;
  if(p.descVol){
    for(var i=p.descVol.length-1;i>=0;i--){
      if(cant>=p.descVol[i][0]){dvPct=p.descVol[i][1];break;}
    }
  }
  var descTotal=descBase+dvPct;
  return {precio:parseFloat((pv*(1-descTotal/100)).toFixed(2)),descPct:descTotal,descVol:dvPct,descBase:descBase};
}

// Siguiente nivel de descuento
function siguienteNivel(p, cant){
  if(!p.descVol)return null;
  for(var i=0;i<p.descVol.length;i++){
    if(cant<p.descVol[i][0])return{falta:p.descVol[i][0]-cant,pct:p.descVol[i][1]};
  }
  return null;
}

function fmtPts(n){return n.toLocaleString();}
function fmt$(n){return"$"+n.toFixed(2);}

// ════════════════════ LOGIN ════════════════════
function hacerLogin(){
  var u=document.getElementById("login-user").value.trim();
  var pw=document.getElementById("login-pass").value.trim();
  var err=document.getElementById("login-err");
  err.style.display="none";
  var d=DISTRIBUIDORES.find(function(x){return x.ruc.toLowerCase()===u.toLowerCase()&&x.pass===pw;});
  if(!d){err.style.display="block";return;}
  USER=d; PEDIDOS=cargarPedidos();
  if(d.esAdmin){mostrar("s-admin");renderAdmin();}
  else{
    CARRITO=cargarCarrito();
    mostrar("s-main");
    irTab("inicio");
    renderCatalogo();
    actualizarBadge();
    // Saludo flash
    mostrarSaludoFlash();
    // Tutorial primer ingreso
    var key="pyro_tut_"+USER.ruc;
    if(!localStorage.getItem(key)){iniciarTutorial();}
  }
}
function logout(){USER=null;CARRITO=[];mostrar("s-login");document.getElementById("login-user").value="";document.getElementById("login-pass").value="";}
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
  if(cb)cb.style.display=(t==="carrito"&&CARRITO.length>0)?"flex":"none";
  document.querySelector("#s-main .content").scrollTo(0,0);
}

// ════════════════════ PUNTOS USUARIO ════════════════════
function misPedidos(){return PEDIDOS.filter(function(p){return p.ruc===USER.ruc;});}
function puntosGanados(){return misPedidos().reduce(function(s,p){return s+(p.puntos||0);},0);}
function puntosCanjeados(){return misPedidos().reduce(function(s,p){return s+(p.canjePts||0);},0);}
function saldoPuntos(){return puntosGanados()-puntosCanjeados();}

// ════════════════════ INICIO ════════════════════
function renderInicio(){
  var mp=misPedidos(),pend=mp.filter(function(p){return p.estado==="pendiente"||p.estado==="autorizado";});
  var nm=USER.empresa||USER.razon.split(" ").slice(0,2).join(" ");
  document.getElementById("hero-nombre").textContent=nm;
  document.getElementById("hero-pts").textContent=fmtPts(saldoPuntos());
  document.getElementById("topbar-pts-v").textContent=fmtPts(saldoPuntos());
  document.getElementById("hs-pedidos").textContent=mp.length;
  document.getElementById("hs-proceso").textContent=pend.length;
  document.getElementById("hs-carrito").textContent=CARRITO.reduce(function(s,i){return s+i.cant;},0);
  renderPromosHome();
  // Últimos pedidos
  var up=mp.slice().reverse().slice(0,3);
  document.getElementById("ultimos-pedidos").innerHTML=up.length?up.map(function(p){
    return '<div class="ped" onclick="verDetallePed(\''+p.id+'\')" style="cursor:pointer">'+
      '<div class="ped-top"><div><div class="ped-id">Pedido #'+p.id+'</div>'+
      '<div style="font-size:12px;color:var(--g3)">'+p.fecha+'</div></div>'+
      '<span class="est-chip est-'+p.estado+'">'+estadoLabel(p.estado)+'</span></div>'+
      '<div class="ped-total">'+fmt$(p.total)+'</div>'+
    '</div>';
  }).join(""):'<div class="empty"><div class="ico">📭</div><p>Aún no tienes pedidos. ¡Haz tu primero!</p></div>';
}

// ════════════════════ PROMOS ════════════════════
function renderPromosHome(){
  var cont=document.getElementById("promos-home");
  cont.innerHTML="<div class='sec-titulo'>Promociones</div>"+PROMOS.map(function(pr){
    var activa=pr.estado==="activa";
    var badge=activa?'<span class="promo-badge act">⏰ Activa</span>':'<span class="promo-badge fin">Finalizada</span>';
    var items=pr.items.map(function(it){
      return '<div class="promo-it">'+
        '<div class="nm">'+it.nm+'</div>'+
        '<div class="pv">'+fmt$(it.pv)+'</div>'+
        '<div class="pp">'+fmt$(it.pp)+'</div>'+
        '<div class="sv">Ahorras '+fmt$(it.ahorro)+'</div>'+
      '</div>';
    }).join("");
    var foot='';
    if(activa){
      var cntId="cnt-"+pr.id;
      foot='<div class="promo-foot"><span class="promo-cnt" id="'+cntId+'">Calculando...</span><span class="iva">+ IVA 15%</span></div>';
      setTimeout(function(){iniciarContador(pr.fechaVence,cntId);},100);
    } else {
      foot='<div class="promo-foot"><span class="dt">Finalizada el <b>'+pr.fechaVence+'</b></span><span class="iva">+ IVA 15%</span></div>';
    }
    return '<div class="promo-card">'+
      '<div class="promo-head"><div class="tit">PROMO <b>'+pr.titulo+'</b></div>'+badge+'</div>'+
      '<div class="promo-items">'+items+'</div>'+foot+
    '</div>';
  }).join("");
}

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
  setInterval(actualizar,60000);
}

// ════════════════════ CATÁLOGO ════════════════════
function setFiltro(f,btn){
  FILTRO=f;
  document.querySelectorAll(".filtros .fbtn").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  renderCatalogo();
}

function renderCatalogo(){
  var q=(document.getElementById("cat-search").value||"").toLowerCase();
  var html="";
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    if(FILTRO!=="todos"&&FILTRO!==ck&&FILTRO!=="disponibles")return;
    cat.subs.forEach(function(sn){
      var ps=PRODUCTOS.filter(function(p){
        if(p.cat!==ck||p.sub!==sn)return false;
        if(FILTRO==="disponibles"&&p.ago)return false;
        if(q&&p.nm.toLowerCase().indexOf(q)===-1&&p.id.toLowerCase().indexOf(q)===-1)return false;
        return true;
      });
      if(!ps.length)return;
      html+='<div class="subcat">'+cat.ico+' '+cat.nombre+' · '+sn+'</div>';
      html+=ps.map(function(p){return renderProdCard(p);}).join("");
    });
  });
  document.getElementById("cat-lista").innerHTML=html||'<div class="empty"><div class="ico">🔍</div><p>No se encontraron productos</p></div>';
}

function renderProdCard(p){
  var pc=precioCliente(p);
  var esp=tieneEspecial(p);
  var stockBadge=p.ago?'<span class="badge b-rojo">Agotado</span>':(p.stock<20?'<span class="badge b-amar">⚠️ Pocas ('+p.stock+')</span>':'<span class="badge b-verde">Stock: '+p.stock+'</span>');
  var pts=calcPuntos(pc,p.costo);
  var volBadge=p.descVol?'<span class="badge b-azul" style="font-size:9px">Desc. volumen disponible</span>':'';
  var imgHtml=p.img&&IMGS[p.img]?'<img src="'+IMGS[p.img]+'" alt="'+p.nm+'">':"<div class='ph'>🧯</div>";
  var cartItem=CARRITO.find(function(i){return i.id===p.id;});
  var btnHtml=p.ago?'<button class="badd" disabled style="opacity:.4">Agotado</button>':
    (cartItem?'<button class="badd inc" onclick="agregarAlCarrito(\''+p.id+'\')">✓ ('+cartItem.cant+')</button>':
    '<button class="badd" id="badd-'+p.id+'" onclick="agregarAlCarrito(\''+p.id+'\')">+ Añadir</button>');
  return '<div class="prod'+(p.ago?" ago":"")+'">'+
    '<div class="prod-img">'+imgHtml+'</div>'+
    '<div class="prod-info">'+
      '<div class="prod-nm">'+p.nm+'</div>'+
      '<div class="prod-meta">'+stockBadge+(esp?'<span class="badge b-oro">★ Tu precio</span>':'')+volBadge+'</div>'+
    '</div>'+
    '<div class="prod-r">'+
      '<div class="prod-pb">'+fmt$(p.pv)+'</div>'+
      '<div class="prod-pu">'+fmt$(pc)+'</div>'+
      '<div class="prod-pts">🏆 '+pts+' pts/u</div>'+
      btnHtml+
    '</div>'+
  '</div>';
}

function agregarAlCarrito(id){
  var p=PRODUCTOS.find(function(x){return x.id===id;});
  if(!p||p.ago)return;
  var item=CARRITO.find(function(i){return i.id===id;});
  if(item){item.cant++;}else{CARRITO.push({id:id,cant:1});}
  guardarCarrito();
  actualizarBadge();
  // Animación botón
  var btn=document.getElementById("badd-"+id);
  if(btn){btn.textContent="✓ Añadido";btn.classList.add("added");setTimeout(function(){renderCatalogo();},600);}
  else{renderCatalogo();}
  toast("🛒 "+p.nm+" agregado al carrito");
  // Pop badge
  var cb=document.getElementById("cbadge");
  if(cb){cb.classList.remove("pop");void cb.offsetWidth;cb.classList.add("pop");}
}

function actualizarBadge(){
  var tot=CARRITO.reduce(function(s,i){return s+i.cant;},0);
  var cb=document.getElementById("cbadge");
  if(cb){cb.style.display=tot>0?"flex":"none";cb.textContent=tot>9?"9+":tot;}
  // Barra fija
  var bar=document.getElementById("cart-bar");
  var barInfo=document.getElementById("cart-bar-info");
  if(bar&&barInfo){
    if(tot>0&&document.getElementById("tab-carrito").classList.contains("active")){
      var tot$=CARRITO.reduce(function(s,i){var p=PRODUCTOS.find(function(x){return x.id===i.id;});var res=precioConVolumen(p,i.cant);return s+res.precio*i.cant;},0);
      barInfo.textContent=tot+" productos · "+fmt$(tot$*(1+IVA));
      bar.style.display="flex";
    } else {bar.style.display="none";}
  }
}

function scrollToConfirm(){
  var el=document.getElementById("confirmar-pedido");
  if(el)el.scrollIntoView({behavior:"smooth"});
}

// ════════════════════ CARRITO ════════════════════
function renderCarrito(){
  actualizarBadge();
  var cont=document.getElementById("cart-lista");
  var res=document.getElementById("cart-resumen");
  // Borradores
  renderBorradores();
  if(!CARRITO.length){
    cont.innerHTML='<div class="cvacio"><div class="ico">🛒</div><p>Tu carrito está vacío</p><button class="btn btn-p" style="margin-top:16px" onclick="irTab(\'catalogo\')">Ver catálogo</button></div>';
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
    var pr=rv.precio, dcto=rv.descVol, total=pr*it.cant;
    var pts=calcPuntos(pr,p.costo)*it.cant;
    subtotal+=total; ptsTotal+=pts;
    var sig=siguienteNivel(p,it.cant);
    var volHtml=dcto>0?'<span class="vol-badge">−'+dcto.toFixed(0)+'% vol.</span>':"";
    var sigHtml=sig?'<div class="prx-sig">+'+sig.falta+' más → −'+sig.pct+'% adicional</div>':"";
    return '<div class="item">'+
      '<div class="item-i">'+
        '<div class="item-nm">'+p.nm+'</div>'+
        '<div class="item-pr">'+
          (dcto>0?'<span class="prx-orig">'+fmt$(precioCliente(p))+'</span> <span class="prx-dcto">'+fmt$(pr)+'</span> ':fmt$(pr)+'/u ')+
          volHtml+' <span class="pts">🏆 '+pts+' pts</span>'+
        '</div>'+
        sigHtml+
      '</div>'+
      '<div class="qty">'+
        '<button class="qb" onclick="cambiarCant(\''+it.id+'\',-1)">−</button>'+
        '<span class="qv">'+it.cant+'</span>'+
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
  res.innerHTML='<div class="resumen">'+
    '<div class="rrow"><span>Subtotal</span><span>'+fmt$(subtotal)+'</span></div>'+
    '<div class="rrow"><span>IVA 15%</span><span>'+fmt$(iva)+'</span></div>'+
    '<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(total)+'</span></div>'+
    '<div class="rrow pts-row"><span>🏆 Ganarás</span><span>'+fmtPts(ptsTotal)+' puntos</span></div>'+
    '</div>'+
    '<div style="margin-top:14px">'+
      '<label class="form-label">Forma de pago</label>'+
      '<select class="form-select" id="cart-pago">'+
        '<option>Efectivo</option><option>Transferencia</option>'+
        '<option>Crédito 30 días</option><option>Crédito 60 días</option><option>Crédito 90 días</option><option>Cheque</option>'+
      '</select>'+
      '<label class="form-label">Modo de entrega</label>'+
      '<select class="form-select" id="cart-modo" onchange="renderModoEntrega()">'+
        '<option value="retiro">Retiro en local</option>'+
        (USER.entrega&&USER.entrega.habilitada?'<option value="entrega">Entrega a domicilio</option>':'')+
      '</select>'+
      '<div id="entrega-extra"></div>'+
      '<label class="form-label">Notas (opcional)</label>'+
      '<input class="form-input" id="cart-notas" placeholder="Observaciones, referencias...">'+
      '<div style="display:flex;gap:8px;margin-bottom:8px">'+
        '<button class="btn btn-s" style="flex:1" onclick="guardarBorrador()">💾 Borrador</button>'+
        '<button class="btn btn-p btn-full" id="confirmar-pedido" style="flex:2;min-height:52px" onclick="confirmarPedido()">Confirmar pedido</button>'+
      '</div>'+
    '</div>';
  renderModoEntrega();
}

function renderModoEntrega(){
  var sel=document.getElementById("cart-modo");
  var ex=document.getElementById("entrega-extra");
  if(!sel||!ex)return;
  if(sel.value==="entrega"){
    var ests=(USER.establecimientos||[]).map(function(e,i){return'<option value="'+i+'">'+e.nm+" — "+e.dir+'</option>';}).join("");
    ex.innerHTML='<label class="form-label">Establecimiento</label>'+
      '<select class="form-select" id="cart-est">'+ests+'<option value="nuevo">+ Agregar dirección</option></select>'+
      '<label class="form-label">Fecha preferida</label>'+
      '<input class="form-input" id="cart-fecha" type="date">'+
      '<label class="form-label">Horario preferido</label>'+
      '<input class="form-input" id="cart-hora" placeholder="Ej: 09:00 - 12:00">';
  } else {
    ex.innerHTML='<p style="font-size:12px;color:var(--g3);margin-bottom:12px">📍 Portete #3007 y Gallegos Lara, Guayaquil</p>';
  }
}

function cambiarCant(id,d){
  var it=CARRITO.find(function(i){return i.id===id;});
  if(!it)return;
  it.cant+=d;
  if(it.cant<=0)CARRITO=CARRITO.filter(function(i){return i.id!==id;});
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
      return '<div class="borrador-item">'+
        '<span style="font-size:12px">Borrador '+(i+1)+' — '+d.toLocaleDateString()+'</span>'+
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
  toast("✏️ Borrador cargado. Puedes editarlo antes de enviar.");
}
function eliminarBorrador(i){
  var borradores=JSON.parse(localStorage.getItem("pyro_borradores_"+USER.ruc)||"[]");
  borradores.splice(i,1);
  localStorage.setItem("pyro_borradores_"+USER.ruc,JSON.stringify(borradores));
  renderBorradores(); toast("Borrador eliminado");
}

// ════════════════════ CONFIRMAR PEDIDO ════════════════════
function confirmarPedido(){
  if(!CARRITO.length){toast("⚠️ Tu carrito está vacío");return;}
  var pago=document.getElementById("cart-pago").value;
  var modo=document.getElementById("cart-modo").value;
  var notas=document.getElementById("cart-notas").value;
  var subtotal=0,ptsTotal=0;
  var items=[];
  CARRITO.forEach(function(it){
    var p=PRODUCTOS.find(function(x){return x.id===it.id;});
    if(!p||p.ago)return;
    var rv=precioConVolumen(p,it.cant);
    var pr=rv.precio;
    var pts=calcPuntos(pr,p.costo)*it.cant;
    subtotal+=pr*it.cant; ptsTotal+=pts;
    items.push({id:p.id,nm:p.nm,cant:it.cant,pv:p.pv,pr:pr,descPct:rv.descPct,pts:pts});
  });
  var iva=subtotal*IVA, total=subtotal+iva;
  var pid=Date.now().toString().slice(-6);
  var now=new Date();
  var entregaInfo={};
  if(modo==="entrega"){
    var estSel=document.getElementById("cart-est");
    var idx=estSel?parseInt(estSel.value):0;
    var est=USER.establecimientos&&USER.establecimientos[idx]?USER.establecimientos[idx]:null;
    entregaInfo={establecimiento:est,fecha:document.getElementById("cart-fecha")?document.getElementById("cart-fecha").value:"",hora:document.getElementById("cart-hora")?document.getElementById("cart-hora").value:""};
  }
  var ped={id:pid,ruc:USER.ruc,razon:USER.razon,fecha:now.toLocaleDateString(),pago:pago,modo:modo,notas:notas,items:items,subtotal:subtotal,iva:iva,total:total,puntos:ptsTotal,estado:"pendiente",entregaInfo:entregaInfo,esCanje:false};
  PEDIDOS.push(ped);
  guardarPedidos();
  CARRITO=[];
  guardarCarrito();
  actualizarBadge();
  toastGold("🎉 Pedido #"+pid+" enviado · "+fmtPts(ptsTotal)+" pts ganados");
  irTab("historial");
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
  var m={pendiente:"⏳ Pendiente",autorizado:"✅ Autorizado",entrega:"🚚 En camino",facturado:"🧾 Facturado",finalizado:"✔️ Finalizado",cancelado:"✖ Cancelado"};
  return m[e]||e;
}
function estadoClass(e){
  if(e==="pendiente")return"est-pendiente";
  if(e==="autorizado"||e==="facturado")return"est-autorizado";
  if(e==="entrega")return"est-entrega";
  if(e==="finalizado")return"est-finalizado";
  if(e==="cancelado")return"est-cancelado";
  return"est-pendiente";
}

function renderHistorial(){
  var mp=misPedidos().slice().reverse();
  if(H_FILTRO==="pendiente")mp=mp.filter(function(p){return p.estado==="pendiente"||p.estado==="autorizado";});
  else if(H_FILTRO==="proceso")mp=mp.filter(function(p){return p.estado==="entrega"||p.estado==="facturado";});
  else if(H_FILTRO==="finalizado")mp=mp.filter(function(p){return p.estado==="finalizado";});
  document.getElementById("hist-lista").innerHTML=mp.length?mp.map(function(p){
    var ptsHtml=p.esCanje?'<div class="ped-pts">🎁 Canjeaste '+p.canjePts+' pts</div>':'<div class="ped-pts">🏆 Este pedido te dio '+fmtPts(p.puntos||0)+' puntos</div>';
    var cancelBtn=(p.estado==="pendiente")?'<button class="btn btn-sm" style="background:var(--rojoc);color:var(--rojo);border:1.5px solid var(--rojo)" onclick="cancelarPedido(\''+p.id+'\')">Cancelar</button>':"";
    var califBtn=(p.estado==="finalizado"&&!p.calificacion)?'<button class="btn btn-sm btn-s" onclick="abrirCalif(\''+p.id+'\')">⭐ Calificar</button>':"";
    var califShow=p.calificacion?'<div style="font-size:11px;color:var(--g3);margin-top:4px">Calificación: '+"⭐".repeat(p.calificacion.estrellas)+'</div>':"";
    return '<div class="ped">'+
      '<div class="ped-top"><div><div class="ped-id">Pedido #'+p.id+'</div><div style="font-size:12px;color:var(--g3)">'+p.fecha+'</div></div>'+
      '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabel(p.estado)+'</span></div>'+
      '<div class="ped-total">'+fmt$(p.total)+'</div>'+
      '<div class="ped-items">'+(p.items?p.items.length:0)+' producto(s) · '+p.pago+'</div>'+
      ptsHtml+califShow+
      '<div class="ped-acc">'+
        '<button class="btn btn-sm btn-s" onclick="verDetallePed(\''+p.id+'\')">Ver detalle</button>'+
        '<button class="btn btn-sm btn-s" onclick="repetirPedido(\''+p.id+'\')">↩ Repetir</button>'+
        cancelBtn+califBtn+
      '</div>'+
    '</div>';
  }).join(""):'<div class="empty"><div class="ico">📭</div><p>No hay pedidos en esta categoría</p></div>';
}

function cancelarPedido(pid){
  confirmar("¿Cancelar el pedido #"+pid+"? Esta acción no se puede deshacer.",function(){
    var p=PEDIDOS.find(function(x){return x.id===pid;});
    if(p)p.estado="cancelado";
    guardarPedidos(); renderHistorial(); toast("✖ Pedido cancelado");
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
  if(omitidos.length)toast("⚠️ "+omitidos.length+" producto(s) no disponible(s) fueron omitidos");
  else toast("✏️ Pedido cargado. Puedes editarlo antes de enviarlo.");
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
    (p.puntos?'<div style="margin-top:8px;font-size:13px;color:#B8860B;font-weight:700">🏆 '+fmtPts(p.puntos)+' puntos ganados</div>':'')+
    (p.calificacion?'<div style="margin-top:8px;font-size:13px">Calificación: '+"⭐".repeat(p.calificacion.estrellas)+'<br><i>'+( p.calificacion.comentario||"")+'</i></div>':'')+
    '<button class="btn btn-s btn-full" style="margin-top:16px" onclick="cerrarModal(\'modal-pedido-det\')">Cerrar</button>';
  document.getElementById("modal-pedido-det-c").innerHTML=html;
  abrir("modal-pedido-det");
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
  toast(CALIF_ESTRELLAS===5?"🔥 ¡Gracias! Nos alegra que todo salió perfecto":"✅ Gracias por tu feedback");
}

// ════════════════════ RECOMPENSAS ════════════════════
var REWARDS=[
  {pts:650,ico:"🍗",nm:"Combo KFC (3 presas + papas + cola)"},
  {pts:1500,ico:"💳",nm:"Tarjeta consumo $15 (Coral / Ferrisariato)"},
  {pts:3000,ico:"💳",nm:"Tarjeta consumo $30"},
  {pts:5000,ico:"💳",nm:"Tarjeta consumo $50"}
];
function renderRecompensas(){
  var saldo=saldoPuntos();
  document.getElementById("rec-pts-v").textContent=fmtPts(saldo);
  // Motivación
  var siguiente=REWARDS.find(function(r){return r.pts>saldo;});
  var mot=siguiente?"¡Te faltan "+fmtPts(siguiente.pts-saldo)+" puntos para "+siguiente.nm+"!":"🎉 ¡Tienes puntos para canjear!";
  document.getElementById("rec-mot").textContent=mot;
  document.getElementById("rec-lista").innerHTML=REWARDS.map(function(r){
    var pct=Math.min(100,Math.round(saldo/r.pts*100));
    var puede=saldo>=r.pts;
    return '<div class="rec-item">'+
      '<div class="rec-top"><div class="rec-ico">'+r.ico+'</div>'+
      '<div><div class="rec-nm">'+r.nm+'</div><div class="rec-pts-need">'+fmtPts(r.pts)+' puntos</div></div></div>'+
      '<div class="rec-bar-wrap"><div class="rec-bar" style="width:'+pct+'%"></div></div>'+
      (puede?'<button class="btn btn-p btn-full rec-btn" onclick="canjear('+r.pts+',\''+r.nm+'\')">Canjear '+fmtPts(r.pts)+' pts</button>':
       '<button class="btn btn-s btn-full rec-btn" disabled>Faltan '+fmtPts(r.pts-saldo)+' pts</button>')+
    '</div>';
  }).join("");
}
function canjear(pts,nm){
  if(saldoPuntos()<pts){toast("⚠️ No tienes suficientes puntos");return;}
  confirmar("¿Canjear <b>"+fmtPts(pts)+" puntos</b> por <b>"+nm+"</b>?<br><small>Se coordinará con tu próximo pedido.</small>",function(){
    var pid="C"+Date.now().toString().slice(-5);
    PEDIDOS.push({id:pid,ruc:USER.ruc,razon:USER.razon,fecha:new Date().toLocaleDateString(),esCanje:true,canjePts:pts,canjeNm:nm,estado:"pendiente",total:0,puntos:0});
    guardarPedidos(); renderRecompensas();
    document.getElementById("topbar-pts-v").textContent=fmtPts(saldoPuntos());
    toastGold("🎁 Canje solicitado: "+nm);
  });
}

// ════════════════════ ADMIN ════════════════════
function admTab(t,btn){
  ADM_TAB=t;
  document.querySelectorAll(".adm-tab").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  document.querySelectorAll(".adm-panel").forEach(function(p){p.classList.remove("active");});
  document.getElementById("adm-"+t).classList.add("active");
  if(t==="pedidos")renderAdmPedidos();
  if(t==="distribuidores")renderAdmDist();
  if(t==="stock")renderAdmStock();
}
function renderAdmin(){renderAdmPedidos();}

function renderAdmPedidos(){
  var ped=PEDIDOS.filter(function(p){return!p.esCanje;});
  var canjes=PEDIDOS.filter(function(p){return p.esCanje;});
  var nuevo=ped.filter(function(p){return p.estado==="pendiente";}).length;
  var total=ped.reduce(function(s,p){return s+p.total;},0);
  var dist=new Set(ped.map(function(p){return p.ruc;})).size;
  document.getElementById("adm-stats").innerHTML=
    '<div class="adm-stat"><div class="v">'+nuevo+'</div><div class="l">Nuevos pedidos</div></div>'+
    '<div class="adm-stat"><div class="v">'+fmt$(total)+'</div><div class="l">Total vendido</div></div>'+
    '<div class="adm-stat"><div class="v">'+dist+'</div><div class="l">Distribuidores activos</div></div>'+
    '<div class="adm-stat"><div class="v">'+canjes.length+'</div><div class="l">Canjes pendientes</div></div>';
  var lista=PEDIDOS.slice().reverse();
  document.getElementById("adm-ped-lista").innerHTML=lista.length?lista.map(function(p){
    return '<div class="card" onclick="admVerPedido(\''+p.id+'\')" style="cursor:pointer"><div class="card-b">'+
      '<div style="display:flex;justify-content:space-between;align-items:center">'+
        '<div><div style="font-weight:700">'+(p.esCanje?"🎁 Canje":"Pedido #"+p.id)+'</div>'+
        '<div style="font-size:12px;color:var(--g3)">'+p.razon+' · '+p.fecha+'</div></div>'+
        '<span class="est-chip '+estadoClass(p.estado)+'">'+estadoLabel(p.estado)+'</span>'+
      '</div>'+
      (!p.esCanje?'<div style="font-size:18px;font-weight:800;font-family:\'Barlow Condensed\',sans-serif;margin-top:6px">'+fmt$(p.total)+'</div>':'')+
    '</div></div>';
  }).join(""):'<div class="empty"><div class="ico">📦</div><p>No hay pedidos aún.</p></div>';
}

function admVerPedido(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  var estados=['pendiente','autorizado','entrega','facturado','finalizado','cancelado'];
  var html='<div class="mhandle"></div><h3>'+(p.esCanje?"Canje":"Pedido")+" #"+p.id+'</h3>'+
    '<div style="font-size:12px;color:var(--g3);margin-bottom:12px">'+p.razon+' · RUC: '+p.ruc+' · '+p.fecha+'</div>'+
    '<label class="form-label">Estado</label>'+
    '<select class="form-select" id="adm-estado-sel">'+estados.map(function(e){return'<option value="'+e+'"'+(p.estado===e?" selected":"")+'>'+estadoLabel(e)+'</option>';}).join("")+'</select>';
  if(!p.esCanje&&p.items){
    html+=p.items.map(function(it){
      return '<div class="rrow"><span>'+it.nm+' x'+it.cant+'</span><span>'+fmt$(it.pr*it.cant)+'</span></div>';
    }).join("")+'<div class="rrow tot"><span>TOTAL</span><span>'+fmt$(p.total)+'</span></div>';
    html+='<div style="margin-top:10px;font-size:13px"><b>Pago:</b> '+p.pago+'</div>';
    if(p.puntos)html+='<div style="font-size:13px;color:#B8860B;font-weight:700;margin-top:4px">🏆 '+fmtPts(p.puntos)+' puntos</div>';
    if(p.calificacion)html+='<div style="margin-top:8px;font-size:13px">Calificación cliente: '+"⭐".repeat(p.calificacion.estrellas)+' '+( p.calificacion.comentario?'<i>"'+p.calificacion.comentario+'"</i>':"")+' </div>';
    html+='<button class="btn btn-s btn-full" style="margin-top:10px;background:#25D366;color:#fff;border-color:#25D366" onclick="generarWA(\''+p.id+'\')">📲 Enviar WhatsApp</button>';
    html+='<button class="btn btn-s btn-full" style="margin-top:8px" onclick="generarAzur(\''+p.id+'\')">🧾 Generar factura en Azur</button>';
    if(p.azurFactura)html+='<div style="margin-top:6px;font-size:12px;color:var(--verde)">✅ Factura Azur: '+p.azurFactura+'</div>';
    // Resumen mensual
    html+=renderResumenDist(p.ruc);
  }
  html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px">'+
    '<button class="btn btn-s" onclick="cerrarModal(\'modal-pedido-det\')">Cerrar</button>'+
    '<button class="btn btn-p" onclick="guardarEstadoPed(\''+p.id+'\')">Guardar cambios</button>'+
  '</div>';
  document.getElementById("modal-pedido-det-c").innerHTML=html;
  abrir("modal-pedido-det");
}

function renderResumenDist(ruc){
  var peds=PEDIDOS.filter(function(p){return p.ruc===ruc&&!p.esCanje;});
  var ahora=new Date();
  var esteMes=peds.filter(function(p){var d=new Date(p.fecha);return d.getMonth()===ahora.getMonth()&&d.getFullYear()===ahora.getFullYear();});
  var mesPas=peds.filter(function(p){var d=new Date(p.fecha);var m=ahora.getMonth()-1;var y=ahora.getFullYear();if(m<0){m=11;y--;}return d.getMonth()===m&&d.getFullYear()===y;});
  var anio=peds.filter(function(p){var d=new Date(p.fecha);return d.getFullYear()===ahora.getFullYear();});
  var totEste=esteMes.reduce(function(s,p){return s+p.total;},0);
  var totPas=mesPas.reduce(function(s,p){return s+p.total;},0);
  var totAnio=anio.reduce(function(s,p){return s+p.total;},0);
  var ptsAcum=peds.reduce(function(s,p){return s+(p.puntos||0);},0);
  return '<div style="background:var(--g1);border-radius:10px;padding:12px;margin-top:12px;font-size:12px">'+
    '<div style="font-weight:700;margin-bottom:8px">Resumen de compras</div>'+
    '<div class="rrow"><span>Este mes</span><span>'+fmt$(totEste)+'</span></div>'+
    '<div class="rrow"><span>Mes anterior</span><span>'+fmt$(totPas)+'</span></div>'+
    '<div class="rrow"><span>Este año</span><span>'+fmt$(totAnio)+'</span></div>'+
    '<div class="rrow"><span>Puntos acumulados</span><span>'+fmtPts(ptsAcum)+' pts</span></div>'+
    '<div class="rrow"><span>Total pedidos</span><span>'+peds.length+'</span></div>'+
  '</div>';
}

function guardarEstadoPed(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  var sel=document.getElementById("adm-estado-sel");
  if(p&&sel)p.estado=sel.value;
  guardarPedidos(); cerrarModal("modal-pedido-det"); renderAdmPedidos();
  toast("✅ Estado actualizado");
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
  else if(pg.indexOf("CRÉDITO")!==-1||pg.indexOf("CREDITO")!==-1)msg+="Tu pago es a "+p.pago+". Por favor ten listo el cheque.";
  if(p.puntos)msg+="\n\n🏆 Este pedido te dio *"+fmtPts(p.puntos)+" puntos* PyroShield.";
  msg+="\n\n¡Gracias por tu compra!";
  window.open("https://wa.me/"+tel+"?text="+encodeURIComponent(msg),"_blank");
}

function generarAzur(pid){
  var p=PEDIDOS.find(function(x){return x.id===pid;});
  if(!p)return;
  if(!AZUR_TOKEN){toast("⚠️ Configura el token de Azur primero (variable AZUR_TOKEN)");return;}
  var payload={ruc:p.ruc,items:p.items.map(function(it){return{codigo:it.id,descripcion:it.nm,cantidad:it.cant,precio:it.pr,descuento:it.descPct||0};}),formaPago:p.pago,total:p.total,iva:p.iva};
  fetch(AZUR_API+"facturas",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+AZUR_TOKEN},body:JSON.stringify(payload)})
    .then(function(r){return r.json();})
    .then(function(data){
      if(data.numero){p.azurFactura=data.numero;guardarPedidos();toast("🧾 Factura "+data.numero+" generada en Azur");admVerPedido(pid);}
      else{toast("⚠️ Error: "+JSON.stringify(data));}
    }).catch(function(e){toast("⚠️ Error de conexión con Azur");});
}

function renderAdmDist(){
  var lista=DISTRIBUIDORES.filter(function(d){return!d.esAdmin;});
  var q=(document.getElementById("adm-dist-search").value||"").toLowerCase();
  if(q)lista=lista.filter(function(d){return d.razon.toLowerCase().indexOf(q)!==-1||d.ruc.indexOf(q)!==-1;});
  document.getElementById("adm-dist-lista").innerHTML=lista.length?lista.map(function(d){
    var nped=PEDIDOS.filter(function(p){return p.ruc===d.ruc&&!p.esCanje;}).length;
    var esp=d.preciosEsp?Object.keys(d.preciosEsp).length:0;
    return '<div class="card"><div class="card-b">'+
      '<div style="font-weight:700;font-size:15px">'+d.razon+'</div>'+
      (d.empresa?'<div style="font-size:12px;color:var(--azul);font-weight:600">'+d.empresa+'</div>':'')+
      '<div style="font-size:12px;color:var(--g3);margin-top:3px">RUC: '+d.ruc+(d.tel?' · Tel: '+d.tel:'')+'</div>'+
      '<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">'+
        '<span class="badge b-verde">'+nped+' pedidos</span>'+
        (esp?'<span class="badge b-oro">★ '+esp+' precios esp.</span>':'')+
        (d.entrega&&d.entrega.habilitada?'<span class="badge b-azul">🚚 Entrega $'+d.entrega.montoMin+'+</span>':'<span class="badge b-gris">Solo retiro</span>')+
      '</div></div></div>';
  }).join(""):'<div class="empty"><div class="ico">🏢</div><p>No se encontraron distribuidores</p></div>';
}
function filtrarDist(){renderAdmDist();}
function abrirNuevoDist(){abrir("modal-nuevo-dist");}
function guardarNuevoDist(){
  var r=document.getElementById("nd-razon").value.trim();
  var emp=document.getElementById("nd-empresa").value.trim();
  var ruc=document.getElementById("nd-ruc").value.trim();
  var tel=document.getElementById("nd-tel").value.trim();
  var co=document.getElementById("nd-correo").value.trim();
  var pw=document.getElementById("nd-pass").value.trim();
  var dir=document.getElementById("nd-dir").value.trim();
  var ent=document.getElementById("nd-entrega").checked;
  var min=parseFloat(document.getElementById("nd-min").value)||30;
  if(!r||!ruc||!pw){toast("⚠️ Completa razón social, RUC y contraseña");return;}
  var nd={ruc:ruc,razon:r,pass:pw,tel:tel,correo:co,entrega:{habilitada:ent,montoMin:min}};
  if(emp)nd.empresa=emp;
  if(dir)nd.establecimientos=[{nm:"Local principal",dir:dir,obs:""}];
  DISTRIBUIDORES.push(nd);
  cerrarModal("modal-nuevo-dist");renderAdmDist();toast("✅ "+r+" registrado");
  ["nd-razon","nd-empresa","nd-ruc","nd-tel","nd-correo","nd-pass","nd-dir"].forEach(function(x){document.getElementById(x).value="";});
}

function renderAdmStock(){
  var cont=document.getElementById("adm-stock-lista");var html="";
  Object.keys(CATS).forEach(function(ck){
    var cat=CATS[ck];
    cat.subs.forEach(function(sn){
      var ps=PRODUCTOS.filter(function(p){return p.cat===ck&&p.sub===sn;});
      if(!ps.length)return;
      html+='<div class="subcat">'+cat.ico+' '+cat.nombre+' · '+sn+'</div>';
      html+=ps.map(function(p){
        var col=p.ago?"b-rojo":p.stock<20?"b-amar":"b-verde";
        var lab=p.ago?"Agotado":p.stock<20?"Bajo":"OK";
        return '<div class="card" style="margin-bottom:8px"><div class="card-b" style="display:flex;justify-content:space-between;align-items:center">'+
          '<div><div style="font-size:13px;font-weight:700">'+p.nm+'</div><div style="font-size:11px;color:var(--g3)">'+p.id+'</div></div>'+
          '<div style="text-align:right"><div style="font-size:18px;font-weight:800;font-family:\'Barlow Condensed\',sans-serif">'+p.stock+'</div><span class="badge '+col+'">'+lab+'</span></div>'+
        '</div></div>';
      }).join("");
    });
  });
  cont.innerHTML=html;
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
  document.getElementById("conf-ok").onclick=function(){cerrarModal("modal-conf");cb();};
}

// Persistencia
function cargarCarrito(){try{return JSON.parse(localStorage.getItem("pyro_cart_"+USER.ruc)||"[]");}catch(e){return[];}}
function guardarCarrito(){try{localStorage.setItem("pyro_cart_"+USER.ruc,JSON.stringify(CARRITO));}catch(e){}}
function cargarPedidos(){try{return JSON.parse(localStorage.getItem("pyro_pedidos")||"[]");}catch(e){return[];}}
function guardarPedidos(){try{localStorage.setItem("pyro_pedidos",JSON.stringify(PEDIDOS));}catch(e){}}

// Cerrar modal al tocar fondo
document.addEventListener("click",function(e){if(e.target.classList.contains("ov"))e.target.classList.remove("open");});
// Enter login
window.addEventListener("load",function(){
  var lp=document.getElementById("login-pass"),lu=document.getElementById("login-user");
  if(lp)lp.addEventListener("keydown",function(e){if(e.key==="Enter")hacerLogin();});
  if(lu)lu.addEventListener("keydown",function(e){if(e.key==="Enter")lp.focus();});
});
