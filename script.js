// first-class cetizien start



    // const AddValueFunction = function(number) {
    //     const value = document.getElementById(number).value;
    //     document.getElementById("outputValue").value += value;    
    // };

    // const AddValueFunction = function(id) {
    //     const value = document.getElementById(id).value;
    //     document.getElementById("outputValue").value += value;
    // }

    const AddValueFunction = document.querySelectorAll("#number");
    AddValueFunction.forEach(button => {
        button.addEventListener("click",() => {
            const value = document.getElementById(id).value;
            document.getElementById("outputValue").value += value;
        });
    });
    
    // operator aritmatika start
    const numTambah = document.getElementById('tambah');
    numTambah.onclick = () => {
        return num1 + num2;
    };
    
    const numKali = document.getElementById('kali');
    numKali.onclick = (num1,num2) => {
        return num1 * num2;
    };

    const numKurang = document.getElementById('kurang');
    numKurang.onclick = (num1,num2) => {
        return num1 - num2;
    };

    const numBagi = document.getElementById('bagi'); 
    numBagi.onclick = (num1,num2) => {
        return num1 / num2;
    };

    function calculate(operation, num1, num2) {
        return operation(num1, num2); // false
    };

    // operator aritmatika end

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
        document.getElementById("inputValue").value = " ";
    });
// menghapus angka end
