// Polyfill for filter
function getFilteredArr(number) {
  return number > 3;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter(getFilteredArr);
console.log(result);

Array.prototype.myFilter = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};
const result_polyfill = arr.myFilter(getFilteredArr);
console.log(result_polyfill);
