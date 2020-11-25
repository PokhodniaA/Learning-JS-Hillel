// function AddCounters(name) {
//     this.name = name || `${Math.random()}`;
//     this.counters = [];
// }

// AddCounters.prototype.add = function (n = 1, element = document.body) {
//     let i = 0;
//     while (i < n) {
//         element.append(this.createBlock());
//         i++
//     }
//     if (n > 0) {
//         element.append(this.clearCounter());
//         element.append(this.setCounter());
//     }
// }

// AddCounters.prototype.createBlock = function () {
//     function appendToNodes() {
//         block.classList.add('block');
//         button.classList.add('element');
//         button.value = 'Click';
//         button.type = 'button';
//         counter.classList.add('counter', 'element');
//         block.textContent = `id:${index + 1}`;
//         counter.textContent = item;
//     }

//     const block = document.createElement('div'),
//         button = document.createElement('input'),
//         counter = document.createElement('span'),
//         index = this.counters.length,
//         item = +localStorage.getItem(`${index + 1}-${this.name}`) || 0;

//     appendToNodes();

//     block.append(button, counter);
//     this.counters.push({ count: item, counter: counter, button: button });

//     button.onclick = function () {
//         this.replaceElement(index);
//     }.bind(this)
//     return block;
// }

// AddCounters.prototype.replaceElement = function (index, num) {
//     const value = (num >= 0) ? num : this.counters[index].count + 1;
//     this.counters[index].counter.textContent = value;
//     localStorage.setItem(`${index + 1}-${this.name}`, value);
//     this.counters[index].count = value;
// }

// AddCounters.prototype.clearCounter = function () {
//     function appendToNodes() {
//         clearBlock.classList.add('block');
//         clearButton.classList.add('element');
//         clearCount.classList.add('element');
//     }

//     const clearBlock = document.createElement('div'),
//         clearButton = this.createButtonInput('Clear'),
//         [clearCount, clearID] = this.createNumberInput('Введите id:', this.counters.length);

//     appendToNodes();

//     clearButton.onclick = function () { // Если значение 0, то удаляет все элементы
//         const index = clearID.value;
//         switch (+index) {
//             case 0:
//                 for (let i = 0; i < this.counters.length; i++) {
//                     this.replaceElement(i, 0);
//                 }
//                 break;

//             default:
//                 this.replaceElement(index - 1, 0);
//                 break;
//         }
//     }.bind(this)
//     clearBlock.append(clearButton, clearCount)
//     return clearBlock
// }

// AddCounters.prototype.setCounter = function () {
//     function appendToNodes() {
//         setBlock.classList.add('block');
//         setButton.classList.add('element');
//         setCount.classList.add('element');
//         setNumber.classList.add('element');
//     }

//     const setBlock = document.createElement('div'),
//         setButton = this.createButtonInput('setCounter'),
//         [setCount, setID] = this.createNumberInput('Введите id:', this.counters.length, 1),
//         [setNumber, setValue] = this.createNumberInput('Введите число для ввода:');

//     appendToNodes();

//     setBlock.append(setButton, setCount, setNumber);

//     setButton.onclick = function () {
//         const index = setID.value,
//             value = (+setValue.value >= 0) ? +setValue.value : 0;
//         this.replaceElement(index - 1, value);
//     }.bind(this)

//     return setBlock;
// }

// AddCounters.prototype.createNumberInput = function (text, max = null, min = 0) {
//     const label = document.createElement('label'),
//         button = document.createElement('input');

//     button.type = 'number';
//     button.value = min;
//     button.min = min;
//     button.max = max;
//     label.textContent = text;
//     label.append(button)
//     return [label, button]
// }

// AddCounters.prototype.createButtonInput = function (value) {
//     const button = document.createElement('input');
//     button.type = 'button';
//     button.value = value;
//     return button
// }


// const counters = new AddCounters('firstBlock');
// counters.add(4);


// --------------------------------------------

function AddCounters(data) {
    this.data = data;
    this.name = data.name || `${Math.random()}`;
    this.counters = [];
}

AddCounters.prototype.toDo = function () {
    this.drawTamplete();
    this.applyModelToTemplate();
    this.bindEvents();

    return this
}

AddCounters.prototype.drawTamplete = function () {
    counterBlocks = [];
    for (let i = 0; i < this.data.numOfCounters; i++) {
        counterBlocks.push(AddCounters.makeCounterBlock.call(this));
    }

    this.template = {
        counterBlocks: counterBlocks,
        clearBlock: AddCounters.makeClearBlock.call(this),
        setBlock: AddCounters.makeSetBlock.call(this)
    }
}

