/**
 * Sum of all numbers that are less than 40
 */

const arr = [10, 17, 61, 54, 44, 32, 39, 23];
const result = arr.reduce((arr, curr) => (curr < 40) ? arr + curr : arr, curr=0);
console.log(result);
