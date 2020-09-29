// let out = false;

// do {
//     let inputNumber = +prompt('Введите число:', '');
//     if (isNaN(inputNumber)) {
//         console.log('Вы не ввели число. Пожалуйста, повторите снова.')
//     } else {
//         console.log("Вы ввели:", inputNumber)
//         out = true;
//     }
// } while (out == false);


do{
    let inputNumber = +prompt('Введите число:', '');
}while (isNaN(inputNumber));

console.log("Вы ввели:", inputNumber)