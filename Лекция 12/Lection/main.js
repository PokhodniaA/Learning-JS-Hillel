// -----------call apply bind ---------

// Для работы с контекстом

function getName(decor){
    return this.name + decor
}

var person = {
    name: 'Andrew',
}

person.getName = getName;
delete person.getName;
// funcNAme.call(context, )
getName.call(person); // person.getName()
console.log(getName.call(person, ' best'));


console.log(getName.apply(person, [' best'])); // передаем массив



function foo(){
    // var slice  = [].slice;

    // console.log(slice.call(arguments, 3));


    console.log([].slice.call(arguments, 1));
}

foo(1, 2, 3, 4, 5)


// bind - в отличии от call не вызываеться, а возвращает ф-ю

var getName = getName.bind(obj);