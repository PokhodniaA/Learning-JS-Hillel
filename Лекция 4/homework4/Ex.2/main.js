let n = parseInt(prompt('Введите длину массива:'), '');
let m = parseInt(prompt('Введите количество массивов:'), '');
let min = -20; let max = 20;

let array = [];

let minSum = 0; let minSumIndex = 0;
let maxSum = 0; let maxSumIndex = 0;

for (i = 0; i < m; i++) {
    array[i] = []; let tempSum = 0;

    for (j = 0; j < n; j++) {
        let num = Math.round(Math.random() * (max - min) + min);
        array[i][j] = num;
        tempSum += num;
    }

    if (i == 0) {
        minSum = tempSum;
        maxSum = tempSum;
    } else {
        if (tempSum > maxSum) {
            maxSum = tempSum;
            maxSumIndex = i;
        }
        if (tempSum < minSum) {
            minSum = tempSum;
            minSumIndex = i;
        }
    }
}

let swap = array[minSumIndex];

array[minSumIndex] = array[maxSumIndex];
array[maxSumIndex] = swap;

console.log(minSum, maxSumIndex, 'min');
console.log(maxSum, minSumIndex, 'max');
console.log(array);
