// spread
const arr1 = [1, 2, 3, 4];
console.log(arr1);

const arr2 = [7, 8, 9];
console.log(arr2);

const arr3 = [...arr1, 5, 6, ...arr2, 10, 11];
console.log(arr3);


// spread with math
let arr = [1,2,3,-1];
console.log(Math.min(...arr));


// spread with dictionary
const user1 = {
    name: 'Jen',
    age: 22,
}
const user2 = {
    name: 'Andrew',
    location: 'Philadelphia',
}
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers);
