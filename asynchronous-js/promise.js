/**
 * Promise - Promise is an object that has the status of an async operation,
 * and its corresponding value.
 */

// let promise = bookHotelAPI(hotedID);
// {
//     stateRequest --> pending / fulfilled / rejected
//     response --> value / error
// }

const URL = "https://mockdata.prakashsakari.repl.co/users";
let promise = fetch(URL);
// Initial state of promise is pending
console.log(promise);
promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error Occured", error);
  });
