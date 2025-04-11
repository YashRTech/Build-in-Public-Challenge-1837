//! Question Link :- "https://javascript.info/array-methods#create-an-extendable-calculator"
 
//! Create a constructor function Calculator that creates “extendable” calculator objects.
//? Mujhe samajh nhi aya copy krke smjh aur solve kr rha hun.
//? One more thing ye abhi nhi cover kiya hai but main dekhna bhul gya aur kr dala smajh smajh ke 😂😂 

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function (str) {
        let parts = str.split(" ")  // "3 + 5" => ["3","+","5"]
        let a = +parts[0];  // string "3" => number 3
        let op = parts[1];  // "+"
        let b = +parts[2];  // string "5" => number 5

        // Checking if operator is valid or not
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        // Returning result after running operator 
        return this.methods[op](a, b);
    }

    // Adding new methods
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }

}

let calc = new Calculator;
console.log(calc.calculate("5 + 7"));

calc.addMethod("**", (a, b) => a ** b)
console.log(calc.calculate("5 ** 2"));
