/**
 * mask the last 4 characters with #
 */

// Using slice & repeat
const str = "123456789987654321";
function maskingUsingMethod(string, value) {
  const maskChar = "#".repeat(value);
  const stringslice = string.slice(0, str.length - value);
  return stringslice + maskChar;
}
console.log(maskingUsingMethod(str, 4));

// Using for loop
function maskingUsingLoop(string, value) {
  const stringArray = string.split();
  for (let length = stringArray - 1, i = length; i >= length - value; i--) {
    stringArray[i] = "#";
  }
  return stringArray.join();
}
console.log(maskingUsingLoop(str, 4));

