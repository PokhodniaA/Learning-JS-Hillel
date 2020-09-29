function assignObjects() {
    newObject = {};

    for (element of arguments) {
        copyObject(element, newObject)
    }

    return newObject;
}

function copyObject(object, newObject) {
    for (key in object) {
        (typeof (object[key]) == 'object') ? copyObject(object[key], newObject) :
            newObject[key] = object[key];
    }
    
    return newObject
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }, { x: 55, z: 60 },
    { q: 60, k: 0 }, { e: { r: 'string' }, z: 0 }));