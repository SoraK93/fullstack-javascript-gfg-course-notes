// Can be called before declaration
// greetMessage();


// Function Declaration / Statement
// name variable here is a parameter
function greetMessage(name, city) {
    // console.log("Hello from GeeksforGeeks!!");
    console.log(`${name}, Welcome to your profile`);
    console.log(`Thank you for joining from ${city}`);
}


// Calling the function
greetMessage("Sourabh", "Raniganj");  // "Sourabh" here is called a argument
greetMessage("Mr. Kheria", "Ohayo");


function calculateSum(min, max){
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(`Total sum of ${1} to ${10} is ${calculateSum(1, 10)}`);