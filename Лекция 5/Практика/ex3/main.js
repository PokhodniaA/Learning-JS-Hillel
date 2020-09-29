function doFunc(n, m, func) {
    resFunc = func(n, m)
    return Math.round(resFunc)
}

function power(n, m) {
    return n ** m;
}

function sum(n, m) {
    return n + m;
}

function div(n, m) {
    return n / m;
}

function mul(n, m) {
    return n - m;
}

let n = 2;
let m = 3;

let resultPower = doFunc(n, m, power);
console.log(resultPower, 'power');

let resultSum = doFunc(n, m, sum);
console.log(resultSum, 'Sum');

let resultDiv = doFunc(n, m, div);
console.log(resultDiv, 'resultDiv');

let resultMul = doFunc(n, m, mul);
console.log(resultMul, 'resultMul');