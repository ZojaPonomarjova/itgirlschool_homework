// const moment = require('moment');

// let date = moment();
// console.log(date);

const btns = document.querySelectorAll(".enter-transaction__btn");
const transactionInputs = document.querySelectorAll(".enter-transaction__block");


btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () =>{
        btns.forEach((btnItem) => {
            btnItem.classList.remove('btn-active');
        })
        btnItem.classList.add('btn-active');
        transactionInputs.forEach((transactionInput) =>{
            transactionInput.classList.add('hidden');
        })
        transactionInputs[index].classList.remove('hidden');
    })
})

function checkStorage(){
if(localStorage.getItem("cardNumber1") === null){
document.querySelector(".transaction-error").innerHTML = "Сначала внесите данные карты";
}else{
    document.querySelector(".transaction-error").innerHTML = "";
    document.getElementById("cardNumberSelection").removeAttribute("disabled");
    document.getElementById("outcomeCardNumberSelection").removeAttribute("disabled");
    document.querySelector(".outcomeCardNumber1").innerHTML = `${localStorage.getItem("cardNumber1")}  ${localStorage.getItem("cardNumber2")} ${localStorage.getItem("cardNumber3")} ${localStorage.getItem("cardNumber4")}`
    document.querySelector(".cardNumber1").innerHTML = `${localStorage.getItem("cardNumber1")}  ${localStorage.getItem("cardNumber2")} ${localStorage.getItem("cardNumber3")} ${localStorage.getItem("cardNumber4")}`


}
}
document.querySelector(".aside__button-transactions").addEventListener('click', checkStorage);