const circleEl = document.querySelector(".circle");
const labelEl = document.querySelector(".label");
const containerEl = document.querySelector(".container");

let toggle = 1;

labelEl.addEventListener("click", () => {
  if (toggle === 1) {
    circleEl.style.transform = "translateX(113%)";
    document.body.style.backgroundColor = "black";
    containerEl.style.backgroundColor = "rgba(255,255,255,0.7)";
    containerEl.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.4)";
    toggle = 0;
  } else {
    toggle = 1;
    circleEl.style.transform = "translateX(0%)";
    document.body.style.backgroundColor = "white";
    containerEl.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }
});
