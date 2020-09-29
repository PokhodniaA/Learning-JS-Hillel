function addRecord() {
    for(object of arguments){
        for(key in object) {
            this[key] = object[key]
        }
    }
}

var data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data);