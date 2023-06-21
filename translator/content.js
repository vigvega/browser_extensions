// Recoge el mensaje
chrome.runtime.onMessage.addListener(({msg, txt}) => {
    
    if (msg == 'translate') {
      translateText(txt)
    }
});

function translateText(txt){
  // to do, obviously
}