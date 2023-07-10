const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerHTML = "Score : " + score;

formEl.addEventListener("submit", () => {
  const inputValue = +inputEl.value;
  if (inputValue === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
