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

# Static Properties and Methods
These are distinct from regular methods and properties because they are asociated with the class itself rather than with instances created from the class. This means that you  can call a static method directly on the class, without having to instantiate an object from the class. This also means that all instances of the class share the same static property.

### Use cases for static methods and properties
1. **Utility Functions**: Like sorting or searching through a collection of objects.
2. **Counters**: Can be used to keep track of data across all instances.
3. **Configuration Constants**: Can be used to store confiuratio nvalues that are the same across all instances of the class.
```
class Children {
    static ID = 1;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Children.ID++;
    }

    static filterByAge(childrenArray, ageLimit) {
        return childrenArray.filter(child => child.age > ageLimit);
    }
}

let child1 = new Children("Prakash", 11);
let child2 = new Children("Ashish", 19);
let child3 = new Children("Ria", 9);

let olderChildren = Children.filterByAge([child1, child2, child3], 10);

console.log(olderChildren);

// Outputs:
[
  Children { name: 'Prakash', age: 11, id: 1 },
  Children { name: 'Ashish', age: 19, id: 2 }
]
```

# Private Properties
It controls access to certain properties within a class maintaining integrity, security and ensuring that these data remain protected and are only modified in a controlled manner.  
These are variables that are not meant to be accessed outside the class in which they are defined. This enforces **Encapsulation - A core principle in OOP**, thus reducing the risk of unintended side effects from direct manipulation.

> Key Features: Private Fields Syntax(#), Encapsulation, Controlled Access.

