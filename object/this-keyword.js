/**
 * this keyword
 * Refers to the object that is executing the function
 */

// When 'this' is inside a object (as shown below). It will refer to the object itself.

// Implicit Binding
const obj = {
  name: "Sourabh",
  displayMessage: function () {
    console.log("Hello", this.name);
  },
  thisKeywordResult: function () {
    console.log(this);
  },
};
obj.displayMessage(); // print console message
obj.thisKeywordResult(); // print entire object

// Explicit Binding
function showUserName() {
  console.log(this.name);
}
const user1 = {
  name: "Sourabh",
  showName() {
    showUserName.call(this);
  },
};
const user2 = {
  name: "Shambhu",
  showName() {
    showUserName.call(this);
  },
};
const user3 = {
  name: "Urmila",
  showName() {
    showUserName.call(this);
  },
};
const user4 = {
  name: "Sweta",
  showName() {
    showUserName.call(this);
  },
};
user1.showName();
user2.showName();
user3.showName();
user4.showName();

// this in global context
// Effect of the code is better seen in browser console.

console.log(this); // return window object
function calculateSum() {
  console.log(this);
}
// calculateSum(); //return window object

const user5 = {
  name: "Indu",
  showName: function () {
    console.log("here -", this.name);
    const object = this;
    function showMessage() {
      console.log(object.name);
    }
    showMessage();
  },
  displayName: () => {
    console.log(this.name);
  },
};
user5.showName();
user5.displayName(); // Returns undefined

// Since showMessage cannot be called directly from user5, its not a part of the object. This upon calling this func it will return window object

// We can't use arrow function inside a object, because 'this' in arrow func point to global object and not user5 object.

// Since these codes are not run inside a specific object, it will return global object instead, which is window object (browser -> inspect -> console tab) as result.
