var CACHE_NAME = 'pyro-v5';
var CACHE_FILES = [
  './',
  './index.html',
  './app.js',
  './datos.js',
  './style.css',
  './manifest.json',
  './img/logo.jpg'
];

self.addEventListener('message', function(e) {
  if(e.data&&e.data.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Network-first para APIs externas
  if (url.indexOf('azur.com.ec') !== -1 || url.indexOf('googleapis.com') !== -1 || url.indexOf('google.com') !== -1 || url.indexOf('script.google.com') !== -1) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // Network-first para archivos propios del portal (siempre descarga lo más nuevo)
  if (url.indexOf('alejosl0801.github.io') !== -1 || url.indexOf('localhost') !== -1 || url.indexOf('127.0.0.1') !== -1) {
    e.respondWith(
      fetch(e.request).then(function(resp) {
        var respClone = resp.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, respClone);
        });
        return resp;
      }).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // Cache-first para fuentes externas (Google Fonts, Leaflet, etc.)
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(resp) {
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(e.request, resp.clone());
          return resp;
        });
      });
    })
  );
});
