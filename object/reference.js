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

// Direct Reference
// const person2 = person1; // Referencing to same memory location as person1

// Using Object.assign() => Becomes shallow in case of nested object
// const person2 = Object.assign({}, person1);

// Spread Operator
// const person2 = {...person1};



// Create Deep Copy

// Using JSON Methods
// const person2 = JSON.parse(JSON.stringify(person1));

// Using Custom Method
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
const person2 = deepCopy(person1);



person2.name = "Sweta";
person2.age = 35;
person2.address.city = "Raniganj";
person1.address.state = "Bihar";
console.log(person1);
console.log(person2);