const canUse = document.getElementById('can-use');

if (ClipboardJS.isSupported('copy')) {
  canUse.innerText = 'Can use copy of clipboard.js';
} else {
  canUse.innerText = 'Can not use copy of clipboard.js';
}

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  alert('Copied ' + e.text);

  e.clearSelection();
});

clipboard.on('error', function (e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
