//! Sort method
// let arr = [ 1, 2, 15 ];
// // the method reorders the content of arr
// arr.sort();
// console.log(arr);

//* The items are sorted as strings by default. That's why we need to give a function
// let arr = [21, 32, 65, 2, 13, 25, 7]
// arr.sort((a,b) => {
// return a-b   //* for ascending order
// return b-a   //* for descending order
// })
// console.log(arr)

//! Testing what's happening every time check in the browser console
// arr.sort(function(a, b) {
//   console.log( a + " <> " + b );
//   return a - b;
// });

//* Still I don't understand it's background working 😂😂

//! Comparison for strings
let countries = ["Österreich", "Andorra", "Vietnam"];

// console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

// console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

// console.log("Yash">"Krish")

//! Reverse
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log( arr ); // 5,4,3,2,1

//! split() and join()
// let names = "Bilbo, Gandalf, Nazgul";

// let arr = names.split(", ");
// console.log(arr);

// let str=arr.join(" , ")
// console.log(str);

//! Reduce/ReduceRight
// Syntax:
// let value = arr.reduce(function (accumulator, item, index, array) {
//     ...
//   }, [initial]);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);  // we don't need to return explicity when there is only one line code but remember must not use "{}" if you use this then you need to use return statement.
// console.log(result); // 15
// let newResult = arr.reduceRight((sum, current) => sum + current, 0)
// console.log(newResult) // 15

//* both have same result but ther is only difference the reduceRight() goes from right to left



//! Array.isArray()
// console.log(Array.isArray({})); // false

// console.log(Array.isArray([])); // true



//! thisArg
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };
  
//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];
  
//   // find users, for who army.canJoin returns true
//   let soldiers = users.filter(army.canJoin, army);
  
//   console.log(soldiers.length); // 2
//   console.log(soldiers[0].age); // 20
//   console.log(soldiers[1].age); // 23


//! arr.every(),arr.some()
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  // return arr1.length === arr2.length && arr1.some((value, index) => value === arr2[index]);
}

// console.log(arraysEqual([1, 2,5], [1, 2,3])); // true in some case but false in every
// console.log(arraysEqual([1, 2,3], [1, 2,3])); // true in both case but false in every


//* every() check for each value all should be true but some() checks if any one of them will become true  
