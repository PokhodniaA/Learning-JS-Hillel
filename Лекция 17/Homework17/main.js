let inputs = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');

setInterval(() => {
    let string = [].reduce.call(inputs, (previous, input) => {
        let value = input.value;
        if (value) {
            return (previous) ? previous += `, ${value}` : previous += `${value}`;
        } else {
            return previous
        }
    }, '');
    textArea.textContent = string;
}, 2000)
