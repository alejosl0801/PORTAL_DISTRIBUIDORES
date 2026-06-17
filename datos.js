// ════════════════════ RUTAS DE IMÁGENES ════════════════════
var IMGS = {
  "logo":"img/logo.jpg",
  "VENT10PQS":"img/VENT10PQS.jpg",
  "VENT20PQS":"img/VENT20PQS.jpg",
  "VENT5CO2":"img/VENT5CO2.jpg",
  "VENT10CO2":"img/VENT10CO2.jpg",
  "CABCO2510":"img/CABCO2510.jpg",
  "CORN10CO2":"img/MANG10CO2.jpg",
  "MANH30C001":"img/MANG30M.jpg",
  "VENT20CO2":"img/VENT20CO2C.jpg",
  "VENT2-5AQ":"img/VENT25AQ.jpg",
  "MANH15C001":"img/MANG15M.jpg",
  "HID001":"img/PIT112.jpg",
  "HID002":"img/NIP112.jpg",
  "CABMARITIMO":"img/CO2CABMAR.jpg",
  "CAB50CO2AR":"img/CO2DISRAP.jpg",
  "VENT50PQS":"img/VENT50PQS.jpg",
  "VENT100PQS":"img/VENT100PQS.jpg",
  "VENT150PQS":"img/VENT150PQS.jpg",
  "HACHA001":"img/HACHA.jpg",
  "SPANNER001":"img/SPANNER.jpg",
  "PORTMAN":"img/BRAZOPOR.jpg",
  "VALVANG001":"img/ANG112.jpg",
  "VALVANG002":"img/ANG212.jpg",
  "CABPQS1020":"img/CABPQS1020.jpg",
  "MANOPQS":"img/MANOPQS.jpg",
  "MANGPQS10":"img/MANG10PQS.jpg",
  "MANGPQS20":"img/MANG20PQS.jpg",
  "GANCO2":"img/GANCO2.jpg",
  "GANCPQS10":"img/GANCPQS10.jpg",
  "GANCPQS20":"img/GANCPQS20.jpg",
  "CORN5CO2":"img/CORN5CO2.jpg",
  "LETPQS":"img/LETPQS.jpg",
  "LETCO2":"img/LETCO2.jpg",
  "ABRPQS":"img/ABRPQS.jpg",
  "SEGPLAST01":"img/SEGPLAST01.jpg",
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
      {id:"CORN10CO2", nm:"Manguera CO2 10 LB", pv:7.20, pp:5.90, ahorro:1.30}
    ]
  },
  {
    id: "p2", estado: "finalizada",
    titulo: "Promo Semana Anterior",
    fechaVence: "2026-05-30",
    items: [
      {id:"VALVANG001", nm:"Válvula Angular 1½\"", pv:33.83, pp:28.33, ahorro:5.50},
      {id:"HID001", nm:"Pitón Bronce 1½\"", pv:19.80, pp:16.02, ahorro:3.78}
    ]
  },
  {
    id: "p1", estado: "finalizada",
    titulo: "Promo Anterior",
    fechaVence: "2026-05-23",
    items: [
      {id:"MANH30C001", nm:"Manguera Doble Chaqueta 30M", pv:64.28, pp:57.85, ahorro:6.43},
      {id:"CABMARITIMO", nm:"Cabezal Marítimo CO2", pv:38.40, pp:34.61, ahorro:3.79}
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
  {ruc:"FABIOLA",pass:"14c6b50752f6d7830b82c8e57c044ffc8a94767d6e3fc7358492d217e116577a",razon:"Fabiola Impresiones",rol:"impresion",esAdmin:false},
  {ruc:"0906872742001",pass:"573a96dd77f2faf2ab1c23d725639545124319e6619c50fe54563a6909648b73",razon:"AVILES BRIONES JORGE ENRIQUE",empresa:"Sumiseg",encargado:"Jorge",tel:"0993704934",correo:"docs.sumiseg@outlook.com",
   entrega:{habilitada:true,montoMin:30},
   establecimientos:[{nm:"Local principal",dir:"AV. QUITO #1810 Y AYACUCHO",obs:""}],
   preciosEsp:{
    "VENT10PQS":11.78,"VENT20PQS":19.84,"VENT50PQS":124.91,"VENT100PQS":164.88,"VENT150PQS":207.96,
    "VENT5CO2":22.40,"VENT10CO2":32.88,"VENT20CO2":98.80,"VENT2-5AQ":58.25,
    "CABPQS1020":2.65,"MANOPQS":0.65,"MANGPQS10":0.75,"MANGPQS20":0.75,
    "CABCO2510":6.80,"CORN5CO2":2.10,"CORN10CO2":6.25,
    "GANCO2":0.98,"GANCPQS10":0.80,"GANCPQS20":0.80,"ABRPQS":0.22,
    "CABMARITIMO":38.46,"CAB50CO2AR":13.95,"SEGPLAST01":0.06,
    "MANH15C001":36.98,"MANH30C001":64.28,"VALVANG001":31.48,"VALVANG002":61.26,
    "HID001":17.80,"HID002":6.88,"PORTMAN":11.71,"HACHA001":11.78,"SPANNER001":5.98
   }
  },
  {ruc:"0953657509001",pass:"85d494013b74adf5bbd7c16d24db0f2cf857bdccc5e0947cd117797e167b5a56",razon:"SOLIS MINA KAREN ZULAY",encargado:"Solis",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local",dir:"CAPITAN NAJERA 2802 Y PASAJE ANDRES MARIN",obs:""}]},
  {ruc:"0919853390001",pass:"e90fd3e35b87d2200a6912f80e2b99e256c5aa87e9f69519c090878306a43722",razon:"FRANCO PEREZ CHRISTIAN LENIN",encargado:"Franco",tel:"0987583223",correo:"intriseg_17@outlook.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"VENEZUELA Y LA 14",obs:""}]},
  {ruc:"0930371331001",pass:"6c18803bf8c49c59abcec714b59df939526b0bc959bec7c1368b58a66ccaccbc",razon:"MARTINEZ PALACIOS IRIS NATHALI",encargado:"Martinez",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"25 AVA #1508 E/ VENEZUELA Y COLOMBIA",obs:""}]},
  {ruc:"0918043050001",pass:"c07b8ab7def3c77816c7ac7861aefb95ddf5018cde49d23dad2669c0b78202f8",razon:"LAFFERTE ALANIZ NEXO EGIDIO",encargado:"Lafferte",empresa:"SEPRO",tel:"",correo:"sepro.matriz@seproecuador.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA. ALBORADA 13 AVA ETAPA SL30 MZ13",obs:""}]},
  {ruc:"0991265147001",pass:"b826cae1213115e9e576569395e3f000142967a36f62edd855330e494ef6dce9",razon:"SEGUINDUSTRIAS DEL ECUADOR CIA. LTDA.",encargado:"Seguridad",empresa:"Seguindustrias",tel:"",correo:"seguindustrias@hotmail.com",entrega:{habilitada:true,montoMin:50},establecimientos:[{nm:"Local principal",dir:"LORENZO DE GARAYCOA 301 Y MANUEL GALECIO",obs:""}]},
  {ruc:"0908549173",pass:"9a260a6207f9c48873968dace6aa9f16fb573df5acdc553fc930f950d176ae64",razon:"JIMENEZ CHACON RAUL GONZALO",encargado:"Jimenez",tel:"0994819051",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"COLON #1008 Y LA 8VA",obs:""}]},
  {ruc:"0992901667001",pass:"f86b0be3b57f156b108bdb0eeae758f011185546a891fae90c2f48d0b04aa33d",razon:"CARSAGUE S.A.",encargado:"Compaia",empresa:"Carsague",tel:"",correo:"Carsague10@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"SAUCES 6 MZ 264 VILLA 2",obs:""}]},
  {ruc:"0953406188001",pass:"cf05cfff600dee819ba41b655bdc741287cbb41f54181a5cbdd3060b600193c0",razon:"ORTIZ GOMEZ IVAN ALEJANDRO",encargado:"Ortiz",tel:"0968208770",correo:"prosuinortiz@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"SAUCES 8 MZ 454 F32 - SOLAR 4",obs:""}]},
  {ruc:"0916094998001",pass:"ce552ee6a977bf0a89708f808137c9fb52683bdb4a15b01dbcb3053b830f85fd",razon:"GARCIA LOOR KLEBER REINALDO",encargado:"Garcia",tel:"0958894313",correo:"audazservi@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"BARRIO CRISTO VIVE CALLE PRINCIPAL",obs:""}]},
  {ruc:"0919832741001",pass:"0fb606ff74091c280213f2faafb66bdbcecacdf356fdfaa7e0addd78670db8e6",razon:"AVEIGA SUAREZ MARCO ANTONIO",encargado:"Aveiga",tel:"0986878798",correo:"conseg.ecu@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"ALFREDO VALENZUELA 1202 Y AV 23 SO",obs:""}]},
  {ruc:"0993396809001",pass:"21c2321117faff9650d42ed80164f41daeb8d7e87ed0d86a1cee1e13eb5a0aec",razon:"INNOVASAFE S.A.S.",encargado:"Innovasafe",empresa:"Innovasafe",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"VIA DURAN TAMBO S/N Y URBANIZACION JARDINES DE PANORAMAZ F21-F",obs:""}]},
  {ruc:"0907587562001",pass:"dfbe4a5997d946e74bfcf84fab098758121485c54826ced1e2e213e089c3eb84",razon:"LORENTZEN GUERRERO JOHN RYCHARD",encargado:"Lorentzen",empresa:"Rilorsa",tel:"0987324925",correo:"ventas-corp@richardlorentzen.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA GUAYACANEZ MZ 237 S.1",obs:""}]},
  {ruc:"0911128205001",pass:"1fc4705020a20bccb1f52a9e4391f88b1f4e4c23972f40a1594c91b9427b9da7",razon:"CHACON MACIAS JOSE FRANCISCO",encargado:"Chacon",tel:"",correo:"f_chaconm@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"LORENZO DE GARAICOA 2816 Y CALICUCHIMA ESQUINA",obs:""}]},
  {ruc:"0991385568001",pass:"3e702bf788d62ecf06d3232d822bc48bf3d16f2e5511b408e00cdd3485a4751a",razon:"OFERSERVI S.A.",encargado:"Oferservi",empresa:"Oferservi",tel:"",correo:"ventas@oferservi.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"LUIS URDANETA 312 Y ESCOBEDO",obs:""}]},
  {ruc:"0926711722001",pass:"197d8f49915621cdc0158894d95c70f4399e31e1a76fcc28188cb182e52cb4a4",razon:"LOPEZ ALVARADO DANIEL ALEJANDRO",encargado:"Lopez",tel:"",correo:"danny_lopez_87@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"SAUCES 8 MZ493F VILLA11",obs:""}]},
  {ruc:"0909473225001",pass:"984f0f111dfb117b8c05127f90dfb97b14e3a7211312c761baf77056800ec74e",razon:"VALVERDE MITE FRANKLIN GERARDO",encargado:"Valverde",tel:"",correo:"",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"14VA S/N Y 1ER CLLJN Y SEDALANA",obs:""}]},
  {ruc:"0917725780001",pass:"88c725ce9754e5d7a50039156f5ab99db14f65ff74873a6a9ec456cbfbc253f3",razon:"GONZALEZ SANCHEZ ALEJANDRO JAVIER",encargado:"Gonzalez",tel:"",correo:"agsextintores@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"COOP ELOY ALFARO MZ 3113 SOLAR 10",obs:""}]},
  {ruc:"0991241027001",pass:"0214ace810ae002ac90f56ee9c1ad02d436fe6415db8cbd62a363bf64c483778",razon:"TECSIND CIA. LTDA.",encargado:"Tecnologia",empresa:"Tecsind",tel:"",correo:"contabilidad@tecsindecuador.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"AV. FRANCISCO DE ORELLANA SOLAR 1",obs:""}]},
  {ruc:"0993125490001",pass:"6be7492378b44c9a1a2f15f95895af778a1d87f08318f07c28f469a5b05e1cb5",razon:"INDUSTRIALES Y MARITIMOS SEGUMAR-SCI S.A.",encargado:"Industriales",empresa:"Segumar",tel:"",correo:"operaciones@segumar.org",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"JOSE DE ANTEPARA 4402 Y CHAVEZ FRANCO",obs:""}]},
  {ruc:"0918211111001",pass:"bebcf6d1dfe107a0b3d8bf9adcc5da1f4bb09a8bdfdf5e77c8f2d7aabcfd63c8",razon:"ORTEGA LARREA GALO EDUARDO",encargado:"Ortega",tel:"0989585165",correo:"controldfire@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"MALDONADO E/LA 31 Y LA 32AVA",obs:""}]},
  {ruc:"0907655294001",pass:"4f864116fe9601ca7520614856e722ebda305427d6a2a06cd84e7cba17f70e4c",razon:"REYES VACA EFRAIN",encargado:"Reyes",tel:"0980285376",correo:"efreinreyesv539@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"CDLA PEDRO MENENDEZ MZ 5 SL21",obs:""}]},
  {ruc:"0919661330001",pass:"b2e909c551ac792029795bf9bb52faf82af5481444544b1d183ee1fce77361dc",razon:"LAFFERTE TACLE PAMELA MELISSA",encargado:"Lafferte",tel:"0999659269",correo:"pmlafferte@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"ALBORADA ETAPA13",obs:""}]},
  {ruc:"0922529888001",pass:"099f170c61eecde9a19a83a13dfb95b607ff6d64380425b3ac91fab45a80c31e",razon:"TRUJILLO GUERRERO FRANKLIN JORGE",encargado:"Trujillo",tel:"0993087608",correo:"ventas@extintores.ec",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"AV FCO DE ORELLANA",obs:""}]},
  {ruc:"0910133636001",pass:"04f4fe64e60e82ff009819191128e9ce3dee175464be714075fef3a2cabfb05a",razon:"GIRALDO OLIVES NARCISA MARGARITA",encargado:"Giraldo",tel:"0997158433",correo:"giraldonarcisa65@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"COOP PROLETARIO CON TIERRA MZ361SL 7B",obs:""}]},
  {ruc:"0931713697001",pass:"725e2b1a6bf6b1c4046d305fd519102563bc7603d1a7c794c2ea77d8608b8b89",razon:"OLMEDO MORALES MIKE DANIEL",encargado:"Olmedo",tel:"",correo:"extinprocec93@gmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"24AVA Y VENEZUELA",obs:""}]},
  {ruc:"0924345820001",pass:"c6d0600f987f441d5f7241dc3cedf9fd8396f81258b7b65648d397d1b3e0986b",razon:"DUMANI GUAJALA DIANA JACKELINE",encargado:"Dumani",tel:"0991239128",correo:"ventas_firesolutions@hotmail.com",entrega:{habilitada:false,montoMin:30},establecimientos:[{nm:"Local principal",dir:"VIA DURAN TAMBO KM 1.5 LOT SAN ENRIQUE MZ2 SL3",obs:""}]},
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

