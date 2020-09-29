let input = parseInt(prompt('Введите число:', ''));

if (isNaN(input) || input <= 0) {
    console.log('Введите корректное число!');
} else if (input == 1
    || input == 2
    || input == 3) {
    console.log('Число', input, 'являеться простым.');
} else {
    for (cnt = 2; cnt < input; ++cnt) {
        if (input % cnt == 0) {
            console.log('Число', input, 'являеться составным.');
            break;
        }

        if (cnt == (input - 1)) {
            console.log('Число', input, 'являеться простым.');
        }
    }
}

