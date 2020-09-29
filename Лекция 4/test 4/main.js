let A = [1,2,3];

do{
    newElement = prompt('Введите число','');
    if (isNaN(+newElement)){
        continue
    } else {
        A.push(+newElement)
    }
} while (newElement != '&')

console.log(A);