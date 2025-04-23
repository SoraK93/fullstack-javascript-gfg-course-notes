/**
 * Adding Property to Object
 * Computed Property
 */

const { read } = require("fs");
const readlineSync = require("../node_modules/readline-sync");

const key = readlineSync.question("What do you want to know about (name/age/state/city)? ");

const course = readlineSync.question("Which course do you want to learn (html/css/js/react/redux)? ")

const obj = {
    name: "Sourabh",
    age: 32,
    get [course]() {
        return `Lets start by finding a suitable ${course} course for you.`;
    },
}
obj.city = "Kolkata";
obj.state = "WB";

console.log(obj[key]);
console.log(obj[course]);

