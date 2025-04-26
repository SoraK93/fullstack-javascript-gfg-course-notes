// ex-01
function displayName() {
  console.log(this);
}
const user1 = {
  name: "Sourabh",
  displayName, // displayName: displayName,
  showName: displayName,
};
user1.displayName();
user1.showName();

// ex-02
const user2 = {
  name: "Sourabh",
  showName: function () {
    displayName();
  },
};
user2.showName();

// ex-03
const displayName1 = () => {
  console.log(this);
};
const user3 = {
  name: "Prakash",
};
displayName1.apply(user3);

// ex-04
function User() {
  console.log(this);
}
const user4 = new User();

// ex-05
const person = {
  name: "Sourabh",
  sayHi: function () {
    console.log(`Welcome ${this.name}`);
  },
};
person.sayHi();

// ex-06
let person2 = person.sayHi;
console.log(person2);
person2();