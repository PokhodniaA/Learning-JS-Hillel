let array = [];
let min = parseInt(prompt('Введите меньшее число:', ''));
let max = parseInt(prompt('Введите большее число:', ''));

if (isNaN(min) || isNaN(max)) {
    console.log('Вы ввели не корректные данные');
} else {
    for (i = 0; i < 20; i++) {
        if (i % 2 != 0) {
            array[i] = 0;
        } else {
            array[i] = Math.round(Math.random() * (max - min) + min);
        }
    }

    console.log(array);
}


