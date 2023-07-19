const buttonEl = document.querySelectorAll("button");
const computerChoices = ["rock", "paper", "scissors"];
const resultEl = document.querySelector(".results");
const computerScoreEl = document.getElementById("computer-score");
const playerScoreEl = document.getElementById("player-score");

let playerScore = 0;
let computerScore = 0;

buttonEl.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let cSelect =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    let pSelect = event.target.id;
    setTimeout(() => {
      if (cSelect === pSelect) {
        resultEl.innerText = "It'a a tie!!!";
      } else if (
        (cSelect === "rock" && pSelect === "paper") ||
        (cSelect === "paper" && pSelect === "scissors") ||
        (cSelect === "scissors" && pSelect === "rock")
      ) {
        resultEl.innerText = "You lose! " + cSelect + " beats " + pSelect;
        computerScore++;
        computerScoreEl.textContent = computerScore;
      } else {
        resultEl.innerText = "You win! " + pSelect + " beats " + cSelect;
        playerScore++;
        playerScoreEl.textContent = playerScore;
      }
    }, 500);
  });
});
