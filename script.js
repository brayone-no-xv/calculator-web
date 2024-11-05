// first-class cetizien start
const calculate = document.getElementById("operator");
calculate.onclick = (operation,num1,num2) => {
    return operation(num1,num2);
}
    // operator aritmatika start
    const tambah = document.getElementById('tambah');
    tambah.onclick = () => {
        return operation(num1) + operation(num2);
    }
    const kali = document.getElementById('kali');
    kali.onclick = () => {
        return operation(num1) * operation(num2);
    }
    const kurang = document.getElementById('kurang');
    kurang.onclick = () => {
        return operation(num1) - operation(num2);
    }
    const bagi = document.getElementById('bagi');
    bagi.onclick = () => {
        return operation(num1) / operation(num2);
    }
    // operator aritmatika end
// first-class cetizien end

// const bagi = document.getElementById('bagi');
// bagi.onclick = (a,b) => {
//     this.a = a;
//     this.b = b;
// }



        // function expression start
            const resultTambah = calculate(tambah, num1,num2);
            //resultTambah.innerHTML = num1 + num2; 
            const resultKali   = calculate(kali, num1,num2);
            //resultTambah.innerHTML = num1 * num2;
            const resultKurang = calculate(kurang, num1,num2);
            //resultTambah.innerHTML = num1 - num2;
            const resultBagi   = calculate(bagi, num1,num2);
            //resultBagi.innerHTML = num1 / num2;
        // function expression end
        
    const number   = document.getElementById("number");
    number.onclick = function() {
        const outputValue = document.getElementById("outputValue");
        const p = outputValue.getElementsByTagName("p");
        p.appendChild(document.createTextNode(button.value))

        button.value = '';
    }
    
// result        
    const result = document.getElementById("result");
    result.addEventListener("click",resultValue);

    function resultValue() {
            const outputValue = document.getElementById("outputValue");
            const p = outputValue.getElementsByTagName("p");
            
            p.appendChild(document.createTextNode(button.value))
            button.value = calculate();
        };
// result

// menghapus angka
    const clean = document.getElementById('clean');
        clean.addEventListener = ("click", () => {
            if(this.id == "erase") {
                printHistory("");
                printOutput("");
    }
});
// menghapus angka

import {enter} from 'Reference\script.js';
enter();

