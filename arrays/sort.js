// const fruits = ["apple", "cherry", "orange", "banana", ""];
// fruits.sort();
// console.log(fruits);


// numbers is the array are converted into string before sort
// const numbers = [1, 4, 2, 6, 7, 3, 9, 8, 5, 11, 31, 61, 51];
// numbers.sort();
// console.log(numbers);

// function sortInAscendingOrder (x, y) {
//     return x - y;
// }
// function sortInDescendingOrder (x, y) {
//     return y - x;
// }
// numbers.sort(sortInAscendingOrder);
// console.log(numbers);
// numbers.sort(sortInDescendingOrder);
// console.log(numbers);


var arr = [2, 5, 8, 1, 4];
console.log(arr.sort((a, b) => a + 2 * b));
console.log(arr);