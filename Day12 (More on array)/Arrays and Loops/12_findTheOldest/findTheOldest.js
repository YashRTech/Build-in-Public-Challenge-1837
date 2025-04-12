const findTheOldest = function (arr) {
  let newArr = arr.sort((a, b) => {
    let currentYear = new Date().getFullYear();
    let age1 = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    let age2 = (b.yearOfDeath || currentYear) - b.yearOfBirth;

    return age2 - age1;
  });
  return newArr[0];
};

//* Check the better optimized solution in the solutio folder this sort method is not optimized and slower in large arrays  



// Do not edit below this line
module.exports = findTheOldest;
