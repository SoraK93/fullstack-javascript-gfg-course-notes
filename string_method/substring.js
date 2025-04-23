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
// console.log(displayName);


// first the first occurance of substring, without using in-built methods
function firstOccurence(txt, pat) {
  // code here
  let indexTxt = 0;
  let indexPat = 0;
  
  while (true) {
      if (txt[indexTxt] !== pat[indexPat]) {
          indexPat = 0;
      } else if (indexPat === pat.length) {
          break;
      } else {
        indexPat++;
      }
      
      indexTxt++;
      
      if (indexTxt === txt.length) {
          break;
      }
  }
  return (indexPat === pat.length) ? indexTxt - indexPat : -1;
}
console.log(firstOccurence("nxtipemjbxualljkxgbbwmkxouqeyegvkildhxcqsfayer", "bwmkxouqeyegvkildhxcqsfayer"));