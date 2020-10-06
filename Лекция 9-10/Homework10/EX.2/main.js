// --------Через список --------
// function toCamelCase(str) {
//     var newStr = ''
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== '_') {
//             newStr += str[i]
//         } else {
//             newStr += str[i + 1].toUpperCase();
//             i++
//         }
//     }
//     return newStr
// }
// var str = 'var_text_hello';

// console.log(toCamelCase(str));

// --------------Через массив -------------

function toCamelCase(str) {
    return str.split('_').map(function (word, index) {
        return (index == 0) ? word : word[0].toUpperCase() + word.slice(1)
    }).join('')
}

var str = 'var_text_hello';

console.log(toCamelCase(str));

