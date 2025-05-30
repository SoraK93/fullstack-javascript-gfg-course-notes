// Polyfill for flat
const arr = [1, 2, 3, 4, [5, 6], [[[7, 8]]]];
const result = arr.flat(2);
console.log(result);

Array.prototype.myFlat = function (depth = 1) {
  let tempArr = [];
  function getFlattenedArr(array, depth) {
    array.forEach((element) => {
      Array.isArray(element) && depth >= 1
        ? getFlattenedArr(element, depth - 1)
        : tempArr.push(element);
    });
  }
  getFlattenedArr(this, depth);
  return tempArr;
};
const result_flat = arr.myFlat();
console.log(result_flat);
