// Method - 1
// const allTheModule = require("./utils.js");

// Method - 2
// import allTheModules from "./utils.js";

// console.log(allTheModule);
// const {greet, print} = allTheModules;

// Method - 3
import { greet, print } from "./utils.js";

// Dynamic Import
const isMathRequired = true;
if (isMathRequired){
    const {add} = await import("./math.js");

    console.log(add(2, 2));
}

print(greet("Sourabh"));
