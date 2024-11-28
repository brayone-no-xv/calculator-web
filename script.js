const AddOperatorFunction = document.querySelectorAll("#operator");
const AddValueFunction = document.querySelectorAll("#number");

AddValueFunction.forEach((button) => {
  button.onclick = (number) => {
    const value = number.target.value;
    document.getElementById("outputValue").value += value;
  };
});

AddOperatorFunction.forEach((button) => {
  button.onclick = (operator) => {
    const value = operator.target.value;
    document.getElementById("outputValue").value += value;
  };
});

// menghapus angka start
const clear = document.getElementById("clear");
clear.addEventListener("click", clearValue);

function clearValue() {
  document.getElementById("outputValue").value = " ";
}
// menghapus angka end

// result start
function ResultValue(id) {
  let CurrentValue = document.getElementById("outputValue").value;
  let value = eval(CurrentValue)
  document.getElementById("outputValue").value = value;
}
// result end
