const button = document.getElementById("button");

button.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red},${green},${blue})`;
  document.getElementById("background").style.backgroundColor = color;
});
