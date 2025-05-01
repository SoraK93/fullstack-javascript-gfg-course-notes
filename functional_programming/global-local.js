let x = 3; //global variable

function showNumber() {
  let y = 5; // local variable
  console.log({ x });
  console.log({ y });
}
function f1() {
  console.log({ x });
  // console.log({y});
}
showNumber();
f1();

// block scope
{
  let a = 3;
  let b = 5;
  console.log({ a, b });
}
// Block Scope - Variables declared using let and const wont work out of there respective block
// Global Scope - var is different, it works fine due to its execution context.
let a = 3;
if (true) {
  let a = 7;
  console.log({ a });
}
console.log({ a });
