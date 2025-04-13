let prevResult = document.querySelector(".previousResult");
let currentResult = document.querySelector(".result");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");
const btnContainer = document.querySelector(".btn-container");

function add(a, b) {
  return parseFloat(a) + parseFloat(b)
}
function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
  return aparseFloat(a) * parseFloat(b);
}
function divide(a, b) {
  if (b === 0) {
    return alert("You can't divide by zero");
  }
  return parseFloat(a) / parseFloat(b);
}

function operate(operator, a, b) {
  if (b == "") {
    b = 0;
  }
  switch (operator) {
    case "+":
      let sum = add(a, b);
      prevResult.textContent = `${a}+${b}=`;
      currentResult.textContent = `${sum}`;
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
      alert("Enter valid operations");
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

function handleClicks(e) {
  const nums = "0123456789";
  const operators = "+-*/";
  let a = prevResult.textContent.slice(0,-1);
  let b = currentResult.textContent;

  if (e.target.classList.contains("btn")) {
    if (nums.includes(e.target.textContent)) {
      if (currentResult.textContent == 0 && currentResult.textContent != "0.") {
        let newResult = e.target.textContent;
        currentResult.textContent = newResult;
      } else {
        let newResult = currentResult.textContent + e.target.textContent;
        currentResult.textContent = newResult;
      }
    }

    //* handling floating point numbers
    if (
      e.target.textContent == "." &&
      !currentResult.textContent.includes(".")
    ) {
      let newResult = currentResult.textContent + e.target.textContent;
      currentResult.textContent = newResult;
    }

    if (operators.includes(e.target.textContent)) {
      let a = currentResult.textContent;
      let b = prevResult.textContent.slice(0, -1);
      operate(e.target.textContent);
    }
  }
}

btnContainer.addEventListener("click", (e) => {
  handleClicks(e);
});
