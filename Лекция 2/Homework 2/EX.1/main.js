let sumAllNumbers = 0;
let sumEvenNumbers = 0;

for (num = 1; num <= 150; ++num) {
    sumAllNumbers += num;
    if (num % 2 == 0) {
        sumEvenNumbers += num;
    }
}

console.log('Summ of All Numbers =', sumAllNumbers);
console.log('Summ of Even Numbers =', sumEvenNumbers);
