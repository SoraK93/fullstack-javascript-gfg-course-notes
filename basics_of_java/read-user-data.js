// Package installed:
// npm i readline-sync

const readlineSync = require("readline-sync");

const userName = readlineSync.question("What is your name? ");
console.log(`Welcome ${userName} to GFG`);

const userAge = readlineSync.question("What is your age?");
// console.log(typeof userAge);
console.log(`Thank you for letting us know your age..`)

const userAgeNumber = Number(userAge);

if (!isNaN(userAgeNumber)){
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else{
    console.log('Please enter a valid number for age.');
}


