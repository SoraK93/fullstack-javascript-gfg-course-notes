/**
 * Arguments Object in Non-Arrow Function
 * -- arguments object is an array like object present locally inside a function
 *    and it contains value of all the aruments passed to a function.
 */

// function calculateSum(a, b) {
//   return a + b;
// }
// const total = calculateSum(4, 5, 1, 2, 3);
// console.log(total);

// function argObject() {
  // console.log(arguments);
  // arguments[0] = 1;
  // console.log(arguments[0]);
  // console.log(arguments.length);
  // console.log(typeof arguments);
  // console.log([...arguments]);
//   let sum = 0;
//   for (let value of arguments) {
//     sum += value;
//   }
//   console.log(sum);
// }
// argObject(2, 5, 4, 1, 7, 5, 8, 9);


function calculate(a=10) {
    console.log(a);
    console.log(arguments);
    arguments[0] = 9;
    console.log(arguments);
    console.log(a);
}
calculate(4);