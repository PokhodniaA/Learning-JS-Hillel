array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrLength = array.length;

for (i = 0; i < arrLength - 1; i += 2) {
    firstElement = array[i];
    secondElement = array[i + 1];

    array[i + 1] = firstElement;
    array[i] = secondElement;
}

console.log(array);