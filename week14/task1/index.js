function getNums(){
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;

    if (num1 === ""){
        alert("Введите ваше число");
        num1 = NaN;
    }
    if (num2 === ""){
        alert("Введите ваше число");
        num2 = NaN;
    } 

    return [num1 , num2]
}

function sum(){
    const [num1 , num2] = getNums();

    return Number(num1) + Number(num2);
}

function subtract(){
    const [num1 , num2] = getNums();

    return Number(num1) - Number(num2);
}

function multiply(){
    const [num1 , num2] = getNums();

    return Number(num1) * Number(num2);
}

function divide(){
    const [num1 , num2] = getNums();

    return Number(num1) / Number(num2);
}

    document.getElementById('clear').onclick = function(){
        document.getElementById('operationResult').innerHTML = '';
        document.getElementsByName('number')[0].value = '';
        document.getElementsByName('number')[1].value = '';
    } 
