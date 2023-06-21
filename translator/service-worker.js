// Añado la opción
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'translate',
    title: 'Translate',
    contexts: ['selection']
  });
});

// Al pulsar, mando la selección (content.js listener)
chrome.contextMenus.onClicked.addListener( (tab, msg) => {

  if (!(tab.url.startsWith("chrome://"))){
    
    // Incluyo CSS
    //chrome.scripting.insertCSS({
    //  target: { tabId: tab.id },
    //  files: ["style.css"]
    //});
    
    // Mando msg
    chrome.runtime.sendMessage({
      name: 'translate',
      data: { value: msg.selectionText }
    });

  }
  
});