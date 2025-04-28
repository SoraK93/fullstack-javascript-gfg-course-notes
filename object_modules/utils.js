// function greet(userName) {
//   return `Good Morning ${userName}`;
// }

// function print(value) {
//   console.log(value);
// }

// CommonJS Export
// module.exports = {
//   greet,
//   print,
// };

// Method - 1;
// Default Export
// export default {
//   greet,
//   print,
// };

// Method - 2;
// Named Export
export function greet(userName) {
  return `Good Morning ${userName}`;
}

export function print(value) {
  console.log(value);
}
