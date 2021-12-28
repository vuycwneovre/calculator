/* Calculator */

let a = 0;
let b = 0;

let operator = ["+", "-", "*", "/"];

// Array to store numbers
const number = [];

// display
let display = document.getElementById("screen-text");

// Basic functions
function add(a,b) {
    let c = a + b;
    return c;
}

function subtract(a,b) {
    let c = a - b;
    return c;
}

function multiply(a,b) {
    let c = a * b;
    return c;
}

function divide(a,b) {
    let c = a / b;
    return c;
}



// Function operate
function operate(number, operator) {
    a = number[0];
    b = number[1];
    if (operator === "+") {
        display.innerHTML = add(a,b);
    } else if (operator === "-") {
        display.innerHTML = subtract(a,b);
    } else if (operator === "*") {
        display.innerHTML = multiply(a,b);
    } else if (operator === "/") {
        display.innerHTML = divide(a,b);
    }
}








