const datepicker = require('js-datepicker');

const picker = datepicker(document.getElementById("dateSelection"), { startDay: 1, customDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] ,customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'], 
    onSelect: (instance, date) => {
      
      return date;
    //   console.log(instance);
    }
}
);

const outcomePicker = datepicker(document.getElementById("outcomeDateSelection"), { startDay: 1, customDays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] ,customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'], 
onSelect: (instance, date) => {
  
  return date;
//   console.log(instance);
}
}
);
console.log(picker);
console.log(outcomePicker);


const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");

for(let btn of tabsHandlerElems){
    btn.addEventListener('click', () =>{
        tabsHandlerElems.forEach(item => {item.classList.remove("aside__button-active");
    });
        btn.classList.add("aside__button-active")
        

        tabsContentElems.forEach(content=>{
            if(content.dataset.tabsField === btn.dataset.tabsHandler){
                content.classList.remove("hidden");
            }else{
                content.classList.add("hidden");

            }
        });
    });
}


function saveCardData(){
    const cardData = document.querySelectorAll(".card-input");

    for (let i=0; i<cardData.length; i++){
    if (cardData[i].value === "") {
        document.querySelector(".card-error").innerHTML = "Вы не внесли данные";
        return;
    }else{

        localStorage.setItem(`${cardData[i].id}`, cardData[i].value);
        document.querySelector(".card-error").innerHTML = "";
    cardData[i].value = "";
}
}
}

document.querySelector(".enter-card__button").addEventListener("click", saveCardData);

function editCardData(){
    if(localStorage.getItem("cardNumber1")){
document.querySelector(".card__card-number").innerHTML = `${localStorage.getItem("cardNumber1")}  ${localStorage.getItem("cardNumber2")} ${localStorage.getItem("cardNumber3")} ${localStorage.getItem("cardNumber4")}`}
if(localStorage.getItem("cardName1")){
    document.querySelector(".card__name").innerHTML = `${localStorage.getItem("cardName1")}  ${localStorage.getItem("cardName2")}`}
    if(localStorage.getItem("cardDate1")){
        document.querySelector(".card__date").innerHTML = `${localStorage.getItem("cardDate1")} / ${localStorage.getItem("cardDate2")}`}
//         if(localStorage.getItem("#")){
//             document.querySelector(".current-balance__number").innerHTML = `${localStorage.getItem("#")} <span>руб</span>`}
//         if(localStorage.getItem("#")){
//             document.querySelector(".income__number").innerHTML = `${localStorage.getItem("#")} <span>руб</span>`}
//         if(localStorage.getItem("#")){
//             document.querySelector(".outcome__number").innerHTML = `${localStorage.getItem("#")} <span>руб</span>`}

}

document.addEventListener("DOMContentLoaded", editCardData);
document.querySelector(".summary").addEventListener("click", editCardData)