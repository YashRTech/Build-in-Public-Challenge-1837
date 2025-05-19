import * as Calculator from "./calculate.js";

const Status = (() => {
  const defaultStatus = {
    a: "",
    b: "",
    result: "0",
    currentOperator: "",
  };
  let currentStatus = { ...defaultStatus };

  const resetStatus = () => {
    currentStatus = { ...defaultStatus };
  };
  const getCurrentStatus = () => currentStatus;
  const getOperator = () => currentStatus.currentOperator;
  const getResult = () => currentStatus.result;

  const updateA = (a) => {
    currentStatus.a += a;
  };
  const updateB = (b) => {
    currentStatus.b += b;
  };
  const resetA = (a) => {
    currentStatus.a = a;
  };
  const resetB = (b) => {
    currentStatus.b = b;
  };
  const updateOperator = (operator) => {
    currentStatus.currentOperator = operator;
  };
  const updateResult = (result) => {
    currentStatus.result = result;
  };

  const getA = () => currentStatus.a;
  const getB = () => currentStatus.b;

  return {
    resetStatus,
    getCurrentStatus,
    updateA,
    updateB,
    resetA,
    resetB,
    updateOperator,
    updateResult,
    getA,
    getB,
    getOperator,
    getResult,
  };
})();

const displayDom = (() => {
  const result = document.querySelector(".result");
  const prevResult = document.querySelector(".previousResult");

  const displayResult = (res) => {
    result.textContent = res;
  };
  const displayPrevResult = (res) => {
    prevResult.textContent = res + " " + Status.getOperator();
  };

  const displayCurrentStatus = () => {
    result.textContent = Status.getResult();
    displayPrevResult(Status.getA());
  };
  const displayExpression = () => {
    result.textContent = Status.getResult();
    prevResult.textContent =
      Status.getA() + " " + Status.getOperator() + " " + Status.getB() + " =";
  };
  const getExpression = () => prevResult.textContent;

  return {
    displayResult,
    displayCurrentStatus,
    displayPrevResult,
    displayExpression,
    getExpression,
  };
})();

const nums = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operator]");
const dataPoint = document.querySelector("[data-point]");
const dataEqual = document.querySelector("[data-equal]");
const btnDelete = document.querySelector(".btn-delete");
const btnClear = document.querySelector(".btn-clear");

dataPoint.addEventListener("click", appendPoint);
function appendPoint() {
  let a = Status.getA();
  let b = Status.getB();
  let operator = Status.getOperator();

  if (displayDom.getExpression().includes("=")) {
    Status.resetA(Status.getResult());
    displayDom.displayResult(Status.getA());
  }

  if (operator === "" && !a.includes(".")) {
    if (a === "") {
      Status.updateA("0.");
      displayDom.displayResult(Status.getA());
      return;
    }
    Status.updateA(".");
    displayDom.displayResult(Status.getA());
  } else if (!b.includes(".") && a) {
    if (b === "") {
      Status.updateB("0.");
      displayDom.displayResult(Status.getB());
      return;
    }
    Status.updateB(".");
    displayDom.displayResult(Status.getB());
  }
}

nums.forEach((num) => {
  num.addEventListener("click", () => {
    handleNums(num.textContent);
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    handleOperators(op.textContent);
  });
});

dataEqual.addEventListener("click", handleEqual);

const handleNums = (val) => {
  let a = Status.getA();
  let b = Status.getB();

  if (a === "0") {
    Status.resetA(val);
    displayDom.displayResult(val);

    return
  }
  if (b === "0") {
    Status.resetB(val);
    displayDom.displayResult(val);

    return
  }

  if (displayDom.getExpression().includes("=") && Status.getResult()!=="0") {
    Status.resetStatus();
  }


  if (Status.getResult() === "0") {
    Status.updateA(val);
    displayDom.displayResult(Status.getA());
  } else {
    Status.updateB(val);
    displayDom.displayPrevResult(Status.getA());
    displayDom.displayResult(Status.getB());
  }
};

const handleOperators = (operator) => {
  let a = Status.getA();
  let b = Status.getB();
  if (a === "" && b === "") {
    Status.resetA(Status.getResult());
    Status.updateOperator(operator);
    displayDom.displayCurrentStatus();
    return;
  }

  if (a !== "" && b !== "") {
    let currentOperator = Status.getOperator();
    let result = Calculator.calculate(a, b, currentOperator);
    Status.updateResult(result);
    Status.resetA(result);
    Status.resetB("");
    Status.updateOperator(operator);
    displayDom.displayCurrentStatus();
  } else {
    Status.updateResult(a);
    Status.updateOperator(operator);
    Status.resetB("");
    displayDom.displayCurrentStatus();
  }
};

function handleEqual() {
  let a = Status.getA();
  let b = Status.getB();
  if (a === "" || b === "") return;
  let result = Calculator.calculate(
    Status.getA(),
    Status.getB(),
    Status.getOperator()
  );
  Status.updateResult(result);
  displayDom.displayExpression();
}

btnDelete.addEventListener("click", backspace);
function backspace() {
  let a = Status.getA();
  let b = Status.getB();
  let operator = Status.getOperator();
  
  if (displayDom.getExpression().includes("=") && Status.getResult()!=="0") {
    clear();
    return
  }
  if (operator === "") {
    let newA = a.slice(0, -1);
    Status.resetA(newA);
    displayDom.displayResult(newA);
  } else {
    let newB = b.slice(0, -1);
    Status.resetB(newB);
    displayDom.displayResult(newB);
  }
}

btnClear.addEventListener("click", clear);
function clear() {
  Status.resetStatus();
  displayDom.displayCurrentStatus();
}

function handleKeyboardInput(e) {
  if (e.keyCode === 32) return;
  if (e.key >= 0 && e.key <= 9) handleNums(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") handleEqual();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clear();

  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    handleOperators(e.key);
}

window.addEventListener("keydown", (e) => {
  handleKeyboardInput(e);
});
