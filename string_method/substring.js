const userName = "Sourabh Kumar Kheria";
const maxLength = 10;

// const subString = userName.substring(0, maxLength);
// console.log(subString);

function getDisplayName(userName, maxLength) {
  return userName.length > maxLength
    ? userName.substring(0, maxLength) + "..."
    : userName;
}

const displayName = getDisplayName(userName, maxLength);
console.log(displayName);
