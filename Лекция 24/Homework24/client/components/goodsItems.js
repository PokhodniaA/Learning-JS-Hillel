function GoodsItem(data) {
    this.data = data;
    this.nodes = {
        mainBlock: document.createElement('div'),
        list: document.createElement('ul'),
        brandLi: document.createElement('li'),
        modelLi: document.createElement('li'),
        priceLi: document.createElement('li')
    }
}

GoodsItem.prototype.toDo = function () {
    this.appendToNodes();
    this.build();

    return this
}

GoodsItem.prototype.appendToNodes = function () {
    const { mainBlock, list, brandLi, modelLi, priceLi } = this.nodes,
        { brandName, modelName, price } = this.data;

    mainBlock.classList.add('items');
    list.classList.add('items_list');

    brandLi.textContent = `Brand: ${brandName}`;
    modelLi.textContent = `Model: ${modelName}`;
    priceLi.textContent = `Price: ${price}UAH`;
}

GoodsItem.prototype.build = function () {
    const { mainBlock, list, brandLi, modelLi, priceLi } = this.nodes;

    list.append(brandLi, modelLi, priceLi);
    mainBlock.append(list);
}

GoodsItem.prototype.render = function () {
    document.body.append(this.nodes.mainBlock);
    setTimeout(() => { this.nodes.mainBlock.classList.add('show') }, 100);

}
