
function getNums() {
    const num1 = document.getElementById('firstNumber').value;
    const num2 = document.getElementById('secondNumber').value;

    if (num1 == "") {
        alert("Введите ваше число");
        return;
    } else if (num2 == "") {
        alert("Введите ваше число");
        return;
    } else {
        return [num1, num2];
    }
}


function sum() {
    const [num1, num2] = getNums();

    return Number(num1) + Number(num2);
}

function subtract() {
    const [num1, num2] = getNums();

    return Number(num1) - Number(num2);
}

function multiply() {
    const [num1, num2] = getNums();

    return Number(num1) * Number(num2);
}

function divide() {
    const [num1, num2] = getNums();

        return Number(num1) / Number(num2);
}

function checkDivide(){
    if(divide() === Infinity){
        document.getElementById('operationResult').innerHTML = "На ноль делить нельзя!";
    } else{
        document.getElementById('operationResult').innerHTML = divide();
    }
}
function printResult(){
    document.getElementById('operationResult').innerHTML = sum() || subtract() || multiply();
}

document.getElementById('sum').onclick = function (){
    printResult();
}

document.getElementById('subtract').onclick = function (){
    printResult();
}

document.getElementById('multiply').onclick = function (){
    printResult();
}

document.getElementById('divide').onclick = function (){
    checkDivide()
}

document.getElementById('clear').onclick = function () {
    document.getElementById('operationResult').innerHTML = '';
    document.getElementsByName('number')[0].value = '';
    document.getElementsByName('number')[1].value = '';
}