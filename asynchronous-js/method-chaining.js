// Method Chaining
// Example 1
const hotelName = "The Taj Palace";

function bookHotel(hotel) {
  const promise = new Promise((resolve, reject) => {
    const hotelId = "xyz123";
    if (!validateHotel()) {
      const error = new Error("No Hotel Found");
      reject(error);
    }

    if (hotelId && validateHotel) {
      setTimeout(() => {
        resolve(hotelId);
      }, 3000);
    }
  });

  return promise;
}

function validateHotel() {
  return true;
}

function payment(hotelId) {
  return new Promise((resolve) => resolve("payment successful"));
}

let hotel = bookHotel(hotelName);
hotel
  .then((hotelId) => {
    console.log({ hotelId });
    return hotelId;
  }) //1
  .catch((err) => console.log(err))
  .then(function (hotelId) {
    //2
    return payment(hotelId);
  })
  .catch((err) => console.log(err))
  .then((response) => console.log(response)) //3
  .catch((error) => console.log(error.message));

// Example 2
function asyncOperation(value) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const result = value * 2;
      resolve(result);
    }, 1000);
  });
}

// Chain multiple 'then' methods
asyncOperation(3)
  .then(result1 => {
    console.log(`Step 1: ${result1}`);
    return result1 + 5;
  })
  .then(result2 => {
    console.log(`Step 2: ${result2}`);
    return result2 * 3;
  })
  .then(finalResult => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

// Promise Chaining
let promise = new Promise((resolve, reject) => {
    resolve("Hello JavaScript");
});
promise
    .then(function (result1){
        console.log(result1);
        return new Promise((resolve, reject) => {
            resolve("GFG is awesome");
        })
    })
    .then(function (result2) {
        console.log(result2);
    });
