
  function FR() {
    chrome.tabs.executeScript({file: 'content.js'});
  }
  document.getElementById('wordRep').addEventListener('click', FR);



