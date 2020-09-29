function reverseCount(n) {
    if (n == 1) {
        return console.log(n);
    }
    console.log(n);
    reverseCount(n - 1);
}

let n = 10;
let result = reverseCount(n);