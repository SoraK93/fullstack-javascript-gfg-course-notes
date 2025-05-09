console.log(window);

function showAlert() {
    alert("Anything!");
}

function showURL() {
    console.log(window.location.href);
}

function showConfirm() {
    const result = confirm("Do you want to visit google?");
    if (result) {
        window.location.href = "https://www.google.com/"
    }
}

function redirectTo() {
    const site = prompt("Enter website url below: ");
    window.location.href = `https://www.${site}/`;
}

function showPrompt() {
    const result = prompt("Whats your age?");
    if (Number(result) > 18) {
        alert("You are eligible to vote");
    } else {
        alert("You are not eligible to vote");
    }
}

function screenInfo() {
    console.log(`Screen width: ${screen.width}\nScreen height: ${screen.height}`);
}