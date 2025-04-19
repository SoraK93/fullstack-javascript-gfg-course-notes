const displayMessage = "I am a Student at GeeksForGeeks";

// console.log(displayMessage.indexOf('a', 3));
// console.log(displayMessage.indexOf('z'));

function findCharacter(text, char) {
  const index = text.indexOf(char);
  if (index === -1) {
    return "Character not found";
  }
  return `Character found at index: ${index}`;
}

let result = (text, char) => text.indexOf(char) === -1 ? "Character not found": `Character found at index: ${text.indexOf(char)}`;

console.log(result(displayMessage, "e"));

