// Polyfill for reduce
function getSum(acc, cur) {
  return acc + cur;
}

const arr = [1, 2, 3, 4, 5, 6];
const total = arr.reduce(getSum, 8);
console.log(total);

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error("Please provide a valid callback function.");
  }

  let n = this.length;
  let acc = 0;

  if (n === 0) {
    throw new Error("Make sure the array has a length of 2 or more.");
  } else if (initialValue === undefined && n < 2) {
    acc = this[0];
  }

  if (initialValue) {
    if (typeof initialValue === "number") {
      acc = initialValue;
    } else {
      throw new Error("Please provide a number for initial value");
    }
  } else {
    if (typeof this[0] === "number") {
      acc = this[0];
    } else {
      throw new Error("Require array elements to be numbers.");
    }
  }

  for (let i = 1; i < n; i++) {
    if (typeof this[i] !== "number") {
      throw new Error("Require array elements to be numbers.");
    }
    acc = callback(acc, this[i]);
  }
  return acc;
};
const result = arr.myReduce(getSum, "8");
console.log(result);
