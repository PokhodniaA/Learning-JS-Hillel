let n = 10;
let max = 20;
let min = -20;

let A = [];
let maxNum;
let indexMaxNum = 0;
let minNum;
let indexMinNum = 0;

for (let i = 0; i < n; i++) {
    let num = Math.round(Math.random() * (max - min) + min);
    A.push(num);

    if (A.length == 1){
        maxNum = A[0];
        minNum = A[0];
    }

    if (num > maxNum) {
        maxNum = num;
        indexMaxNum = i;
    } else if (num < minNum) {
        minNum = num;
        indexMinNum = i;
    }
}

console.log(A, ': array A');
console.log(maxNum, ': Max Number');
console.log(minNum, ': Min Number');

if (indexMaxNum > indexMinNum) {
    B = A.slice(indexMinNum, indexMaxNum + 1);
} else {
    B = A.slice(indexMaxNum, indexMinNum + 1);
}

console.log(B, ': array B');
