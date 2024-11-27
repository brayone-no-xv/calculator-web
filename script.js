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
    const AddOperatorFunction = document.querySelectorAll("#operator"); 
    const operator1 = parseInt(AddOperatorFunction[1]);
    const operator2 = parseInt(AddOperatorFunction[2]);

    AddValueFunction.forEach(button => {
        button.onclick = (number) => {
            const value = number.target.value; 
            document.getElementById("outputValue").value += value; 
        };
    });

    AddOperatorFunction.forEach(button => {
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

    // result addeventlistener
    const result = document.getElementById("result");
    result.addEventListener("click",OutputValue);
    // result addeventlistener

// menghapus angka start

    // const erase = document.getElementById("erase");
    // erase.addEventListener("click", () => { 
    //     document.getElementById("erase").value = "";
    // });

    function clearValue(id){
        document.getElementById("outputValue").value= " ";
   }

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
    // erase start

// menghapus angka
