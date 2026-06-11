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
  "CABPQS1020":"img/CABPQS1020.jpg",
  "MANOPQS":"img/MANOPQS.jpg",
  "MANG10PQS":"img/MANG10PQS.jpg",
  "MANG20PQS":"img/MANG20PQS.jpg",
  "GANCO2":"img/GANCO2.jpg",
  "GANCPQS10":"img/GANCPQS10.jpg",
  "GANCPQS20":"img/GANCPQS20.jpg",
  "CORN5CO2":"img/CORN5CO2.jpg",
  "promo_activa":"img/promo_activa.jpg",
  "promo_ant1":"img/promo_ant1.jpg",
  "promo_fin":"img/promo_fin.jpg"
};

// Placeholder SVG (rectángulo gris con ícono de imagen rota) para imágenes faltantes
var IMG_PLACEHOLDER="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='120'%20height='120'%3E%3Crect%20width='120'%20height='120'%20fill='%23e0e0e0'/%3E%3Cg%20fill='none'%20stroke='%23999'%20stroke-width='3'%3E%3Crect%20x='30'%20y='35'%20width='60'%20height='48'%20rx='4'/%3E%3Ccircle%20cx='48'%20cy='52'%20r='6'/%3E%3Cpath%20d='M34%2078l20-18%2014%2012%2012-10%206%2016'/%3E%3C/g%3E%3C/svg%3E";

