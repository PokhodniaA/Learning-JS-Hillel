// Осталось: добавить методы в прототип;
// сделать рефаторинг;
// ---------------Field-----------------

function Field(width, height) {
    this.grid = Field.fillGrid(width, height);

    this.renderField = function () {
        document.write('<hr>');
        for (var i = 0; i < this.grid.length; i++) {
            document.write(this.grid[i], '<br>')
        }
        document.write('<hr>');
    }

    this.clearField = function () { //(*2*)
        this.grid.forEach(function (item, index, array) {
            var element = item.indexOf(1);
            if (element >= 0) { array[index][element] = 0 }
        })
    }

    this.changeSize = function (newX, newY) {
        this.grid = Field.fillGrid(newX, newY);
    }
}

Field.fillGrid = function (width, height) { // перенести fillgrid в конструктор ?
    var array = [];
    for (var i = 0; i < height; i++) {
        var tempWidthArray = [];
        for (var j = 0; j < width; j++) {
            tempWidthArray.push(0);
        }
        array.push(tempWidthArray);
    }
    return array
}

// ------------Person----------------

function Person(name, XPosition, YPosition) {
    this.name = name;
    this.positionX = XPosition, this.positionY = YPosition;
    this.defaultX = XPosition, this.defaultY = YPosition;

    this.start = function () {
        this.grid[this.positionY][this.positionX] = 1;
    }

    this.go = function go(direction, step) {
        this.grid[this.positionY][this.positionX] = 0;
        switch (direction) {
            case 'left':
                this.positionX -= step;
                break;
            case 'right':
                this.positionX += step;
                break;
            case 'top':
                this.positionY -= step
                break;
            case 'bottom':
                this.positionY += step;
                break;
        }

        this.start();
    }

    this.resetPosition = function () {
        this.grid[this.positionY][this.positionX] = 0;
        this.grid[this.defaultY][this.defaultX] = 1;
    }
}


// -------------Main---------------

var field = new Field(10, 10);
console.log(field, 'field');
Person.prototype = Object.create(field); //(*1*)
var person = new Person('Andrey', 5, 4);

console.log(person);

field.renderField();
person.start();
field.renderField();
person.go('top', 2);
person.go('left', 3);
field.renderField();
person.resetPosition();
field.renderField();
field.clearField();
field.renderField();



// -------------Вопросы------------

// 1. Правильное ли наследование Person.protorype от field или лучше передавать объект в метод(*1*)
// 2. Можно ли как-то получить значения позици Х и У person (*2*)
// 