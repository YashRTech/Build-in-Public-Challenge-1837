const container = document.querySelector(".container");

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

const getRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
console.log(getRandomRGB());


console.log(getRandomRGB()); // Example output: rgb(134, 200, 45)

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

createBoxes(userInput);

document.querySelectorAll(".boxes").forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    elem.style.backgroundColor=getRandomRGB()
  })
})
