/**
 * A closure is the combination of a function bundled together with references to its lexical environment.
 *
 * In other words, A closure is a function tat remembers its outer variables and can access them.
 *
 *
 */

// Example-1
let c;
function x() {
    let a = 5;
    console.log(c);
    function y() {
        let b = 6;
        console.log(a);
        console.log(c);
        function z() {
            c = 7;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        z();
    }
    y();
}
console.log(c);
x();

// Example-2
// logs incorrect values
function noClosure() {
  let array = [];
  for (var i = 0; i < 3; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}
const invalidResult = noClosure();
// At every iteration our value of i is changing and since we are using var, all the changes are pointing to same reference. And at the last iteration i = 3, is taken as final value.
invalidResult[0](); // 3
invalidResult[1](); // 3
invalidResult[2](); // 3

// Two ways to correct this error
// Change var declaration to let. This is very simple, and will help function store distinct values of i during push.
// Create a immediately invoked function expression (IIFE) during push. This uses the concept of closure to store distinct value of i for each iteration.
function withClosure() {
  let array = [];
  for (var i = 0; i < 3; i++) {
    array.push(
      (function (i) {
        return function () {
          console.log(i);
        };
      })(i)
    );
  };
  return array;
}
const validResult = withClosure();
validResult[0]();
validResult[1]();
validResult[2]();