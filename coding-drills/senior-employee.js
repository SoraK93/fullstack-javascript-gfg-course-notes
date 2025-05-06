/**
 * Create an array of names of senior employees
 */

const employees = [
  {
    name: "Prakash",
    numOfYears: 5,
  },
  {
    name: "Ashish",
    numOfYears: 3,
  },
  {
    name: "Riya",
    numOfYears: 1,
  },
  {
    name: "Jay",
    numOfYears: 1,
  },
  {
    name: "Chinmoy",
    numOfYears: 5,
  },
];

const result = employees
  .filter((employee) => employee.numOfYears >= 5)
  .map((employee) => employee.name);
console.log(result);
