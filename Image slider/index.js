const imageContainerEl = document.querySelector(".image-container");
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgEl = document.querySelectorAll("img");

let currentImg = 1;
let timeInterval;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeInterval);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeInterval);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgEl.length;
  }
  imageContainerEl.style.transform = `translateY(-${(currentImg - 1) * 354}px)`;
  timeInterval = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 2500);
}
