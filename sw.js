// 定義Service Worker的名稱和緩存版本號
const cacheVersion = 'v230710';

// 定義需要緩存的資源列表
const filesToCache = [
  '/',
  '/css/xuedesign.css',
  '/css/xue-page.css',
  '/css/xue-subpage.css',
  '/script/article.js',
  '/script/blog.js',
  '/script/contact.js',
  '/script/error.js',
  '/script/for-index.js',
  '/script/project.js',
  '/script/service.js',
];

// 安裝Service Worker
self.addEventListener('install', event => {
  self.skipwaiting();
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheVersion)
    .then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

// 啟動Service Worker
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
});

// 監聽網路請求，並從緩存中返回資源
self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetch', event.request);
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

//GPT3.5的修改，取代上一段之用，在資源存取錯誤時顯示404頁或離線通知頁
/* self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetch', event.request);
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.status === 404) {
        return caches.match('/error404.html');
      } else {
        return response;
      }
    }).catch(() => {
      return caches.match(event.request).then(response => {
        return response || caches.match('/offline.html');
      });
    })
  );
}); */