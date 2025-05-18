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

# Classes Inheritance
Inheritance is a fundamental concept in OOP, allowing one class to inherit properties and methods from another class. Inheritance is the process by which child class acquires the properties and methods of parent class (Enables code reuse and hierarchy between classes).
```
class Laptop {
    constructor(ram, processor, generation) {
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

    displaySpecs() {
        console.log(`Laptop Specs: RAM = ${this.ram}, Processor = ${this.processor}, Generation = ${this.generation}`);
    }
};

class Dell extends Laptop {
    constructor(ram, processor, generation, modelName, price) {
        // Call the parent class's constructor
        super(ram, processor, generation); 
        this.modelName = modelName;
        this.price = price;
    }

    displaySpecs() {
        // Call the parent class's displaySpecs method
        super.displaySpecs(); 
        console.log(`Model Name = ${this.modelName}, Price = ${this.price}`);
    }
};

const dellLaptop = new Dell('8GB', 'Intel i5', '10th Gen', 'Dell Latitude', 45000);
// Output: Laptop Specs: RAM = 8GB, Processor = Intel i5, Generation = 10th Gen

dellLaptop.displaySpecs();
// Output: Model Name = Dell Latitude, Price = 45000
```
Here Dell class, by simply using 'extend' keyword was able to inherit all the properties and methods from the Laptop class. The constructor method in dell use 'super' keyword to call parent class constructor.  
Child class can inherit from parent class and also improve upon it, as done in Dell class by adding new properties (modelName, price) and modifying displaySpec() method.

### 'Super' keyword
It is used to call the parent class's methods and constructors, ensuring that the properties defined in Laptop are correctly initialized in the Dell subclass.  
> Called inside constructor-> allows child class to inherit parent constructor.  
Called inside methods-> allows child class to inherit parent methods, and override it, if needed.
