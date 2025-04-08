//! 1. Write the code, one line for each action:
//!    Create an empty object user.
//!    Add the property name with the value John.
//!    Add the property surname with the value Smith.
//!    Change the value of the name to Pete.
//!    Remove the property name from the object.

// let obj = {}
// // console.log(typeof(obj));
// obj.name = "John"
// // console.log(obj);
// obj.surname = "Smith"
// // console.log(obj);
// obj.name = "Pete"
// // console.log(obj);
// delete obj.name
// console.log(obj);

//! 2. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// let object = {}
// console.log(Object.keys(object).length);
//? I am trying to get the length of keys of object if it will be zero then our object is empty and that's what we need.

// function isEmpty(obj) {
//     return Object.keys(obj).length===0 ? true : false
// }
// console.log(isEmpty(object));
// object.name = "John"
// console.log(isEmpty(object));

//? Another way given by Odin Community using loops
// function isEmpty(obj) {
//     for (let key in obj) {
//    //   if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }

//! 3. We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
//* Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.If salaries is empty, then the result must be 0.
// let sum = 0;  // variable for storing sum
// for (let key in salaries) {
//     sum+=salaries[key]
// }
// console.log(sum);

//! 4. Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof (obj[key]) == "number") {
//             obj[key]*=2
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu);

//! sumOfTripledEvens(array)
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}



//! Something special Can you guess what will happen.
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arr.concat(arrayLike)); // 1,2,something,else
