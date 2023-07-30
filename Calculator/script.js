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

//operate function

function operate(first, operator, second) {
  switch (operator) {
    case "+":
      return addition(first, second);
    case "-":
      return substraction(first, second);

    case "*":
      return multiplication(first, second);

    case "/":
      if (second === 0) return alert("You can't divide by 0!");
      else return division(first, second);
  }
}

// Display functions

const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const backspace = document.getElementById("backspace");
const sing = document.getElementById("sing");
const oper = document.querySelectorAll(".operator");

function displayInput() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      const numberText = number.textContent;
      display.textContent += numberText;
    });
  });
}

displayInput();

function roundDecimal(result) {
  return Math.round(result * 100000) / 100000;
}

oper.forEach((op) => {
  op.addEventListener("click", () => {
    try {
      const first = parseFloat(getNumber1());
      const second = parseFloat(getNumber2());
      const operator = getOperator();
      const result = operate(first, operator, second);
      const roundedResult = roundDecimal(result);
      display.textContent = roundedResult.toString() + op.textContent;
    } catch (error) {
      const numberText = op.textContent;
      display.textContent += numberText;
    }
  });
});

equal.addEventListener("click", () => {
  try {
    const first = parseFloat(getNumber1());
    const second = parseFloat(getNumber2());
    const operator = getOperator();
    const result = operate(first, operator, second);
    const roundedResult = roundDecimal(result);
    display.textContent = roundedResult.toString();
  } catch (error) {
    alert("No valid input");
  }
});

reset.addEventListener("click", () => {
  display.textContent = "";
});

backspace.addEventListener("click", () => {
  display.textContent = display.textContent.toString().slice(0, -1);
});

sing.addEventListener("click", () => {
  display.textContent = display.textContent * -1;
});

// Dividing Display

function getNumber1() {
  regex1 = /^[-]?\d+[.]?\d*/;
  return display.textContent.match(regex1)[0];
}

function getNumber2() {
  regex2 = /\d+[.]?\d*$/;
  return display.textContent.match(regex2)[0];
}

function getOperator() {
  regex3 = /\d[+\-*/]/;
  return display.textContent.match(regex3)[0].slice(1);
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const validKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "=",
    "Enter",
    "Escape",
    "Backspace",
  ];

  if (validKeys.includes(key)) {
    event.preventDefault();

    if (key === "Enter" || key === "=") {
      const first = parseFloat(getNumber1());
      const second = parseFloat(getNumber2());
      const operator = getOperator();
      const result = operate(first, operator, second);
      const roundedResult = roundDecimal(result);
      display.textContent = roundedResult.toString();
    } else if (key === "Escape") {
      display.textContent = "";
    } else if (key === "Backspace") {
      display.textContent = display.textContent.toString().slice(0, -1);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      try {
        const first = parseFloat(getNumber1());
        const second = parseFloat(getNumber2());
        const operator = getOperator();
        const result = operate(first, operator, second);
        const roundedResult = roundDecimal(result);
        display.textContent = roundedResult.toString() + key;
      } catch (error) {
        const numberText = key;
        display.textContent += numberText;
      }
    } else {
      display.textContent += key;
    }
  }
});
