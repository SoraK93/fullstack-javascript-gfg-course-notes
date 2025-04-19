// const displayMessage = "I am a Student at GeeksforGeeks";
// const index = 0;


// charAt()
// const char = displayMessage.charAt(index);
// console.log(char);


// charCodeAt()
// const asciiCode = displayMessage.charCodeAt(index);
// console.log(asciiCode);



/**
 * Exercise to encrypt
 * geeks -->iffmu
 */

const message = "geeks";
n = message.length;

let encrypt = "";

for (let i = 0; i < n; i++) {
    encrypt += String.fromCharCode(message.charCodeAt(i) + 2);
}

console.log(encrypt);

