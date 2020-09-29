function addRecord() {
    var flag;
    var lastArgument = arguments[arguments.length - 1];
    (typeof(lastArgument) == 'boolean') ? flag = lastArgument :
        flag = false;
        
    for(var object of arguments){
        for(key in object) {
            if(!flag) {
                this[key] = object[key]
            }
        }
    }
}

var data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, {p: 10}, false);

console.log(data);