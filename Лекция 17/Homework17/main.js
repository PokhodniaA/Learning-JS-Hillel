let inputs = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');
setInterval(() => {
    [].forEach.call(inputs, (input) => {
        let value = input.value;
        if (value) { textArea.textContent += `${value}, ` };
    });
}, 5000)
