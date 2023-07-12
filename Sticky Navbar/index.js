const navbarEl = document.getElementById("first");
const bottomcontainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomcontainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
