const palindromes = function (str) {
    let newStr = str.replaceAll(/[^a-zA-Z0-9]+/g, "").toLowerCase()  // its regex i used ai for regex value only other way is in solution section must check out.
    let reverseStr = newStr.split("").reverse().join("")
    return reverseStr===newStr
};




// Do not edit below this line
module.exports = palindromes;
