const datepicker = require('js-datepicker');

const moment = require('moment');
require('moment/locale/ru');

const Chart = require('Chart.js');

 let incomeDate = datepicker(document.getElementById("dateSelection"), {
    startDay: 1,
    customDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
});

 let outcomeDate = datepicker(document.getElementById("outcomeDateSelection"), {
    startDay: 1,
    customDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
});


const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => {
            item.classList.remove("aside__button-active");
        });
        btn.classList.add("aside__button-active")


        tabsContentElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");

            }
        });
    });
}


function saveCardData() {
    const cardData = document.querySelectorAll(".card-input");
    let formValidation = () => {
        for (let input of cardData) {
            if (input.value === "") {
                return true;
            }
        }
        return false;
    }

    if (formValidation()) {
        document.querySelector(".card-error").innerHTML = "Вы не внесли данные";
        return;
    } else {

        for (let i = 0; i < cardData.length; i++) {
            localStorage.setItem(`${cardData[i].id}`, cardData[i].value);
            document.querySelector(".card-error").innerHTML = "";
            cardData[i].value = "";
        }
        localStorage.setItem('index', 1);
        localStorage.setItem('outcomeIndex', 1);
        localStorage.setItem('incomeSum', 0);
        localStorage.setItem('outcomeSum', 0);

    }
}

document.querySelector("#enterCardBtn").addEventListener("click", saveCardData);

let calcOutcomeSum = () => {
    let sumTransactions = 0;
    if (localStorage.getItem("outcomeIndex") > 1) {
        for (let i = 0; i < localStorage.length; i++) {
            sumTransactions += Number(localStorage.getItem(`outcomeNumberSelection${i}`));

        }
        
    }
    return sumTransactions;
}


let calcIncomeSum = () => {
    let sumTransactions = 0;
    if (localStorage.getItem("index") > 1) {
        for (let i = 0; i < localStorage.length; i++) {
            sumTransactions += Number(localStorage.getItem(`incomeNumberSelection${i}`));
        }
        
    }
    return sumTransactions;
}


const chartContainer = document.getElementById("myChart");

const tags = ["Поступления", "Списания"];

const dataForChart = {
    label: "Сумма всех операций",
    data: [calcIncomeSum(), calcOutcomeSum()],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: '#197BBD',
    borderWidth: 1,
};

let myChart = new Chart(chartContainer, {

    type: 'bar',
    data: {
        labels: tags,
        datasets: [
            dataForChart,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});


function editCardData() {
    if (localStorage.getItem("cardNumber1")) {
        document.querySelector(".card__card-number").innerHTML = `${localStorage.getItem("cardNumber1")}  ${localStorage.getItem("cardNumber2")} ${localStorage.getItem("cardNumber3")} ${localStorage.getItem("cardNumber4")}`
    }
    if (localStorage.getItem("cardName1")) {
        document.querySelector(".card__name").innerHTML = `${localStorage.getItem("cardName1")}  ${localStorage.getItem("cardName2")}`
    }
    if (localStorage.getItem("cardDate1")) {
        document.querySelector(".card__date").innerHTML = `${localStorage.getItem("cardDate1")} / ${localStorage.getItem("cardDate2")}`
    }

    let cardOutcomeSum = calcOutcomeSum();
    if (cardOutcomeSum != undefined) {
        document.querySelector(".outcome__number").innerHTML = `${cardOutcomeSum} <span>руб</span>`
    } else {
        cardOutcomeSum = 0
    }

let cardIncomeSum = calcIncomeSum();

if(cardIncomeSum === undefined){
    cardIncomeSum = 0
} else {document.querySelector(".income__number").innerHTML = `${cardIncomeSum} <span>руб</span>`
    }
    


    document.querySelector(".current-balance__number").innerHTML = `${+localStorage.getItem("cardBalance") + cardIncomeSum - cardOutcomeSum} <span>руб</span>`
}

document.addEventListener("DOMContentLoaded", editCardData);
document.querySelector(".summary").addEventListener("click", editCardData)


const btns = document.querySelectorAll(".enter-transaction__btn");
const transactionInputs = document.querySelectorAll(".enter-transaction__block");


btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btns.forEach((btnItem) => {
            btnItem.classList.remove('btn-active');
        })
        btnItem.classList.add('btn-active');
        transactionInputs.forEach((transactionInput) => {
            transactionInput.classList.add('hidden');
        })
        transactionInputs[index].classList.remove('hidden');
    })
})

