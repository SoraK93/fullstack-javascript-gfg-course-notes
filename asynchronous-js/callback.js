/**
 * When an execution of a function depends on a asynchronous action, it is called a callback function.
 * Here a() when executed will also execute b(). This makes b() a callback function.
 */
function a(wrapper) {
    console.log("hello");
    console.log(wrapper);
    wrapper();
}
function b() {
    console.log("bye");
}
a(b);

setTimeout(function callback(){
    console.log("executed after a delay");
}, 4000);

// fetch("http://....")
//     .then(function(){
//         // response logic
//     })

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     console.log("clicked");
// });
