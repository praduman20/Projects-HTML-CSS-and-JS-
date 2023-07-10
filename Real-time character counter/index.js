const textareaEl = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-counter");
const remainCharEl = document.getElementById("remain-counter");
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCharEl.innerText = textareaEl.value.length;
  remainCharEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
