function copy(buffer) {
    this[buffer] = this.result;
    return this
}

function clear() {
    this.result = 0
    return this
}

function doFunction(func, x, y) {
    this.result = func(x, y)
    return this
}

function target(property) {
    var temp = {
        result: undefined,
        copy: copy,
        clear: clear,
        doFunction: doFunction,
        target: target,
    }
    this[property] = temp.result;
    return temp
} // замыкание ?


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
    return x / y
}

var obj = {
    copy: copy,
    clear: clear,
    doFunction: doFunction,
    target: target,
}

// console.log(obj.doFunction(sum, 2, 3).doFunction(sub, 3, 3).copy('key').doFunction(sub, 3, 3));
console.log(obj.doFunction(sum, 2, 4).copy('some_name').clear().target('another_some_name').doFunction(mul, 6, 3));
console.log(obj);