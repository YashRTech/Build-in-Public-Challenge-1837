const removeFromArray = function (arr, ...values) {
  let newArr = [...arr];
  for (let item of values) {
    newArr = newArr.filter((num) => num !== item);
  }
  return newArr;
};
// console.log(removeFromArray([1, 2, 6, 3, 1, 5], 2, 1, 6, "helo"));

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did above.

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
