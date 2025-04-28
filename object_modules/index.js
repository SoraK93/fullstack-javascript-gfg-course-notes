// const allTheModule = require("./utils.js");

// Method - 1
// import allTheModules from "./utils.js";

// console.log(allTheModule);
// const {greet, print} = allTheModules;

// Method - 2
import { greet, print } from "./utils.js";

// Method - 3
// Dynamic Import
const isMathRequired = true;
if (isMathRequired) {
  // await makes the code wait for the module to load before using it
  const { add } = await import("./math.js");

  console.log(add(2, 2));
}

print(greet("Sourabh"));
