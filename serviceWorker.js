const staticWinRateCal = "WinRateCal-site-v1"
const assets = [
  "/",
  "/index.html",
  "/main.html",
  "/partialHome.html",
  "/css/index.css",
  "/css/main.css",
  "/js/index.js",
  "/bootstrap/js/bootstrap.min.js",
  "/bootstrap/css/bootstrap.min.css"

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticWinRateCal).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  