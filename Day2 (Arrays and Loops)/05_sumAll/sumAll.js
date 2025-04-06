const sumAll = function (num1, num2) {
  if (!(isNaN(num1) && isNaN(num2))) {
    if (
      num1 >= 0 &&
      num2 >= 0 &&
      Number.isInteger(num1) &&
      Number.isInteger(num2)
    ) {
      let start,
        end,
        sum = 0;
      if (num1 <= num2) {
        start = num1;
        end = num2;
      } else {
        start = num2;
        end = num1;
      }

      for (start; start <= end; start++) {
        sum += start;
      }
      return sum;
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};  // My one is so complicated check the solution ones more simple and coincise

console.log(sumAll(125, 55));

//* Just Try and Error
// function isFloat(n) {
//     return n === n && n % 1 !== 0;
// }
// console.log(5 % 1);  // 0 (because 5 is an integer)
// console.log(4.5 % 1); // 0.5 (because 4.5 is a float)
// console.log(isFloat(2.2))
// console.log(Number.isInteger(-55) && (-55>=0))  // Testing isInteger function

// Do not edit below this line
module.exports = sumAll;
