weather = "winter"
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);
var cl = false
io.on("connection", function (socket) {
  if (cl) {
    setInterval(drawserverayin, 200);
    cl = true;
  }
});
matrix = fillMatrix(20, 20)
function fillMatrix(n, m) {
  var matrix = []
  for (var i = 0; i < n; i++) {
    matrix.push([])
    for (var a = 0; a < m; a++) {

      matrix[i].push(0)
    }
  }
  return matrix
}
var Grass = require("./Grass.js");
var xotaker = require("./Xotaker.js");
var gishatich = require("./Gishatich.js");
var sev = require("./sev.js");
var shun = require("./shun.js");

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var y = 0; y < 20; y++) {
  matrix[y] = []
  for (var x = 0; x < 20; x++) {
    matrix[y].push(getRandInt(1, 5))
  }
}
grassArr = [];
xotakerArr = [];
gishatichArr = [];
sevArr = [];
shunArr = [];
grassStatics = 0;
xotakerstatics = 0;
gishatichStatics = 0;
sevStatics = 0;
shunStatics = 0;
for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {

    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y, 1);
      grassArr.push(gr);
      grassStatics++;
    }

    else if (matrix[y][x] == 2) {
      var xt = new xotaker(x, y, 1);
      xotakerArr.push(xt);
      xotakerstatics++
    }
    else if (matrix[y][x] == 3) {
      var gs = new gishatich(x, y, 1);
      gishatichArr.push(gs);
      gishatichStatics++

    }
    else if (matrix[y][x] == 4) {
      var sv = new sev(x, y, 1);
      sevArr.push(sv);
      sevStatics++

    }
    else if (matrix[y][x] == 5) {
      var sn = new shun(x, y, 1);
      shunArr.push(sn);
      shunStatics++

    }
  }
}
function drawserverayin() {
  for (var i in grassArr) {
    if (weather != "winter") {
      grassArr[i].mult();
    }
  }
  for (var i in xotakerArr) {
    xotakerArr[i].eat();
    xotakerArr[i].move();
    if (weather != "spring") {
      xotakerArr[i].mult();
    }
    xotakerArr[i].die();
  }
  for (var i in gishatichArr) {
    gishatichArr[i].eat();
    gishatichArr[i].move();
    if (weather != "autumn") {
      gishatichArr[i].mult();
    }
    gishatichArr[i].die();
  }
  for (var i in sevArr) {
    sevArr[i].eat3();
    sevArr[i].eat2();
    sevArr[i].move();
    if (weather != "autumn" || weather != "winter") {
      sevArr[i].mult();
    }
    sevArr[i].die();
  }
  for (var i in shunArr) {
    shunArr[i].eat();
    shunArr[i].eat2();
    shunArr[i].move();
    shunArr[i].mult();
    shunArr[i].die();
  }
  io.sockets.emit("matrix", matrix)
}
setInterval(drawserverayin, 1000)
io.on("connection", function (socket) {
});

function changeweather() {
  if (weather == "winter") {
    weather = "spring"
  }
  else if (weather == "spring") {
    weather = "summer"
  }
  else if (weather == "summer") {
    weather = "autumn"
  }
  else if (weather == "autumn") {
    weather = "winter"
  }
  io.sockets.emit("weather", weather)
}
setInterval(changeweather, 3000)
var statistics = { "stat": [] };
setInterval(function () {
  statistics.stat.push({
    "խոտը տարածվեց": grassStatics,
    "խոտակերը մեռավ": xotakerstatics,
    "գիշատիչը շարժվեց": gishatichStatics,
    "սևը տարածվեց": sevStatics,
    "շունը տարածվեց": shunStatics,
  });
  fs.writeFile("statistics.json", JSON.stringify(statistics, null, 3), function (err) {
    if (err) throw (err)

  })
}, 3000)