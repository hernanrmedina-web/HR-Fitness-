const CACHE='hrm-fitness-v2-1-1-picker';const ASSETS=['./','index.html','styles.css','app.js','exercises.js','manifest.json','logo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request))));
self.addEventListener('message',e=>{if(e.data?.type==='NOTIFY')self.registration.showNotification('HRM Fitness',{body:e.data.body||'Descanso terminado.',icon:'logo.png',badge:'logo.png',tag:'rest-timer'});});
