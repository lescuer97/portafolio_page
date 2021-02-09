const cacheName = 'v1';

self.addEventListener('install', e => {

  
})

self.addEventListener('activate', e => {

    // remove un wanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

//call fetch event
self.addEventListener('fetch', e => {

    e.respondWith(
        fetch(e.request).then(res => {
            // makes clone of response
            const resClone = res.clone();
       

            caches.open(cacheName).then(chache => {
                chache.put(e.request, resClone);
            });
            return res;
    }).catch(err => caches.match(e.request).then(res => res))
      
    )
})