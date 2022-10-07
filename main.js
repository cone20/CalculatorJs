const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const resultEl = document.querySelector(".result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".clearAll");
const clearLast = document.querySelector(".clearLast");

let disNum1 = "";
let disNum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;
let copyResult = null;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    disNum2 += e.target.innerText;
    display2El.innerText = disNum2;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!disNum2) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (disNum1 && disNum2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(disNum2);
    }

    clearVar(operationName);
    lastOperation = operationName;
  });
});

const mathOperation = () => {
  if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(disNum2);
  } else if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(disNum2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(disNum2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(disNum2);
  }
};

const clearVar = (name = "") => {
  disNum1 += disNum2 + " " + name + " ";
  display1El.innerText = disNum1;
  display2El.innerText = "";
  disNum2 = "";
  resultEl.innerText = result;
};

equalEl.addEventListener("click", (e) => {
  if (!disNum1 || !disNum2) return;
  if ((!disNum1 || !disNum2) && lastOperation) result;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  resultEl.innerText = "";
  display1El.innerText = "";
  disNum1 = "";
});

clearAllEl.addEventListener("click", () => {
  disNum1 = "";
  disNum2 = "";
  display1El.innerText = "0";
  display2El.innerText = "0";
  result = null;
  resultEl.innerText = "0";
});

clearLast.addEventListener("click", () => {
  disNum2 = "";
  display2El.innerText = "0";
});