// ════════════════════ MODO PRODUCCIÓN ════════════════════
// Cuando es false, se ocultan las credenciales demo del login.
var MODO_DEMO = false;
// Versión del portal (visible en perfil del cliente y admin)
var APP_VERSION = "1.0.0";
// Modo mantenimiento: si es true, nadie puede iniciar sesión (excepto ADMIN)
var MODO_MANTENIMIENTO = false;
var MANTENIMIENTO_MSG = "Estamos realizando mejoras. Volvemos en unos minutos. 🔧";

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
    id: "p3", estado: "finalizada",
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
  {ruc:"FABIOLA",pass:"dd6027dd036e9e1c0a997949e3a73010a985a62c9ab419ac2c45d6e9d5a65b2b",razon:"Fabiola Impresiones",rol:"impresion",esAdmin:false},
  {ruc:"0906872742001",pass:"2335d45af61a8a0b0a7a275ebf7d7216a00fd570ee8bc3bf54ff9f34ad1732a1",razon:"AVILES BRIONES JORGE ENRIQUE",empresa:"Sumiseg",encargado:"Jorge",tel:"0993704934",correo:"docs.sumiseg@outlook.com",
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
  {ruc:"0953657509001",pass:"1b24ca56b5d49ee63bafc53237d27ba5f52e9a08332c4673e47dfeee9e7971b9",razon:"SOLIS MINA KAREN ZULAY",encargado:"Solis",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local",dir:"CAPITAN NAJERA 2802 Y PASAJE ANDRES MARIN",obs:""}]},
  {ruc:"0919853390001",pass:"d68949c348bd2788919d55ad2d1db48a0e3d4598ed0048b465c7edb7e8eb8416",razon:"FRANCO PEREZ CHRISTIAN LENIN",encargado:"Franco",tel:"0987583223",correo:"intriseg_17@outlook.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"VENEZUELA Y LA 14",obs:""}]},
  {ruc:"0930371331001",pass:"05244c6c3485df349d25bf82d0aece7d74ee9598a4519f53a645f6cb877022b8",razon:"MARTINEZ PALACIOS IRIS NATHALI",encargado:"Martinez",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"25 AVA #1508 E/ VENEZUELA Y COLOMBIA",obs:""}]},
  {ruc:"0918043050001",pass:"193fc618bcd404d2272b778d37134be371c9f47a7d369ba7c25106ad8cad54f2",razon:"LAFFERTE ALANIZ NEXO EGIDIO",encargado:"Lafferte",empresa:"SEPRO",tel:"",correo:"sepro.matriz@seproecuador.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA. ALBORADA 13 AVA ETAPA SL30 MZ13",obs:""}]},
  {ruc:"0991265147001",pass:"6347ca5a23d08db20c5e9e1c6f57f5c3c67dc84ee73fbafd4e1f3b055a922bd2",razon:"SEGUINDUSTRIAS DEL ECUADOR CIA. LTDA.",encargado:"Seguridad",empresa:"Seguindustrias",tel:"",correo:"seguindustrias@hotmail.com",entrega:{habilitada:true,montoMin:50},establecimientos:[{nm:"Local principal",dir:"LORENZO DE GARAYCOA 301 Y MANUEL GALECIO",obs:""}]},
  {ruc:"0908549173",pass:"2bdacf871d13f8efe1cbb4b18ba32d25a47597e33ef645b71d38d5b322645cbc",razon:"JIMENEZ CHACON RAUL GONZALO",encargado:"Jimenez",tel:"0994819051",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"COLON #1008 Y LA 8VA",obs:""}]},
  {ruc:"0992901667001",pass:"dc0a29756a385cc74928151434752022b12a6a22fe77b97931260258240460de",razon:"CARSAGUE S.A.",encargado:"Compaia",empresa:"Carsague",tel:"",correo:"Carsague10@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"SAUCES 6 MZ 264 VILLA 2",obs:""}]},
  {ruc:"0953406188001",pass:"0604dd17bcbd1d879d77877dad8942e2230a55c428bc2a32fb2087d720e9fd47",razon:"ORTIZ GOMEZ IVAN ALEJANDRO",encargado:"Ortiz",tel:"0968208770",correo:"prosuinortiz@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"SAUCES 8 MZ 454 F32 - SOLAR 4",obs:""}]},
  {ruc:"0916094998001",pass:"442950c0cd6e84acfb40d1bc988998fb6f67b213312cee1037fcf574033afe85",razon:"GARCIA LOOR KLEBER REINALDO",encargado:"Garcia",tel:"0958894313",correo:"audazservi@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"BARRIO CRISTO VIVE CALLE PRINCIPAL",obs:""}]},
  {ruc:"0919832741001",pass:"39fa92d6ccc7d606de5643288612af81456b7280bf4003b98f50a91464ed04b4",razon:"AVEIGA SUAREZ MARCO ANTONIO",encargado:"Aveiga",tel:"0986878798",correo:"conseg.ecu@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"ALFREDO VALENZUELA 1202 Y AV 23 SO",obs:""}]},
  {ruc:"0993396809001",pass:"86c42f079c9c1de433ac5db12f5124fdb4d1249d2d5f9b8c4863b96f0267a68c",razon:"INNOVASAFE S.A.S.",encargado:"Innovasafe",empresa:"Innovasafe",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"VIA DURAN TAMBO S/N Y URBANIZACION JARDINES DE PANORAMAZ F21-F",obs:""}]},
  {ruc:"0907587562001",pass:"68c58d1495d7f68edca69a4ee3564e491a2725852125fe1d569902f80c00d385",razon:"LORENTZEN GUERRERO JOHN RYCHARD",encargado:"Lorentzen",empresa:"Rilorsa",tel:"0987324925",correo:"ventas-corp@richardlorentzen.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA GUAYACANEZ MZ 237 S.1",obs:""}]},
  {ruc:"0911128205001",pass:"8b3cc8d21e137ce722ea1dcb39d068787d6b9832fcc65a36d5cce26e47074407",razon:"CHACON MACIAS JOSE FRANCISCO",encargado:"Chacon",tel:"",correo:"f_chaconm@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"LORENZO DE GARAICOA 2816 Y CALICUCHIMA ESQUINA",obs:""}]},
  {ruc:"0991385568001",pass:"1b24d385fcff277ebba4c38911db51904fe80a7c4bda7262d3ef14421ed7af91",razon:"OFERSERVI S.A.",encargado:"Oferservi",empresa:"Oferservi",tel:"",correo:"ventas@oferservi.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"LUIS URDANETA 312 Y ESCOBEDO",obs:""}]},
  {ruc:"0926711722001",pass:"38e3c46dec66d4b9f464f01bcc1ecdeab67f58a1f446cc5dabe94faba7e41f67",razon:"LOPEZ ALVARADO DANIEL ALEJANDRO",encargado:"Lopez",tel:"",correo:"danny_lopez_87@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"SAUCES 8 MZ493F VILLA11",obs:""}]},
  {ruc:"0909473225001",pass:"93e7341a442555979f8c131a75afd900a056696553ed3ff7576b1d2e9332994f",razon:"VALVERDE MITE FRANKLIN GERARDO",encargado:"Valverde",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"14VA S/N Y 1ER CLLJN Y SEDALANA",obs:""}]},
  {ruc:"0917725780001",pass:"d042a69ef285c11db71fb470cfcb483dacdf9a1ca527823c95ebd6f1c0a5bf09",razon:"GONZALEZ SANCHEZ ALEJANDRO JAVIER",encargado:"Gonzalez",tel:"",correo:"agsextintores@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"COOP ELOY ALFARO MZ 3113 SOLAR 10",obs:""}]},
  {ruc:"0991241027001",pass:"d6826364fd9c7a7ae88e7f9333fd6338a7a9bc869109620539fe24b413a6caff",razon:"TECSIND CIA. LTDA.",encargado:"Tecnologia",empresa:"Tecsind",tel:"",correo:"contabilidad@tecsindecuador.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"AV. FRANCISCO DE ORELLANA SOLAR 1",obs:""}]},
  {ruc:"0993125490001",pass:"9f7cffff7b7c870ba1ea4f33a6b4cc7ea9822b8010d2cc9ab70f88ca1dd1d9c1",razon:"INDUSTRIALES Y MARITIMOS SEGUMAR-SCI S.A.",encargado:"Industriales",empresa:"Segumar",tel:"",correo:"operaciones@segumar.org",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"JOSE DE ANTEPARA 4402 Y CHAVEZ FRANCO",obs:""}]},
  {ruc:"0918211111001",pass:"1daf6677967432eda2b77bd296da6eb4f51552bd27b3d75a8add53c895445f79",razon:"ORTEGA LARREA GALO EDUARDO",encargado:"Ortega",tel:"0989585165",correo:"controldfire@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"MALDONADO E/LA 31 Y LA 32AVA",obs:""}]},
  {ruc:"0907655294001",pass:"46dd9e0a8561e46234e8dbba11094ddc6680c1afe751029b60ef27283523d756",razon:"REYES VACA EFRAIN",encargado:"Reyes",tel:"0980285376",correo:"efreinreyesv539@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA PEDRO MENENDEZ MZ 5 SL21",obs:""}]},
  {ruc:"0919661330001",pass:"ba08ba5c132b5771eff67103ad72188e27501deb7ad30793946c8dcc67d92c8a",razon:"LAFFERTE TACLE PAMELA MELISSA",encargado:"Lafferte",tel:"0999659269",correo:"pmlafferte@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"ALBORADA ETAPA13",obs:""}]},
  {ruc:"0922529888001",pass:"5fc8c5dcf2c214658b43627dba1adb1f2951ad8d5a0fe7e01af9249514be8fef",razon:"TRUJILLO GUERRERO FRANKLIN JORGE",encargado:"Trujillo",tel:"0993087608",correo:"ventas@extintores.ec",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"AV FCO DE ORELLANA",obs:""}]},
  {ruc:"0910133636001",pass:"e3500b1ee1d2299a0a6d5ee3814606b0b858415b3deec58101970bcdb8842a2f",razon:"GIRALDO OLIVES NARCISA MARGARITA",encargado:"Giraldo",tel:"0997158433",correo:"giraldonarcisa65@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"COOP PROLETARIO CON TIERRA MZ361SL 7B",obs:""}]},
  {ruc:"0931713697001",pass:"5a8b5e87ef22bd0a5f8dc7d08de0b0ccc879fad573b45cdd8f5e5cc9569af922",razon:"OLMEDO MORALES MIKE DANIEL",encargado:"Olmedo",tel:"",correo:"extinprocec93@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"24AVA Y VENEZUELA",obs:""}]},
  {ruc:"0924345820001",pass:"a16aa00533436b7fd3cdd816498c1ef31eb0932c2ea14157091f758bf8c0e902",razon:"DUMANI GUAJALA DIANA JACKELINE",encargado:"Dumani",tel:"0991239128",correo:"ventas_firesolutions@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"VIA DURAN TAMBO KM 1.5 LOT SAN ENRIQUE MZ2 SL3",obs:""}]},
  {ruc:"0965129075",pass:"795227bdd5921b87a5c4a3dc5bc85e3dfb58ff4242fd4fccfbca3a57f0df19c5",razon:"ADAN CORRO SAMANTHA CATHERINE",encargado:"Adan",tel:"0982669482",correo:"panamitoee@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[]},
  {ruc:"0907921118001",pass:"133a20388d61df02b34b21a047e919d85b4f22bb6b5c15bf180fb70c9ffde40f",razon:"VASQUEZ VILLENA MARCOS VINICIO",encargado:"Vasquez",tel:"0994878943",correo:"marcosvasquezvillena@yahoo.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CARCHI #3410 Y CAMILO DESTRUJE",obs:""}]},
  {ruc:"1202305254001",pass:"5f504ab2df550c764e29804328a384816425e1dad73ecb2f86d0519f340c1291",razon:"CAMACHO SANCHEZ JUAN ROBERTO",encargado:"Camacho",tel:"0997858033",correo:"gerente@jurocsan.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA. LIMONAR MZ2381 SL9 ESQ",obs:""}]},
  {ruc:"0957433477001",pass:"94fd705791704460cdd68ae8080e350b0017cddb426bf4c0844069734d8eec73",razon:"JURADO QUIJIJE SAMUEL ALEJANDRO",encargado:"Jurado",tel:"",correo:"juradoenterprise@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"JUNIN #726 Y XIMENA",obs:""}]},
  {ruc:"2490407858001",pass:"d0842fcc8f974ecef31598e2bbac10dc84a4669d99955f781e2c6264056f4612",razon:"SEGUINVIA S.A.S.",encargado:"Seguinvia",empresa:"Seguinvia",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"AVENIDA 12 SN Y ENTRE CALLES 10 Y 11",obs:""}]},
  {ruc:"0703361014001",pass:"5096380b4f998fcf9d2f544a3e44b97b2f7fff2abb46cd3e18e670295f8341d0",razon:"BUELE JARA ANGEL GIOVANNY",encargado:"Buele",tel:"0993891462",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"AV. LAS ESCLUSAS, LOS CIDROS MZ 2 SL 4 Y AV. 25 DE JULIO",obs:""}]},
  {ruc:"0909599599001",pass:"fe07d86b68a483747b4e1087890af9589c1f5ae6a1124670bfc279269a54fda1",razon:"DELGADO INSUASTI WASHINGTON BERNARDO",encargado:"Delgado",tel:"",correo:"marberd29@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA BELLAVISTA MZ27 V35",obs:""}]},
  {ruc:"0927628149001",pass:"4a32e0799f8bff7590edbed68966d83843189c8f5068836d6a280633f9c6a7cb",razon:"MENDOZA MUÑOZ MARY ARIANA",encargado:"Mendoza",empresa:"Segurimen",tel:"0992415104",correo:"segurimen@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"URBANOR MZ101 LOCAL 12",obs:""}]},
  {ruc:"0905294708001",pass:"8b71f101308401e202a75754af02918538757e31aae6fb798fa3c8170f0b092f",razon:"JURADO FIERRO CESAR VICTOR JULIO",encargado:"Jurado",tel:"",correo:"ventasyrecargasjurado@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"JUNIN 726 Y XIMENA",obs:""}]},
  {ruc:"0953672144001",pass:"f13b9c6ea01e6a6b9f506b4433e51dd626d992277b856dcbe3689252856be70b",razon:"PLÚAS VITERI ALLISSON THAIZ",encargado:"Pluas",tel:"",correo:"alisonpluas@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"JOSE DE ANTEPARA Y CHAVEZ FRANCO",obs:""}]}
];

