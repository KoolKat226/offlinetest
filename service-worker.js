self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-assets').then(function(cache) {
      return cache.addAll([
        self.location.href // Cache the current page
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
