/**
 * WAP to delete all the vowels from a string.
 */
const string = "The QUICK brown fox jumps over the lazy dog";

function getStrWithNoVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }
  return result;
}
console.log(getStrWithNoVowels(string));

function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let noVowelsString = "";
  noVowelsString += [...str]
    .filter((char) => !vowels.includes(char.toLowerCase()))
    .join("");
  return noVowelsString;
}
console.log(removeVowels(string));
