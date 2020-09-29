function sumTo(n) {
    return (n == 1) ? n : n + sumTo(n - 1);
}

n = 5;
console.log(sumTo(n));


