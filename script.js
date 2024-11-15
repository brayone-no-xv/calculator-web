// first-class cetizien start
    const calculate = document.getElementById("operator");
    calculate.onclick = (operation, num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new error("Expected a number"); // true
    }
    return operation(num1, num2); // false
    };

    // operator aritmatika start
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
    const result = document.getElementById("result");
    result.addEventListener("click", OutputValue);

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
