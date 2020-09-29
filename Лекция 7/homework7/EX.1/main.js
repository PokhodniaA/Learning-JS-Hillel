function toLogArray(array, index) {
    i = index || 0;
    if (i == array.length) {
        return;
    }

    console.log(array[i]);
    toLogArray(array, i + 1)
}


array = [1, 2, 3, 4, 5, 6, 7, 'end'];

toLogArray(array);