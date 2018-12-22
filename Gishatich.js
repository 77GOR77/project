var LivingCreature = require("./LivingCreature.js")
module.exports = class gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
    }
    getNewdirection1() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }


    chooseCell(character) {
        this.getNewdirection1();
        return super.chooseCell(character);
    }
    mult() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        if (empty && this.energy > 4) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var gs = new gishatich(newX, newY);
            gishatichArr.push(gs)
        }
    }

    move() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            gishatichStatics++


        }
    }
    eat() {
        var array = this.chooseCell(2)
        var food1 = array[Math.floor(Math.random() * array.length)];
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy +=2;

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }

}
