// Detect button click
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const key = this.id;
    playSound(key);
  });
});

// Detect keyboard press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

// Sound function
function playSound(key) {
  switch (key.toLowerCase()) {
    case "w":
      new Audio("sounds/w.mp3").play();
      break;
    case "a":
      new Audio("sounds/s.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/kick.mp3").play();
      break;
    case "j":
      new Audio("sounds/crash.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick.mp3").play();
      break;
    case "l":
      new Audio("sounds/snare.mp3").play();
      break;
    default:
      console.log("Invalid key:", key);
  }
}
