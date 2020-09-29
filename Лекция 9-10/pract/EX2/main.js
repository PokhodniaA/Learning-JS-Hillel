function renderObject(){
    for(var key in this) {
        if(typeof(this[key]) !== 'function'){
            document.write(key + ": " + this[key] + '<br>');
        }
    }
}

var obj = {
    x: 10,
    y: 20,
    renderObject: renderObject,
}

obj.renderObject();