const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");
const CrashAudio = new Audio("./sounds/crash.mp3");

kits.forEach((element) => {
  const buttonEl = document.createElement("button");
  containerEl.appendChild(buttonEl);
  buttonEl.classList.add("btn");
  buttonEl.style.backgroundImage = `url(./images/${element}.png)`;
  buttonEl.innerText = element;
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + element + ".mp3";
  containerEl.appendChild(audioEl);
  buttonEl.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === element[0]) {
      audioEl.play();
    }
  });
});
//text-transform:capitalize; (to make first letter capital)
