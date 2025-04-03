const convertToCelsius = function (f) {
  // f=c*9/5 +32
  let result = ((f - 32) * 5) / 9;
  return parseFloat(result.toFixed(1));    // toFixed rounds the Number to n decimal places but returns a string
};

const convertToFahrenheit = function (c) {
  // f=c*9/5 +32
  let result = (c * 9) / 5 + 32;
  return parseFloat(result.toFixed(1))
};
console.log(convertToFahrenheit(73.2))
// console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
