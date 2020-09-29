function compareArray(firstArray, secondArray) {
    firstArraySum = sumArray(firstArray);
    secondArraySum = sumArray(secondArray);

    return (firstArraySum >= secondArraySum) ? firstArray : secondArray;
}

function sumArray(array) {
    sumElement = 0;
    for (element of array) {
        if (typeof(element) == "number"){
            sumElement += element;
        }
    }

    return sumElement;
}


firstArray = [1, 2, 3, 4, 5];
secondArray = [6, 7, 8, 9, 10];

console.log(compareArray(firstArray, secondArray));

newFirstArray = [1, 4, 30, 2, 5, 'sixty'];
newSecondArray = [1, 2, 3, 1, 4, '600', true];

console.log(compareArray(newFirstArray, newSecondArray));

