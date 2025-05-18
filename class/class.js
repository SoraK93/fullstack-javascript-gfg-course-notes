class User{
    constructor(name, role, isAdmin, isLoggedIn){
        (this.name = name),
        (this.role = role),
        (this.isAdmin = isAdmin),
        (this.isLoggedIn = isLoggedIn);
    }

    displayInfo(){
        console.log(`${this.name} is a ${this.role}`);
    }
};

const user2 = new User("Shambhu", "Accountant", false, true);
const user3 = new User("Urmila", "HouseMaker", true, false);
const user4 = new User("Sweta", "Dependent", false, false);
const user1 = new User("Sourabh", "Accountant", false, false);
user1.displayInfo();
console.log(user2);
console.log(user3);
console.log(user4);