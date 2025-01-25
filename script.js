// mengambil elemen id
const outputValue = $("#outputValue");

// add number value start
const numberButton = $("#number");
$(numberButton).each(function (button) {
  button.on("click", function () {
    $(outputValue).value += button.value;
  });
});
// add number value end

const boxes = $("#box1 div");
$(boxes).each(function () {
  const TextBoxes = $(this).attr("TextBoxes");
  $(this).text(TextBoxes);
});

// add operator function start
const operatorButton = document.querySelectorAll("#operator");
operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
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
function calculatorResult(id) {
  outputValue.value = eval(outputValue.value);
}

// result end
