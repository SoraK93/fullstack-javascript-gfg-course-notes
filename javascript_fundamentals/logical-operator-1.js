/** 
 * Logical Operator with Conditional Statement
 * 1. OR || --> if atleast one condition is true then || will return True otherwise || will return False
 * 2. AND && --> all the conditions must be true then && will return True otherwise && will return False
 * 3. NOT !
 * 4. NULLISH COALESCING ??
 */


const physics = 90;
const maths = 95;
const chemistry = 83;
const biology = 96;

// AND
// if (physics > 85 && maths > 85 && chemistry > 85) {
//     console.log("You are eligible for Engginearing...");
// } else {
//     console.log("You are not eligible for Engginearing...");
// }


// OR
// if (physics > 90 || maths > 85 || chemistry > 89) {
//     console.log("You are eligible for IIT...");
// } else {
//     console.log("You are not eligible for IIT...");
// }


// NOT
const isStudentEligible = false;

if (!isStudentEligible) {
    console.log("You are eligible");
} else {
    console.log("You are not eligible");
}


