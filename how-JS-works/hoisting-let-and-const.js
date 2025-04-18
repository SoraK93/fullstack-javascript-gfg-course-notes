/**
 * Hoisting = let and const results in ReferenceError
 * 
 * Temporal Dead Zone = The time between when the variable is hoisted and declared.
 */

// console.log(x); // Error: Cannot access 'x' before initialization
// console.log(y); 
// console.log(a); // Error: 'a' is not defined

let x = 9;
var y = 10;

// console.log(x);
// console.log(y);


// Testing stuff
console.log(num);
var num = printValue(10);
console.log(num);

function printValue(value) {
    return value;
}
