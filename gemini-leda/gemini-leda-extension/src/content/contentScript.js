console.log("Gemini Leda content script loaded!");

// Example of detecting explicit words
const flaggedWords = ["badword1", "badword2"];
const bodyText = document.body.innerText.toLowerCase();
const foundWords = flaggedWords.filter((word) => bodyText.includes(word));

if (foundWords.length) {
  chrome.runtime.sendMessage({
    type: "explicitContentDetected",
    words: foundWords,
  });
}
