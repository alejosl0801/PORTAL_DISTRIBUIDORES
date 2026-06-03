// ════════════════════ RUTAS DE IMÁGENES ════════════════════
var IMGS = {
  "logo":"img/logo.jpg",
  "VENT10PQS":"img/VENT10PQS.jpg",
  "VENT20PQS":"img/VENT20PQS.jpg",
  "VENT5CO2":"img/VENT5CO2.jpg",
  "VENT10CO2":"img/VENT10CO2.jpg",
  "CABCO2510":"img/CABCO2510.jpg",
  "MANG10CO2":"img/MANG10CO2.jpg",
  "MANG30M":"img/MANG30M.jpg",
  "VENT20CO2C":"img/VENT20CO2C.jpg",
  "VENT25AQ":"img/VENT25AQ.jpg",
  "MANG15M":"img/MANG15M.jpg",
  "PIT112":"img/PIT112.jpg",
  "NIP112":"img/NIP112.jpg",
  "CO2CABMAR":"img/CO2CABMAR.jpg",
  "CO2DISRAP":"img/CO2DISRAP.jpg",
  "VENT50PQS":"img/VENT50PQS.jpg",
  "VENT100PQS":"img/VENT100PQS.jpg",
  "VENT150PQS":"img/VENT150PQS.jpg",
  "HACHA":"img/HACHA.jpg",
  "SPANNER":"img/SPANNER.jpg",
  "BRAZOPOR":"img/BRAZOPOR.jpg",
  "ANG112":"img/ANG112.jpg",
  "ANG212":"img/ANG212.jpg",
  "promo_activa":"img/promo_activa.jpg",
  "promo_ant1":"img/promo_ant1.jpg",
  "promo_fin":"img/promo_fin.jpg"
};

// Placeholder SVG (rectángulo gris con ícono de imagen rota) para imágenes faltantes
var IMG_PLACEHOLDER="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='120'%20height='120'%3E%3Crect%20width='120'%20height='120'%20fill='%23e0e0e0'/%3E%3Cg%20fill='none'%20stroke='%23999'%20stroke-width='3'%3E%3Crect%20x='30'%20y='35'%20width='60'%20height='48'%20rx='4'/%3E%3Ccircle%20cx='48'%20cy='52'%20r='6'/%3E%3Cpath%20d='M34%2078l20-18%2014%2012%2012-10%206%2016'/%3E%3C/g%3E%3C/svg%3E";

// ════════════════════ MODO PRODUCCIÓN ════════════════════
// Cuando es false, se ocultan las credenciales demo del login.
var MODO_DEMO = false;

// ════════════════════ CONSTANTES ════════════════════
var IVA = 0.15;
var PUNTOS_MAX_UNIT = 450;
var UMBRAL_MARGEN_ALTO = 0.30;
var PCT_ALTO = 0.10;
var PCT_NORMAL = 0.08;
var PUNTOS_X_DOLAR = 100;
var AZUR_TOKEN = "API_1851_2064_5fcfa1b47f430";
var AZUR_API = "https://azur-proxy.alejosl0801.workers.dev/";

// ════════════════════ PROMOCIONES ════════════════════
var PROMOS = [
  {
    id: "p3", estado: "activa",
    titulo: "Promo de la Semana",
    fechaVence: "2026-06-06",
    items: [
      {id:"CABCO2510", nm:"Cabezal CO2 5/10 LB", pv:7.80, pp:6.40, ahorro:1.40},
      {id:"MANG10CO2", nm:"Manguera CO2 10 LB", pv:7.20, pp:5.90, ahorro:1.30}
    ]
  },
  {
    id: "p2", estado: "finalizada",
    titulo: "Promo Semana Anterior",
    fechaVence: "2026-05-30",
    items: [
      {id:"ANG112", nm:"Válvula Angular 1½\"", pv:33.83, pp:28.33, ahorro:5.50},
      {id:"PIT112", nm:"Pitón Bronce 1½\"", pv:19.80, pp:16.02, ahorro:3.78}
    ]
  },
  {
    id: "p1", estado: "finalizada",
    titulo: "Promo Anterior",
    fechaVence: "2026-05-23",
    items: [
      {id:"MANG30M", nm:"Manguera Doble Chaqueta 30M", pv:64.28, pp:57.85, ahorro:6.43},
      {id:"CO2CABMAR", nm:"Cabezal Marítimo CO2", pv:38.40, pp:34.61, ahorro:3.85}
    ]
  }
];

