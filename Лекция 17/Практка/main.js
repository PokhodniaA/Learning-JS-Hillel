// переписать ф-ии
function getRandomWidth(width) {
    return (Math.round(Math.random() * ((maxWidth - width) - 0) + 0)) + 'px';
}

function getRandomHeight(height) {
    return (Math.round(Math.random() * ((maxHeight - height) - 0) + 0)) + 'px';
}
function getRGB() {
    return Math.round(Math.random() * (256 - 0) + 0)
}
function getRandomColor() {
    return `rgb(${getRGB()}, ${getRGB()}, ${getRGB()})`;
}

let maxWidth = window.innerWidth, maxHeight = window.innerHeight;
const elements = document.querySelectorAll('.square');
console.log(elements);

setInterval(() => {
    elements.forEach((item) => {
        const clientHeight = item.clientHeight;
        const clientWidth = item.clientWidth;
        item.style.left = getRandomWidth(clientWidth);
        item.style.top = getRandomHeight(clientHeight);
        item.style.backgroundColor = getRandomColor();
    })
}, 2000)

// clientheight