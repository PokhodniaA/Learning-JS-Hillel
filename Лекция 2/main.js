let boolValue = false;
foo = 0; // == false

if (boolValue) {
    console.log('I am here')
} else{
    console.log('Another answer')
}

res = 'hello' + true; // канкатенация
res = 'hello' * true; // == NaN


console.log(!!'213');
console.log(!!null);


//равенства

console.log(21 > 18, 'compare')

console.log(18 == '18') // == обычное равенство (одинаковые значения  разных типов данных будет true)
console.log(18 === '18') //  === строгое равенство (сравниваеться значениия двух типов)

console.log(null === undefined);


if(false){

} else if(true){

}else{

}

//&& = и   || = или
// && белее приорететен чем ||


// let value = +prompt('input','') || 100;

// console.log(value)



// --------- LOOP ----------

cnt = 0

// do {
//     isGo = confirm('is go?');
//     console.log(isGo);
//     ++cnt 
// } while (cnt <= 2)  //  сначала делаем, потом думаем


// while (cnt < 3) {
//     console.log('To DO!')
//     ++cnt
// } // сначала думаем, потом делаем

// for (инициализируем переменную; выполнять ли цикл; увеличение счетчика) {

// }

for (index = 0; index < 5; index++) {
    console.log('Worked!')
}