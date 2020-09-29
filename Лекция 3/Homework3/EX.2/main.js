n = parseInt(prompt('Введите размер массива:', ''));

if (isNaN(n) || n < 0) {
    console.log('Ввод отменен');
} else {
    array = new Array(n);

    for (i = 0; i < n; i++) {
        do {
            inputElement = parseInt(prompt('Введите целое положительное число:', ''));
            console.log(inputElement);
        } while (isNaN(inputElement) || inputElement < 0);

        array[i] = inputElement;
    }
    console.log(array);
}

