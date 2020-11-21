function ContextMenu(data, actions) {
    this.data = data;
    this.actions = actions;
}

ContextMenu.prototype.start = function () {
    const readyTooPushMenu = this.сonfigurateMenu();
    this.pushMenu(readyTooPushMenu);

    window.oncontextmenu = function (event) {
        event.preventDefault();
        this.showMenu(event, readyTooPushMenu);
    }.bind(this)

    window.onclick = function () {
        this.hideMenu(readyTooPushMenu);
    }.bind(this)
}

ContextMenu.prototype.сonfigurateMenu = function () {
    const contextMenuUl = document.createElement('ul');
    contextMenuUl.classList.add('ContextMenuUl');
    if (this.data.items.length > 0) {
        this.data.items.forEach((item) => {
            const contextMenuLi = document.createElement('li');
            contextMenuLi.classList.add('ContextMenuLi');
            contextMenuLi.textContent = item.title;
            contextMenuLi.setAttribute('data-handler', item.handler);
            contextMenuUl.append(contextMenuLi);
        })
        contextMenuUl.onclick = function (event) {
            const handler = event.target.getAttribute('data-handler');
            this.actions[handler]();
        }.bind(this)
    }

    this.width = contextMenuUl.clientWidth;
    this.height = contextMenuUl.clientHeight;

    return contextMenuUl;
}

ContextMenu.prototype.pushMenu = function (menu) { // ВОПРОС: если сначала спрятать, то ширина и длина будет 0.
    console.log(menu.clientHeight);
    this.hideMenu(menu);
    document.body.append(menu);

}

ContextMenu.prototype.hideMenu = function (menu) {
    menu.hidden = true;
}

ContextMenu.prototype.showMenu = function (event, menu) {
    [posX, posY] = this.getPosition(event);
    menu.style.left = `${posX}px`;
    menu.style.top = `${posY}px`;
    menu.hidden = false;
}

ContextMenu.prototype.getPosition = function (event) {
    let posX = event.pageX,
        posY = event.pageY;
    const menuWidth = this.width,
        menuHeight = this.height,
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        positionXLimit = windowWidth - menuWidth,
        positinYLimit = windowHeight - menuHeight;

    if (posX > positionXLimit) {
        posX -= menuWidth;
    }

    if (posY > positinYLimit) {
        posY -= menuHeight
    }

    return [posX, posY]
}



const data = {
    name: 'contextMenu',
    items: [
        { title: 'Open', handler: 'ActionOpen' },
        { title: 'Close', handler: 'ActionClose' },
        { title: 'Copy', handler: 'ActionCopy' },
        { title: 'Paste', handler: 'ActionPaste' },
    ]
}

const actions = {
    ActionOpen() { console.log('Open') },
    ActionClose() { console.log('Close') },
    ActionCopy() { console.log('Copy') },
    ActionPaste() { console.log('Paste') },
}

const newMenu = new ContextMenu(data, actions);
newMenu.start()



// ContextMenu.prototype.сonfigurateMenu = function () { 
//     const contextMenuUl = document.createElement('ul');
//     contextMenuUl.classList.add('ContextMenuUl');
//     this.data.items.forEach((item) => {
//         const contextMenuLi = document.createElement('li');
//         contextMenuLi.classList.add('ContextMenuLi');
//         contextMenuLi.textContent = item.title;
//         contextMenuLi.onclick = this.actions[item.handler];
//         contextMenuUl.append(contextMenuLi)
//     })
//     return contextMenuUl;
// }