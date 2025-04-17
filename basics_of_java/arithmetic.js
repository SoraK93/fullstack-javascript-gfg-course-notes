const x = "12";
const y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(y ** x);

// NaN - Not a Number

const userInput = "42";
const numberInput = Number(userInput);

if (!isNaN(numberInput)){
    console.log(numberInput + 8);
} else {
    console.log('Invalid input');
}