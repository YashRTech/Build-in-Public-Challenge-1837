let prevResult = document.querySelector(".previousResult");
let currentResult = document.querySelector(".result");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
const btnContainer = document.querySelector(".btn-container");
let nums = document.querySelectorAll("[data-num]");
let operator = document.querySelectorAll("[data-operator]");
const operators = "+-*/";
let currentScreen = false;

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
  if (b === 0) {
    return alert("You can't divide by zero");
  }
  return parseFloat(a) / parseFloat(b);
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

function clear() {
  prevResult.textContent = "";
  currentResult.textContent = "0";
}
clearBtn.addEventListener("click", clear);
function backspace() {
  let text = currentResult.textContent;
  currentResult.textContent = text.slice(0, -1);
  console.log(text);
}
deleteBtn.addEventListener("click", backspace);

function handleNums(e) {
  if (
    currentResult.textContent == "" ||
    currentResult.textContent == 0 ||
    currentResult.textContent == prevResult.textContent.slice(0, -1)
  ) {
    currentResult.textContent = e.target.textContent;
  } else {
    currentResult.textContent += e.target.textContent;
  }
}

//* Handling numbers
nums.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    handleNums(e);
  });
});

//* Handling operations
function handleOperators(e) {
  let a = currentResult.textContent;
  let b = prevResult.textContent.slice(0, -1) || 0;
  if (prevResult.textContent == "") {
    let result = operate(e.target.textContent, b, a);
    currentResult.textContent = result;
    prevResult.textContent = result + e.target.textContent;
  } else {
    let result = operate(prevResult.textContent.slice(-1), b, a);
    currentResult.textContent = result;
    prevResult.textContent = result + e.target.textContent;
    
  }
}
operator.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    handleOperators(e);
  });
});
