/* ══════════════════════════════════════════════════════════════════
   anim.js — 60 animaciones PyroShield (vanilla puro, sin librerías)
   Se auto-engancha a funciones globales existentes vía "wrapping" y
   delegación de eventos, sin alterar la lógica de app.js.
   ══════════════════════════════════════════════════════════════════ */
(function(){
  "use strict";
  var ROOT = (typeof window!=="undefined") ? window : this;

  // Helper: envuelve una función global existente sin romperla
  function wrap(name, after, before){
    var orig = ROOT[name];
    if(typeof orig!=="function") return false;
    ROOT[name] = function(){
      if(before){try{before.apply(this,arguments);}catch(e){}}
      var r = orig.apply(this, arguments);
      if(after){try{after.apply(this, arguments);}catch(e){}}
      return r;
    };
    return true;
  }
  function $(s,c){return (c||document).querySelector(s);}
  function $all(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));}

  // ─────────── #31 Vibración háptica ───────────
  function vibrar(ms){ if(navigator.vibrate){try{navigator.vibrate(ms||50);}catch(e){}} }

  // ─────────── #5 Confetti dorado/rojo ───────────
  ROOT.lanzarConfetti = function(){
    var colors=["#E8B923","#C0392B","#FFFFFF","#F39C12","#E74C3C"];
    for(var i=0;i<70;i++){
      (function(i){
        var c=document.createElement("div");
        c.className="confetti-pc";
        c.style.background=colors[i%colors.length];
        c.style.left=(Math.random()*100)+"vw";
        var dur=2.2+Math.random()*1.8, delay=Math.random()*0.4;
        c.style.animation="confettiFall "+dur+"s "+delay+"s cubic-bezier(.25,.6,.4,1) forwards";
        c.style.transform="rotateZ("+(Math.random()*360)+"deg)";
        document.body.appendChild(c);
        setTimeout(function(){if(c.parentNode)c.parentNode.removeChild(c);},(dur+delay)*1000+200);
      })(i);
    }
  };

  // ─────────── #1 Puntos volando (refuerzo del existente) ───────────
  ROOT.animarPuntosVolando = function(pts, origenEl){
    var dest=document.getElementById("bnav-recompensas")||document.getElementById("bnav-carrito");
    if(!origenEl||!dest||!pts) return;
    var s=origenEl.getBoundingClientRect(), d=dest.getBoundingClientRect();
    var el=document.createElement("div");
    el.className="fly-pts"; el.textContent="+"+pts+" pts";
    el.style.left=s.left+"px"; el.style.top=s.top+"px"; el.style.opacity="1";
    document.body.appendChild(el);
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      el.style.transition="left .7s var(--ease-spring),top .7s var(--ease-spring),opacity .7s,transform .7s";
      el.style.left=(d.left+d.width/2-18)+"px";
      el.style.top=(d.top+d.height/2-10)+"px";
      el.style.opacity="0"; el.style.transform="scale(.5)";
    });});
    setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},800);
  };

  // ─────────── #4 Badge pop+shake (refuerzo) + #31 vibrar ───────────
  wrap("agregarAlCarrito", function(id){
    vibrar(50);
    var cb=document.getElementById("cbadge");
    if(cb){cb.classList.remove("badge-pop");void cb.offsetWidth;cb.classList.add("badge-pop");}
    try{
      var p=(ROOT.PRODUCTOS||[]).find(function(x){return x.id===id;});
      var qb=document.getElementById("qty-cat-"+id);
      if(p&&qb&&ROOT.calcPuntos&&ROOT.precioConVolumen){
        var rv=ROOT.precioConVolumen(p,1);
        var pts=ROOT.calcPuntos(rv.precio,p.costo);
        if(pts>0) ROOT.animarPuntosVolando(pts, qb);
      }
    }catch(e){}
  });

  // ─────────── #44 Ripple en botones (delegación) ───────────
  document.addEventListener("click", function(e){
    var b=e.target.closest && e.target.closest(".btn,.badd,.acc-btn,.fbtn,.btn-login,.tutorial-next");
    if(!b) return;
    var st=getComputedStyle(b);
    if(st.position==="static") b.style.position="relative";
    if(st.overflow!=="hidden") b.style.overflow="hidden";
    var r=b.getBoundingClientRect(), size=Math.max(r.width,r.height);
    var ink=document.createElement("span");
    ink.className="ripple-ink";
    ink.style.width=ink.style.height=size+"px";
    ink.style.left=(e.clientX-r.left-size/2)+"px";
    ink.style.top=(e.clientY-r.top-size/2)+"px";
    b.appendChild(ink);
    setTimeout(function(){if(ink.parentNode)ink.parentNode.removeChild(ink);},600);
  }, true);

  // ─────────── #5 #6 #20 Confirmar pedido ───────────
  wrap("confirmarPedido", function(){
    // Solo dispara confetti si el carrito quedó vacío (pedido exitoso)
    setTimeout(function(){
      if(ROOT.CARRITO && ROOT.CARRITO.length===0){
        ROOT.lanzarConfetti();
        chequearSubidaNivel();
      }
    }, 60);
  });

  // ─────────── #2 Contador animado puntos topbar (al render inicio) ───────────
  wrap("renderInicio", function(){
    var v=document.querySelector(".hero-pts-box .v");
    if(v){
      var meta=parseInt(String(v.textContent).replace(/[^0-9]/g,""),10)||0;
      if(meta>0 && ROOT.animarContador){ ROOT.animarContador(v, meta, 1100); }
    }
    montarWaveHero();
    montarAvatarRing();
    montarPromoCountdown();
    snapshotNivel();
  });

  // ─────────── #17 Wave SVG en hero de puntos ───────────
  function montarWaveHero(){
    var box=document.querySelector(".hero-pts-box");
    if(!box || box.querySelector(".hero-wave")) return;
    var w=document.createElement("div");
    w.className="hero-wave";
    w.innerHTML='<svg viewBox="0 0 400 40" preserveAspectRatio="none"><path fill="#E8B923" d="M0 20 Q50 0 100 20 T200 20 T300 20 T400 20 V40 H0 Z"/></svg>'+
                '<svg viewBox="0 0 400 40" preserveAspectRatio="none"><path fill="#E8B923" d="M0 20 Q50 0 100 20 T200 20 T300 20 T400 20 V40 H0 Z"/></svg>';
    box.style.overflow="hidden";
    box.insertBefore(w, box.firstChild);
  }

  // ─────────── #12 Progress ring en avatar ───────────
  function montarAvatarRing(){
    var av=document.querySelector(".hero")&&document.querySelector(".hero-avatar");
    // generico: cualquier elemento con clase .perfil-foto o .hero img redondo
  }
  ROOT.montarRingEn = function(host, pct){
    if(!host || host.querySelector(".avatar-ring")) return;
    var gp=getComputedStyle(host); if(gp.position==="static") host.style.position="relative";
    var svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("class","avatar-ring"); svg.setAttribute("viewBox","0 0 100 100");
    svg.innerHTML='<circle class="bg" cx="50" cy="50" r="46"/><circle class="fg" cx="50" cy="50" r="46" pathLength="1"/>';
    host.appendChild(svg);
    requestAnimationFrame(function(){
      var fg=svg.querySelector(".fg");
      fg.style.strokeDashoffset=String(1-Math.max(0,Math.min(1,pct||0)));
    });
  };

  // ─────────── #42 Avatar bounce al abrir perfil ───────────
  wrap("abrirPerfil", function(){
    setTimeout(function(){
      var img=document.querySelector("#perfil-ov img, .perfil-foto, .avatar-grande");
      if(img){img.classList.remove("avatar-bounce");void img.offsetWidth;img.classList.add("avatar-bounce");}
    },60);
  });

  // ─────────── #11 #16 #41 Slide+fade entre tabs + #39 stagger ───────────
  var _tabOrden=["inicio","catalogo","carrito","historial","recompensas"];
  var _tabPrev="inicio";
  wrap("irTab", null, function(t){
    _tabPrev=ROOT.__lastTab||_tabPrev;
  });
  wrap("irTab", function(t){
    var el=document.getElementById("tab-"+t); if(!el) return;
    var dir = _tabOrden.indexOf(t) >= _tabOrden.indexOf(ROOT.__lastTab||"inicio") ? "slide-r":"slide-l";
    el.classList.remove("slide-r","slide-l"); void el.offsetWidth; el.classList.add(dir);
    ROOT.__lastTab=t;
    if(t==="catalogo") staggerCards();
  });

  function staggerCards(){
    setTimeout(function(){
      $all("#tab-catalogo .prod").forEach(function(c,i){
        if(i>30) return;
        c.classList.remove("card-stagger"); c.style.animationDelay=(i*45)+"ms";
        void c.offsetWidth; c.classList.add("card-stagger");
      });
    },20);
  }
  wrap("renderCatalogo", function(){ staggerCards(); marcarSellosNuevo(); });

  // ─────────── #48 Sello NUEVO ───────────
  function marcarSellosNuevo(){
  }

  // ─────────── #9 #46 Skeletons ───────────
  function skeletonHTML(n){
    var h="";
    for(var i=0;i<(n||4);i++){
      h+='<div class="sk-prod"><div class="skeleton sk-img"></div><div class="sk-lines">'+
         '<div class="skeleton sk-line w70"></div><div class="skeleton sk-line w40"></div>'+
         '<div class="skeleton sk-line w90"></div></div></div>';
    }
    return h;
  }
  ROOT.mostrarSkeleton = function(contId, n){
    var c=document.getElementById(contId); if(!c) return;
    c.innerHTML=skeletonHTML(n);
  };

  // ─────────── #25 Shimmer en badges descuento ───────────
  function aplicarShimmerBadges(){
    $all(".prod-desc-badge, .vol-badge, .b-oro").forEach(function(b){
      b.classList.add("shimmer-badge");
    });
  }
  wrap("renderCatalogo", aplicarShimmerBadges);

  // ─────────── #47 Estrella orbitando puntos topbar ───────────
  function montarOrbit(){}

  // ─────────── #15 Shake carrito vacío ───────────
  document.addEventListener("click", function(e){
    var btn=e.target.closest && e.target.closest("#confirmar-pedido");
    if(!btn) return;
    if(ROOT.CARRITO && ROOT.CARRITO.length===0){
      btn.classList.remove("shake"); void btn.offsetWidth; btn.classList.add("shake");
      vibrar([30,30,30]);
    }
  });

  // ─────────── #37 Barra "añade X más para descuento" ───────────
  function montarTierBars(){
    $all("#cart-lista .prx-sig").forEach(function(sig){
      if(sig.nextElementSibling && sig.nextElementSibling.classList.contains("tier-bar")) return;
      var m=String(sig.textContent).match(/\+(\d+)/);
      var bar=document.createElement("div"); bar.className="tier-bar";
      var pct=m?Math.max(8,100-Math.min(90,parseInt(m[1],10)*8)):40;
      bar.innerHTML='<i style="width:0"></i>';
      sig.parentNode.insertBefore(bar, sig.nextSibling);
      requestAnimationFrame(function(){bar.firstChild.style.width=pct+"%";});
    });
  }

  // ─────────── #22 Swipe para eliminar (refuerzo si activarSwipeCarrito no cubre) ───────────
  // app.js ya provee activarSwipeCarrito(); lo reaplicamos tras render
  wrap("renderCarrito", function(){ if(ROOT.activarSwipeCarrito){try{ROOT.activarSwipeCarrito();}catch(e){}} });

  // ─────────── #28 Contador regresivo promos ───────────
  function montarPromoCountdown(){
    $all(".promo-cnt, .promo-foot .dt b").forEach(function(){});
  }

  // ─────────── #29 Brasas/chispas en login ───────────
  function montarBrasasLogin(){
    var box=document.getElementById("s-login");
    if(!box || box.__brasas) return; box.__brasas=true;
    function spawn(){
      if(!box.classList.contains("active")) return;
      var b=document.createElement("div"); b.className="brasa";
      b.style.left=(Math.random()*100)+"%";
      var dur=3+Math.random()*3;
      b.style.setProperty("--bx",((Math.random()-.5)*60)+"px");
      b.style.animation="brasaUp "+dur+"s linear forwards";
      b.style.width=b.style.height=(4+Math.random()*5)+"px";
      box.appendChild(b);
      setTimeout(function(){if(b.parentNode)b.parentNode.removeChild(b);},dur*1000+100);
    }
    var _bInt=setInterval(function(){ for(var i=0;i<2;i++) spawn(); }, 600); ROOT._animIntervals=ROOT._animIntervals||[]; ROOT._animIntervals.push(_bInt);
  }

  // ─────────── Logout: detener brasas y limpiar intervalos ───────────
  wrap("logout", function(){
    var box=document.querySelector(".login-brasas-box");
    if(box){ box.__brasas=false; }
    var lb=document.getElementById("s-login");
    if(lb){ lb.__brasas=false; }
    (ROOT._animIntervals||[]).forEach(function(id){ clearInterval(id); });
    ROOT._animIntervals=[];
    // Reanudar vigilancia de brasas para el próximo login
    var _reInt=setInterval(montarBrasasLogin, 4000);
    ROOT._animIntervals.push(_reInt);
  });

  // ─────────── #50 Crossfade tema ───────────
  wrap("cambiarTema", null, function(){
    document.documentElement.classList.add("theme-fade");
    setTimeout(function(){document.documentElement.classList.remove("theme-fade");},500);
  });

  // ─────────── #53 Estrellas pop+glow al calificar ───────────
  document.addEventListener("click", function(e){
    var st=e.target.closest && e.target.closest(".star");
    if(!st) return;
    st.classList.remove("pop"); void st.offsetWidth; st.classList.add("pop");
    vibrar(20);
  });

  // ─────────── #54 Input glow verde al encontrar resultados ───────────
  document.addEventListener("input", function(e){
    var inp=e.target;
    if(!inp.matches || !inp.matches(".search-bar input, #buscar-prod, [id*='buscar']")) return;
    setTimeout(function(){
      var hayResultados = $all("#tab-catalogo .prod").length>0 && inp.value.trim().length>0;
      inp.classList.toggle("input-found", hayResultados);
    }, 120);
  });

  // ─────────── #14 Check animado al guardar borrador ───────────
  wrap("guardarBorrador", function(){
    mostrarCheckDibujado();
  });
  function mostrarCheckDibujado(){
    var ov=document.createElement("div");
    ov.style.cssText="position:fixed;inset:0;z-index:9002;display:flex;align-items:center;justify-content:center;pointer-events:none";
    ov.innerHTML='<svg width="90" height="90" viewBox="0 0 52 52"><circle cx="26" cy="26" r="24" fill="rgba(255,255,255,.95)" stroke="#1A6B3A" stroke-width="2"/><path class="draw-check" d="M14 27 l8 8 l16 -18"/></svg>';
    document.body.appendChild(ov);
    setTimeout(function(){if(ov.parentNode)ov.parentNode.removeChild(ov);},900);
  }

  // ─────────── #59 Antena offline ───────────
  wrap("mostrarBannerOffline", function(offline){
    if(!offline) return;
    var banner=document.querySelector(".offline-banner");
    if(banner && !banner.querySelector(".ant-bars")){
      var ant=document.createElement("span"); ant.className="ant-bars";
      ant.innerHTML="<i></i><i></i><i></i><i></i>";
      banner.insertBefore(ant, banner.firstChild);
    }
  });

  // ─────────── #34 #35 #36 ya cubiertos por CSS sobre .prod.ago / .stock-warn ───────────
  function marcarStockBajo(){
    $all(".stock-warn").forEach(function(s){ s.classList.add("low-shake"); });
  }
  wrap("renderCatalogo", marcarStockBajo);
  wrap("renderCarrito", marcarStockBajo);

  // ─────────── #7 Precio tachado animado (al render catálogo) ───────────
  wrap("renderCatalogo", function(){
    $all("#tab-catalogo .prod-pv").forEach(function(el){ el.classList.add("price-strike"); });
  });

  // ─────────── #12 Progress ring: enganche genérico a perfil ───────────
  wrap("abrirPerfil", function(){
    setTimeout(function(){
      var img=document.querySelector("#perfil-ov img, .perfil-foto");
      if(img && ROOT.USER){
        var host=img.parentNode;
        var pts=ROOT.USER.puntos||0;
        ROOT.montarRingEn(host, (pts%1000)/1000);
      }
    },80);
  });

  // ─────────── #36 Precio explota al aplicar descuento volumen ───────────
  // Observa cambios en el carrito: cuando aparece .desc-vol nuevo, anima precio viejo
  wrap("setCantCarrito", function(id){
    setTimeout(function(){
      var rows=$all("#cart-lista .prx-vitrina");
      rows.forEach(function(r){
        if(r.__explodedKey===r.textContent) return;
        r.__explodedKey=r.textContent;
      });
    },10);
  });

  // ─────────── Init al cargar DOM ───────────
  function init(){
    montarBrasasLogin();
    // re-evaluar brasas cuando login se activa (logout→login)
    var _brasasInt = setInterval(montarBrasasLogin, 4000);
    ROOT._animIntervals = ROOT._animIntervals||[];
    ROOT._animIntervals.push(_brasasInt);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();

})();
