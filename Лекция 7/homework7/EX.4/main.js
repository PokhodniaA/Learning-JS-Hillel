function factorial(n) {
    return (n == 1) ? n : n * factorial(n - 1);
}


n = 5;
console.log(factorial(n));