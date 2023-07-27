const calculator = (num1, operator, num2) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Cannot divide by zero";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator";
  }
};

const number1 = 10;
const number2 = 5;
const operation = "+";

const result = calculator(number1, operation, number2);
console.log(result);
