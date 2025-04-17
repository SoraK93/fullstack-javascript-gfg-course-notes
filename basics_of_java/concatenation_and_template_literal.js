let userName = "Sourabh";
let age = 32;

// My name is Sourabh and I am 32 years old


/**
 * Concatenation
 */

let message = "My name is " + userName + " and I am " + age + " years old";
console.log(message);


/**
 * Template Literals/ Strings
 */

let text = `My name is ${userName} and I am ${age} years old`;
console.log(text);
console.log(typeof text);

let multipleLineText = `My name is ${userName} and 
I am ${age} years old
I love to code`;
console.log(multipleLineText);
console.log(typeof multipleLineText);
