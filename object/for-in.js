const obj = {
    name: "Sourabh",
    city: "Kolkata",
}

const isPropertyFound = "age" in obj;
// console.log(isPropertyFound);


// for-of, forEach dont work with object
for (let key in obj) {
    console.log(key, obj[key]);
}
console.log(Object.entries(obj));