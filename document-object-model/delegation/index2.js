let btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (event) => {
    let btnText = event.target.innerText;
    // if (btnText === "Red") {
    //     event.target.classList.add("btn-red");
    // }
    
    // Set color based on button text
    event.target.classList.toggle(`btn-${btnText}`);
})