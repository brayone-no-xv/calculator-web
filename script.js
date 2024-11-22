// first-class cetizien start

    const calculate = document.getElementById("operator");
    calculate.onclick = (operation, num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new error("Expected a number"); // true
    }
    return operation(num1, num2); // false
    };

    // const AddValueFunction = function(number) {
    //     const value = document.getElementById(number).value;
    //     document.getElementById("outputValue").value += value;    
    // };

    // const AddValueFunction = function(id) {
    //     const value = document.getElementById(id).value;
    //     document.getElementById("outputValue").value += value;
    // }

    // const AddValueFunction = document.querySelectorAll("#number");
    // AddValueFunction.forEach(button => {
    //     button.addEventListener("click", function(id) {
    //         const value = document.getElementById(id).value;
    //         document.getElementById("outputValue").value += value;
    //     });
    // });

    const AddValueFunction = document.querySelectorAll("#number"); 
    AddValueFunction.forEach(button => {
        button.onclick = (number) => {
            const value = number.target.value; 
            document.getElementById("outputValue").value += value; 
        };
    });

    const AddOperatorFunction = document.querySelectorAll("#operator"); 
    AddValueFunction.forEach(button => {
        button.onclick = (operator) => {
            const value = operator.target.value;
            document.getElementById("outputValue").value += value;
        };
    });
    
    // operator aritmatika start

    // if(){
    //     numTambah.onclick = (num1,num2) => {
    //     return num1 + num2;
    //     };
    // } else if() {
    //     numKali.onclick = (num1,num2) => {
    //     return num1 * num2;
    //     };
    // } else if() {
    // numKurang.onclick = (num1,num2) => {
    //     return num1 - num2;
    // };
    // } else if() {
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
                
                const resultTambah = calculate(tambah,num1,num2);
                document.getElementById("outputValue").value = eval(numTambah);

                const resultKali   = calculate(kali,num1,num2);
                document.getElementById("outputValue").value = eval(numKali);
                
                const resultKurang = calculate(kurang,num1,num2);
                document.getElementById("outputValue").value = eval(numKurang);
                
                const resultBagi   = calculate(bagi, num1,num2);
                document.getElementById("outputValue").value = eval(numBagi);

        // function expression end

    // result addeventlistener
    const result = document.getElementById("result");
    result.addEventListener("click",OutputValue);
    // result addeventlistener

// menghapus angka start
    const clear = document.getElementById("clear");
        clear.addEventListener("click",() => {
        document.getElementById("outputValue").value += " ";
    });
// menghapus angka end

    const tambah = document.getElementById("tambah");
    tambah.onclick = () => {
    return operation(num1) + operation(num2);
    };

    const kali = document.getElementById("kali");
    kali.onclick = () => {
    return operation(num1) * operation(num2);
    };

    const kurang = document.getElementById("kurang");
    kurang.onclick = () => {
    return operation(num1) - operation(num2);
    };

    const bagi = document.getElementById("bagi");
    bagi.onclick = () => {
    return operation(num1) / operation(num2);
    };

        // operator aritmatika end

        // first-class cetizien end

        // function expression start
                // const resultTambah = calculate(tambah,num1,num2);
                // resultTambah.innerHTML = num1 + num2;
                // const resultKali   = calculate(kali, num1,num2);
                // resultTambah.innerHTML = num1 * num2;
                // const resultKurang = calculate(kurang, num1,num2);
                // resultTambah.innerHTML = num1 - num2;
                // const resultBagi   = calculate(bagi, num1,num2);
                // resultBagi.innerHTML = num1 / num2;
        // function expression end

    const number = document.querySelectorAll(".number").value;
    number.onclick = function () {
    const outputValue = document.getElementById("outputValue");
    const p = outputValue.getElementsByTagName("p");
    p[0].appendChild(document.createTextNode(input.value));

    input.value = "";
    };

    // result addeventlistener
    function OutputValue() {
    const outputValue = document.getElementById("outputValue");
    const p = outputValue.querySelector("p");

    p[0].appendChild(document.createTextNode(input.value));
    input.value = calculate();
    }
    // result addeventlistener

    const erase = document.getElementById("erase");
    erase.addEventListener("click", () => {
        const outputValue = document.getElementById("outputValue");
        outputValue.value = "";
    });

// menghapus angka
