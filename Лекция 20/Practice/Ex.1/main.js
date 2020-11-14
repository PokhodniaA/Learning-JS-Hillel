function position(node) {
    if (data.type == 'column') {
        node.classList.add('menuColumn');
    } else {
        node.classList.add('menuRow');
    }
}

function addButtons() {
    let div = document.createElement('div');
    position(div);
    for (elem of data.items) {
        let button = document.createElement('button');
        button.textContent = elem.title;
        button.onclick = actions[elem.handler];
        // button.onmouseover =
        div.append(button);
    }

    body.append(div);
}


const data = {
    name: 'menu',
    type: 'column',
    items: [{
        title: 'title 1',
        handler: 'ActionAdd'
    },
    {
        title: 'title 2',
        handler: 'ActionSaveAs'
    },
    {
        title: 'title 3',
        handler: 'ActionExit'
    }]
}

const actions = {
    ActionAdd: function () { console.log('Add'); },
    ActionSaveAs: function () { console.log('Save'); },
    ActionExit: function () { console.log('ActionExit') }
}

const body = document.querySelector('body');

addButtons()