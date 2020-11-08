let button = document.querySelectorAll('button');
let tooltipElem;


document.onmouseover = function (event) {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
}

document.onmouseout = function (event) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
}