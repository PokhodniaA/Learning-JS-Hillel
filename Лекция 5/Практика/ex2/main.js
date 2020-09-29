function counter(array) {
    count = array.length % 2 == 0 ? 2 : 1;
    return count;
}

function position(array) {
    pos = (array.length - 1) / 2;
    return pos;
}

function middleElement(array) {
    pos = position(array);
    count = counter(array);
    res = array.splice(pos, count);
    return res;
}

arrayPair = [1, 2, 3, 4, 5, 6, 7, 8]
pairElement = middleElement(arrayPair);

console.log(pairElement);

arrayNotPair = [1, 2, 3, 4, 5, 6, 7]
notPairElement = middleElement(arrayNotPair);

console.log(notPairElement);