// function greet(userName) {
//   return `Good Morning ${userName}`;
// }

// function print(value) {
//   console.log(value);
// }

// Method - 1;
// module.exports = {
//   greet,
//   print,
// };

// Method - 2;
// export default {
//   greet,
//   print,
// };

// Method - 3;
// named export
export function greet(userName) {
  return `Good Morning ${userName}`;
}

export function print(value) {
  console.log(value);
}
