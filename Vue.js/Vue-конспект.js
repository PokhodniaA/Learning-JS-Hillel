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


// ---------Остановился: Экземпляр Vue---------