//             document.querySelector(".current-balance__number").innerHTML = `${localStorage.getItem("#")} <span>руб</span>`
//         if(localStorage.getItem("#")){
//             document.querySelector(".income__number").innerHTML = `${localStorage.getItem("#")} <span>руб</span>`}
//         

function calcOutcomeSum(){
            let sumTransactions = 0;
            if (localStorage.getItem("outcomeIndex") > 1){
                    for (let i=0; i<localStorage.length; i++){
        sumTransactions += Number(localStorage.getItem(`outcomeNumberSelection${i}`));
        
        }
        return finalOutcomeTransactions = sumTransactions;
    }
}

document.querySelector(".outcome__number").innerHTML = `${calcOutcomeSum()} <span>руб</span>`

function calcIncomeSum(){
    let sumTransactions = 0;
    if (localStorage.getItem("index") > 1){
            for (let i=0; i<localStorage.length; i++){
sumTransactions += Number(localStorage.getItem(`incomeNumberSelection${i}`));

}
return finalOutcomeTransactions = sumTransactions;
}
}

document.querySelector(".income__number").innerHTML = `${calcIncomeSum()} <span>руб</span>`
document.querySelector(".current-balance__number").innerHTML = `${+localStorage.getItem("cardBalance") + calcIncomeSum() - calcOutcomeSum()} <span>руб</span>`