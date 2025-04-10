//! Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”
//* This one is my solution not so optimized
// function camelize(str) {
//     let arrOfStr = str.split("-");
//     for (let i = 1; i < arrOfStr.length; i++) {
//         let newArr = arrOfStr[i].split("")
//         newArr[0] = newArr[0].toUpperCase()
//         let word = newArr.join("")
//         arrOfStr[i] = word;
//     }
//     let newString = arrOfStr.join("")

//     return newString
// }
// console.log(camelize("my-short-string"))

//* This is the community answer
function camelize(str) {
    return str
      .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) =>
          index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
  // console.log(camelize("my-short-string"))