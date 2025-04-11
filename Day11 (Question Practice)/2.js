//! You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// let names = [
//   { name: "John", age: 25 },
//   { name: "Pete", age: 30 },
//   { name: "Mary", age: 28 },
// ];

// let users = [];
// for (let obj of names) {
//     users.push(obj.name)
// }


// console.log(users);

// let names = /* ... your code */


//* community answer 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); // John, Pete, Mary