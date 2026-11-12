// Settings shared by the buy and restore pages. The token and price id are public by design.
// Going live: sandbox false, the live token and price id, and PADDLE_ENV = "live" in the Worker.
const SHOP = {
  sandbox: true,
  token: 'test_2145bf62118e795b8fc8ad282c6',
  priceId: 'pri_01m78h675xmmyjwz3he2b9vad9',
  keyApi: 'https://hidehist-keys.icgroup.workers.dev'
};

// A ready email to the buyer's own address with the key, so it is kept even if Paddle's receipt is lost.
// It only opens the buyer's mail app; nothing is sent from here.
function keyMailLink(email, key, order) {
  const body = 'Your HideHist Pro license key:\n\n' + key + '\n\n' +
    (order ? 'Order number: ' + order + '\n\n' : '') +
    'To activate: HideHist → Settings → HideHist Pro → paste the key → Activate.\n' +
    'Lost it? Get it again: https://icgrouq.github.io/hidehist/restore/';
  return 'mailto:' + encodeURIComponent(email || '') + '?subject=' + encodeURIComponent('HideHist Pro license key') + '&body=' + encodeURIComponent(body);
}
