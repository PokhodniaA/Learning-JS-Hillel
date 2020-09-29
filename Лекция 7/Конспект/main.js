// --- ф-ии ---

// ф-ии не берут переменные из вне
// a = 1;
// b = 2;

// анонимная самовызывающая ф-ия

// (function(a, b) {
//     console.log(a, b);
// })(a, b)  


//------ recursive --------

// function foo() {

//     console.log(foo());
// }

// foo()



function loop(array, index) {
    var i = index || 0;

    if (array.length == i) { // базовый случай, кога мо должны перестать выполнять рекурсию
        return false;
    }
    
    loop(array, i + 1) // рекурсионный случай
    console.log(array[i]);
}

array = [1, 2, 3 ,4];

loop(array);
console.log('after recursive');