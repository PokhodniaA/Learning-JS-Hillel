let firstNum = +prompt('Введите меньшее целое число:', '');
let secondNum = +prompt('Введите большее целое число:', '');

if (isNaN(firstNum)
    || isNaN(secondNum)
    || firstNum >= secondNum) {
    console.log('Вы ввели некорректное значение');
} else {
    for (cnt = firstNum; cnt <= secondNum; ++cnt) {
        if (cnt % 2 == 0) {
            console.log(cnt ** 2);
        }
    }
}
