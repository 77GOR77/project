var weather = "winter"
var weatherh1 = document.getElementById("weather")
var socket = io();
var side = 30;
var m = 20;
var n = 20;
function setup() {
  frameRate(5);
  createCanvas(m * side, n * side);
  background('#acacac');
}
function drawmatrix(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        if (weather == "winter") {
          fill("#81FF8E")
        }
        if (weather == "spring") {
          fill("green");
        }
        if (weather == "summer") {
          fill("#00FF00")
        }
        if (weather == "autumn") {
          fill("#ff9900")
        }
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        fill("red");
        if (weather == "winter") {
          fill("darkred")
        }
        if (weather == "spring") {
          fill("lightred");
        }
        if (weather == "summer") {
          fill("red")
        }
        if (weather == "autumn") {
          fill("pink")
        }
      }
      else if (matrix[y][x] == 4) {
        fill("black")
      }
      else if (matrix[y][x] == 5) {
        if (weather == "winter") {
          fill("orange")
        }
        if (weather == "spring") {
          fill("orange");
        }
        if (weather == "summer") {
          fill("blue")
        }
        if (weather == "autumn") {
          fill("brown")
        }
      }
      rect(x * side, y * side, side, side);
    }
  }
}
socket.on("matrix", drawmatrix);
socket.on("weather", function (w) {
  weather = w;
  console.log(weather);
  weatherh1.innerHTML = weather
});