// first-class cetizien start

    const calculate = document.getElementById("operator");
    calculate.onclick = (operation, num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new error("Expected a number"); // true
    }
    return operation(num1, num2); // false
    };

    // const AddOperatorFunction = function(id) {
    //     const value = document.getElementById(id).value;
    //     document.getElementById("outputValue").value += value;
    // }

    const AddValueFunction = document.querySelectorAll("#number"); 
    AddValueFunction.forEach(button => {
        button.onclick = (number) => {
            const value = number.target.value; 
            document.getElementById("outputValue").value += value; 
        };
    });
    
    const AddOperatorFunction = document.querySelectorAll("#operator"); 
    AddOperatorFunction.forEach(button => {
        button.onclick = (operator) => {
            const value = operator.target.value;
            document.getElementById("outputValue").value += value;
        };
    });
    
    // operator aritmatika start
    // const tambah = document.getElementById("tambah");
    // tambah.onclick = () => {
    // return AddOperatorFunction;
    // };

    // const kali = document.getElementById("kali");
    // kali.onclick = () => {
    // return operation(num1) * operation(num2);
    // };

    // const kurang = document.getElementById("kurang");
    // kurang.onclick = () => {
    // return operation(num1) - operation(num2);
    // };

    // const bagi = document.getElementById("bagi");
    // bagi.onclick = () => {
    // return operation(num1) / operation(num2);
    // };


    // if(){
    //     resultTambah.onclick = (num1,num2) => {
    //     return num1 + num2;
    //     };
    // } else if() {
    //     resultKali.onclick = (num1,num2) => {
    //     return num1 * num2;
    //     };
    // } else if() {
    //     resultKurang.onclick = (num1,num2) => {
    //     return num1 - num2;
    // };
    // } else if() {
    //     resultBagi.onclick = (num1,num2) => {
    //     return num1 / num2;
    // };
    // }
    //operator aritmatika end

    function calculate(operation, num1, num2) {
        return operation(num1, num2); // false
    };

// operator aritmatika end


// first-class cetizien end

        // function expression start
                
                const resultTambah = AddOperatorFunction(tambah,num1,num2);
                document.getElementById("outputValue").value = eval(resultTambah);

                const resultKali   = AddOperatorFunction(kali,num1,num2);
                document.getElementById("outputValue").value = eval(resultKali);
                
                const resultKurang = AddOperatorFunction(kurang,num1,num2);
                document.getElementById("outputValue").value = eval(resultKurang);
                
                const resultBagi   = AddOperatorFunction(bagi,num1,num2);
                document.getElementById("outputValue").value = eval(resultBagi);

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

    // result addeventlistener start
    function OutputValue() {
    const outputValue = document.getElementById("outputValue");
    const p = outputValue.querySelector("p");

    p[0].appendChild(document.createTextNode(input.value));
    input.value = calculate();
    }
    // result addeventlistener end

    // erase start
    const erase = document.getElementById("clear");
    erase.onclick = () => {
        document.getElementById("outputValue").value = "";
    };

    // erase start

// menghapus angka
