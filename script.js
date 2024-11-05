// first-class cetizien start
const calculate = document.getElementById("operator");
calculate.onclick = (operation,numA,numB) => {
    return operation(numA,numB);
}


// operator aritmatika start
const tambah = document.getElementById('tambah');
tambah.onclick = () => {
    return a + b;
}
const kali = document.getElementById('kali');
kali.onclick = () => {
    return a * b;
}

const kurang = document.getElementById('kurang');
kurang.onclick = () => {
    return a - b;
}

const bagi = document.getElementById('bagi');
bagi.onclick = () => {
    return a / b;
}

// const bagi = document.getElementById('bagi');
// bagi.onclick = (a,b) => {
//     this.a = a;
//     this.b = b;
// }

// operator aritmatika end


        // function expression start
            // const resultTambah = calculate(tambah, num1,num2);
            // const resultKali   = calculate(kali, num1,num2);
            // const resultKurang = calculate(kurang, num1,num2);
            // const resultBagi   = calculate(bagi, num1,num2);
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
        result.onclick = function() {
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

