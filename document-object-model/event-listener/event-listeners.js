let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let increaseCountButton = document.querySelector(".increaseCount");
let decreaseCountButton = document.querySelector(".decreaseCount");
let input = document.querySelectorAll(".input");
let value = 0;

startButton.addEventListener("click", () => {
    if (startButton.innerText === "Start") {
      startButton.innerText = "Stop";
      startButton.innerHTML = "<span>Let's Begin</span>";
    } else {
      startButton.innerText = "Start";
    }
  });
  
  stopButton.addEventListener("click", () => {
      // stopButton.classList.add("btn-red");
      stopButton.classList.toggle("btn-red");
  })
  
  increaseCountButton.addEventListener("click", () => {
    value++;
    console.log(value);
  });
  
  decreaseCountButton.addEventListener("click", () => {
    if (value === 0) {
      console.log("Reached zero. Cannot decrease count.");
    } else {
      value--;
      console.log(value);
    }
  });
  
  // "change" triggers when the element losses focus
  input[0].addEventListener("change", () => {
    console.log(input.value);
  });
  // "input" triggers when there is any change in the input field
  input[1].addEventListener("input", () => {
    console.log(input.value);
  });
  // "focus" triggers when the element gets focused on
  input[2].addEventListener("focus", () => {
    console.log(input.value);
  });
  // "keyup" triggers when any key gets released (while the element is in focus)
  input[3].addEventListener("keyup", () => {
    console.log(input.value);
  });
  // "keydown" triggers when any key gets pressed (while the element is in focus)
  input[4].addEventListener("keydown", () => {
    console.log(input.value);
  });
  // Mouse Events
  // detects which mouse button is clicked
  input[5].addEventListener("mousedown", (event) => {
    console.log(event.button);
  });
  input[5].addEventListener("contextmenu", (event) => {
    // since right-click shows the menu by default, we use this event listener to block that.
    event.preventDefault();
  });
  
  document.body.addEventListener("mousedown", (event) => {
    let xCor = event.pageX;
    let yCor = event.pageY;
    let cors = `X cor - ${xCor}, Y cor - ${yCor}`;
    console.log(cors);
  })
  

// DOM selector examples
// Using ID
// let startBtn = document.getElementById("btn-start");
// console.log(startBtn);

// let stopBtn = document.getElementById("btn-stop");
// console.log(stopBtn);

// Using query selector
// startBtn = document.querySelector(".start");
// console.log(startBtn);

// let resetBtn = document.querySelector("#btn-count");
// console.log(resetBtn);

// Gets the very first element it finds
// let button = document.querySelector(".button");
// console.log(button);
// Gives a list of elements it finds
// button = document.querySelectorAll(".button");
// console.log(button);
// console.log(button[1]);