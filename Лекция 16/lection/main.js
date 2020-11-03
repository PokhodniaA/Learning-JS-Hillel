// --------------методы массивов--------------

var arr = [1, 1, 2, 7, 23, 22];

// console.log(arr.sort(function (a, b) {
//     return a - b
// }));

// console.log(arr.filter(function (item) { // вернуть массив но в массив войдут толькo элементы true
//     return typeof (item) == 'number';
// }));

// console.log(arr.reduce(function (start, current) {
//     return start + current
// }, 0));

// ----------------- ES6 ------------------

/*
    let -- до инициализации нельзя к ней обратиться.
           повторная инициализация запрещена, но перезаписывать можно.
           Создает области видимости в {}

    const -- переменные которые не изменяються.
             Если const объект, то переинициализировать константу нельзя,
             но сам объект изменять можно.(Потому что ссылка)
             Чтобы заморозить объект Object.freeze(object)

    стрелочные функции -- (varr) => {return true};
            нет arguments, нет this. arguments и this по scope.
            Использываються для простых ф-ий.
            Если параметры состоят из 1 значения то () можно опустить,
            и если код ф-ии состоит из одной строки, то можно опустить {}
            и return не писать // const func = a => a > 10; //

    Объекты -- можно упростить методы объектов записывая не (key: function(){}),
               а сделать: 
                    let object = {
                        run(): {
                            console.log('User running...')
                        },
                        jump(): {

                        }
                    }
               Можно делать составные ключи при помощи []:
                    let key = 'Hello'

                    let object2 = {
                        [key + 'World']: true,  // ключ этого значения 'HelloWorld'
                        [key]: 20, //  ключ этого значения будет 'Hello'
                    }
               Геттеры, сеттеры(вычисляемые свойства) -- свойства которые выглядят как метод, но используються как свойства. Вычисляються на основе текщих данных в объекте:
                    let object3 = {
                        [User]: {
                            name: 'Andrew',
                            lastName: 'Pokhodnia',
                            get fullName(){  //  в геттеры не передаютьс аргументы
                                return `${this.name} ${this.lastName}`
                            },
                            set fullName(_fullName){  // в сеттеры записываються данные
                                let spliteFullName = _fullName.split(' ');
                                this.name = spliteFullName[0];
                                this.lastName = spliteFullName[1];
                            }
                        }
                    }

                    const x = object3[User]

                     x.fullName // Вызываеться геттер, так как мы не передали никаких аргументов. Выведет 'Andrew Pokhodnia'

                     x.fullName = 'Valerii Ternavskiy' // Вызываеться сеттер, так как мы передали аргументы. В результате в объект запишеться 
                     {name: 'Valerii',
                     lastName: 'Ternavskiy'}
*/

// console.log(k);// не могу обратиться перед инициализации;

let k;

// let k = 12; // нельзя инициализировать существуюущие переменные 
k = 12;
// console.log(k);

// области видимости в { }
if (true) {
    let z = 'z';
    // console.log(z);
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

// const arrow = (a, b) => {
//     console.log('aaa', a, b); // нет arguments, this -  нет. arguments и this по scope.
// }

// arrow(1, 2)

// const func = a => a > 10;


//  обекты

// const user = {
//     run: function () {

//     },
//     jump: function () {

//     }
// }

// const key = 'Hello '

// const user = {
//     run() {
//         // console.log(arguments);
//         // console.log(this);
//     },
//     jump() {

//     },
//     [key + 'World']: true,
//     'Beta': {

//     }
// }

// user.run()


// --- шаблонные строки ---

function getName() {
    return 'Valera'
}

let str = `hello world ${24 + 25} + ${getName()}`;
console.log(str);

// --- деструктуризация --
// для объектов
const product = {
    name: 'cola',
    cost: 3,
    isBought: true,
    childs: {
        login: 'Login'
    }
}

const { // не важен порядок
    name,
    isBought,
    cost: c,
    childs: { login }
} = product;

console.log(name, isBought, c, login);

// для массивов

const array = [1, 2, 3, 4];

const [one, two, , four = 5] = array; // важен порядок

console.log(one, two, four);