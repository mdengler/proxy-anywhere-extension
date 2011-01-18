var bkg = chrome.extension.getBackgroundPage();

/**
* Saves options to localStorage.
*/
function saveOptions() {
  // Save settings.
  bkg.settings.scheme = document.getElementById('scheme').value;
  bkg.settings.host = document.getElementById('host').value;
  bkg.settings.port = parseInt(document.getElementById('port').value);
  bkg.settings.opt_out = document.getElementById('opt_out').checked;
  
  // Check if the status of the proxy server is online, if so, refresh it.
  if (bkg.status) {
    bkg.setProxyEnabled(true);
  }
  
  // Update status to let user know options were saved.
  var info = document.getElementById('info-message');
  info.style.display = 'inline';
  info.style.opacity = 1;
  setTimeout(function() {
    info.style.opacity = 0.0;
  }, 1000);
}

/**
* Restore all options.
*/
function restoreOptions() {
  // Restore settings.
  document.getElementById('version').innerHTML = ' (v' + bkg.settings.version + ')';
  document.getElementById('opt_out').checked = bkg.settings.opt_out;
  document.getElementById('host').value = bkg.settings.host;
  document.getElementById('port').value = bkg.settings.port;
  document.getElementById('scheme').value = bkg.settings.scheme;
}
