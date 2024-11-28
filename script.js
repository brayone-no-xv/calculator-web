const AddOperatorFunction = document.querySelectorAll("#operator");
const AddValueFunction = document.querySelectorAll("#number");
const operator1 = parseInt(AddOperatorFunction[1]);
const operator2 = parseInt(AddOperatorFunction[2]);

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

// operator aritmatika start

// if(AddOperatorFunction === '+'){
//     numTambah.onclick = (operator1,operator2) => operator1 + operator2;
//     };
// } else if(AddOperatorFunction === '*') {
//     numKali.onclick = (num1,num2) => {
//     return num1 * num2;
//     };
// } else if(AddOperatorFunction === '-') {
// numKurang.onclick = (num1,num2) => {
//     return num1 - num2;
// };
// } else if(AddOperatorFunction === '/') {
// numBagi.onclick = (num1,num2) => {
//     return num1 / num2;
// };
// }

// operator aritmatika end

// function calculate(operation, num1, num2) {
//     return operation(num1, num2); // false
// };

// first-class cetizien end

// function expression start

// const resultTambah = calculate(tambah,num1,num2);
// document.getElementById("outputValue").value = eval(numTambah);

// const resultKali   = calculate(kali,num1,num2);
// document.getElementById("outputValue").value = eval(numKali);

// const resultKurang = calculate(kurang,num1,num2);
// document.getElementById("outputValue").value = eval(numKurang);

// const resultBagi   = calculate(bagi, num1,num2);
// document.getElementById("outputValue").value = eval(numBagi);

// function expression end

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
