// mengambil elemen id
const AddOperatorFunction = document.querySelectorAll("#operator");
const AddValueButton = document.querySelectorAll("#number");
const outputValue = document.getElementById("outputValue");
const clearValue = document.getElementById("clear");

// add number value start
AddValueButton.forEach((button) => {
  button.onclick = (number) => {
    outputValue.value += number.target.value;
  };
});
// add number value end

// add operator function start
AddOperatorFunction.forEach((button) => {
  button.onclick = (operator) => {
    outputValue.value += operator.target.value;
  };
});
// add operator function end

// menghapus angka start
clearValue.addEventListener("click", () => {
  outputValue.value = "";
});
// menghapus angka end

// result start
function ResultValue(id) {
  const CurrentValue = outputValue.value;
  const value = eval(CurrentValue);
  setInterval(() => {
    document.getElementById("outputValue").value = value;
  }),
    2000;
}

// result end
