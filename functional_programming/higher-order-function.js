/**
 * Higher Order Function:
 *
 * A function that accepts another function as an argument or returns a function or
 * does both is canned an Higher Order Function.
 */

// First class function - Passed or assigned as argument and returned by other func
// function wrapper() {
//   return "Welcome to GFG!!!";
// }

// // Higher Order Function cause taking function as argument
// function greetMessage(wrapper) {
//   console.log("Sourabh", wrapper());
// }

// greetMessage(wrapper);

// Higher Order Function cause returning a function
// function displayMessage() {
//     return function() {
//         console.log("Hello from the inner function");
//     }
// }

// const output = displayMessage();
// output();

// const arr = [1, 2, 3, 4, 5];
// function squareOfNumber(arr) {
//     let squaredNumbers = [];
//     for (let number of arr) {
//         squaredNumbers.push(number ** 2);
//     }
//     return squaredNumbers;
// }
// function cubeOfNumber(arr) {
//     let cubeNumbers = [];
//     for (let number of arr) {
//         cubeNumbers.push(number ** 3);
//     }
//     return cubeNumbers;
// }
// const output = squareOfNumber(arr);
// console.log(output);
// const result = cubeOfNumber(arr);
// console.log(result);

const arr = [1, 2, 3, 4, 5];
function powerOf(number, times){
    return number ** times;
}
function calculatePower(wrapper, times, array) {
    let tempArr = [];
    for (let number of array) {
        tempArr.push(wrapper(number, times));
    }
    return tempArr;
}
const squareOfNumbers = calculatePower(powerOf, 4, arr);
console.log(squareOfNumbers);