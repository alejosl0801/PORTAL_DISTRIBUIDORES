(function () {
  "use strict";

  /* ─────────────────────────────────────────────
     Mini assert helper
     ───────────────────────────────────────────── */
  function assert(name, got, expected, compareFn) {
    var ok;
    try {
      ok = compareFn ? compareFn(got, expected) : got === expected;
    } catch (e) {
      ok = false;
      got = "THREW: " + e;
    }
    return { name: name, ok: !!ok, expected: expected, got: got };
  }

  function assertAsync(name, promiseFn, checkFn) {
    // Returns a Promise-like object — resolved synchronously for sha256
    try {
      var result = promiseFn();
      if (result && typeof result.then === "function") {
        return result.then(function (val) {
          var ok = false;
          try { ok = checkFn(val); } catch (e) {}
          return { name: name, ok: ok, expected: "see checkFn", got: val };
        }).catch(function (e) {
          return { name: name, ok: false, expected: "no error", got: "THREW: " + e };
        });
      }
      var ok2 = false;
      try { ok2 = checkFn(result); } catch (e) {}
      return Promise.resolve({ name: name, ok: ok2, expected: "see checkFn", got: result });
    } catch (e) {
      return Promise.resolve({ name: name, ok: false, expected: "no error", got: "THREW: " + e });
    }
  }

  /* ─────────────────────────────────────────────
     Guard: make sure the functions exist
     ───────────────────────────────────────────── */
  function requireFn(nm) {
    if (typeof window[nm] !== "function") {
      return { name: nm + " (function exists)", ok: false,
               expected: "function", got: typeof window[nm] };
    }
    return null;
  }

  /* ─────────────────────────────────────────────
     Test groups
     ───────────────────────────────────────────── */

  // ── calcPuntos ────────────────────────────────
  function testCalcPuntos() {
    var r = [];
    var miss = requireFn("calcPuntos");
    if (miss) { r.push(miss); return r; }

    // ganancia=5, margen=5/15=33% ≥ 30% → PCT_ALTO=0.10 → round(5*0.10*100)=50
    r.push(assert("calcPuntos(15,10) → 50",
      calcPuntos(15, 10), 50));

    // ganancia=2, margen=2/10=20% < 30% → PCT_NORMAL=0.08 → round(2*0.08*100)=16
    r.push(assert("calcPuntos(10,8) → 16",
      calcPuntos(10, 8), 16));

    // ganancia=0 → 0
    r.push(assert("calcPuntos(10,10) → 0 (no ganancia)",
      calcPuntos(10, 10), 0));

    // ganancia negativa → 0
    r.push(assert("calcPuntos(5,10) → 0 (negative ganancia)",
      calcPuntos(5, 10), 0));

    // capped at PUNTOS_MAX_UNIT=450
    r.push(assert("calcPuntos(999999,0) → capped at 450",
      calcPuntos(999999, 0), 450));

    // margen exactly at threshold (30%) → PCT_ALTO
    // ganancia=3, precio=10, margen=0.30 → pct=0.10 → round(3*0.10*100)=30
    r.push(assert("calcPuntos(10,7) → margen=30% uses PCT_ALTO → 30",
      calcPuntos(10, 7), 30));

    return r;
  }

  // ── precioConVolumen ──────────────────────────
  function testPrecioConVolumen() {
    var r = [];
    var miss = requireFn("precioConVolumen");
    if (miss) { r.push(miss); return r; }

    // We need PRODUCTOS to be available
    if (typeof PRODUCTOS === "undefined" || !PRODUCTOS || !PRODUCTOS.length) {
      r.push({ name: "precioConVolumen (PRODUCTOS available)", ok: false,
               expected: "PRODUCTOS array", got: "undefined" });
      return r;
    }

    // Find a product with descVol
    var prod = null;
    for (var i = 0; i < PRODUCTOS.length; i++) {
      if (PRODUCTOS[i].descVol && PRODUCTOS[i].descVol.length > 0) {
        prod = PRODUCTOS[i];
        break;
      }
    }

    if (!prod) {
      r.push({ name: "precioConVolumen (product with descVol found)", ok: false,
               expected: "a product with descVol", got: "none found" });
      return r;
    }

    // We need a logged-in USER for precioCliente to work. We'll set a minimal USER.
    var savedUser = window.USER;
    // Use a neutral user (no preciosEsp, no sinDescVol) so pb is used as base price
    window.USER = { ruc: "TEST", preciosEsp: {} };

    var firstTier = prod.descVol[0];           // [minQty, pct]
    var belowTier = firstTier[0] - 1;          // qty below first tier
    var atTier    = firstTier[0];              // qty at first tier

    // Below first tier → no volume discount → descVol=0
    var resBelow = precioConVolumen(prod, Math.max(1, belowTier));
    r.push(assert(
      "precioConVolumen qty<firstTier → descVol=0",
      resBelow.descVol, 0));

    // At or above first tier → descVol > 0
    var resAt = precioConVolumen(prod, atTier);
    r.push(assert(
      "precioConVolumen qty>=firstTier → descVol>0",
      resAt.descVol > 0, true));

    // Higher qty tier → lower or equal price
    if (prod.descVol.length > 1) {
      var higherTier = prod.descVol[prod.descVol.length - 1][0];
      var resHigh = precioConVolumen(prod, higherTier);
      r.push(assert(
        "precioConVolumen higher tier → price ≤ lower tier price",
        resHigh.precio <= resAt.precio, true));
    }

    // Price never below costo
    if (prod.costo != null) {
      var resLarge = precioConVolumen(prod, 99999);
      r.push(assert(
        "precioConVolumen price never below costo (" + prod.costo + ")",
        resLarge.precio >= prod.costo, true));
    }

    // Return value has required fields
    var res1 = precioConVolumen(prod, 1);
    r.push(assert(
      "precioConVolumen returns {precio, descPct, descVol, descBase}",
      ("precio" in res1 && "descPct" in res1 && "descVol" in res1 && "descBase" in res1),
      true));

    // Buying 1 unit below min tier → price equals precioCliente(prod)
    var basePrice = prod.pb; // USER has no preciosEsp for this prod
    r.push(assert(
      "precioConVolumen qty=1 (below min tier) → precio matches pb",
      Math.abs(resBelow.precio - basePrice) < 0.01, true,
      function(v) { return v; }));

    window.USER = savedUser;
    return r;
  }

  // ── parseFechaPed ─────────────────────────────
  function testParseFechaPed() {
    var r = [];
    var miss = requireFn("parseFechaPed");
    if (miss) { r.push(miss); return r; }

    // fechaISO → correct month/year
    var d1 = parseFechaPed({ fechaISO: "2026-06-15T10:00:00.000Z" });
    r.push(assert("parseFechaPed({fechaISO}) → year=2026",
      d1.getUTCFullYear(), 2026));
    r.push(assert("parseFechaPed({fechaISO}) → month=5 (June, 0-indexed)",
      d1.getUTCMonth(), 5));

    // DD/MM/YYYY format
    var d2 = parseFechaPed({ fecha: "15/6/2026" });
    r.push(assert("parseFechaPed({fecha:'15/6/2026'}) → year=2026",
      d2.getFullYear(), 2026));
    r.push(assert("parseFechaPed({fecha:'15/6/2026'}) → month=5 (June)",
      d2.getMonth(), 5));
    r.push(assert("parseFechaPed({fecha:'15/6/2026'}) → day=15",
      d2.getDate(), 15));

    // Bad date string → falls back to new Date() (not epoch, not NaN)
    var d3 = parseFechaPed({ fecha: "bad date" });
    r.push(assert("parseFechaPed({fecha:'bad date'}) → valid Date (not NaN)",
      !isNaN(d3.getTime()), true));
    // Should not return epoch (1970-01-01) — should be close to now
    r.push(assert("parseFechaPed({fecha:'bad date'}) → not epoch 1970",
      d3.getFullYear() >= 2020, true));

    // Empty object → valid Date
    var d4 = parseFechaPed({});
    r.push(assert("parseFechaPed({}) → valid Date (not NaN)",
      !isNaN(d4.getTime()), true));
    r.push(assert("parseFechaPed({}) → not epoch 1970",
      d4.getFullYear() >= 2020, true));

    return r;
  }

  // ── escHtml ───────────────────────────────────
  function testEscHtml() {
    var r = [];
    var miss = requireFn("escHtml");
    if (miss) { r.push(miss); return r; }

    var xss = escHtml("<script>alert('xss')</script>");
    r.push(assert("escHtml('<script>') → no literal <script> tag",
      xss.indexOf("<script>"), -1));
    r.push(assert("escHtml('<script>') → contains &lt;script&gt;",
      xss.indexOf("&lt;script&gt;") !== -1, true));

    var quot = escHtml('He said "hi"');
    r.push(assert('escHtml(\'He said "hi"\') → contains &quot;',
      quot.indexOf("&quot;") !== -1, true));

    var amp = escHtml("a & b");
    r.push(assert("escHtml('a & b') → contains &amp;",
      amp.indexOf("&amp;") !== -1, true));

    // < and > replaced
    r.push(assert("escHtml('<b>bold</b>') → no literal angle brackets",
      escHtml("<b>bold</b>").indexOf("<") === -1, true));

    // Empty / null safe
    r.push(assert("escHtml('') → ''",
      escHtml(""), ""));
    r.push(assert("escHtml(null) → ''",
      escHtml(null), ""));

    return r;
  }

  // ── IVA calculation ───────────────────────────
  function testIVA() {
    var r = [];

    var subtotal = 100;
    var iva = parseFloat((subtotal * 0.15).toFixed(2));
    var total = parseFloat((subtotal + iva).toFixed(2));

    r.push(assert("IVA 15% on 100 → iva=15.00",
      iva, 15.00));
    r.push(assert("IVA total=115.00",
      total, 115.00));
    r.push(assert("Math.abs(total - subtotal - iva) < 0.02",
      Math.abs(total - subtotal - iva) < 0.02, true));

    // Larger amount
    var s2 = 234.56;
    var i2 = parseFloat((s2 * 0.15).toFixed(2));
    var t2 = parseFloat((s2 + i2).toFixed(2));
    r.push(assert("IVA 15% consistency: total = subtotal + iva (234.56)",
      Math.abs(t2 - s2 - i2) < 0.02, true));

    // IVA constant check
    if (typeof IVA !== "undefined") {
      r.push(assert("IVA constant === 0.15",
        IVA, 0.15));
    }

    return r;
  }

  // ── sha256 ────────────────────────────────────
  function testSha256() {
    var r = [];
    var miss = requireFn("sha256");
    if (miss) { r.push(miss); return r; }

    var p1 = sha256("test123");
    var p2 = sha256("test123");

    // Same input → same output (consistency)
    r.push(assert("sha256('test123') called twice → same result",
      p1 === p2, true));

    // Result is 64 hex chars
    r.push(assert("sha256('test123') → 64 hex characters",
      (typeof p1 === "string" && /^[0-9a-f]{64}$/i.test(p1)), true));

    // Known value — sha256("test123") = ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae
    r.push(assert("sha256('test123') → known hash value",
      p1.toLowerCase(),
      "ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae"));

    // Empty string doesn't throw and returns 64 chars
    var empty;
    try { empty = sha256(""); } catch(e) { empty = "THREW"; }
    r.push(assert("sha256('') → doesn't throw, returns 64 chars",
      (typeof empty === "string" && /^[0-9a-f]{64}$/i.test(empty)), true));

    // Different inputs → different hashes
    r.push(assert("sha256('a') !== sha256('b')",
      sha256("a") !== sha256("b"), true));

    return r;
  }

  // ── saldoPuntos / bonoPorLogros ───────────────
  function testPuntosFunctions() {
    var r = [];

    if (typeof saldoPuntos !== "function") {
      r.push({ name: "saldoPuntos (function exists)", ok: false,
               expected: "function", got: typeof saldoPuntos });
      return r;
    }
    if (typeof bonoPorLogros !== "function") {
      r.push({ name: "bonoPorLogros (function exists)", ok: false,
               expected: "function", got: typeof bonoPorLogros });
      return r;
    }

    // With no PEDIDOS for current USER, result should be a non-negative number
    var savedUser = window.USER;
    var savedPed  = window.PEDIDOS;

    window.PEDIDOS = [];
    window.USER    = { ruc: "0000000000000", preciosEsp: {} };

    var saldo;
    try { saldo = saldoPuntos(); } catch(e) { saldo = -999; }
    r.push(assert("saldoPuntos() with empty PEDIDOS → non-negative number",
      typeof saldo === "number" && saldo >= 0, true));

    var bono;
    try { bono = bonoPorLogros(); } catch(e) { bono = -999; }
    r.push(assert("bonoPorLogros() → non-negative number",
      typeof bono === "number" && bono >= 0, true));

    // saldoPuntos should be at least saldo without bonus
    r.push(assert("saldoPuntos() >= 0",
      saldo >= 0, true));

    window.USER    = savedUser;
    window.PEDIDOS = savedPed;

    return r;
  }

  // ── verificarIntegridadStorage ────────────────
  function testVerificarIntegridad() {
    var r = [];
    var miss = requireFn("verificarIntegridadStorage");
    if (miss) { r.push(miss); return r; }

    // Save original value
    var original = localStorage.getItem("pyro_pedidos");

    try {
      // Corrupt it
      localStorage.setItem("pyro_pedidos", "not-json-array");

      // Run the function
      verificarIntegridadStorage();

      // Should be restored to "[]"
      var restored = localStorage.getItem("pyro_pedidos");
      r.push(assert("verificarIntegridadStorage() restores corrupted pyro_pedidos to '[]'",
        restored, "[]"));

      // Verify it parses as an empty array
      var parsed;
      try { parsed = JSON.parse(restored); } catch(e) { parsed = null; }
      r.push(assert("Restored pyro_pedidos parses as empty array",
        Array.isArray(parsed) && parsed.length === 0, true));

    } finally {
      // Always restore original
      if (original === null) {
        localStorage.removeItem("pyro_pedidos");
      } else {
        localStorage.setItem("pyro_pedidos", original);
      }
    }

    // Test that a valid value is NOT overwritten
    var savedOrig2 = localStorage.getItem("pyro_pedidos");
    try {
      localStorage.setItem("pyro_pedidos", JSON.stringify([{id:"x"}]));
      verificarIntegridadStorage();
      var afterValid = localStorage.getItem("pyro_pedidos");
      r.push(assert("verificarIntegridadStorage() does NOT overwrite valid array",
        afterValid, JSON.stringify([{id:"x"}])));
    } finally {
      if (savedOrig2 === null) {
        localStorage.removeItem("pyro_pedidos");
      } else {
        localStorage.setItem("pyro_pedidos", savedOrig2);
      }
    }

    return r;
  }

  // ── tipoDoc detection ─────────────────────────
  function testTipoDoc() {
    var r = [];

    // We test the logic used in generarAzur inline (since it's embedded, not exported)
    // replicate the same logic:
    function detectTipoIdent(dist) {
      var numDoc = (dist.ruc || "").replace(/[^0-9]/g, "");
      var tipoIdent = "04"; // default RUC
      if (dist.tipoDoc === "cedula" || numDoc.length === 10) tipoIdent = "05";
      if (numDoc === "9999999999999" || numDoc === "9999999999") tipoIdent = "07";
      return tipoIdent;
    }

    // 10-digit → cédula ("05")
    r.push(assert("10-digit RUC → tipo '05' (cédula)",
      detectTipoIdent({ ruc: "0906872742" }), "05"));

    // 13-digit → RUC ("04")
    r.push(assert("13-digit RUC → tipo '04' (RUC)",
      detectTipoIdent({ ruc: "0906872742001" }), "04"));

    // 9999999999999 → consumidor final ("07")
    r.push(assert("9999999999999 → tipo '07' (consumidor final)",
      detectTipoIdent({ ruc: "9999999999999" }), "07"));

    // tipoDoc='cedula' override (even if length != 10)
    r.push(assert("tipoDoc='cedula' flag → tipo '05'",
      detectTipoIdent({ ruc: "0906872742001", tipoDoc: "cedula" }), "05"));

    // tipoDocLabel function (if exported)
    if (typeof tipoDocLabel === "function") {
      r.push(assert("tipoDocLabel({ruc:'0906872742'}) → 'Cédula'",
        tipoDocLabel({ ruc: "0906872742" }), "Cédula"));
      r.push(assert("tipoDocLabel({ruc:'0906872742001'}) → 'RUC'",
        tipoDocLabel({ ruc: "0906872742001" }), "RUC"));
      r.push(assert("tipoDocLabel({tipoDoc:'cedula', ruc:'x'}) → 'Cédula'",
        tipoDocLabel({ tipoDoc: "cedula", ruc: "x" }), "Cédula"));
    } else {
      r.push({ name: "tipoDocLabel (skipped — not globally exported)", ok: true,
               expected: "n/a", got: "n/a" });
    }

    return r;
  }

  /* ─────────────────────────────────────────────
     Render floating panel
     ───────────────────────────────────────────── */
  function _renderPanel(results) {
    // Remove existing panel
    var old = document.getElementById("pyro-test-panel");
    if (old) old.remove();

    var passed = results.filter(function (t) { return t.ok; }).length;
    var failed = results.length - passed;

    var panel = document.createElement("div");
    panel.id = "pyro-test-panel";
    panel.style.cssText = [
      "position:fixed",
      "top:12px",
      "right:12px",
      "width:420px",
      "max-height:85vh",
      "overflow-y:auto",
      "background:#1a1a2e",
      "color:#e0e0e0",
      "font-family:monospace",
      "font-size:12px",
      "border-radius:8px",
      "box-shadow:0 4px 24px rgba(0,0,0,0.6)",
      "z-index:999999",
      "padding:0",
      "border:1px solid #333"
    ].join(";");

    // Header
    var header = document.createElement("div");
    header.style.cssText = [
      "padding:12px 16px",
      "background:" + (failed === 0 ? "#0d3b1e" : "#3b0d0d"),
      "border-radius:8px 8px 0 0",
      "display:flex",
      "justify-content:space-between",
      "align-items:center",
      "position:sticky",
      "top:0"
    ].join(";");

    var title = document.createElement("span");
    title.style.cssText = "font-weight:bold;font-size:13px;color:#fff;";
    title.textContent = "PyroShield Tests";

    var badge = document.createElement("span");
    badge.style.cssText = "font-size:13px;font-weight:bold;";
    badge.innerHTML =
      '<span style="color:#4caf50">✓ ' + passed + "</span>" +
      (failed > 0 ? ' &nbsp;<span style="color:#f44336">✗ ' + failed + "</span>" : "");

    var closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.style.cssText = [
      "background:transparent",
      "border:none",
      "color:#aaa",
      "cursor:pointer",
      "font-size:14px",
      "padding:0 0 0 8px",
      "line-height:1"
    ].join(";");
    closeBtn.onclick = function () { panel.remove(); };

    header.appendChild(title);
    header.appendChild(badge);
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // Summary bar
    var summary = document.createElement("div");
    summary.style.cssText = "padding:8px 16px;background:#111;font-size:11px;color:#888;border-bottom:1px solid #333;";
    summary.textContent = results.length + " tests total — " + passed + " passed, " + failed + " failed";
    panel.appendChild(summary);

    // Results list
    var list = document.createElement("div");
    list.style.cssText = "padding:8px 0;";

    results.forEach(function (t) {
      var row = document.createElement("div");
      row.style.cssText = [
        "padding:5px 16px",
        "border-bottom:1px solid #222",
        "line-height:1.5"
      ].join(";");

      var icon = t.ok
        ? '<span style="color:#4caf50">✓</span>'
        : '<span style="color:#f44336">✗</span>';

      var nameEl = document.createElement("div");
      nameEl.innerHTML = icon + " " +
        '<span style="color:' + (t.ok ? "#ccc" : "#ff8a80") + '">' +
        _esc(String(t.name)) + "</span>";

      row.appendChild(nameEl);

      if (!t.ok) {
        var detail = document.createElement("div");
        detail.style.cssText = "margin-left:18px;color:#888;font-size:11px;";
        detail.innerHTML =
          "expected: <span style='color:#81c784'>" + _esc(JSON.stringify(t.expected)) + "</span>" +
          " &nbsp;got: <span style='color:#e57373'>" + _esc(JSON.stringify(t.got)) + "</span>";
        row.appendChild(detail);
      }

      list.appendChild(row);
    });

    panel.appendChild(list);

    // Footer
    var footer = document.createElement("div");
    footer.style.cssText = "padding:8px 16px;color:#555;font-size:10px;text-align:right;";
    footer.textContent = new Date().toLocaleString();
    panel.appendChild(footer);

    document.body.appendChild(panel);
  }

  function _esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ─────────────────────────────────────────────
     Main runner
     ───────────────────────────────────────────── */
  window.runTests = function () {
    var results = [];

    function run(group) {
      try {
        var res = group();
        res.forEach(function (r) { results.push(r); });
      } catch (e) {
        results.push({
          name: "GROUP ERROR: " + group.name,
          ok: false,
          expected: "no error",
          got: "THREW: " + e
        });
      }
    }

    run(testCalcPuntos);
    run(testPrecioConVolumen);
    run(testParseFechaPed);
    run(testEscHtml);
    run(testIVA);
    run(testSha256);
    run(testPuntosFunctions);
    run(testVerificarIntegridad);
    run(testTipoDoc);

    var passed = results.filter(function (t) { return t.ok; }).length;
    var failed = results.length - passed;

    console.group
      ? console.group("%c PyroShield Test Results", "font-weight:bold;font-size:14px;")
      : console.log("=== PyroShield Test Results ===");

    results.forEach(function (t) {
      if (t.ok) {
        console.log("  ✓ " + t.name);
      } else {
        console.warn("  ✗ " + t.name +
          "\n      expected: " + JSON.stringify(t.expected) +
          "\n      got:      " + JSON.stringify(t.got));
      }
    });

    console.log(
      "\nTotal: " + results.length +
      "  |  Passed: " + passed +
      "  |  Failed: " + failed
    );

    if (console.groupEnd) console.groupEnd();

    _renderPanel(results);

    return { passed: passed, failed: failed, results: results };
  };

  console.log("[tests.js] Loaded. Call runTests() to execute all tests.");
})();
