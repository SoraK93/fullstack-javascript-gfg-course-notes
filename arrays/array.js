/**
 * Arrays -> Non-Primitive Data Type
 */


// let studentsName = [
//   "Prakash",
//   "Adarsh",
//   "Riya",
//   "Ashish",
//   "Jay",
//   "Piyush",
//   1,
//   2,
//   3,
//   4,
//   ["HTML", "CSS", "JS"],
//   { schoolName: "SIES" },
// ];
// console.log(studentsName);


let studentsName = [
  "Prakash",
  "Adarsh",
  "Riya",
  "Ashish",
  "Jay",
  "Piyush",
  "Amit",
  "Kirti",
];

// for (let i = 0, n = studentsName.length; i < n; i++) {
//   console.log(studentsName[i]);
// }

// of gives each element
// for (let name of studentsName) {
//     console.log(name);
// }

// in gives each index
// for (let index in studentsName) {
//     console.log(studentsName[index]);
// } 


// Remove from end
// studentsName.pop();
// console.log(studentsName);


// Remove from start
// studentsName.shift();
// console.log(studentsName);


// Does not remove but get the values of specified index
// console.log(studentsName.slice(1, 3));


// Removes a certain number of elements, starting from specified index
// studentsName.splice(1,  4);
// console.log(studentsName);


// Following functions does not change the original array
let upperCaseNames = studentsName.map(name => name.toUpperCase());
console.log(upperCaseNames);


let longNames = studentsName.filter(name => name.length > 5);
console.log(longNames);


// acc acts as total, and curr acts as current value
// reduce is calling this func for each element, and starting acc is 0 & curr is 1.
let array = [ 1, 2, 3, 4, 5, 6 ];
const helperSum = (acc, curr) => acc + curr;
let sum = array.reduce(helperSum, 0);
console.log(sum);


const lessThanFourCheck = (element) => element < 4;
const lessThanFour = array.some(lessThanFourCheck);
if (lessThanFour) {
  console.log("At least one element is less than 4");
} else {
  console.log("All elements are greater than 4");
}