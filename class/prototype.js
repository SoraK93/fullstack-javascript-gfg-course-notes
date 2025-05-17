/**
 * Prototype::
 * Prototype Chaining same methods
 */

const loggedInStatus = {
  isLoggedIn: false,
  isLoggedInMessage() {
    console.log("User is logged in");
  },
};

const admin = {
  isAdmin: true,
  // here we are chaining prototype
  __proto__: loggedInStatus,
  // .this refers to the user object
  adminName() {
    console.log(this.name);
  },
  isAdminMessage() {
    console.log("User is not admin");
  },
};

const user = {
  name: "sourabh",
  role: "student",
  address: {
    city: "kolkata",
  },
  // __proto__ reserved key word. admin becomes a prototype of user object
  // Can only have one proto in a object.
  __proto__: admin,
  adminLoggedIn() {
    console.log(this.isLoggedIn);
  },
};

console.log(user.toString());

console.log(user.isAdmin);
/** If this method is available inside a object level, we are not going to search deeper into its proto objects */
user.isAdminMessage();
user.adminName();

console.log(user.isLoggedIn);
user.adminLoggedIn();
user.isLoggedInMessage();

// Getting object keys
// this does not give keys inside proto
console.log(Object.keys(user));

for(let key in user){
    // this also shows that proto is always called after all the key have been read
    console.log(key);
}
