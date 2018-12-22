var LivingCreature = require("./LivingCreature.js")
module.exports = class sev extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
    }
    getNewdirection2() {
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
        this.getNewdirection2();
        return super.chooseCell(character);
    }
    mult() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var sv = new sev(newX, newY, );
            sevArr.push(sv)
            sevStatics++

        }
    }

    move() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat2() {
        var array = this.chooseCell(1)
        var food = array[Math.floor(Math.random() * array.length)];
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy +=1;

        }
    }
    eat3() {
        var array = this.chooseCell(5)
        var food4 = array[Math.floor(Math.random() * array.length)];
        if (food4) {
            var newX = food4[0];
            var newY = food4[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in shunArr) {
                if (shunArr[i].x == newX && shunArr[i].y == newY) {
                    shunArr.splice(i, 1)
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy +=1;

        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in sevArr) {
                if (sevArr[i].x == this.x && sevArr[i].y == this.y) {
                    sevArr.splice(i, 1)
                }
            }
        }
    }

}
