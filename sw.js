var CACHE_NAME = 'pyro-v3';
var CACHE_FILES = [
  './',
  './index.html',
  './app.js',
  './datos.js',
  './style.css',
  './manifest.json',
  './img/logo.jpg'
];

self.addEventListener('install', function(e) {
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
    })
  );
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;
  // Network-first para APIs externas
  if (url.indexOf('azur.com.ec') !== -1 || url.indexOf('googleapis.com') !== -1 || url.indexOf('google.com') !== -1) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }
  // Cache-first para el resto
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
