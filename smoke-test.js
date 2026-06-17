const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().startsWith('http://localhost:8765')) req.continue();
    else req.abort();
  });

  await page.goto('http://localhost:8765/index.html', { waitUntil: 'domcontentloaded', timeout: 15000 });

  const checks = await page.evaluate(() => {
    return {
      // Funciones críticas existen
      hasCálcPuntos: typeof calcPuntos === 'function',
      hasPrecioConVolumen: typeof precioConVolumen === 'function',
      hasHacerLogin: typeof hacerLogin === 'function',
      hasGuardarPedidos: typeof guardarPedidos === 'function',
      hasGenerarAzur: typeof generarAzur === 'function',
      hasEscHtml: typeof escHtml === 'function',
      hasSha256: typeof sha256 === 'function',
      hasVerificarIntegridad: typeof verificarIntegridadStorage === 'function',
      // Datos críticos cargados
      hasProductos: Array.isArray(PRODUCTOS) && PRODUCTOS.length > 0,
      hasDistribuidores: Array.isArray(DISTRIBUIDORES) && DISTRIBUIDORES.length > 0,
      hasIVA: typeof IVA === 'number' && IVA === 0.15,
      // Login form existe
      hasLoginForm: !!document.getElementById('login-user') && !!document.getElementById('login-pass'),
      // calcPuntos funciona
      calcPuntosBasic: calcPuntos(15, 10) === 50,
      calcPuntosZero: calcPuntos(10, 10) === 0,
      calcPuntosNegative: calcPuntos(5, 10) === 0,
      calcPuntosCapped: calcPuntos(999999, 0) === PUNTOS_MAX_UNIT,
      // escHtml funciona
      escHtmlXSS: !escHtml('<script>').includes('<script>'),
      // parseFechaPed funciona
      parseFechaISO: (function(){ var d = parseFechaPed({fechaISO:'2026-06-15T10:00:00.000Z'}); return d.getFullYear()===2026 && d.getMonth()===5; })(),
      parseFechaBad: (function(){ var d = parseFechaPed({fecha:'bad'}); return !isNaN(d.getTime()); })(),
      // sha256 funciona
      sha256Consistent: sha256('test123') === sha256('test123'),
      sha256Length: sha256('hello').length === 64,
    };
  });

  const failed = Object.entries(checks).filter(([k, v]) => !v);

  console.log('=== Smoke checks ===');
  Object.entries(checks).forEach(([k, v]) => {
    console.log((v ? '✅' : '❌') + ' ' + k);
  });

  // Ejecutar suite completa de tests unitarios
  await page.addScriptTag({ url: 'http://localhost:8765/tests.js' });
  await new Promise(r => setTimeout(r, 400));
  const unitResult = await page.evaluate(() => {
    if (typeof runTests !== 'function') return { passed: 0, failed: 1, failures: ['runTests no disponible'] };
    var r = runTests();
    return { passed: r.passed, failed: r.failed, failures: r.results.filter(x => !x.ok).map(x => x.name) };
  });
  console.log('\n=== Unit tests ===');
  console.log('Passed: ' + unitResult.passed + ' / Failed: ' + unitResult.failed);
  if (unitResult.failures.length) unitResult.failures.forEach(f => console.log('  ❌ ' + f));

  if (errors.length) {
    console.log('\nPage errors:', errors);
  }

  await browser.close();

  const totalFailed = failed.length + unitResult.failed + errors.length;
  if (totalFailed > 0) {
    if (failed.length) console.error('\n❌ Smoke FAILED: ' + failed.map(([k]) => k).join(', '));
    if (unitResult.failed) console.error('❌ Unit tests FAILED: ' + unitResult.failures.join(', '));
    if (errors.length) console.error('❌ Page errors: ' + errors.join('; '));
    process.exit(1);
  }
  console.log('\n✅ Todo OK — ' + Object.keys(checks).length + ' smoke checks + ' + unitResult.passed + ' unit tests');
})();