// ════════════════════ PROMOS VIGENTES ════════════════════
function promosVigentes(){
  var hoy=new Date(); hoy.setHours(0,0,0,0);
  return PROMOS.filter(function(pr){
    if(pr.estado!=="activa")return false;
    var fin=new Date(pr.fechaVence+"T23:59:59");
    return fin>=hoy;
  });
}
// Devuelve el item de promo SOLO si la promo está vigente (estado activa Y no vencida por fecha actual)
function promoDelProducto(pid){
  var vigentes=promosVigentes();
  var ahora=new Date();
  for(var i=0;i<vigentes.length;i++){
    var pr=vigentes[i];
    var fin=new Date(pr.fechaVence+"T23:59:59");
    if(ahora>fin)continue; // promo vencida — no aplicar precio promocional
    var it=pr.items.find(function(x){return x.id===pid;});
    if(it)return it;
  }
  return null;
}

// ════════════════════ DATOS DISTRIBUIDORES ════════════════════
// Nota: el campo "ruc" admite RUC (13 díg) o CÉDULA (10 díg) — ambos válidos para facturar.
//   El campo "tipoDoc" indica cuál es ("ruc" o "cedula"); si falta, se detecta por longitud.
// ⚠️ POR CONFIRMAR: email "efreinreyesv539@gmail.com" → ¿posible typo de "efrain"?
var DISTRIBUIDORES = [
  {ruc:"ADMIN",pass:"d0f0c1955aa832124e11c72a66f97da8cca523d3a1000e797df6f61586797f7d",razon:"Administrador PyroShield",esAdmin:true},
  {ruc:"FABIOLA",pass:"fabiola123",razon:"Fabiola Impresiones",rol:"impresion",esAdmin:false},
  {ruc:"0906872742001",pass:"jorge123",razon:"AVILES BRIONES JORGE ENRIQUE",empresa:"Sumiseg",encargado:"Jorge",tel:"0993704934",correo:"docs.sumiseg@outlook.com",
   entrega:{habilitada:true,montoMin:30},
   establecimientos:[{nm:"Local principal",dir:"AV. QUITO #1810 Y AYACUCHO",obs:""}],
   preciosEsp:{
    "VENT10PQS":11.78,"VENT20PQS":19.84,"VENT50PQS":124.91,"VENT100PQS":164.88,"VENT150PQS":207.96,
    "VENT5CO2":22.40,"VENT10CO2":32.88,"VENT20CO2C":98.80,"VENT25AQ":58.25,
    "CABPQS1020":2.65,"MANOPQS":0.65,"MANG10PQS":0.75,"MANG20PQS":0.75,
    "CABCO2510":6.80,"CORN5CO2":2.10,"MANG10CO2":6.25,
    "SOPCO2R":0.98,"SOPPQS10":0.80,"SOPPQS20":0.80,"ABRPQS":0.22,
    "CO2CABMAR":38.46,"CO2DISRAP":13.95,"SEGPLAM":0.06,
    "MANG15M":36.98,"MANG30M":64.28,"ANG112":31.48,"ANG212":61.26,
    "PIT112":17.80,"NIP112":6.88,"BRAZOPOR":11.71,"HACHA":11.78,"SPANNER":5.98
   }
  },
  {ruc:"0953657509001",pass:"dist123",razon:"SOLIS MINA KAREN ZULAY",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local",dir:"CAPITAN NAJERA 2802 Y PASAJE ANDRES MARIN",obs:""}]},
  {ruc:"0919853390001",pass:"dist123",razon:"FRANCO PEREZ CHRISTIAN LENIN",tel:"0987583223",correo:"intriseg_17@outlook.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0930371331001",pass:"dist123",razon:"MARTINEZ PALACIOS IRIS NATHALI",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0918043050001",pass:"dist123",razon:"LAFFERTE ALANIZ NEXO EGIDIO",empresa:"SEPRO",tel:"",correo:"sepro.matriz@seproecuador.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0991265147001",pass:"dist123",razon:"SEGUINDUSTRIAS DEL ECUADOR CIA. LTDA.",empresa:"Seguindustrias",tel:"",correo:"seguindustrias@hotmail.com",entrega:{habilitada:true,montoMin:50},establecimientos:[]},
  {ruc:"0908549173",pass:"dist123",razon:"JIMENEZ CHACON RAUL GONZALO",tel:"0994819051",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0992901667001",pass:"dist123",razon:"CARSAGUE S.A.",empresa:"Carsague",tel:"",correo:"Carsague10@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0953406188001",pass:"dist123",razon:"ORTIZ GOMEZ IVAN ALEJANDRO",tel:"0968208770",correo:"prosuinortiz@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0916094998001",pass:"dist123",razon:"GARCIA LOOR KLEBER REINALDO",tel:"0958894313",correo:"audazservi@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0919832741001",pass:"dist123",razon:"AVEIGA SUAREZ MARCO ANTONIO",tel:"0986878798",correo:"conseg.ecu@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0993396809001",pass:"dist123",razon:"INNOVASAFE S.A.S.",empresa:"Innovasafe",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0907587562001",pass:"dist123",razon:"LORENTZEN GUERRERO JOHN RYCHARD",empresa:"Rilorsa",tel:"0987324925",correo:"ventas-corp@richardlorentzen.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0911128205001",pass:"dist123",razon:"CHACON MACIAS JOSE FRANCISCO",tel:"",correo:"f_chaconm@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0991385568001",pass:"dist123",razon:"OFERSERVI S.A.",empresa:"Oferservi",tel:"",correo:"ventas@oferservi.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0926711722001",pass:"dist123",razon:"LOPEZ ALVARADO DANIEL ALEJANDRO",tel:"",correo:"danny_lopez_87@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0909473225001",pass:"dist123",razon:"VALVERDE MITE FRANKLIN GERARDO",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0917725780001",pass:"dist123",razon:"GONZALEZ SANCHEZ ALEJANDRO JAVIER",tel:"",correo:"agsextintores@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0991241027001",pass:"dist123",razon:"TECSIND CIA. LTDA.",empresa:"Tecsind",tel:"",correo:"contabilidad@tecsindecuador.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0993125490001",pass:"dist123",razon:"INDUSTRIALES Y MARITIMOS SEGUMAR-SCI S.A.",empresa:"Segumar",tel:"",correo:"operaciones@segumar.org",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0918211111001",pass:"dist123",razon:"ORTEGA LARREA GALO EDUARDO",tel:"0989585165",correo:"controldfire@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0907655294001",pass:"dist123",razon:"REYES VACA EFRAIN",tel:"0980285376",correo:"efreinreyesv539@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0919661330001",pass:"dist123",razon:"LAFFERTE TACLE PAMELA MELISSA",tel:"0999659269",correo:"pmlafferte@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0922529888001",pass:"dist123",razon:"TRUJILLO GUERRERO FRANKLIN JORGE",tel:"0993087608",correo:"ventas@extintores.ec",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0910133636001",pass:"dist123",razon:"GIRALDO OLIVES NARCISA MARGARITA",tel:"0997158433",correo:"giraldonarcisa65@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0931713697001",pass:"dist123",razon:"OLMEDO MORALES MIKE DANIEL",tel:"",correo:"extinprocec93@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0924345820001",pass:"dist123",razon:"DUMANI GUAJALA DIANA JACKELINE",tel:"0991239128",correo:"ventas_firesolutions@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0965129075",pass:"dist123",razon:"ADAN CORRO SAMANTHA CATHERINE",tel:"0982669482",correo:"panamitoee@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0907921118001",pass:"dist123",razon:"VASQUEZ VILLENA MARCOS VINICIO",tel:"0994878943",correo:"marcosvasquezvillena@yahoo.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"1202305254001",pass:"dist123",razon:"CAMACHO SANCHEZ JUAN ROBERTO",tel:"0997858033",correo:"gerente@jurocsan.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0957433477001",pass:"dist123",razon:"JURADO QUIJIJE SAMUEL ALEJANDRO",tel:"",correo:"juradoenterprise@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"2490407858001",pass:"dist123",razon:"SEGUINVIA S.A.S.",empresa:"Seguinvia",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0703361014001",pass:"dist123",razon:"BUELE JARA ANGEL GIOVANNY",tel:"0993891462",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0909599599001",pass:"dist123",razon:"DELGADO INSUASTI WASHINGTON BERNARDO",tel:"",correo:"marberd29@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0927628149001",pass:"dist123",razon:"MENDOZA MUÑOZ MARY ARIANA",empresa:"Segurimen",tel:"0992415104",correo:"segurimen@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0905294708001",pass:"dist123",razon:"JURADO FIERRO CESAR VICTOR JULIO",tel:"",correo:"ventasyrecargasjurado@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0953672144001",pass:"dist123",razon:"PLÚAS VITERI ALLISSON THAIZ",tel:"",correo:"alisonpluas@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]}
];

