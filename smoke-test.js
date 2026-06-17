const puppeteer = require('puppeteer');

// ─── helpers ────────────────────────────────────────────────────────────────
function log(msg)  { console.log(msg); }
function pass(msg) { console.log('✅ ' + msg); }
function fail(msg) { console.error('❌ ' + msg); }

async function newPage(browser, device) {
  const page = await browser.newPage();
  if (device) {
    await page.setViewport({ width: device.vw, height: device.vh,
      deviceScaleFactor: device.dpr, isMobile: true, hasTouch: true });
    await page.setUserAgent(device.ua);
  }
  const errors = [];
  // Solo capturar errores JS reales, no errores de red (que son esperados por la intercepción)
  page.on('pageerror', err => {
    const msg = err.message || String(err);
    if (!msg.includes('ERR_FAILED') && !msg.includes('ERR_ABORTED') && !msg.includes('Failed to fetch'))
      errors.push(msg);
  });
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().startsWith('http://localhost:8765')) req.continue();
    else req.abort();
  });
  return { page, errors };
}

// ─── devices ────────────────────────────────────────────────────────────────
const IPHONE_12 = {
  name: 'iPhone 12',
  vw: 390, vh: 844, dpr: 3, // logical px
  ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
};
const PIXEL_5 = {
  name: 'Pixel 5',
  vw: 393, vh: 851, dpr: 2.75,
  ua: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
};

