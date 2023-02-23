// Detting button Pressed
let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let character = this.innerHTML;
    makeSound(character);
    buttonAnimation(character);
  });
}

// Keyboard pressed
document.addEventListener("keydown", function (event) {
  let keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

document.addEventListener("keyup", function () {});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("sounds/crash.mp3").play();
      break;

    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
  }
}

function buttonAnimation(buttonPressed) {
  let currentElement = document.querySelector("." + buttonPressed);

  currentElement.classList.add("pressed");
  setTimeout(function () {
    currentElement.classList.remove("pressed");
  }, 100);
}
