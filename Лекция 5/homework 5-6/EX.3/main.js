function doMAth(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
    }
}

n = 2; m = 7;

let sumResult = doMAth(n, '+', m);
console.log(sumResult, '= 2 + 7');

let diffResult = doMAth(n, '-', m);
console.log(diffResult, '= 2 - 7');

let multResult = doMAth(n, '*', m);
console.log(multResult, '= 2 * 7');

let divResult = doMAth(n, '/', m);
console.log(divResult, '= 2 / 7');

let remResult = doMAth(n, '%', m);
console.log(remResult, '= 2 % 7');

let powResult = doMAth(n, '^', m);
console.log(powResult, '= 2 ^ 7');