function checkStorage() {
    if (localStorage.getItem("cardNumber1") === null) {
        document.querySelector(".transaction-error").innerHTML = "Сначала внесите данные карты";
    } else {
        document.querySelector(".transaction-error").innerHTML = "";
        document.getElementById("cardNumberSelection").removeAttribute("disabled");
        document.getElementById("outcomeCardNumberSelection").removeAttribute("disabled");
        document.querySelector(".outcomeCardNumber1").innerHTML = `${localStorage.getItem("cardNumber1")}  ${localStorage.getItem("cardNumber2")} ${localStorage.getItem("cardNumber3")} ${localStorage.getItem("cardNumber4")}`
        document.querySelector(".cardNumber1").innerHTML = `${localStorage.getItem("cardNumber1")}  ${localStorage.getItem("cardNumber2")} ${localStorage.getItem("cardNumber3")} ${localStorage.getItem("cardNumber4")}`
    }
}
document.querySelector(".aside__button-transactions").addEventListener('click', checkStorage);


function rememberTransaction() {
    let index = localStorage.getItem('index');
    const incomeData = document.querySelectorAll(".income-input");
    let formValidation = () => {
        for (let input of incomeData) {
            if (input.value === "") {
                return true;
            }
        }
        return false;
    }
    if (document.getElementById("cardNumberSelection").getAttribute('disabled') === '') {
        return;
    } else if (formValidation()) {
        document.querySelector(".transaction-error").innerHTML = "Вы не внесли данные";
        return;
    } else {

        for (let i = 0; i < incomeData.length; i++) {
            localStorage.setItem(`${incomeData[i].id}${index}`, incomeData[i].value);
            document.querySelector(".transaction-error").innerHTML = "";
            incomeData[i].value = "";
            localStorage.setItem(`dateSelection${index}`, incomeDate.dateSelected);
        }

        index++
        localStorage.setItem('index', index);
    }
// console.log(incomeDate.dateSelected);

}

document.querySelector("#incomeBtn").addEventListener('click', rememberTransaction);

function rememberOutcomeTransaction() {
    let outcomeIndex = localStorage.getItem('outcomeIndex');
    const outcomeData = document.querySelectorAll(".outcome-input");
    let formValidation = () => {
        for (let input of outcomeData) {
            if (input.value === "") {
                return true;
            }
        }
        return false;
    }
    if (document.getElementById("outcomeCardNumberSelection").getAttribute('disabled') === '') {
        return;
    } else if (formValidation()) {
        document.querySelector(".transaction-error").innerHTML = "Вы не внесли данные";
        return;
    } else {

        for (let i = 0; i < outcomeData.length; i++) {
            localStorage.setItem(`${outcomeData[i].id}${outcomeIndex}`, outcomeData[i].value);
            document.querySelector(".transaction-error").innerHTML = "";
            outcomeData[i].value = "";
            localStorage.setItem(`outcomeDateSelection${outcomeIndex}`, outcomeDate.dateSelected);
        }

        outcomeIndex++
        localStorage.setItem('outcomeIndex', outcomeIndex);
    }
    // console.log(outcomeDate.dateSelected);
}

document.querySelector("#outcomBtn").addEventListener('click', rememberOutcomeTransaction);

function showTransactions() {

    if (localStorage.getItem("outcomeIndex") > 1) {
        document.querySelector(".tr-data__transaction").innerHTML = "";
        // let sumTransactions = 0;
        for (let i = 0; i < localStorage.length; i++) {
            // sumTransactions += Number(localStorage.getItem(`outcomeNumberSelection${i}`));
            let type = localStorage.getItem(`outcomeSourceSelection${i}`);
            let sum = localStorage.getItem(`outcomeNumberSelection${i}`);

            let date = moment(localStorage.getItem(`outcomeDateSelection${i}`)).locale('ru');
            date = date.format('L');
            if (type && sum) {

                document.querySelector(".tr-data__transaction").innerHTML += `<div class="tr-data__transaction-new"><div class="transaction__details transaction__details-type">${type}</div>
    <div class="transaction__details transaction__details-date">${date}</div>
    <div class="transaction__details transaction__details-cost"><span
            class="transaction__number">${sum}</span> <span class="transaction__rubles">руб</span>
    </div>
    </div>`;
            }
        }
    }
    // myChart.update();
    // console.log(myChart);
}

document.addEventListener("DOMContentLoaded", showTransactions);
document.querySelector(".summary").addEventListener("click", showTransactions);


