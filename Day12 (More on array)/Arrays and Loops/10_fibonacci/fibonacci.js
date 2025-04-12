// const fibonacci = function(num) {
//     num = parseInt(num);
//     if(num<0) return "OOPS"

//     let fibonacci = [0,1];
//     for (let i = 2; i <= num; i++){
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     return fibonacci[num];
// };

//* Above⬆️ version store all values in array it is ok for small numbers but for bigger there should be a different approach for low memory use see below⬇️
const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) return "OOPS";
  if (num === 0) return 0;

  let a = 0,
    b = 1;
  for (let i = 2; i <= num; i++) {
    [a, b] = [b, a + b]; // Changin the values using array destructuring
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
