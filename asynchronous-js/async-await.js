/**
 * async-await
 */

const getUserData = async () => {
    try{
        const promise = await fetch("https://api.github.com/users/SoraK93");
        const response = await promise.json();
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}
getUserData();

// async function showResponse() {
//   try {
//     let promise = Promise((resolve, reject) => reject("Promise rejected"));
//     // Function execution stop her until the promise is settled.
//     let result = await promise;
//     console.log(result);
//   } catch (err) {
//     console.log("Error Occured::", err);
//   }
// }
// showResponse();