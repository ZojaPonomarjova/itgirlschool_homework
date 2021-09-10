class Calculator {
    static getNums() {
        let num1 = document.getElementById('firstNumber').value;
        let num2 = document.getElementById('secondNumber').value;

            return [num1, num2];
    }

    static sum() {
        let [num1, num2] = Calculator.getNums();
        if (num1 != "" && num2 != "") {
            return Number(num1) + Number(num2);
        } 
    }
    static subtract() {
        let [num1, num2] = Calculator.getNums();
        if (num1 != "" && num2 != "") {
            return num1 - num2;
        } 
    }
    static multiply() {
        const [num1, num2] = Calculator.getNums();
        if (num1 != "" && num2 != "") {
            return num1 * num2;
        } 
    }
    static divide() {
        const [num1, num2] = Calculator.getNums();
        if (num1 != "" && num2 != "") {
            return num1 / num2;
        }
    }
}

function checkDivide() {
    if (Calculator.divide() === Infinity) {
        document.getElementById('operationResult').innerHTML = "На ноль делить нельзя!";
    } else if (Calculator.divide() != undefined) {
        document.getElementById('operationResult').innerHTML = Calculator.divide();
    } else {
        document.getElementById('operationResult').innerHTML = 'Введите ваше число';
        return;
    }
}

document.getElementById('sum').addEventListener("click", function () {
    if (Calculator.sum() != undefined) {
        document.getElementById('operationResult').innerHTML = Calculator.sum();
    }else {
        document.getElementById('operationResult').innerHTML = 'Введите ваше число';
    }
});
document.getElementById('subtract').addEventListener("click", function () {
    if (Calculator.subtract() != undefined) {
        document.getElementById('operationResult').innerHTML = Calculator.subtract();
    }else {
        document.getElementById('operationResult').innerHTML = 'Введите ваше число';
    }
});
document.getElementById('multiply').addEventListener("click", function () {
    if (Calculator.multiply() != undefined) {
        document.getElementById('operationResult').innerHTML = Calculator.multiply();
    }else {
        document.getElementById('operationResult').innerHTML = 'Введите ваше число';
    }
});
document.getElementById('divide').addEventListener("click", checkDivide);

document.getElementById('clear').onclick = function () {
    document.getElementById('operationResult').innerHTML = '';
    document.getElementsByName('number')[0].value = '';
    document.getElementsByName('number')[1].value = '';
}