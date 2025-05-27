/**
 * Promise
 */

const isRequestSuccessful = false;

const db = [
    {
        id: 1,
        name: "Sourabh",
    },
    {
        id: 2,
        name: "Sweta",
    }
]

let promise = new Promise((resolve, reject) => {
    if (isRequestSuccessful) {
        setTimeout(() =>resolve(db), 3000);
    } else {
        const error = new Error("Something went wrong");
        reject(error.message);
    }
})
console.log(promise);

promise
    .then((response) => console.log(response))
    .catch(function (error) {
        console.log(error);
    });