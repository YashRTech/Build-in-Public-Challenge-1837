//! We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//! Create a function copySorted(arr) that returns such a copy.

//* This one is mine
// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   let newArr = [...arr];
//   newArr.sort((a, b) => {
//     return a.localeCompare(b);
//   });
//     return newArr
// }
// let sorted = copySorted(arr)
// console.log(sorted)
// console.log(arr);

//* This one is of odin community
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
