/** Conditional Statement */
const readlineSync = require("readline-sync");

// const isLoggedIn = true;
// if (isLoggedIn){
//     console.log("Hello, I am from GFG....");
// }

// const userAge = readlineSync.question("How old are you?.. ");
// if (userAge > 16) {
//     console.log("Hey, you are an adult...");
// } else {
//     console.log("Hey, you are not a adult...");
// }

const number = Number(readlineSync.question("Enter a number: "));
const remainderAfterDivisionByThree = number % 3;
const remainderAfterDivisionByFive = number % 5;
const remainderAfterDivisionBySeven = number % 7;

if (remainderAfterDivisionByThree === 0 && remainderAfterDivisionByFive === 0) {
  console.log("Fizz");
} else if (
  remainderAfterDivisionByThree === 0 ||
  remainderAfterDivisionByFive === 0
) {
  console.log("Buzz");
} else if (remainderAfterDivisionBySeven === 0) {
  console.log("BuzzBuzz");
} else {
  console.log("Number is not divisible by 3, 5 and 7");
}
