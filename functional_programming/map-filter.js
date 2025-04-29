const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map

// Example-1
// function squareOfNumbers(arr) {
//   const tempArr = [];
//   for (let number of arr) {
//     tempArr.push(number ** 2);
//   }
//   return tempArr;
// }
// const result = squareOfNumbers(arr);
// console.log(result);

// Using map to do the above
// const output = arr.map((num, index) => {
//     console.log(index);
//     return num ** 2;
// });
// console.log(arr);
// console.log(output);  

// Filter
function filterNumbers(arr) {
    const temp = [];
    for (let number of arr) {
        if (number > 5) {
            temp.push(number);
        }
    }
    return temp;
}
const result = filterNumbers(arr);
console.log(result);

const output = arr.filter(number => number > 5);
console.log(output);