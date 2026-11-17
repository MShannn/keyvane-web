// Removes the static loading/SEO screen once Flutter has drawn its first frame.
// Kept in its own file because the Content-Security-Policy forbids inline scripts.
window.addEventListener('flutter-first-frame', function () {
  var s = document.getElementById('kv-splash');
  if (s) s.remove();
});
