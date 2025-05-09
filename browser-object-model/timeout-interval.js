// setTimeout

// setInterval

function greet() {
  console.log("message");
}

let setTimeoutId = setTimeout(greet, 1000*2);
// clearTimeout(setTimeoutId);

let value = 0;
let intervalId = null;
function counting() {
  value++;
  console.log(value);
  if (value === 10) {
    clearInterval(intervalId);
  }
}
intervalId = setInterval(counting, 1000);
