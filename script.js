// mengambil elemen id
const operatorButton = document.querySelectorAll("#operator");
const numberButton = document.querySelectorAll("#number");
const clearButton = document.getElementById("clear");
const outputValue = document.getElementById("outputValue");

// add number value start
numberButton.forEach((button) => {
  button.onclick = () => {
    outputValue.value += button.value;
  };
});
// add number value end

// add operator function start
operatorButton.forEach((button) => {
  button.onclick = () => {
    outputValue.value += button.value;
  };
});
// add operator function end

// menghapus angka start
clearButton.addEventListener("click", () => {
  outputValue.value = "";
});
// menghapus angka end

// result start
function calculatorResult(id) {
  outputValue.value = eval(outputValue.value);
}

// result end
