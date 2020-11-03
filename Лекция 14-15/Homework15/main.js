// ---------------Field-----------------

function Field(width, height) {
    this.grid = Field.fillGrid(width, height);
}

Field.fillGrid = function (width, height) {
    var array = [];
    for (var i = 0; i < height; i++) {
        var tempWidthArray = [];
        for (var j = 0; j < width; j++) { tempWidthArray.push(0); }
        array.push(tempWidthArray);
    }
    return array
}

Field.prototype.renderField = function () {
    document.write('<hr>');
    for (var i = 0; i < this.grid.length; i++) {
        document.write(this.grid[i], '<br>')
    }
    document.write('<hr>');
}

Field.prototype.clearField = function () { // передаем объекты, которые хотим очистить, если их нет чистим всё поле
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            var object = arguments[i];
            this.grid[object.positionY][object.positionX] = 0;
        }
    } else {
        this.grid.forEach(function (item, index, array) {
            item.forEach(function (element, i) {
                if (element >= 0) { array[index][i] = 0 }
            })
        })
    }
}

Field.prototype.changeSize = function (newX, newY) {
    this.grid = Field.fillGrid(newX, newY);
}

// ------------Person----------------

function Person(name, XPosition, YPosition) {
    this.name = name;
    this.positionX = XPosition, this.positionY = YPosition;
    this.defaultX = XPosition, this.defaultY = YPosition;
}

Person.prototype.start = function () {
    this.grid[this.positionY][this.positionX] = 1;
}

Person.prototype.go = function go(direction, step) {
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

Person.prototype.resetPosition = function () {
    this.grid[this.positionY][this.positionX] = 0;
    this.positionY = this.defaultY
    this.positionX = this.defaultX
    this.start();
}


// -------------Main---------------

var field = new Field(10, 10);
Person.prototype.__proto__ = Object.create(field); //(*1*)
var person = new Person('Andrey', 5, 4);


field.renderField();
person.start();
field.renderField();
person.go('bottom', 2);
person.go('right', 3);
field.renderField();
person.resetPosition();
field.renderField();
field.clearField(person);
field.renderField();
