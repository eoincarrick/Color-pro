const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const display = document.querySelector(".colorName");

function changeColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[random()];
    console.log(hexColor);
  }

  display.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
btn.addEventListener("click", changeColor);

function random() {
  return Math.floor(Math.random() * hex.length);
}
console.log(random());
