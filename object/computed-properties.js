/**
 * Adding Property to Object
 * Computed Property
 */

const readlineSync = require("../arrays/node_modules/readline-sync");
const key = readlineSync.question("What do you want to know about (name/age/state/city)?");


const obj = {
    name: "Sourabh",
    age: 32,
}
obj.city = "Kolkata";
obj.state = "WB";

console.log(obj[key]);

