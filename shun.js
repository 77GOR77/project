var LivingCreature = require("./LivingCreature.js")
module.exports = class shun extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
    }
    getNewdirectioneat() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1]

        ];
    }
    getNewdirection() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }

    chooseCell(character) {
        this.getNewdirection();
        return super.chooseCell(character);
    }
    chooseCelleat(character1) {
        this.getNewdirection1()
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1) {
                    found1.push(this.directions[i]);
                }
            }


        }
        return found1;
    }
    mult() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var sn = new shun(newX, newY);
            shunArr.push(sn)
            shunStatics++

        }
    }

    move() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }
    eat() {
        var array = this.chooseCell(4)
        var food1 = array[Math.floor(Math.random() * array.length)];
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            for (var i in sevArr) {
                if (sevArr[i].x == newX && sevArr[i].y == newY) {
                    sevArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy += 1;

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
            this.energy += 1;

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in shunArr) {
                if (shunArr[i].x == this.x && shunArr[i].y == this.y) {
                    shunArr.splice(i, 1)
                }
            }
        }
    }

}