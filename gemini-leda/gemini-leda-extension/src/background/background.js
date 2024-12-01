chrome.runtime.onInstalled.addListener(() => {
    console.log("Gemini Leda installed!");
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "explicitContentDetected") {
      console.log("Explicit content detected:", message.words);
    }
  });
  