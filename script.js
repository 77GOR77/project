var m = 30
var n = 30
var matrix = []
var side = 20
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(getRandInt(1, 5))
    }
}

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var sevArr = [];
var shunArr = [];
var side = 30;


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }

        else if (matrix[y][x] == 2) {
            var xt = new xotaker(x, y, 1);
            xotakerArr.push(xt);

        }
        else if (matrix[y][x] == 3) {
            var gs = new gishatich(x, y, 1);
            gishatichArr.push(gs);

        }
        else if (matrix[y][x] == 4) {
            var sv = new sev(x, y, 1);
            sevArr.push(sv);

        }
        else if (matrix[y][x] == 5) {
            var sn = new shun(x, y, 1);
            shunArr.push(sn);

        }


    }
}


function setup() {
    frameRate(5);
    createCanvas((matrix[0].length) * side, (matrix.length) * side);
    background('#acacac');


    var gr = new Grass(1, 2, 1);
    var emptyCells = random(gr.chooseCell(0));
    console.log(emptyCells);

}







function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);


            
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        xotakerArr[i].move();
        xotakerArr[i].mult();
        xotakerArr[i].die();
    }

    
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        gishatichArr[i].move();
        gishatichArr[i].mult();
        gishatichArr[i].die();
        
    }
    for (var i in sevArr) {
        sevArr[i].eat3();
        sevArr[i].eat2();
        sevArr[i].move();
        sevArr[i].mult();
        sevArr[i].die();
        
    }
    for (var i in shunArr) {
        shunArr[i].eat();
        shunArr[i].eat2();
        shunArr[i].move();
        shunArr[i].mult();
        shunArr[i].die();
        
    }

}




