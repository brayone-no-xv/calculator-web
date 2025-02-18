// mengambil elemen id
const outputValue = $("#outputValue");

// add number value start
const numberButton = $("#number");
$(numberButton).each(function (this) {
  this.on("click", function () {
    $(outputValue).value += button.value;
  });
});
// add number value end

// add operator function start
const operatorButton = document.querySelectorAll("#operator");
operatorButton.forEach((this) => {
  this.addEventListener("click", () => {
    outputValue.value += button.value;
  });
});
// add operator function end

// menghapus angka start
clearButton.addEventListener("click", () => {
  outputValue.value = "";
});
// menghapus angka end

// result start
const clearButton = document.getElementById("clear");
function calculatorResult() {
  outputValue.value = eval(this.value);
}

// result end
