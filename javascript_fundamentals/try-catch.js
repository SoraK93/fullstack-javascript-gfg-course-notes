const username = "sourabh";
try {
    console.log(myname);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Error occured");
}

console.log(username);



