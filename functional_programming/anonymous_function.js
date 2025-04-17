// this way of calling wont work
// anonymousFunction();

// When we assign a variable to a function like this. It becomes a function expression
let anonymousFunction = function () {
  console.log("Hello");
};
console.log(typeof anonymousFunction);
anonymousFunction();

// If a variable is assigned to a function like this, it will become a named function expression
let anonymousFunction2 = function greetMessage() {
  console.log("Greetings");
  console.log(typeof greetMessage); // Acts as a local fnction
};
console.log(typeof anonymousFunction2);
anonymousFunction2();
// We wont be able to call the function directly outside of the function scope
// greetMessage();
