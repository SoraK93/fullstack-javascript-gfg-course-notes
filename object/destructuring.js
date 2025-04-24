// let number = [1, 2, 3];
// let[a, b, c] = number;

let obj = {
  userName: "Sourabh",
  address: {
    state: "WB",
    city: "Kolkata",
    locality: "Baguihati",
  },
  courses: ["html", "css", "js", "reactjs", "redux"],
};

// these variable names need to be same as key in object above
let { userName, ...rest } = obj;
// let {address, address: {city, state, locality}, courses} = obj;
// console.log(userName);
// console.log(rest);
// We are destructuring address object and not address property.
// If we want to get address object seperately we have to declare it seperately
let { city, state, locality } = obj.address;
// console.log(rest.address);
// console.log(city);
// console.log(state);

// userName is changed to customerName
let { userName: customerName, address: customerAddress } = obj;
// console.log(customerName);
// console.log(typeof customerName);
// Now it becomes undefined
// console.log(userName);

const employees = {
  engineers: {
    em1: {
      id: 1,
      name: "Prakash Sakari",
      occupation: "Front End Engineer",
    },
    em2: {
      id: 2,
      name: "Ashish Jangra",
      occupation: "Data Scientist",
    },
  },
  placement: {
    em3: {
      id: 3,
      name: "Sourabh Kheria",
      occupation: "Sr. Executive",
      achi: {
        first: "Finished coding studies in 2 years",
        second: "Got a job in FAANG",
        third: "Learned how to deal in shares",
      },
    },
  },
  youtube: {
    em4: {
      id: 4,
      name: "Jay Paswan",
      occupation: "Youtube Manager",
    },
  },
};

// let {engineers: {em2: {name, occupation}}} = employees;
// console.log(name, occupation);

// let {youtube: {em4: {name, occupation}}} = employees;
// console.log(name, occupation);

let {placement: {em3: {achi: {first, second, third}}}} = employees;
console.log(first, second, third);