function myPush(arg) {
    return this[this.length] = arg;
}

function myJoin(arg) {
    var res = '';
    for (element of this){
        res += element + arg
    }
    return res;
}

function myReverse(){
    for (var i = 0, j = this.length - 1; i < this.length / 2; i++, j--) {
        firstElement = array[i];
        lastElement = array[j];
    
        array[i] = lastElement;
        array[j] = firstElement;
    }
}

var array = [];
array.myPush = myPush; 
array.myJoin = myJoin;
array.myReverse = myReverse;

array.myPush(2);
array.myPush('hi');

console.log(array.myJoin(', '));

array.myReverse();

console.log(array);
