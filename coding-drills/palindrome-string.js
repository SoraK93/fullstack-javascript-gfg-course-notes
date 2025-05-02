const str = "ogadszsdago";

// Repeating conditional statement for different methods.
function trueOrFalse(original, reversed) {
  if (original === reversed) {
    console.log("String is a palindrome");
  } else {
    console.log("String is not a palindrome");
  }
}

// Using in-build methods
const arrayOfChar = str.split("");
console.log(arrayOfChar);

const reversedChar = arrayOfChar.reverse();
console.log(reversedChar);

const reversedStr = str.split("").reverse().join("");
console.log(reversedStr);

trueOrFalse(str, reversedStr);

// For-Loop Method
function getReversedStr(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  };
  trueOrFalse(str, reversedStr);
}
getReversedStr(str);

// For-Loop Pointer Method
function palindrome(str) {
  let n = str.length;
  let midPoint = n % 2 === 1 ? Math.floor(n / 2) : Math.floor(n / 2) - 1;
  for (let i = 0; i <= midPoint; i++) {
    if (str[i] !== str[n - i - 1]) {
      console.log("String is not a palindrome");
      return;
    }
  }
  console.log("String is a palindrome");
}
palindrome(str);
