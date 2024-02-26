const button = document.getElementById("button");
const remove = document.getElementById("remove");

button.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red},${green},${blue})`;
  document.getElementById("background").style.backgroundColor = color;
});

remove.addEventListener("click", function () {
  document.getElementById("background").style.backgroundColor = "black";
});