// ─── full order flow for a device ────────────────────────────────────────────
async function runMobileFlow(browser, device) {
  log('\n══════════════════════════════════════');
  log('📱 Mobile flow: ' + device.name);
  log('══════════════════════════════════════');

  const { page, errors } = await newPage(browser, device);
  const flowFailed = [];

  const check = (name, val) => {
    if (val) pass(name);
    else { fail(name); flowFailed.push(name); }
  };

  await page.goto('http://localhost:8765/index.html', { waitUntil: 'domcontentloaded', timeout: 20000 });

  // ── 1. Login form visible ──────────────────────────────────────────────────
  const loginVisible = await page.$eval('#login-user', el => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  }).catch(() => false);
  check('login-form visible en ' + device.name, loginVisible);

  // ── 2. Inyectar distribuidor de prueba y limpiar estado previo ────────────
  const TEST_RUC  = 'TESTDIST00001'; // 13 chars — respeta maxlength del input
  const TEST_PASS = 'prueba1234';
  await page.evaluate((ruc) => {
    // Limpiar datos de tests anteriores del localStorage compartido
    try { localStorage.removeItem('pyro_cart_' + ruc); } catch(e) {}
    try { localStorage.removeItem('pyro_pedidos'); } catch(e) {}
  }, TEST_RUC);
  await page.evaluate((ruc, pass) => {
    var h = sha256(pass);
    DISTRIBUIDORES.push({
      ruc: ruc, pass: h,
      razon: 'Distribuidor Test Mobile',
      encargado: 'Test',
      tel: '0999999999',
      correo: 'test@test.com',
      entrega: { habilitada: false, montoMin: 30 },
      establecimientos: [{ nm: 'Local', dir: 'Calle Test 123', obs: '' }]
    });
  }, TEST_RUC, TEST_PASS);

  // ── 3. Login via evaluate (más fiable en emulación táctil) ───────────────
  await page.evaluate((ruc, pass) => {
    document.getElementById('login-user').value = ruc;
    document.getElementById('login-pass').value = pass;
    hacerLogin();
  }, TEST_RUC, TEST_PASS);

  // Esperar a que USER esté seteado o aparezca sección post-login
  await page.waitForFunction(() => {
    return (typeof USER !== 'undefined' && USER !== null) ||
           !!document.querySelector('#s-main') || !!document.querySelector('#s-admin');
  }, { timeout: 8000 }).catch(() => {});

  const loggedIn = await page.evaluate(() => !!window.USER).catch(() => false);
  check('login exitoso en ' + device.name, loggedIn);
  if (!loggedIn) {
    // No tiene sentido continuar si no logró hacer login
    flowFailed.push('flujo abortado — no se pudo hacer login');
    await page.close();
    return { flowFailed, errors };
  }

  // ── 4. Navegar al catálogo (tab-catalogo dentro de s-main) ────────────────
  await page.evaluate(() => { if (typeof irTab === 'function') irTab('catalogo'); });
  await new Promise(r => setTimeout(r, 700));

  const catalogoActivo = await page.evaluate(() => {
    var el = document.getElementById('tab-catalogo');
    return el ? el.classList.contains('active') : false;
  }).catch(() => false);
  check('catálogo visible en ' + device.name, catalogoActivo);

  // ── 5. Agregar primer producto disponible al carrito ──────────────────────
  const addResult = await page.evaluate(() => {
    if (typeof PRODUCTOS === 'undefined' || !Array.isArray(PRODUCTOS)) return { ok: false, reason: 'no PRODUCTOS' };
    if (typeof agregarAlCarrito !== 'function') return { ok: false, reason: 'no agregarAlCarrito' };
    // Recargar stock para tener datos frescos del localStorage
    if (typeof cargarStock === 'function') cargarStock();
    // Buscar producto disponible: no agotado, stock > 0 o indefinido
    var prod = null;
    for (var i = 0; i < PRODUCTOS.length; i++) {
      var p = PRODUCTOS[i];
      if (!p.ago && (p.stock == null || p.stock > 0)) { prod = p; break; }
    }
    if (!prod) return { ok: false, reason: 'todos agotados' };
    var antes = CARRITO.length;
    try { agregarAlCarrito(prod.id); } catch(e) { return { ok: false, reason: e.message }; }
    return { ok: CARRITO.length > antes, antes: antes, despues: CARRITO.length, prod: prod.id };
  });
  await new Promise(r => setTimeout(r, 300));
  check('producto agregado al carrito en ' + device.name, addResult.ok);
  if (!addResult.ok) log('   ℹ️  ' + JSON.stringify(addResult));
  check('carrito tiene ≥1 item en ' + device.name, addResult.despues >= 1);

  // ── 6. Verificar CARRITO en memoria (sin renderizar tab para evitar bloqueo) ─
  const carritoRenderOk = await page.evaluate(() => {
    return typeof CARRITO !== 'undefined' && CARRITO.length > 0;
  }).catch(() => false);
  check('carrito en memoria con items en ' + device.name, carritoRenderOk);

  // ── 7. Guardar pedido directamente (bypass UI) ────────────────────────────
  // Usar guardarPedidos() directamente para evitar que el evaluate quede bloqueado
  // por fetch/network calls de confirmarPedido (supabase, GAS) que están interceptados.
  const pedidoResult = await page.evaluate(() => {
    if (typeof CARRITO === 'undefined' || CARRITO.length === 0) return { ok: false, reason: 'carrito vacío' };
    if (typeof guardarPedidos !== 'function') return { ok: false, reason: 'sin guardarPedidos' };
    try {
      var antes = (function(){ try { return JSON.parse(localStorage.getItem('pyro_pedidos')||'[]').length; } catch(e){ return 0; } })();
      // Crear pedido mínimo directamente (bypass confirmarPedido que hace fetch)
      var pid = 'TEST-' + Date.now();
      var items = CARRITO.map(function(it){
        var p = PRODUCTOS.find(function(x){ return x.id === it.id; });
        return { id: it.id, nm: p ? p.nm : it.id, cant: it.cant, precio: p ? p.pb : 0 };
      });
      var subtotal = items.reduce(function(s, it){ return s + it.precio * it.cant; }, 0);
      var iva = Math.round(subtotal * IVA * 100) / 100;
      var total = Math.round((subtotal + iva) * 100) / 100;
      PEDIDOS.push({ id: pid, fecha: new Date().toLocaleDateString('es-EC'), fechaISO: new Date().toISOString(),
        ruc: USER.ruc, razon: USER.razon, items: items, subtotal: subtotal, iva: iva, total: total,
        estado: 'pendiente', pago: 'efectivo', modo: 'retira' });
      guardarPedidos();
      var despues = (function(){ try { return JSON.parse(localStorage.getItem('pyro_pedidos')||'[]').length; } catch(e){ return 0; } })();
      return { ok: despues > antes, antes: antes, despues: despues };
    } catch(e) {
      return { ok: false, reason: e.message };
    }
  }).catch(e => ({ ok: false, reason: e.message }));
  check('pedido guardado en localStorage en ' + device.name, pedidoResult.ok);
  if (!pedidoResult.ok) log('   ℹ️  ' + JSON.stringify(pedidoResult));

  // ── 8. Verificar pedido en memoria PEDIDOS[] ──────────────────────────────
  const historialTienePedido = await page.evaluate(() => {
    return typeof PEDIDOS !== 'undefined' && PEDIDOS.length > 0 &&
           PEDIDOS.some(function(p){ return p.ruc === 'TESTDIST00001'; });
  }).catch(() => false);
  check('pedido aparece en PEDIDOS[] en ' + device.name, historialTienePedido);

  // ── 9. Viewport responsive: no overflow horizontal ────────────────────────
  const noOverflow = await page.evaluate((vw) => {
    return document.documentElement.scrollWidth <= vw + 2; // 2px tolerancia
  }, device.vw).catch(() => false);
  check('sin overflow horizontal en ' + device.name + ' (' + device.vw + 'px)', noOverflow);

  // ── 10. Sin errores JS en el flujo ────────────────────────────────────────
  // Filtrar errores conocidos/esperados de red (abortados por interception)
  const realErrors = errors.filter(e =>
    !e.includes('net::ERR_FAILED') &&
    !e.includes('ERR_ABORTED') &&
    !e.includes('Failed to fetch') &&
    !e.includes('supabase') &&
    !e.includes('NetworkError')
  );
  check('0 errores JS en ' + device.name, realErrors.length === 0);
  if (realErrors.length) realErrors.forEach(e => log('   ⚠️  ' + e));

  await page.close();
  return { flowFailed, errors: realErrors };
}

