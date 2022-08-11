/*alert("Selamat Datang !")
"use strict";
const firstName = prompt("Siapa Nama Depanmu ?");
const lastName = prompt("Siapa Nama Belakangmu ?");
const language = prompt("Bisa Berbahasa Apa ?");

const user = { // menyimpan data dari prompt diatas ke variabel user object
    name: {
        namaDepan: firstName,
        namaBelakang: lastName,
    },
    bahasa: language
};

if (user.bahasa === "Indonesia") {
    alert("Senang Bertemu Denganmu " + user.name.namaDepan + " " + user.name.namaBelakang + " !");
}else if (user.bahasa === "French"){
    alert("Ravi de vous rencontrer " + user.name.namaDepan + " " + user.name.namaBelakang + " !");
}else if (user.bahasa === "Japan"){
    alert("Hajimemashite " + user.name.namaDepan + " " + user.name. namaBelakang + " !");
}else {
    alert("Nice To Meet You " + user.name.namaDepan + " " + user.name.namaBelakang + " !");
}
*/

const kalkulator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false,
};

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = kalkulator.displayNumber;
}
function clearKalkulator() {
    kalkulator.displayNumber = '0';
    kalkulator.operator = null;
    kalkulator.firstNumber = null;
    kalkulator.waitingForSecondNumber = false;
}
function inputDigit(digit) {
    if (kalkulator.displayNumber === '0') {
        kalkulator.displayNumber = digit;
    } else {
        kalkulator.displayNumber += digit;
    }
}
function inverseNumber(){
    if (kalkulator.displayNumber === '0'){
        return;
    }
    kalkulator.displayNumber = kalkulator.displayNumber * -1;
}
function handleOperator(operator){
    if (!kalkulator.waitingForSecondNumber){
        kalkulator.operator = operator;
        kalkulator.waitingForSecondNumber = true;
        kalkulator.firstNumber = kalkulator.displayNumber;
         // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        kalkulator.displayNumber = '0';
    }else{
        alert('Operator sudah ditetapkan!');
    }
}
function performCalculation(){
    if(kalkulator.firstNumber == null || kalkulator.operator == null){
        alert('Anda belum menetapkan operator!');
        return;
    }

    let result = 0;
    if(kalkulator.operator === '+'){
        result = parseInt(kalkulator.firstNumber) + parseInt(kalkulator.displayNumber);
    }else{
        result = parseInt(kalkulator.firstNumber) - parseInt(kalkulator.displayNumber);
    }
    const history ={
        firstNumber: kalkulator.firstNumber,
        secondNumber: kalkulator.secondNumber,
        operator: kalkulator.operator,
        result: result
    }
    putHistory(history);
    kalkulator.displayNumber = result;
    renderHistory();
}

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        //mendapatkan objek elemen yang diklik
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearKalkulator();
            updateDisplay();
            return;
        }

        if (target.classList.contains('negative')){
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains('operator')){
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}
