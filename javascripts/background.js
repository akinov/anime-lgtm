var currentTab = null;

// clicked Browser Action
chrome.browserAction.onClicked.addListener(function(tab) {
  
});

// Messageリスナー
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hoge") {
    }
    else {
      console.log(request);
    }
  }
);

// content_scriptsに通知
// chrome.tabs.sendMessage(currentTab.id, { actionName: "hoge" });
