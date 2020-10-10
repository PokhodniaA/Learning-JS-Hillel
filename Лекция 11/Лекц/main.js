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


// function validParentheses(parens) {
//     //TODO 
//     if(typeof parens !== 'object'){
//         var array = parens.split('')
//     }
    

//     function cycle(array) {
//         for (i = 0; i < array.length; i++) {
//             item = array[i]
//             if (item == '(' & array[i + 1] == ')') {
//                 array.splice(i, 2, '')
//             }

//             if (i == array.length - 1) {
//                 return array
//             }
//         }
//     }
//     cycle(array);
//     var row = array.join('')

//     return (!row)
// }
// console.log(validParentheses("()"), ' = true');
// console.log(validParentheses("())"), ' = false');

// (()())(())()()() 
// ()(())()()()()(())()()()()(())()()()()()


// split по '()' в рекурсии

function validParentheses(parens) {
    //TODO 
    // debugger
    if(parens == ''){
        return true
    } else if (parens[0] == ')' || parens[parens.length - 1] == '('){
        return false;
    }
    return validParentheses(parens.split('()').join(''))
}
// console.log(validParentheses("()"), ' = true');
// console.log(validParentheses("())"), ' = false');
console.log(validParentheses("()(()()(()"), ' = true');