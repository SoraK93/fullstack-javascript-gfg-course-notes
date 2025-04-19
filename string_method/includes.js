let displayMessage = "I love to code in dark mode";
// if (displayMessage.includes("dark")) {
//     console.log("Person loves to code in dark mode.");
// } else {
//     console.log("Person loves to code in light mode.")
// }


displayMessage = "qwrty";
const vowels = "aeiouAEIOU";
let flag = false;

for (let char of displayMessage) {
    if (vowels.includes(char)) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}

if (flag) {
    console.log("String has vowels.");
} else {
    console.log("String doesn't have vowels.");
}

