// Private property
// Cannot be accessed outside.
class User {
  #id = 123;

  changeId(id) {
    this.#id = id;
  }
}
const user = new User();
user.changeId(321);
console.log(user);

// Closures
const PrivateData = new WeakMap();

class Example {
  constructor(value) {
    PrivateData.set(this, value);
  }

  getPrivateField() {
    return PrivateData.get(this);
  }
}

const obj = new Example("Hidden Info");
console.log(obj);
console.log(obj.getPrivateField());



