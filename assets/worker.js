self.addEventListener('fetch', function fetcher (event) {
  var request = event.request
  if (request.url.indexOf('api.github.com') > -1) {
    event.respondWith(
      caches.match(event.request).then(function response () {
        return response || fetch(request)
      })
    )
  }
})
