/**
 * Function Borrowing - Call, Apply And Bind
 */

const user1 = {
  name: "Sourabh",
  age: 32,
  // sayHi() {
  //     console.log(this.name);
  // },
};
const user2 = {
  name: "Shambhu",
  age: 70,
  // sayHi() {
  //     console.log(this.name);
  // },
};
const user3 = {
  name: "Urmila",
  age: 65,
  // sayHi() {
  //     console.log(this.name);
  // },
};
const user4 = {
  name: "Sweta",
  age: 35,
  sayHi() {
    // Implicit Binding
    console.log(this.name);
  },
};

// user1.sayHi(); // Doesnt work since no method called sayHi exists inside object

function sayHi(degree, year) {
  console.log(this.name, degree, year);
}

// Explicit Binding

// Call takes simple arguments, when we have parameters to deal with.
// sayHi.call(user1, "PGDM", 2017); // the value of 'this' is user1
// sayHi.call(user2, "B.Com (HONS)", 2014); // the value of 'this' is user2

// Apply works similar to call, it just takes a array of parameters.
// sayHi.apply(user1, ["PDGM", 2017]);
// sayHi.apply(user2, ["B.Com(HONS)", 2014]);

// user4.sayHi.call(user3);

// Bind works a bit different, it will not return the desired value on call, but it returns a func which can be decalred to a var and called later.
const result = sayHi.bind(user1, "B.Com");
result(2005);
