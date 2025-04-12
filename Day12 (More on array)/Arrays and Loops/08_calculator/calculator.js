const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum,val)=>sum+val,0)
};

const multiply = function(arr) {
  if (arr.length == 0) return;
  return arr.reduce((mul,val)=>mul*val,1)
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  if (num == 0 || num == 1) return 1;

  return num * factorial(num - 1) ;    // its recursion
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
