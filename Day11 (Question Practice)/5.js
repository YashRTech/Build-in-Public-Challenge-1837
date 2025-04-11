//! Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//! Multiple runs of shuffle may lead to different orders of elements.
let arr = [1, 2, 3];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);




//* Explanation 
//* Link to Explanation :- https://javascript.info/array-methods#create-an-extendable-calculator 
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// // counts of appearances for all possible permutations
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 10000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // counts of appearances for all possible permutations
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 10000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }
