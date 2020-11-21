function AddCounters(name) {
    this.name = name;
    this.counters = [];
}

AddCounters.prototype.add = function (n = 1, element = document.body) {
    let i = 0;
    while (i < n) {
        element.append(this.createBlock());
        i++
    }
    element.append(this.clearCounter());
    element.append(this.setCounter());
}

AddCounters.prototype.createBlock = function () {
    const block = document.createElement('div'),
        button = document.createElement('input'),
        counter = document.createElement('span'),
        index = this.counters.length,
        item = +localStorage.getItem(`${index + 1}-${this.name}`) || 0,
        context = this;

    block.classList.add('block');
    button.classList.add('element');
    button.value = 'Click';
    button.type = 'button';
    counter.classList.add('counter', 'element');
    block.textContent = `id:${index + 1}`;
    counter.textContent = item;

    block.append(button, counter);
    this.counters.push({ count: item, counter: counter, button: button });

    button.onclick = function () {
        context.replaceElement(index);
    }
    return block;
}

AddCounters.prototype.replaceElement = function (index, num) {
    const value = (num >= 0) ? num : this.counters[index].count + 1;
    this.counters[index].counter.textContent = value;
    localStorage.setItem(`${index + 1}-${this.name}`, value);
    this.counters[index].count = value;
}

AddCounters.prototype.clearCounter = function () {
    const clearBlock = document.createElement('div'),
        clearButton = this.createButtonInput('Clear'),
        [clearCount, clearID] = this.createNumberInput('Введите id:', this.counters.length),
        context = this;

    clearBlock.classList.add('block');
    clearButton.classList.add('element');
    clearCount.classList.add('element');

    clearButton.onclick = function () { // Если значение 0, то удаляет все элементы
        const index = clearID.value;
        switch (+index) {
            case 0:
                for (let i = 0; i < context.counters.length; i++) {
                    context.replaceElement(i, 0);
                }
                break;

            default:
                context.replaceElement(index - 1, 0);
                break;
        }
    }
    clearBlock.append(clearButton, clearCount)
    return clearBlock
}

AddCounters.prototype.setCounter = function () {
    const setBlock = document.createElement('div'),
        setButton = this.createButtonInput('setCounter'),
        [setCount, setID] = this.createNumberInput('Введите id:', this.counters.length, 1),
        [setNumber, setValue] = this.createNumberInput('Введите число для ввода:'),
        context = this;

    setBlock.classList.add('block');
    setButton.classList.add('element');
    setCount.classList.add('element');
    setNumber.classList.add('element');

    setBlock.append(setButton, setCount, setNumber);

    setButton.onclick = function () {
        const index = setID.value,
            value = (+setValue.value >= 0) ? +setValue.value : 0;
        context.replaceElement(index - 1, value);
    }

    return setBlock;
}

AddCounters.prototype.createNumberInput = function (text, max = null, min = 0) {
    const label = document.createElement('label'),
        button = document.createElement('input');

    button.type = 'number';
    button.value = min;
    button.min = min;
    button.max = max;
    label.textContent = text;
    label.append(button)
    return [label, button]
}

AddCounters.prototype.createButtonInput = function (value) {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    return button
}


const counters = new AddCounters('first');
counters.add(4);

