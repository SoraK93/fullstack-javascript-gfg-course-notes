/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Utility Function
function getSquareOfNum(number){
    return number ** 2;
}

// Map method
const arr = [1, 2, 3, 4, 5];
const squaredArr = arr.map(getSquareOfNum);
console.log(typeof squaredArr, squaredArr);

// Polyfill for map
// Adding a new array method into an objects prototype.
Array.prototype.myMap = function (callback){
    let tempArr = [];
    for (let i=0; i<this.length; i++){
        tempArr.push(callback(this[i], i, this));
    }
    return tempArr;
}
const squareArr1 = arr.myMap(getSquareOfNum);
console.log(typeof squareArr1, squareArr1);

