let inputNumber = parseInt(prompt('Введите целое число:', ''));

if (isNaN(inputNumber)) {
    console.log('Вы не ввели число.');
} else {
    let factorialNumber = 1

    for (cnt = 2; cnt <= inputNumber; ++cnt) {
        factorialNumber *= cnt;
    }

    console.log(inputNumber + '! =', factorialNumber);
}
