// function getItem(index) {
//     const value = localStorage.getItem(index) || 0;
//     return +value
// }

// function setItem(value, index) {
//     localStorage.setItem(index, value);
// }

// function countItem(counter, index, n) {
//     let value = getItem(index) + n;
//     counter.textContent = value;
//     setItem(value, index)
// }

// const buttons = document.querySelectorAll('.block');

// buttons.forEach(function (item, index) {
//     const button = item.querySelector('input');
//     const counter = item.querySelector('.counter');

//     countItem(counter, index, 0);

//     button.onclick = function (event) {
//         countItem(counter, index, 1);
//     }
// });


function AddCounters(name) {
    this.name = name;
    this.counters = [];
}

AddCounters.prototype.add = function (n = 1, element = document.body) {
    let i = 0;
    while (i < n) {
        const block = this.createBlock();
        this.pushBlock(element, block);
        i++
    }
    const [clearButton, clearCount] = this.clearCounter();
    this.pushBlock(element, clearButton);
    this.pushBlock(element, clearCount);
    console.log(this.counters);
}

AddCounters.prototype.createBlock = function () {
    const block = document.createElement('div'),
        button = document.createElement('input'),
        counter = document.createElement('span'),
        context = this;

    block.classList.add('block');
    button.value = 'Click';
    button.type = 'button';
    counter.classList.add('counter');

    const index = this.counters.length,
        item = +localStorage.getItem(`${index}-${this.name}`) || 0;

    counter.textContent = item;
    this.counters.push({ count: item, counter: counter, button: button });

    block.append(button, counter);

    button.onclick = function () {
        context.replaceElement(context, index);
    }
    return block;
}

AddCounters.prototype.replaceElement = function (context, index, clear = false) {
    const value = (clear) ? 0 : context.counters[index].count + 1;
    this.counters[index].counter.textContent = value;
    context.setElement(index, value);
}

AddCounters.prototype.setElement = function (index, value) {
    localStorage.setItem(`${index}-${this.name}`, value);
    this.counters[index].count = value;
}


AddCounters.prototype.pushBlock = function (element, block) {
    element.append(block);
}

AddCounters.prototype.clearCounter = function () {
    const clearButton = document.createElement('input'),
        clearCount = document.createElement('input'),
        context = this;

    clearButton.type = 'button';
    clearButton.value = 'Clear'
    clearCount.type = 'number';
    clearCount.value = 0;
    clearCount.min = 0;
    clearCount.max = this.counters.length;

    clearButton.onclick = function () { // Если значение 0, то удаляет все элементы
        const index = clearCount.value;
        // можно сделать вопрос
        switch (+index) {
            case 0:
                for (let i = 0; i < context.counters.length; i++) {
                    context.replaceElement(context, i, true);
                }
                break;

            default:
                context.replaceElement(context, index - 1, true);
                break;
        }
    }

    return [clearButton, clearCount]
}



const counters = new AddCounters('first');
counters.add(2);

