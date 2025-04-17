/** Arrow Function or Fat Arrow Function
 * let variable = (parameter) => {
 *      return expression
 * };
 * 
 * OR
 * 
 * let variable = (parameter) => expression;
 */


const calculateSum = function (x, y) {
    return x + y;
}
// console.log(calculateSum(12, 4));


// const calculateAddition = (x, y) => {
//     return x + y;
// }
const calculateAddition = (x, y) => x + y;
// console.log(calculateAddition(22, 22));


const calculateSumXGreaterY = (x, y) => {
    if (x > y) {
        return x + y;
    } else {
        return x - y;
    }
}
// console.log(calculateSumXGreaterY(11, 12));


const sum = (x, y) => (x > y) ? x + y : x - y;
const output = sum(8, 12);
// console.log(output);


// Arrow Functions and Lexical this
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}
let p = new Person();
