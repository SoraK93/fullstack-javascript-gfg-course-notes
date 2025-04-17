// console.log(50 > 30);
// console.log(50 < 30);
// console.log(30 >= 30);
// console.log(40 == 40);
// console.log(50 == 40);

// console.log("apple" > "banana");
// console.log("glowing" > "glow");

// console.log("2" > 1);

// /** Loose Equality */
// console.log("01" == 1);

// /** Strict Equality */
// console.log("01" === 1);


// Comparison operator for null varies depending on its use case. Beware of it!!!

// Since empty value represents 0, which is same as null
// And undefined value is empty value. Thus, it will be true, 
// this comparison can be considered incorrect.
console.log(null == undefined);

// Since null itself is 0 and undefined in nothing it will be false.
console.log(null === undefined);

// Here null is represented as zero, when dealing with other numbers
console.log(null > 0);
console.log(null < 1);
console.log(null >= 0);

// Here null is represented as null, since we are checking for equality
console.log(null == 0);


/** Excersice :-
 * 
 * 3 < 5 --> true
 * "mango" > "banana" --> true
 * "2" > "3" --> false
 * undefined == null --> true
 * undefined === null --> false
 * null < 1 --> true
 * 
 */




