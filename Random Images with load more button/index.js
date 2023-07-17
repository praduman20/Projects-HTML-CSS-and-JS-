const imagecontainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", () => {
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < 4; index++) {
    const image = document.createElement("img");
    image.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imagecontainerEl.appendChild(image);
  }
}
