let firstNum = parseInt(prompt("Введите целое число:", ''));
let secondNum = parseInt(prompt("Введите целое число:"), '');

if (isNaN(firstNum) || isNaN(secondNum)){
     console.log('Вы не ввели число');
}else{
    let sum = firstNum + secondNum;
    let subtract = firstNum - secondNum;
    let multiplication = firstNum * secondNum;
    let division;
    if (secondNum != 0){
        division = firstNum / secondNum;
    }else{
        division = 'Невозможно поделить на 0';
    }

    console.log('**************');
    console.log('При а =', firstNum, ', b =', secondNum);
    console.log('Результат:');
    console.log('--------------------');
    console.log('a + b =', sum + ';', 'a - b =', subtract + ';', 'a * b =' , multiplication + ';', 'a / b =', division + ';');
    console.log('-------------------');
    console.log('**************');
}
