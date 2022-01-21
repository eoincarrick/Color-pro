const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const display = document.querySelector(".colorName");
const colors = ["red", "green", "blue", "orange", "rgb(0, 202, 185)", "#333"];

function changeColor() {
  const int = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[int];
  display.textContent = colors[int];
}

btn.addEventListener("click", changeColor);
