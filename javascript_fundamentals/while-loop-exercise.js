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


