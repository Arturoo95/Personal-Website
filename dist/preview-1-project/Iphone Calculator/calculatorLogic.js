const inputField = document.getElementById("input-screen-css");
const numButtons = document.querySelectorAll(".num-button");

function addToField(value) {
  if (inputField.value === "0") {
    inputField.value = "";
  }
  inputField.value += value;
}

function mathOperation(operator) {
  switch (operator) {
    case "+":
      return (inputField.value += "+");
      break;
    case "-":
      return (inputField.value += "-");
      break;
    case "*":
      return (inputField.value += "*");
      break;
    case "/":
      return (inputField.value += "/");
      break;
    case "%":
      return (inputField.value += "%");
      break;
  }
}

function calculateResult() {
  try {
    inputField.value = eval(inputField.value);
  } catch (error) {
    inputField.value = "Error";
  }
}

function toggleSign() {
  let currentValue = inputField.value;
  let toggledValue = (parseFloat(currentValue) * -1).toString();
  inputField.value = toggledValue;
}
