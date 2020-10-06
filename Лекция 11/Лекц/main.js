// -------- git --------

// // состояния в гите
// 1. untracked
// 2. staged
// 3. modified
// 4. commited

// git fetch -- скачивает служебную информацию

// ---------rebase-----------









// codewars

// Сделать буквы заглавными
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(function (words) {
//         return words[0].toUpperCase() + words.slice(1)
//     }).join(' ')
// };

// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());


// Найти квадрат
// var isSquare = function(n){
//   return (Number.isInteger(Math.sqrt(n))) ? true : false // fix me
// }

// console.log(isSquare(26));
// console.log(isSquare(25));


// Пирамида не четных чисел // херня
// function rowSumOddNumbers(n) {
//     var cnt = 1;
//     for(i = 1; i < n; i++){
//         for(j = 0; j < i; j++){
//             cnt += 2;
//         }
//     }

//     cnt = (cnt * (n + 1)) - 1;
//     return cnt
// }

// console.log(rowSumOddNumbers(1));
// console.log(rowSumOddNumbers(42));