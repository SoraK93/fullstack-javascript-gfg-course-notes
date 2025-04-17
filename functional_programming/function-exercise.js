// Sum of all numbers from x to y.
/** Total function calculates the sum from 'min' value till 'max' value.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function total(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
const result = total(1, 20);
console.log(result);
