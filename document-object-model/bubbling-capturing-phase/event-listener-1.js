/** Event Bubbling and Capturing */

let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

// Bubbling Phase
form.addEventListener("click", () => {
  alert("Form tag");
})
div.addEventListener("click", () => {
  alert("Div tag");
})
para.addEventListener("click", () => {
  alert("Para tag");
})

// Capturing Phase
form.addEventListener("click", () => {
  alert("Form tag");
}, true)
div.addEventListener("click", () => {
  alert("Div tag");
}, true)
para.addEventListener("click", () => {
  alert("Para tag");
}, true)