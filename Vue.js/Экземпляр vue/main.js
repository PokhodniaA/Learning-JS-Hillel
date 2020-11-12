let vm = new Vue({
    data: { a: 2 },
    created() { // Хуки жизненого цикла элемента(created, mounted, updated и destroyed) 
        console.log(this.a);
    }
})

vm.$el === document.getElementById('example') //Кроме свойств объекта data, экземпляры Vue предоставляют ряд служебных свойств и методов экземпляра. Их имена начинаются с префикса $, чтобы отличаться от пользовательских свойств

// ------Хуки------

