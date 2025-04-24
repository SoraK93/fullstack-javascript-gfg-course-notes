/**
 * Object Reference & Shallow Copy
 */


const person1 = {
    name: "Sourabh",
    age: 32,
    address: {
        city: "Kolkata",
        state: "West Bengal"
    }
}


// Creates a Shallow Copy
// const person2 = person1; // Referencing to same memory location as person1


// Creates a Shallow Copy
const person2 = Object.assign({}, person1);
person2.name = "Sweta";
person2.age = 35;
person2.address.city = "Raniganj";
person1.address.state = "Bihar";
console.log(person1);
console.log(person2);

