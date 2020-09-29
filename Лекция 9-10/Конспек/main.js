// ------замыкание---------

function counter(){
  var count = 0;
  return function() {
    console.log(++count);
  }
}

var iter = counter();
console.log(iter);

iter();
iter();
iter();



// //-------- this --------------

// контекст -- ссылка на объект в котором вызываеться ф-ия.
// если ф-ия не метод объекта то this == window.
// если как метод то this == обьект в котором вызвана.

function foo() {
  console.log(this, 'this');
}

foo()

function c(){
  foo();
}

c()


var obj = {
  name: 'Andrew',
  foo: foo,
}

obj.foo()

