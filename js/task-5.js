let box = document.querySelector(".widget");
let colorName = document.querySelector(".color");
const button = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorFunc() {
  colorName.textContent = getRandomHexColor();
  box.style.backgroundColor = `${colorName.textContent}`;
}

button.addEventListener("click", changeColorFunc);
