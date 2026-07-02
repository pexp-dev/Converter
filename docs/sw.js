const CACHE_NAME = 'preco-certo-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://flaticon.com'
];

// Guarda os ficheiros no telemóvel durante a instalação
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Carrega os ficheiros do telemóvel em vez de ir buscar à internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
