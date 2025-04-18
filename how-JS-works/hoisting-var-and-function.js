/**
 * Hoisting is a process whereby you can access the value of 
 * a variable or function even before it is initialized
 * 
 * GEC = Global Execution Context
 * FEC = Function Execution Context
 * 
 */


// As per GEC, age was initialized as undefined thats why we are getting that value.
console.log(age); // undefined
var age = 100;
console.log(age); // 100


// As per GEC, function names were initialized with its {defination}, thats why we get function as a value. But in case of funcName, since its a variable it won't show the same result instead it will stay as undefined (until we reach its defination).
console.log(showName); // function
console.log(funcName); // undefined

function showName() {
    console.log("Sourabh");
}
var funcName = function getUserName() {
    console.log("Kheria");
}

// As per FEC, our function gets executed even though we have defined them later in the code. Same will not be true for funcName(), it will show a error we we try to call it earlier, since its still undefined at that stage.
showName(); // function() executed
funcName(); // function() executed