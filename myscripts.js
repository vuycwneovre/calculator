/* Calculator */

let a = 0;
let b = 0;

let operator = ["+", "-", "*", "/"];

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
function operate(a, operator, b) {
    if (operator === "+") {
        result = add(a,b);
        console.log(result);
    } else if (operator === "-") {
        result = subtract(a,b);
        console.log(result);
    } else if (operator === "*") {
        result = multiply(a,b);
        console.log(result);
    } else if (operator === "/") {
        result = divide(a,b);
        console.log(result);
    }
}








