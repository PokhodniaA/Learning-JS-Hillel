function cutString(String, cutElements) {
    array = String.split('');

    for (cutElement of cutElements) {
        for (i = 0; i < array.length; i++) {
            if (array[i] == cutElement) {
                array.splice(i, 1);
                i--
            }
        }
    }

    return array.join('');
}

let testString = 'hello world';
let cutElements = ['l', 'd']
console.log(cutString(testString, cutElements));