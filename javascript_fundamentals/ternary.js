/** Ternary Operators
 * conditions ? yes : no
 */

const totalMarksScored = 95;

// Normal if-else statement
if (totalMarksScored < 40) {
  console.log("You will need to work hard");
} else if (totalMarksScored < 60) {
  console.log("B Grade");
} else if (totalMarksScored < 75) {
  console.log("A Grade");
} else if (totalMarksScored < 85) {
  console.log("A+ Grade");
} else {
  console.log("Genius");
}

// Ternary if-else statement

// totalMarksScored < 40
//   ? console.log("You will need to work hard")
//   : console.log("You cleared the exam. Great Work!!!");

// const result =
//   totalMarksScored < 40
//     ? "You will need to work hard"
//     : "You cleared the exam. Great!!!";
// console.log(result);

const result =
  totalMarksScored < 40 ? "You will need to work hard" :
  totalMarksScored < 60 ? "B Grade" :
  totalMarksScored < 75 ? "A Grade" :
  totalMarksScored < 85 ? "A+ Grade" : "Genius";
console.log(result);
