let app = new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// app3.seen = false;

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Первый текст' },
            { text: 'Second text' },
            { text: '3 txt' },
        ]
    }
})
app4.todos.push({ text: 'Added element' });

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello world!'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

let app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Input here!'
    },

})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Овощи' },
            { id: 1, text: 'Сыр' },
            { id: 2, text: 'Что там ещё люди едят?' }
        ]
    }
})