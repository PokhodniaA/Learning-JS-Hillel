array = new Array(10);
arrayLength = array.length;

min = 1;
max = 20;

for (i = 0; i < arrayLength; i++) {
    num = Math.round(Math.random() * (max - min) + min);
    array[i] = num;
}
console.log(array);

for (i = 0, j = arrayLength - 1; i < arrayLength / 2; i++, j--) {
    firstElement = array[i];
    lastElement = array[j];

    array[i] = lastElement;
    array[j] = firstElement;
}

console.log(array);


// for (i = 0; i < arrayLength / 2; i++) {
//     firstElement = array[i];

//     array[i] = array[array.length - (i + i)]
//     array[array.length - (1 + i)] = temp
// }