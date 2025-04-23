/**
 * objects --> {key: value,}
 * properties are key
 */


const personObj = {
    name: "Sourabh",
    age: 32,
    job: "Accountant",
    1: "Number One",
    course: ["html", "css", "js", "reactjs"],
    "is Admin": "true",
    address: {
        street: "G.T. Road",
        city: "kolkata",
        coutnry: "india",
    },
    activeCourse: function() {
        return personObj.course[2];
    },
};

// console.log(typeof personObj);
// console.log(personObj);
// console.log(personObj.name);
// console.log(personObj["1"]);
// console.log(personObj.is Admin); //will show Syntax Error
// console.log(personObj["is Admin"]);

delete personObj["is Admin"];
console.log(personObj);
console.log(personObj.address.city);
console.log(personObj.activeCourse());