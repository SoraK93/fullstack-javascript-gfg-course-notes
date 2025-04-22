// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());
// console.log(arr);


const inputStr = "Sourabh";
let arrOfChar = inputStr.split("");
arrOfChar.reverse();
console.log(arrOfChar);
const reversedChar = arrOfChar.join("");
console.log(reversedChar);

if (inputStr === reversedChar) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}