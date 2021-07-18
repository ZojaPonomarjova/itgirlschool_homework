function showMessage(){
    alert('Пожалуйста, для ввода данных используйте только цифры!')
}
showMessage()


let num1
let num2

function enterNum1 (){
        return (num1 = prompt ('Введите первое число')
    )
    }

function enterNum2 (){
    return (num2 = prompt ('Введите второе число')
)
}

function sum (num1 , num2) {
    return (Number(num1) + Number(num2))
}

function subtract(num1 , num2) {
    return (Number(num1) - Number(num2));
}

function multiply(num1 , num2) {
    return (Number(num1) * Number(num2));
}

function divide(num1 , num2) {
    return (Number(num1) / Number(num2));
}
