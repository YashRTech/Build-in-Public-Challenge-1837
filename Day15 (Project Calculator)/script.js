let a = "";
let b = "";
let resetScreen = false;
let currentOperation = null;

let currentResult = document.querySelector(".result");
let prevResult = document.querySelector(".previousResult");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
const nums = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equal]");
const pointBtn = document.querySelector("[data-point]");

window.addEventListener("keydown", handleKeyboardInput);
equalsBtn.addEventListener("click", evaluate);
pointBtn.addEventListener("click", appendPoint);

function appendPoint() {
  if (resetScreen) resetCurrentScreen();
  if (currentResult.textContent === "") currentResult.textContent = "0";
  if (currentResult.textContent.includes(".")) return;
  currentResult.textContent += ".";
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) handleNums(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    handleOperators(e.key);
}


//* Handling Operators
operators.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    handleOperators(opButton.textContent);
  });
});

function handleOperators(op) {
  if (currentOperation != null) evaluate();

  a = currentResult.textContent;
  currentOperation = op;
  prevResult.textContent = `${a} ${op}`;
  resetScreen = true;
}
function evaluate() {
  if (currentOperation == null || resetScreen) return;
  if (currentOperation === "/" && currentResult.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }

  b = currentResult.textContent;

  let result = roundResult(operate(currentOperation, a, b));
  resetScreen = true;
  currentResult.textContent = result;
  prevResult.textContent = `${a} ${currentOperation} ${b} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function resetCurrentScreen() {
  currentResult.textContent = "";
  resetScreen = false;
}

//* Handling numbers
nums.forEach((button) => {
  button.addEventListener("click", () => handleNums(button.textContent));
});
function handleNums(number) {
  if (currentResult.textContent === "0" || resetScreen) resetCurrentScreen();
  currentResult.textContent += number;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return alert("You can't divide by zero");
  }
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
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
    default:
      return null;
  }
}

function clear() {
  prevResult.textContent = "";
  currentResult.textContent = "0";
  a = "";
  b = "";
  currentOperation = null;
}
clearBtn.addEventListener("click", clear);
function backspace() {
  let text = currentResult.textContent;
  currentResult.textContent = text.slice(0, -1);
  console.log(text);
}
deleteBtn.addEventListener("click", backspace);
