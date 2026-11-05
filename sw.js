// Service worker de NexVault: permite instalar la web como app y abrirla sin conexión.
// Estrategia "primero la red": siempre intenta traer la versión nueva y solo usa la copia
// guardada si no hay internet. Los datos de Firestore NUNCA se guardan aquí.
const CACHE = "nexvault-v2";
const SHELL = ["./", "./index.html", "./icon.svg", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./manifest.webmanifest"];
const CDN_HOSTS = ["cdn.jsdelivr.net", "www.gstatic.com"];

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
    self.skipWaiting();
});

self.addEventListener("activate", (e) => {
    e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
    self.clients.claim();
});

self.addEventListener("fetch", (e) => {
    const req = e.request;
    if (req.method !== "GET") return;
    const url = new URL(req.url);
    const sameOrigin = url.origin === self.location.origin;
    if (!sameOrigin && !CDN_HOSTS.includes(url.hostname)) return; // Firestore, Google login, etc.: directo a la red

    e.respondWith(
        fetch(req)
            .then((res) => {
                if (res.ok) {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, copy));
                }
                return res;
            })
            .catch(() => caches.match(req).then((m) => m || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
    );
});
