/**
 * User enters a number, if the number is greater than 50 then ask the user to enter a number less then 50 again
 */


let readlinesync = require("readline-sync");


let number;
do {
    number = readlinesync.question("Enter a number less than 50: ");
} while (number > 50);
console.log(`Your choosen number is ${number}.`);


number = readlinesync.question("Enter a number: ");
while (number > 50) {
    number = readlinesync.question("Enter a number less than 50: ");
}
console.log(`Your choosen number is ${number}.`);




function binaryToDecimal(b) {
    // write your code here
    let decimal = 0;
    
    for (let i = 0, n = b.length; i >= 0; i++) {
        if (b[i] === "1") {
            decimal += 2 ** (n - 1 - i);   
        }
    }
    
    return decimal;
}
binaryToDecimal(10001000);
console.log(2**7 + 2**3);