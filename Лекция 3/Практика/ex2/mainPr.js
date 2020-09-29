possitiveArray = [];
negativeArray = [];
max = 5;
min = -5;

for (i = 0; i <= 30; i++) {
    newNumber = Math.round(Math.random() * (max - min) + min);

    if (newNumber > 0) {
        possitiveArray[possitiveArray.length] = newNumber;
    } else if (newNumber < 0) {
        negativeArray[negativeArray.length] = newNumber;
    }
}

console.log(possitiveArray, 'POS');
console.log(negativeArray, 'NEG');

maxArrayNum = possitiveArray[0];
maxArrayIndex = 0;
minArrayNum = possitiveArray[0];
minArrayIndex = 0;

for (i = 1; i < possitiveArray.length; i++) {
    currentElement = possitiveArray[i]
    if (currentElement > maxArrayNum) {
        maxArrayNum = currentElement;
        maxArrayIndex = i;
    } else if (minArrayNum > currentElement) {
        minArrayNum = currentElement;
        minArrayIndex = i;
    }
}
console.log(maxArrayNum, minArrayNum);