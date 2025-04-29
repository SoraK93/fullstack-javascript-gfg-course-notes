/**
 * First Class Function
 *
 * A programming language is said to have First-class functions if functions in that
 * language are treated like other variables.
 * So the functions can be assigned to any other variable or passed as an argument or
 * can be returned by another functions.
 *
 */

// const greetMessage = function() {
//     console.log("Hello Sourabh, Welcome to GFG!!!");
// }
// greetMessage();

// Example-2
// function wrapper() {
//   return "Welcome to GFG";
// }
// function greetMessage(inner, name) {
//   let message = inner();
//   console.log(name, message);
// }
// greetMessage(wrapper, "Sourabh");

// Example-3
function greetMessage() {
  function wrapper() {
    let name = "Sourabh";
    console.log(name, "Welcome to GFG");
  }
  return wrapper
}
const output = greetMessage();
output();
greetMessage()();