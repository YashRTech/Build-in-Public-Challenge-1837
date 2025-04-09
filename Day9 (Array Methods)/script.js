//! Splice
// let arr = ["I", "go", "home"];
// delete arr[1]; // remove "go"
// console.log( arr[1] ); // undefined
// // now arr = ["I",  , "home"];
// console.log( arr.length ); // 3

// let arr = ["I", "go", "home"];
// arr.splice(1, 1)
// console.log(arr)
// arr.splice(1, 0,"Yash","Krish","Ram","Shyam")
// console.log(arr)

// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// console.log( arr ); // 1,2,3,4,5

// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3 does not include 3)
// console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

//! Index and lastIndexOf methods of array
// let fruits = ['Apple', 'Orange', 'Apple']

// console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
// console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

//! Find method
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let user = users.find((item) => item.id == 1);
// console.log(user.name); // John

//! FindIndex and FindLastIndex
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];
// Find the index of the first John
console.log(users.findIndex((user) => user.name == "John")); // 0
// Find the index of the last John
console.log(users.findLastIndex((user) => user.name == "John")); // 3