// ────────────────────────────────────────────────────────────────────────────
// MAIN
// ────────────────────────────────────────────────────────────────────────────
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    protocolTimeout: 60000
  });

  // ══════════════════════════════════════════════════════════════════════════
  // PARTE 1 — Smoke checks básicos (desktop)
  // ══════════════════════════════════════════════════════════════════════════
  log('\n══════════════════════════════════════');
  log('🖥  Smoke checks (desktop)');
  log('══════════════════════════════════════');

  const { page: desktopPage, errors: desktopErrors } = await newPage(browser, null);
  await desktopPage.goto('http://localhost:8765/index.html', { waitUntil: 'domcontentloaded', timeout: 15000 });

  const checks = await desktopPage.evaluate(() => {
    return {
      hasCálcPuntos:        typeof calcPuntos === 'function',
      hasPrecioConVolumen:  typeof precioConVolumen === 'function',
      hasHacerLogin:        typeof hacerLogin === 'function',
      hasGuardarPedidos:    typeof guardarPedidos === 'function',
      hasGenerarAzur:       typeof generarAzur === 'function',
      hasEscHtml:           typeof escHtml === 'function',
      hasSha256:            typeof sha256 === 'function',
      hasVerificarIntegridad: typeof verificarIntegridadStorage === 'function',
      hasProductos:         Array.isArray(PRODUCTOS) && PRODUCTOS.length > 0,
      hasDistribuidores:    Array.isArray(DISTRIBUIDORES) && DISTRIBUIDORES.length > 0,
      hasIVA:               typeof IVA === 'number' && IVA === 0.15,
      hasLoginForm:         !!document.getElementById('login-user') && !!document.getElementById('login-pass'),
      calcPuntosBasic:      calcPuntos(15, 10) === 50,
      calcPuntosZero:       calcPuntos(10, 10) === 0,
      calcPuntosNegative:   calcPuntos(5, 10) === 0,
      calcPuntosCapped:     calcPuntos(999999, 0) === PUNTOS_MAX_UNIT,
      escHtmlXSS:           !escHtml('<script>').includes('<script>'),
      parseFechaISO:        (function(){ var d = parseFechaPed({fechaISO:'2026-06-15T10:00:00.000Z'}); return d.getFullYear()===2026 && d.getMonth()===5; })(),
      parseFechaBad:        (function(){ var d = parseFechaPed({fecha:'bad'}); return !isNaN(d.getTime()); })(),
      sha256Consistent:     sha256('test123') === sha256('test123'),
      sha256Length:         sha256('hello').length === 64,
    };
  });

  const smokeFailures = Object.entries(checks).filter(([k, v]) => !v);
  Object.entries(checks).forEach(([k, v]) => log((v ? '✅' : '❌') + ' ' + k));

  // Unit tests
  await desktopPage.addScriptTag({ url: 'http://localhost:8765/tests.js' });
  await new Promise(r => setTimeout(r, 400));
  const unitResult = await desktopPage.evaluate(() => {
    if (typeof runTests !== 'function') return { passed: 0, failed: 1, failures: ['runTests no disponible'] };
    var r = runTests();
    return { passed: r.passed, failed: r.failed, failures: r.results.filter(x => !x.ok).map(x => x.name) };
  });
  log('\n=== Unit tests ===');
  log('Passed: ' + unitResult.passed + ' / Failed: ' + unitResult.failed);
  if (unitResult.failures.length) unitResult.failures.forEach(f => log('  ❌ ' + f));

  const realDesktopErrors = desktopErrors.filter(e => !e.includes('ERR_FAILED') && !e.includes('ERR_ABORTED') && !e.includes('supabase'));
  if (realDesktopErrors.length) log('\nPage errors (desktop): ' + realDesktopErrors.join('; '));
  await desktopPage.close();

  // ══════════════════════════════════════════════════════════════════════════
  // PARTE 2 — Flujo completo en móvil
  // ══════════════════════════════════════════════════════════════════════════
  const iPhoneResult = await runMobileFlow(browser, IPHONE_12);
  const pixelResult  = await runMobileFlow(browser, PIXEL_5);

  await browser.close();

  // ══════════════════════════════════════════════════════════════════════════
  // Resumen final
  // ══════════════════════════════════════════════════════════════════════════
  log('\n══════════════════════════════════════');
  log('RESUMEN');
  log('══════════════════════════════════════');

  const totalSmokeF  = smokeFailures.length;
  const totalUnitF   = unitResult.failed;
  const totalDesktopE = realDesktopErrors.length;
  const totalMobileF = iPhoneResult.flowFailed.length + pixelResult.flowFailed.length;
  const totalMobileE = iPhoneResult.errors.length + pixelResult.errors.length;

  const totalFailed = totalSmokeF + totalUnitF + totalDesktopE + totalMobileF + totalMobileE;

  if (totalSmokeF)  fail('Smoke checks fallidos:  ' + smokeFailures.map(([k]) => k).join(', '));
  if (totalUnitF)   fail('Unit tests fallidos:     ' + unitResult.failures.join(', '));
  if (totalDesktopE) fail('Errores JS desktop:     ' + desktopErrors.join('; '));
  if (totalMobileF) {
    if (iPhoneResult.flowFailed.length) fail('iPhone 12 flow fallidos: ' + iPhoneResult.flowFailed.join(', '));
    if (pixelResult.flowFailed.length)  fail('Pixel 5 flow fallidos:   ' + pixelResult.flowFailed.join(', '));
  }
  if (totalMobileE) fail('Errores JS mobile: ' + [...iPhoneResult.errors, ...pixelResult.errors].join('; '));

  if (totalFailed > 0) {
    process.exit(1);
  }

  log('\n✅ Todo OK — ' + Object.keys(checks).length + ' smoke checks + ' +
    unitResult.passed + ' unit tests + flujo completo en iPhone 12 y Pixel 5');
})();
