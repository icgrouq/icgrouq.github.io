// Settings shared by the buy and restore pages. The token and price id are public by design.
// Going live: sandbox false, the live token and price id, and PADDLE_ENV = "live" in the Worker.
const SHOP = {
  sandbox: false,
  token: 'live_fd6351f19b881154a3c875371da',
  priceId: 'pri_01m78pgcqnmbzykehxjvs108sg',
  keyApi: 'https://hidehist-keys.icgroup.workers.dev'
};

// Paddle's checkout, and its emails after it, follow the buyer's browser language. Ukrainian browsers got Russian
// (Paddle shows no Ukrainian), so Ukrainian and Russian get English; the other HideHist languages stay.
function checkoutLocale() {
  const lang = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return ['en', 'de', 'es', 'fr', 'it', 'pl', 'pt'].includes(lang) ? lang : 'en';
}

// A ready email to the buyer's own address with the key, so it is kept even if Paddle's receipt is lost.
// It only opens the buyer's mail app; nothing is sent from here.
function keyMailLink(email, key, order) {
  const body = 'Your HideHist Pro license key:\n\n' + key + '\n\n' +
    (order ? 'Order number: ' + order + '\n\n' : '') +
    'To activate: HideHist → Settings → HideHist Pro → paste the key → Activate.\n' +
    'Lost it? Get it again: https://icgrouq.github.io/hidehist/restore/';
  return 'mailto:' + encodeURIComponent(email || '') + '?subject=' + encodeURIComponent('HideHist Pro license key') + '&body=' + encodeURIComponent(body);
}
