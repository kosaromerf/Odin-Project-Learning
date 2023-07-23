// Operation functions

function addition(num1, num2) {
  return num1 + num2;
}

function substraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

//Declearing variables for inputs

let first = parseFloat(displayInput);
let second = parseFloat(displayInput);
let operator = parseFloat(getOperator);
//operate function

function operate(first, operator, second) {
  switch (operator) {
    case "+":
      result = addition(first, second);
      break;
    case "-":
      result = substraction(first, second);
      break;
    case "*":
      result = multiplication(first, second);
      break;
    case "/":
      result = division(first, second);
      break;
  }
  return result;
}

/*equal.addEventListener("click", () => {
  const expression = display.textContent;
  const [num1, op, num2] = expression.split(/(\+|\-|\*|\/)/);
  const first = parseFloat(num1);
  const second = parseFloat(num2);

  let result;
  switch (op) {
    case "+":
      result = addition(first, second);
      break;
    case "-":
      result = substraction(first, second);
      break;
    case "*":
      result = multiplication(first, second);
      break;
    case "/":
      if (second === 0) {
        result = "Error: Division by zero";
      } else {
        result = division(first, second);
      }
      break;
    default:
      result = "Error: Invalid operator";
  }

  display.textContent = result;
});*/

// Display functions

const buttons = document.querySelectorAll(".display");
const display = document.getElementById("display");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");

function displayInput() {
  buttons.forEach((number) => {
    number.addEventListener("click", () => {
      const numberText = number.textContent;
      display.textContent += numberText;
    });
  });
}

displayInput();

function getOperator() {}
getOperator();
