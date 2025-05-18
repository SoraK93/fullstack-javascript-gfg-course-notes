# Prototype

Every object has an internal and hidden property called \[[Prototype]], which is either null or refereces another object. The object referenced by the prototype is used to provide inheritance. This property allows JS to implement a feature known as "prototypal inhertance".

> When an object tries to access a property or method. If it's not found within the object itself, JS looks up the prototype chain to find it.

```
const admin = {
    isAdmin: true
};

let user = {
    name: "Prakash",
    role: "mentor",
    __proto__: admin // Prototype Chaining
};

const loggedInStatus = {
    isLoggedIn: true
};

admin.__proto__ = loggedInStatus; // Prototype Chaining

console.log(user.isAdmin); // Outputs: true
console.log(user.isLoggedIn); // Outputs: true
```

<ins>**Accessing Prototype Properties and Methods**</ins>  
To access all properties, including those from the prototype, you can use a for..in loop.

# Basics of Classes

It's a powerful tool for organizing and structuring your code in a way that models real-world entities ad relationships.  
In simple terms, a class is a blueprint/ a template for creating objects with some structure and behaviour to it.

```
class User {
    constructor(name, role, isAdmin, isLoggedIn) {
        this.name = name;
        this.role = role;
        this.isAdmin = isAdmin;
        this.isLoggedIn = isLoggedIn;
    }
    displayInfo() {
        console.log(`${this.name} is a ${this.role}`);
    }
};
const user1 = new User('Prakash', 'Mentor', false, true);
console.log(user1);
// Output: User {name: 'Prakash', role: 'Mentor', isAdmin: false, isLoggedIn: true}
user1.displayInfo();
// Output: Prakash is a Mentor
```

The constructor method is used to initialize the properties of the class. Using class, we can create multiple objects each having its own instance of User class, containing its own set of properties.
