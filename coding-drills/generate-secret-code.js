/**
 * Generate secret code from a given string
 */

const inputStr = "Sourabh";
const encodeStr = str => {
    let encode = "";
    for (let index in str) {
        encode += String.fromCharCode(str.charCodeAt(index) + 2);
    }
    return encode;
}
console.log(encodeStr(inputStr));