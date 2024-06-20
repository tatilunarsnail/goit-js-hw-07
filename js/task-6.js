const input = document.querySelector("#controls > :nth-child(1)");
const createButton = document.querySelector("#controls > :nth-child(2)");
const destroyButton = document.querySelector("#controls > :nth-child(3)");
const boxes = document.querySelector("#boxes");
// let number = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  input.value = "";
  
  if (amount < 1 || amount > 100) {
    alert("Enter a number from 1 to 100");
    return;
  }
  
  boxes.innerHTML = "";
  let box = "";
  let size = 30;
  for (let i = 1; i <= amount; ++i) {
    box += `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10;
  }
  boxes.insertAdjacentHTML("beforeend", box);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => createBoxes(input.value));

destroyButton.addEventListener("click", destroyBoxes);
