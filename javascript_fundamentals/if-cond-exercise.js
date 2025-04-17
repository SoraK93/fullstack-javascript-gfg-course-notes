/**
 * Aprogram that reads 3 string and print the smallest string (length)
 */

const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

const lengthOfFirstString = firstString.length;
const lengthOfSecondString = secondString.length;
const lengthOfThirdString = thirdString.length;

if (lengthOfFirstString < lengthOfSecondString) {
  if (lengthOfFirstString < lengthOfThirdString) {
    console.log(`${firstString} is the smallest string.`);
  } else {
    console.log(`${thirdString} is the smallest string.`);
  }
} else if (lengthOfFirstString > lengthOfSecondString) {
  if (lengthOfSecondString < lengthOfThirdString) {
    console.log(`${secondString} is the smallest string.`);
  } else {
    console.log(`${thirdString} is the smallest string.`);
  }
} else {
  console.log("Found 2 or more strings of the same length");
}

const result =
  lengthOfFirstString < lengthOfSecondString &&
  lengthOfFirstString < lengthOfThirdString
    ? `${firstString} is the smallest string.`
    : lengthOfSecondString < lengthOfFirstString &&
      lengthOfSecondString < lengthOfThirdString
    ? `${secondString} is the smallest string.`
    : lengthOfThirdString < lengthOfFirstString &&
      lengthOfThirdString < lengthOfSecondString
    ? `${thirdString} is the smallest string.`
    : "Found 2 or more strings of the same length";
console.log(result);
