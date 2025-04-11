//! Let arr be an array.
//! Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
    return arr.filter((elem, index) => index == arr.indexOf(elem));
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O
