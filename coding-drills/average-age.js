/**
 * Average-Age of Family Members
 */

const familyMembers = [
  {
    name: "Narsingrao",
    age: 56,
  },
  {
    name: "Padma",
    age: 52,
  },
  {
    name: "Poonam",
    age: 30,
  },
  {
    name: "Prakash",
    age: 27,
  },
  {
    name: "Ashish",
    age: 50,
  },
];

const totalAge = familyMembers.reduce((total, curr) => curr.age + total, total=0);
const numberOfFamilyMembers = familyMembers.length;
const averageAge = totalAge / numberOfFamilyMembers;
console.log(averageAge);
