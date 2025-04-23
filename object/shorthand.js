function getObject(name, city) {
    return {
        name, // works similar to name: name
        city, // works similar to city: city
    }
}

const obj = getObject("Sourabh", "Kolkata");
// console.log(obj);


const student = "Sourabh";
const course = "Full-Stack";
console.log({student, course});