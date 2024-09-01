// Connect API customers who use the White Labeled User feature will
// embed connect url into an iframe. These customers do not want
// Qualia logos to show
function inIframe () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

if (inIframe()) {
  document.body.className += ' whitelabel';
}
