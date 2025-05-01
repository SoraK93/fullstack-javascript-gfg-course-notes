/**
 * Recursion is a programming term where the function is called from itself
 */

// Example - Sum Number
// For Loop Method
function calculateSum(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
const sumResult = calculateSum(10);
console.log("Sum using loop:", sumResult);

// Recursive Method
function calculateSumRecursive(number) {
  return number === 1 ? 1 : number + calculateSumRecursive(number - 1);
}
const sumOutput = calculateSumRecursive(10);
console.log("Sum using recursion:", sumOutput);

// Example - Factorial
// For loop Method
function factorialUsingLoop(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
const factorialResult = factorialUsingLoop(5);
console.log("Factorial using loop:", factorialResult);

// Recursion Method
function factorialUsingRecursion(number) {
  return number === 1 ? 1 : number * factorialUsingRecursion(number - 1);
}
const factorialOutput = factorialUsingRecursion(5);
console.log("Factorial using recursion:", factorialOutput);
