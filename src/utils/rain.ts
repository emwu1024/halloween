export function createRain() {
  let hrElement;

  // Indicates the amount of rain
  let counter = 30;
  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    if (i == counter - 1) {
      hrElement.className = "thunder";
    } else {
      hrElement.style.left =
        Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 100 + Math.random() * 0.4 + "s";
      // hrElement.style.animationDuration = 0.2 + Math.random() * 0.4 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
    }
    document.body.appendChild(hrElement);
  }
}
