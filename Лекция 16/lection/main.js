// --------------методы массивов--------------

var arr = [1, 1, 2, 7, 23, 22];

console.log(arr.sort(function (a, b) {
    return a - b
}));

console.log(arr.filter(function (item) { // вернуть массив но в массив войдут толькo элементы true
    return typeof (item) == 'number';
}));

console.log(arr.reduce(function (start, current) {
    return start + current
}, 0));

// ----------------- ES6 ------------------

// console.log(k);// не могу обратиться перед инициализации;

let k;

// let k = 12; // нельзя инициализировать существуюущие переменные 
k = 12;
console.log(k);

// области видимости в { }
if (true) {
    let z = 'z';
    console.log(z);
}

// console.log(z);



const PI = 3.14; // переменная которая не изменеться 

const person = {
    name: 'Andrew'
}

person.name = 'Petya';

const person2 = Object.freeze({ // замораживает об'ект
    name: 'Login'
})

// стрелочные ф-ии

const arrow = (a, b) => {
    console.log('aaa', a, b); // нет arguments, this -  нет. arguments и this по scope.
}

arrow(1, 2)

const func = a => a > 10;


//  обекты

// const user = {
//     run: function () {

//     },
//     jump: function () {

//     }
// }

const key = 'Hello '

const user = {
    run() {
        console.log(arguments);
        console.log(this);
    },
    jump() {

    },
    [key + 'World']: true,
    'Beta': {

    }
}

user.run()