AddCounters.makeCounterBlock = function () {
    const block = document.createElement('div'),
        button = document.createElement('input'),
        counter = document.createElement('span'),
        index = this.counters.length,
        item = +localStorage.getItem(`${index + 1}-${this.name}`) || 0;
    block.textContent = `id:${index + 1}`;
    button.value = 'Click';
    button.type = 'button';
    counter.textContent = item;
    block.append(button, counter);
    this.counters.push({ count: item, counter: counter, button: button });
    return {
        mainBlock: block,
        button: button,
        count: counter,
        index: index,
    }
}

AddCounters.makeClearBlock = function () {
    const clearBlock = document.createElement('div'),
        clearButton = AddCounters.createButtonInput('Clear'),
        [clearCount, clearID] = AddCounters.createNumberInput('Введите id:', this.counters.length);
    clearBlock.append(clearButton, clearCount)
    return {
        mainBlock: clearBlock,
        button: clearButton,
        count: clearCount,
        id: clearID,
    }
}

AddCounters.makeSetBlock = function () {
    const setBlock = document.createElement('div'),
        setButton = AddCounters.createButtonInput('setCounter'),
        [setCount, setID] = AddCounters.createNumberInput('Введите id:', this.counters.length, 1),
        [setNumber, setValue] = AddCounters.createNumberInput('Введите число для ввода:');
    setBlock.append(setButton, setCount, setNumber);
    return {
        mainBlock: setBlock,
        button: setButton,
        setCount: setCount,
        setId: setID,
        setNumber: setNumber,
        setValue: setValue,
    }
}

AddCounters.createNumberInput = function (text, max = null, min = 0) {
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

AddCounters.createButtonInput = function (value) {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    return button
}

AddCounters.prototype.applyModelToTemplate = function () {
    const { counterBlocks, clearBlock, setBlock } = this.template,
        styles = this.data.style;

    counterBlocks.forEach((node) => { AddCounters.styleForCounter(node, styles) });
    AddCounters.styleForClear(clearBlock, styles);
    AddCounters.styleForSet(setBlock, styles)
}

// попробовать объеденить в одну в-ю
AddCounters.styleForCounter = function (node, styles) {
    styles.mainBlock.forEach((style) => node.mainBlock.classList.add(style));//*1
    styles.button.forEach((style) => node.button.classList.add(style));//*2
    styles.counter.forEach((style) => node.count.classList.add(style));
}

AddCounters.styleForClear = function (node, styles) {
    styles.mainBlock.forEach((style) => node.mainBlock.classList.add(style));//*1
    styles.button.forEach((style) => node.button.classList.add(style));//*2
    styles.text.forEach((style) => node.count.classList.add(style));
    styles.number.forEach((style) => node.id.classList.add(style));
}

AddCounters.styleForSet = function (node, styles) {
    styles.mainBlock.forEach((style) => node.mainBlock.classList.add(style));//*1
    styles.button.forEach((style) => node.button.classList.add(style));//*2
    styles.text.forEach((style) => {
        node.setCount.classList.add(style);
        node.setNumber.classList.add(style)
    });
    styles.number.forEach((style) => {
        node.setId.classList.add(style);
        node.setValue.classList.add(style)
    });
}

AddCounters.prototype.bindEvents = function () {
    const { counterBlocks, clearBlock, setBlock } = this.template,
        self = this;
    counterBlocks.forEach(function (node, index) {
        node.button.onclick = function () {
            this.replaceElement(index);
        }.bind(self)
    });

    clearBlock.button.onclick = function () { // Если значение 0, то удаляет все элементы
        const index = clearBlock.id.value;
        switch (+index) {
            case 0:
                for (let i = 0; i < this.counters.length; i++) {
                    this.replaceElement(i, 0);
                }
                break;

            default:
                this.replaceElement(index - 1, 0);
                break;
        }
    }.bind(self);

    setBlock.button.onclick = function () {
        const index = setBlock.setId.value,
            value = (+setBlock.setValue.value >= 0) ? +setBlock.setValue.value : 0;
        this.replaceElement(index - 1, value);
    }.bind(self);

}

AddCounters.prototype.replaceElement = function (index, num) {
    const value = (num >= 0) ? num : this.counters[index].count + 1;
    this.counters[index].counter.textContent = value;
    localStorage.setItem(`${index + 1}-${this.name}`, value);
    this.counters[index].count = value;
}


AddCounters.prototype.render = function () {
    const { counterBlocks, clearBlock, setBlock } = this.template,
        parrent = this.data.parrent;

    counterBlocks.forEach((node) => { parrent.append(node.mainBlock) });
    parrent.append(clearBlock.mainBlock, setBlock.mainBlock)
}


const data = {
    name: 'firstBlock',
    parrent: document.body,
    numOfCounters: 4,
    style: {
        mainBlock: ['block'],
        button: ['element'],
        counter: ['counter', 'element'],
        text: ['element'],
        number: [],
    },
}

const counters = new AddCounters(data);
counters.toDo().render();

