// let arr = [1, 2, 3, ["html", "css", "js"], 5, 6];

// const [a, b, c,  courses] = arr;
// console.log(a, b, c);
// console.log(courses);

// const [, , ,  courses1, a1] = arr;
// console.log(courses1);
// console.log(a1);

// arr = [["html", "css", "js"], 1, 2, 3, 4, 5, 6];
// const [courses2, ...rest] = arr;
// console.log(courses2);
// console.log(rest);


// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(a, b);


// ({x, y, ...rest} = {x:10, y: 20, m: 30, n: 40});
// console.log(x, y);
// console.log(rest);


// Destructuring using object
// const user = {
//     name: 'John Doe',
//     age: 30,
//     job: 'Developer',
// };
// const {name, age, job} = user;
// console.log(name);
// console.log(age);
// console.log(job);

// Renaming variables
// const {name: userName, age: userAge, job: userJob} = user;
// console.log(userName);
// console.log(userAge);
// console.log(userJob);


// Nested object destructuring
const user = {
    userName: 'John Doe',
    address: {
        city: 'New York',
        country: 'USA',
    }
};
const {userName, address:{city, country}} = user;
console.log(userName, city, country);
const {job='Unemployed'} = user;
console.log(userName, job);


// Destructuring Function Parameters
function displayUser({customerName, age}) {
    console.log(`Name: ${customerName}, Age: ${age}`);
}
const customer = {
    customerName: 'John Doe',
    age: 30,
};
displayUser(customer);