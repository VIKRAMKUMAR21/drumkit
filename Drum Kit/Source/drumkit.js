var numOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    keyboardSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function () {
  keyboardSound(event.key);
});

function keyboardSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("source/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("source/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("source/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("source/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "g":
      var crash = new Audio("source/sounds/crash.mp3");
      crash.play();
      break;
    case "h":
      var kick = new Audio("source/sounds/kick-bass.mp3");
      kick.play();
      break;
    case "j":
      var snare = new Audio("source/sounds/snare.mp3");
      snare.play();
      break;
  }
}

