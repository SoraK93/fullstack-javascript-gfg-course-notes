/**
 * new keyword and constructor functions
 *
 * Constructor functions techincally are regular functions.
 * They have 2 conventions though they are named with capital letter first.
 * They should be executed only with "new" operator.
 *
 */

function User(userName, age) {
  //   console.log(this);
  this.name = userName;
  this.age = age;
}

// new helps with creating an object
const user1 = new User("Sourabh", 10);
console.log(user1);

const user2 = new User("Shambhu", 20);
console.log(user2);

const user3 = new User("Urmila", 15);
console.log(user3);

const user4 = User("Sweta", 5);
console.log(User("Sweta", 5));