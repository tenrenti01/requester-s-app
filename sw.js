/* A deliberately plain service worker.
   Its only job is to make the browser offer "Install". It does NOT cache the
   app, because every screen here needs live data from your Google Sheet, and a
   stale cached page would be worse than no page. */
self.addEventListener('install',  function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch',    function(e){ /* straight to the network, always */ });
