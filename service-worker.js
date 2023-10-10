self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('conversor-pearls-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/icon.png',
                '/bootstrap.min.css',
                // Adicione outros recursos que você deseja que sejam armazenados em cache
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
