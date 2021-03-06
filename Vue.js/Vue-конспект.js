// --------------------------------Общие--------------------------------------
//  ----------Создания шаблона для html----------
{/* <HTML>
    <div id="app">
        {{ message }}
    </div>
</HTML> */}

{/* <script>
    var app = new Vue({
        el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})
</script> */}

// -----------Циклы ---------------
{/* <HTML>
    <div id="app-4">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</HTML> */}

{/* <script>
    var app4 = new Vue({
        el: '#app-4',
  data: {
        todos: [
      {text: 'Изучить JavaScript' },
      {text: 'Изучить Vue' },
      {text: 'Создать что-нибудь классное' }
    ]
  }
})
</script> */}

// --------------Компоненты------------------

/*<ol>
  <!-- Создаём экземпляр компонента todo-item -->
  <todo-item></todo-item>
</ol> */

/* Определяем новый компонент под именем todo-item
Vue.component('todo-item', {
  template: '<li>Это одна задача в списке</li>'
})

var app = new Vue(...) */



// ----------------ДИРЕКТИВЫ-----------------

// v -if // true/false. Отображать элемент в DOM
// v -for// для отображения списков, используя данные из массива
// v-ob // для отслеживания событий
// v-model // легко связывать элементы форм и состояние приложения:

// ----------------------------------------------------------------------

// ------------------- Экземпляр Vue-----------------------

// Каждое приложение начинается с создания нового экземпляра Vue с помощью функции Vue
var vm = new Vue({
    // опции
})

// Кроме свойств объекта data, экземпляры Vue предоставляют ряд служебных свойств и методов экземпляра. Их имена начинаются с префикса $, чтобы отличаться от пользовательских свойств. Например:

var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch — это метод экземпляра
vm.$watch('a', function (newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
})


// Хуки жизненного цикла, с помощью которых можно выполнять свой код на определённых этапах.
// Например, хук created можно использовать для выполнения кода после создания экземпляра:
new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` указывает на экземпляр vm
        console.log('Значение a: ' + this.a)
    }
})
    // Существуют и другие хуки, вызываемые на различных стадиях жизненного цикла экземпляра, например mounted, updated и destroyed. Все хуки вызываются с контекстной переменной this, ссылающейся на вызывающий экземпляр Vue.

// -------------------------------Синтаксис шаблонов-------------------------------------

    // ---------Интерполяции---------

    // <span span > Сообщение: { { msg } }</span >
    // Выражение в фигурных скобках будет заменено значением свойства msg соответствующего объекта данных. Кроме того, оно будет обновлено при любом изменении этого свойства.

    // ---------Сырой HTML---------  

    // Значение выражения в двойных фигурных скобках подставляется как простой текст, а не как HTML. Для HTML необходимо использовать директиву v-html:
    //     <p>Двойные фигурные скобки: {{ rawHtml }}</p>
    // <p>Директива v-html: <span v-html="rawHtml"></span></p>

    // ---------Директивы--------- 
    // Некоторые директивы могут принимать «аргумент», отделённый от названия директивы двоеточием. Например, директива v-bind используется для реактивного обновления атрибутов HTML:

    // <a v-bind:href="url"> ... </a>

    //     <a v-bind:[attributeName]="url"> ... </a>
    // Здесь attributeName будет выполняться как выражение JavaScript, а его вычисленное значение использоваться в качестве финального значения аргумента. Например, если ваш экземпляр Vue имеет в данных свойство attributeName, значение которого равно "href", то это будет эквивалентно привязке v-bind:href.

    // Модификаторы — особые постфиксы, добавляемые после точки, обозначающие, что директива должна быть связана каким-то определённым образом. Например, модификатор .prevent говорит директиве v-on вызвать event.preventDefault() при обработке произошедшего события:

    // <form v-on:submit.prevent="onSubmit"> ... </form>

