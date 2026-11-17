// OAuth redirect handler for web/auth.html (kept out of the page so a strict
// Content-Security-Policy with no inline scripts applies).
(function () {
  var message = { 'flutter-web-auth-2': window.location.href };
  if (window.opener) {
    window.opener.postMessage(message, window.location.origin);
    window.close();
  } else if (window.parent && window.parent !== window) {
    window.parent.postMessage(message, window.location.origin);
  } else {
    localStorage.setItem('flutter-web-auth-2', window.location.href);
    window.close();
  }
})();
