const containerEl = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorContainerEls.forEach((element) => {
    const newColor = randomColor();
    element.style.backgroundColor = "#" + newColor;
    element.innerText = "#" + newColor;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const length = 6;
  let colorCode = "";
  for (let index = 0; index < length; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
