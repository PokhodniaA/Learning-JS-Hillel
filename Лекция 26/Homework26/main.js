const toDoList = [
    'Купить хлеб',
    'Купить молоко',
    'Купить гречку',
    'Купить колбасу',
    'Купить торт',
];

const doneList = [];

const toDo = new Vue({
    el: '#doList',
    data: {
        toDoList: toDoList,
        doneList: doneList,
    },
    methods: {
        moveToDone(event) {
            if (this.toDoList.length > 0) {
                this.doneList.unshift(this.toDoList.pop());
            }
        },
        moveToDo() {
            if (this.doneList.length > 0) {
                this.toDoList.unshift(this.doneList.pop());
            }
        },
    }
});
