function SuperMath() {
    this.check = function (obj) {
        var x = obj.x, y = obj.y, znak = obj.znak;
        var answer = confirm(`Вы хотите ${x} ${znak} ${y} ?`);
        (answer) ? document.write(this.math(x, y, znak)) : SuperMath.input()
    }
}

SuperMath.input = function () {
    var input = prompt('Введите x знак y ', '');
    if (input) {
        var arrInput = input.split(' ');
        var x = +arrInput[0], y = +arrInput[2], znak = arrInput[1];
        document.write(SuperMath.prototype.math(x, y, znak));
    } else {
        document.write('Отменено');
    }
}

SuperMath.prototype.math = function (x, y, znak) {
    switch (znak) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        default: return 'Такого математического действия нет.';
    }
}

var obj = { 'x': 12, 'y': 3, 'znak': '/' };
var p = new SuperMath();

p.check(obj)

