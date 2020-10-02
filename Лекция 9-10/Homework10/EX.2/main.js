function toCamelCase(str) {
    var newStr = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== '_') {
            newStr += str[i]
        } else {
            newStr += str[i + 1].toUpperCase();
            i++
        }
    }
    return newStr
}
var str = 'var_text_hello';

console.log(toCamelCase(str));

// --------------Через массив -------------

// function toCamelCase(str) {
//     return str.split('').map(function (word, index, array) {
//         if (word == '_') {
//             word = array[index + 1].toUpperCase();
//             array.splice(index + 1, 1)
//         }
//         return word
//     }).join('')
// }
// var str = 'var_text_hello';

// console.log(toCamelCase(str));

