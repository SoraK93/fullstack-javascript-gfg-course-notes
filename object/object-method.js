const obj = {
  name: "Sourabh",
  age: 99,
  city: "Mumbai",
};
const entries = Object.entries(obj);
console.log(entries);
const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);

const obj1 = {
  x: 1,
  x_var: "position",
  y: 2,
  y_var: "rank",
  z: 17,
  z_var: "loop count",
};
const values1 = Object.values(obj1);
const total = Object.values(obj1)
  .filter(Number)
  .reduce((sum, curr) => sum + curr, 0);
console.log(values1);
console.log(total);
