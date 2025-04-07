const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");
const clearBtn = document.querySelector(".clearBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const chooseColor = document.querySelector(".chooseColor");
const colorMode = document.querySelector(".colorMode");
const toggleLines = document.querySelector(".toggleLines");
const eraser = document.querySelector(".eraser");

let color = true;
let rainbow = true;
let lines = true;
let eraserToggle = true;

//! Toggleing Modes

//* colorMode Toggle

// Boxes creating and appending
const createBoxes = (num) => {
  let height = 550 / num;
  let width = 550 / num;
  let totalBoxes = num * num;
  for (let i = 1; i <= totalBoxes; i++) {
    const box = document.createElement("div");
    box.style.height = `${height}px`;
    box.style.width = `${width}px`;
    box.classList.add("boxes");
    container.appendChild(box);
  }
};

// Toggle GridLines
let isLinesEnable = true;
toggleLines.addEventListener("click", () => {
  if (isLinesEnable) {
    document.querySelectorAll(".boxes").forEach((elem) => {
      elem.style.border = "none";
      isLinesEnable = false;
    });
  } else {
    document.querySelectorAll(".boxes").forEach((elem) => {
      elem.style.border = "1px solid black";
      isLinesEnable = true;
    });
  }
  colorMode.classList.remove("btn-on");
  rainbowBtn.classList.remove("btn-on");
  toggleLines.classList.add("btn-on");
  eraser.classList.remove("btn-on");
});

// Getting random color
const getRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
console.log(getRandomRGB()); // Example output: rgb(134, 200, 45)

//! Reset grid
let defaultGrid = 16;
const resetGrid = () => {
  container.innerHTML = "";
  let userInput = parseInt(
    prompt(
      "Enter your resolution multiplier between 0-100 \nExample: If you want 16*16, do enter 16"
    )
  );
  while (userInput < 0 || userInput > 100 || isNaN(userInput)) {
    userInput = parseInt(
      prompt("Invalid number Enter number between 0-100 only")
    );
  }
  defaultGrid = userInput;
  createBoxes(defaultGrid); // Default grid
};
createBoxes(16); // Default grid created

resetBtn.addEventListener("click", resetGrid);

// Adding events for sketch pad to start on click and disable on again click
let isDrawing = false;
const boxMouseoverHandler = (e) => {
  if (isDrawing) {
    e.target.style.backgroundColor = getRandomRGB();
  }
};
container.addEventListener("mousedown", () => {
  isDrawing = true;
});
container.addEventListener("mouseup", () => {
  isDrawing = false;
});

//! Rainbow Mode
rainbowBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("boxes")) {
      e.target.style.backgroundColor = getRandomRGB();
    }
  });
  colorMode.classList.remove("btn-on");
  rainbowBtn.classList.add("btn-on");
  toggleLines.classList.remove("btn-on");
  eraser.classList.remove("btn-on");
});

//! Clear grid
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".boxes").forEach((elem) => {
    elem.style.backgroundColor = "white";
  });
});

//! Color mode

const handleColorMode = () => {
  container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("boxes")) {
      e.target.style.backgroundColor = chooseColor.value;
    }
  });
  colorMode.classList.add("btn-on");
  rainbowBtn.classList.remove("btn-on");
  toggleLines.classList.remove("btn-on");
  eraser.classList.remove("btn-on");
};
handleColorMode()
colorMode.addEventListener("click", handleColorMode);

//! eraser
const handleEraser = () => {
  container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("boxes")) {
      e.target.style.backgroundColor = "white";
    }
  });
  colorMode.classList.remove("btn-on");
  rainbowBtn.classList.remove("btn-on");
  toggleLines.classList.remove("btn-on");
  eraser.classList.add("btn-on");
};
eraser.addEventListener("click", handleEraser);
