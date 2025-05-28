/**
 * Promise.race([arrayOfPromise])
 * https://api.github.com/users/prakashsakari
 */

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 3000)
);
let promise2 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Promise 2 rejected")), 1000)
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 2000)
);

let arrayOfPromises = [promise1, promise2, promise3];
// promise.race waits for the first settled promise, whether it is resolved or rejected.
let promise = Promise.any(arrayOfPromises);
promise.then((res) => console.log(res)).catch((err) => console.log(err));

// Example 2
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then((res) => console.log(res)); // 1
