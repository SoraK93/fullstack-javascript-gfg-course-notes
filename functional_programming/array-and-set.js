// Arrays
// Array can store duplicate values
// Array maintains order in which data is received
// Thus, array have a indexing system
// const studentIds = new Array();
// studentIds.push(1);
// studentIds.push(2);
// studentIds.push(1);
// console.log({studentIds});
// console.log(studentIds[1]);
// const arr = [1, 2, 3];
// console.log(arr[2]);


// Set
// Set only stores unique values
// Set does not maintain any order
// Set does not have a indexing system
// const employeeIds = new Set();
// employeeIds.add(1);
// employeeIds.add(2);
// employeeIds.add(3);
// employeeIds.add(1);
// console.log({employeeIds});
// console.log(employeeIds[2]); // Returns undefined


// Convert array to set and set to array
// const ids = [1,2,3,4,4,4];
// const uniqueIds = new Set(ids);
// console.log({uniqueIds});
// const newIds = [...uniqueIds];
// console.log({newIds});

// Methods of set
const newList = new Set();
newList.add(11); // add specified value into set
newList.add(21);
newList.add(31);
// newList.clear(); // Clear set of all data
// newList.delete(1); //delete specified value from set
// console.log(newList.size);
// console.log(newList.keys()); // Retrive all the keys
// console.log(newList.values()); // Retrive all the values
// console.log(newList.entries()); // Returns [value, value] structure for each element
// console.log({newList});
// console.log(newList.has(11)); // Checks if the value is present in the set
// console.log(newList.has(1));

// Takes a function is parameter and run it for each element
newList.forEach((value) => console.log({value}));
