/**
 * Promise.all([arrayOfPromise])
 * https://api.github.com/users/prakashsakari
 */

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
let promise2 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Promise 2 rejected")), 2000)
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

let arrayOfPromises = [promise1, promise2, promise3];
let promise = Promise.all(arrayOfPromises);
promise.then((res) => console.log(res)).catch((error) => console.log(error));

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));

let users = ["prakashsakari", "AshishJangra27"];
let arrayOffetchPromises = users.map((user) =>
  fetch(`https://api.github.com/users/${user}`)
);
let promise_all = Promise.all(arrayOffetchPromises);
promise_all
  .then((res) => res.forEach((data) => console.log(data)))
  .then((data) => console.log(data));
