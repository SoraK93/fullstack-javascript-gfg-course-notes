// let courses = ["html", "css", "js", "reactjs", "jquery"];

// pop()
// let removedItem = courses.pop();
// console.log(removedItem);
// console.log(courses);

// removedItem = courses.pop();
// console.log(removedItem);
// console.log(courses);


// slice()
// let value = courses.slice(1, 4);
// console.log(courses);
// console.log(typeof value);

// let userName = "sourabh";
// let firstUpperCaseChar = userName[0].toUpperCase();
// let capitalizeName = firstUpperCaseChar + userName.slice(1);
// console.log(capitalizeName);


// splice()
let courses = ["html", "css", "js", "reactjs", "jquery", "vue,js","angular"];
courses.splice(4, 2);
console.log(courses);
courses.splice(4, 0, "jquery");
console.log(courses);
