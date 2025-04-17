const n = 10;
let star = "*";

// for (let i = 0; i < n; i++) {
//     console.log(star);
//     star += ` *`;
// }

// star = "* ";
// for (let i = 1; i <= n; i++) {
//     console.log(star.repeat(i));
// }


// for (let i = n - 1; i > 0; i--) {
//     console.log(star.repeat(i));
// }


// let userName = "Sourabh Kumar Kheria";
// let counter = 0;
// for (let i = 0; userName[i]; i++) {
//     if (userName[i] !== " ") {
//         counter++;
//     }
// }
// console.log(counter);


/** 
 * Given a range of numbers from 1 to 101, find all the even numbers
 */

// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is an even number.`);
//     } else {
//         console.log(`${i} is an odd number.`);
//     }
// }


const inputString = "hello, i love GFG";

const vowels = "aeiou";

for (let i = 0, n = inputString.length; i < n; i++) {
    // string.include(char) checks if char is included in string
    if (vowels.includes(inputString[i])) {
        console.log(`${inputString[i]} is a vowel.`);
    } else {
        console.log(`${inputString[i]} is not a vowel.`);
    }
}





