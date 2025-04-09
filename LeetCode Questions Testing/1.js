// Link to the question
// https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript

var createHelloWorld = function () {
    
    return function(...args) {
        return "Hello World"
    }
};
let f = createHelloWorld()
console.log(f())