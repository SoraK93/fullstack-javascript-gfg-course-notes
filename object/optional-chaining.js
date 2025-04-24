const user = {
    name: "Sourabh",
    age: 32,
    address: {  // optional
        street: "Babuihati",
        // city: "Mumbai",
    },
    likes: "Food, PC, Sleep",
    getDisplayMessage: function () {
        console.log(`Welcome ${this.name}`)
    }
}

// Solution1
// if (user.address) {
//     console.log(user.address.city);
// } else {
//     console.log("address not found");
// }

// Solution2 - Optional Chaining
// It will firstly check if a property called city exists, 
// if not return undefined, else check if property city exists inside address
// if not undefined else return the property value.

console.log(user.address?.city ?? "Details of city not provided");

// user.getDisplayMessage();
// console.log(user.getDisplayAddress?.());


console.log(user.hobbies ?? "No hobbies mentioned")