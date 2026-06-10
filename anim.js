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
  function montarLongPress(){}
  wrap("renderCarrito", function(){
    montarLongPress();
    animarTotalCarrito();
    animarIvaCarrito();
    montarTierBars();
  });

  // ─────────── #13 #38 Ticker numérico total carrito ───────────
  ROOT.animarNumero = function(el, nuevoTexto){
    if(!el) return;
    var to=parseFloat(String(nuevoTexto).replace(/[^0-9.]/g,""))||0;
    var from=parseFloat(el.getAttribute("data-num")||"0")||0;
    if(Math.abs(to-from)<0.001){el.textContent=nuevoTexto; return;}
    var pre=String(nuevoTexto).match(/^[^\d]*/)[0];
    var t0=Date.now(), dur=500;
    (function tick(){
      var k=Math.min((Date.now()-t0)/dur,1), e=1-Math.pow(1-k,3);
      var v=from+(to-from)*e;
      el.textContent=pre+v.toFixed(2);
      if(k<1) requestAnimationFrame(tick); else { el.textContent=nuevoTexto; el.setAttribute("data-num",to); }
    })();
  };
  function animarTotalCarrito(){
    var tot=document.querySelector("#cart-resumen .rrow.tot span:last-child");
    if(tot) ROOT.animarNumero(tot, tot.textContent);
  }

  // ─────────── #49 IVA slide-in ───────────
  function animarIvaCarrito(){
    $all("#cart-resumen .rrow").forEach(function(r){
      if(/IVA/i.test(r.textContent)){ r.classList.remove("iva-anim"); void r.offsetWidth; r.classList.add("iva-anim"); }
    });
  }

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

  // ─────────── #26 Ticker de ventas en tiempo real ───────────
  // ─────────── #19 #55 Logo fuego + flash login ───────────
  wrap("hacerLogin", function(){
    setTimeout(function(){
      if(!document.getElementById("s-main") || document.getElementById("s-main").classList.contains("active")){
        // login exitoso → portal de fuego + flash logo
        lanzarPortalFuego();
        var logo=document.querySelector(".topbar-brand img");
        if(logo){logo.classList.add("logo-flash");setTimeout(function(){logo.classList.remove("logo-flash");},800);}
montarOrbit();
      }
    }, 50);
  });

  // ─────────── #30 #60 Portal de fuego ───────────
  function lanzarPortalFuego(){
    var fp=document.createElement("div"); fp.className="fire-portal";
    document.body.appendChild(fp);
    setTimeout(function(){if(fp.parentNode)fp.parentNode.removeChild(fp);},850);
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
    setInterval(function(){ for(var i=0;i<2;i++) spawn(); }, 600);
  }

  // ─────────── #50 Crossfade tema ───────────
  wrap("cambiarTema", null, function(){
    document.documentElement.classList.add("theme-fade");
    setTimeout(function(){document.documentElement.classList.remove("theme-fade");},500);
  });

  // ─────────── #51 Wiggle carrito si hay items ───────────
  setInterval(function(){
    if(ROOT.CARRITO && ROOT.CARRITO.length>0){
      var active=document.querySelector(".bnav.active");
      var cart=document.getElementById("bnav-carrito");
      if(cart && cart!==active){
        cart.classList.remove("cart-wiggle"); void cart.offsetWidth; cart.classList.add("cart-wiggle");
      }
    }
  }, 30000);

  // ─────────── #52 Camión en timeline ───────────
  wrap("renderTrackingPedido", function(){
    setTimeout(function(){
      var wrap=document.querySelector(".track-wrap"); if(!wrap || wrap.querySelector(".track-truck")) return;
      var steps=$all(".track-step", wrap);
      var cur=wrap.querySelector(".track-step.current")||wrap.querySelector(".track-step.done:last-of-type");
      var idx=steps.indexOf(cur); if(idx<0) idx=0;
      var pct=steps.length>1 ? (idx/(steps.length-1))*100 : 0;
      var truck=document.createElement("div"); truck.className="track-truck"; truck.textContent="🚚";
      truck.style.left="calc("+pct+"% - 9px)";
      wrap.style.position="relative"; wrap.appendChild(truck);
    },40);
  });

  // ─────────── #27 Animación entrega ───────────
  wrap("renderTrackingPedido", function(estado){
    if(estado==="entregado" || estado==="finalizado"){
      var dot=document.querySelector(".track-step.current .track-dot, .track-step.done:last-child .track-dot");
      if(dot){dot.classList.add("entrega-anim");}
    }
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

  // ─────────── #40 Pull-to-refresh con llama ───────────
  function montarPullRefresh(){
    var content=document.querySelector("#s-main .content"); if(!content || content.__ptr) return;
    content.__ptr=true;
    var flame=document.createElement("div"); flame.className="ptr-flame"; flame.textContent="🔥";
    document.body.appendChild(flame);
    var startY=0, pulling=false;
    content.addEventListener("touchstart", function(e){ if(content.scrollTop<=0){startY=e.touches[0].clientY; pulling=true;} },{passive:true});
    content.addEventListener("touchmove", function(e){
      if(!pulling) return;
      var dy=e.touches[0].clientY-startY;
      if(dy>50){ flame.classList.add("show"); if(dy>110) flame.classList.add("spin"); }
    },{passive:true});
    content.addEventListener("touchend", function(){
      if(pulling && flame.classList.contains("spin")){
        try{ var t=document.querySelector(".bnav.active"); if(t){t.click();} }catch(e){}
      }
      flame.classList.remove("show","spin"); pulling=false;
    });
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

  // ─────────── #58 Factura se imprime ───────────
  wrap("generarProforma", function(){
    var ov=document.createElement("div"); ov.className="print-ov";
    ov.innerHTML='<div class="print-paper"><div class="pl"></div><div class="pl s"></div><div class="pl"></div><div class="pl s"></div><div class="pl"></div></div>';
    document.body.appendChild(ov);
    setTimeout(function(){if(ov.parentNode)ov.parentNode.removeChild(ov);},950);
  });

  // ─────────── #56 Ranking animado admin ───────────
  ROOT.animarRanking = function(){
    $all(".rank-row").forEach(function(r,i){
      r.style.transitionDelay=(i*60)+"ms";
      r.classList.add("rank-up");
      setTimeout(function(){r.classList.remove("rank-up");},800+i*60);
    });
  };

  // ─────────── #18 #43 #57 Logros / niveles ───────────
  function nivelActual(){
    try{ return ROOT.USER ? (ROOT.USER.puntos||0) : 0; }catch(e){ return 0; }
  }
  function snapshotNivel(){ ROOT.__ptsSnapshot = nivelActual(); }
  function chequearSubidaNivel(){
    // Detecta logros recién completados comparando barras al 100%
    setTimeout(function(){
      var subio=false;
      $all(".rec-bar").forEach(function(b){
        var w=parseFloat(b.style.width)||0;
        if(w>=100 && !b.__done){ b.__done=true; subio=true; flipLogro(b); }
      });
      if(subio) ROOT.explosionPuntos();
    }, 200);
  }
  function flipLogro(barEl){
    var card=barEl.closest && barEl.closest(".rec-item");
    if(card){card.classList.remove("logro-flip"); void card.offsetWidth; card.classList.add("logro-flip");}
  }
  // #43 contador logros desbloqueados
  wrap("abrirModalLogros", function(){
    setTimeout(function(){
      var cnt=document.querySelector("#modal-logros .logros-count, .logros-completados-num");
      if(cnt && ROOT.animarContador){
        var n=parseInt(String(cnt.textContent).replace(/[^0-9]/g,""),10)||0;
        ROOT.animarContador(cnt, n, 800);
      }
      // #18 flip a logros completados
      $all("#modal-logros .logro-completo, #modal-logros .rec-item.done").forEach(function(c,i){
        setTimeout(function(){c.classList.add("logro-flip");},i*120);
      });
    },60);
  });
  // #57 explosión de puntos al subir de nivel
  ROOT.explosionPuntos = function(){
    var b=document.createElement("div"); b.className="lvl-burst";
    b.innerHTML='<div class="lvl-txt">¡NIVEL SUBIDO! 🏆</div>';
    document.body.appendChild(b);
    var cx=window.innerWidth/2, cy=window.innerHeight/2;
    for(var i=0;i<40;i++){
      (function(i){
        var p=document.createElement("div"); p.className="lvl-part";
        var ang=Math.random()*Math.PI*2, dist=120+Math.random()*220;
        p.style.left=cx+"px"; p.style.top=cy+"px";
        b.appendChild(p);
        requestAnimationFrame(function(){
          p.style.transition="transform 1.6s cubic-bezier(.2,.7,.3,1),opacity 1.6s";
          p.style.transform="translate("+Math.cos(ang)*dist+"px,"+Math.sin(ang)*dist+"px) scale("+(0.4+Math.random())+")";
          p.style.opacity="0";
        });
      })(i);
    }
    vibrar([40,30,60]);
    setTimeout(function(){if(b.parentNode)b.parentNode.removeChild(b);},2100);
  };

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
    // si ya hay sesión y portal visible
    if(document.getElementById("s-main") && document.getElementById("s-main").classList.contains("active")){
montarOrbit();
    }
    // re-evaluar brasas cuando login se reactiva (logout)
    setInterval(montarBrasasLogin, 4000);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();

})();
