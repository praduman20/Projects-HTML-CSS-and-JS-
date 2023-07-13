const containerEl = document.querySelector(".container");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  containerEl.style.opacity = 1.15 - window.scrollY / 1000;
}
