function createTree(data) {
    // debugger
    let ul = document.createElement('ul');
    for (liData in data) {
        let li = document.createElement('li')
        li.textContent = liData;
        if (Object.keys(liData).length > 0) {
            li.append(createTree(data[liData]))
        }
        ul.append(li);
    }
    return ul
}

let container = document.querySelector('#container'),
    data = {
        "Рыбы": {
            "форель": {},
            "лосось": {}
        },

        "Деревья": {
            "Огромные": {
                "секвойя": {},
                "дуб": {}
            },
            "Цветковые": {
                "яблоня": {},
                "магнолия": {}
            }
        }
    };

container.append(createTree(data));