const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender", "peachpuff"];

document.getElementById("changeColor").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Pick a random color each time
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (color) => {
      document.body.style.backgroundColor = color;
    },
    args: [randomColor] // pass the random color
  });
});
