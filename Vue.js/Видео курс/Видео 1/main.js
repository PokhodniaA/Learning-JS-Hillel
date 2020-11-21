let sample = new Vue({  // Создание экхемпляра vue
    el: '.sample', //какой элемент будет контролироваться при помощи этого экземпляра.
    data: { // описывет данные, которые лежат в эеземпляре vue  и которые исользуються внутри элемента
        name: 'world',
        showH2: true,
        numbers: [],
    },
    methods: {
        addNumber() {
            this.numbers.push(Math.random());
            console.log(this.numbers);
        }
    },
    computed: {
        sum() {
            let sum = 0;
            this.numbers.forEach(element => {
                sum += element
            });
            return sum;
        },

        btnText() {
            return this.showH2 ? 'Hide' : 'Show'
        }
    }
});



// ---------директивы ------------
// Записываеться как атрибут к любому узлу в html. v-...
// 