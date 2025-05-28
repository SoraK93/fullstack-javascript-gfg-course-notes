/**
 * Promise.allsettled([arrayOfPromise])
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
let promise_settled = Promise.allSettled(arrayOfPromises);
promise_settled
  .then((res) => res.forEach((data) => console.log(data)))
  .catch((error) => console.log(error));

// Example 2
let urls = [
  "https://api.github.com/users/prakashsakari",
  "https://api.github.com/users/AshishJangra27",
  "https://no-such-url",
];
Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`${urls[num]}: ${result.reason}`);
    }
  });
});
