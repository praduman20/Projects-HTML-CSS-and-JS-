const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal");
const closebtnEl = document.querySelector(".close-btn");

containerEl.classList.remove("active");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  modalEl.classList.remove("active");
});

closebtnEl.addEventListener("click", () => {
  modalEl.classList.add("active");
  containerEl.classList.remove("active");
});
