const body = document.getElementById("body");
const random = document.getElementById("random");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const red = document.getElementById("red");

blue.addEventListener("click", function () {
  body.style.backgroundColor = "rgb(67, 67, 224)";
});

yellow.addEventListener("click", function () {
  body.style.backgroundColor = "yellow";
});

red.addEventListener("click", function () {
  body.style.backgroundColor = "red";
});

green.addEventListener("click", function () {
  body.style.backgroundColor = "green";
});

function changeToRandom() {
  const randomColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  body.style.backgroundColor = randomColor;
}
random.addEventListener("click", changeToRandom);
