// function copy(buffer) {
//     this[buffer] = this.result;
//     return this
// }

// function clear() {
//     (this.hasOwnProperty('property')) ? this[this.property] = null :
//         this.result = null;
//     return this
// }

// function doFunction(func, x, y) {
//     (this.hasOwnProperty('property')) ? this[this.property] = func(x, y) :
//         this.result = func(x, y);
//     return this
// }

// function target(property) {
//     this.property = property;
//     this[property] = undefined;
//     return this
// }


// function sum(x, y) {
//     return x + y
// }

// function mul(x, y) {
//     return x * y
// }

// function diff(x, y) {
//     return x - y
// }

// function sub(x, y) {
//     return (y == 0) ? 'Ошибка' : x / y;
// }

// var obj = {
//     copy: copy,
//     clear: clear,
//     doFunction: doFunction,
//     target: target,
// }

// obj.doFunction(sum, 2, 4).copy('some_name').clear().target('another_some_name').doFunction(mul, 6, 3)
// console.log(obj);

function copy(buffer) {
    this[buffer] = this.result;
    return this
}

function clear() {
    (this.hasOwnProperty('property')) ? this[this.property] = null :
        this.result = null;
    return this
}

function doFunction(func, x, y) {
    (this.hasOwnProperty('property')) ? this[this.property] = func(x, y) :
        this.result = func(x, y);
    return this
}

function target(property) {
    this.property = property;
    this[property] = 'result';
    return this
}


function sum(x, y) {
    return x + y
}

function mul(x, y) {
    return x * y
}

function diff(x, y) {
    return x - y
}

function sub(x, y) {
    return (y == 0) ? 'Ошибка' : x / y;
}

var obj = {
    copy: copy,
    clear: clear,
    doFunction: doFunction,
    target: target,
}

obj.doFunction(sum, 2, 4).copy('some_name').clear().target('another_some_name').doFunction(mul, 6, 3)
console.log(obj);