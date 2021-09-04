const str = "Пожалуйста посетите веб-сайт Microsoft! Microsoft - известная американская компания.";
console.log(str.search("Microsoft"));

const fetPoem = "Я пришел к тебе с приветом,\nРассказать, что солнце встало,\nЧто оно горячим светом\nПо листам затрепетало;";
console.log(fetPoem);

let name = "настя";
nameFirstLetter = name[0].toUpperCase();
let nameEnd = name.slice(1);
let сhangeName = nameFirstLetter + nameEnd.toLowerCase();
console.log(сhangeName);

// let date = new Date(2021, 0, 24, 22, 51);
// console.log(date);

// let tomorrow = new Date(2021, 7, 27, 0, 0, 0, 0);

let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let tomorrow;
if (!(date + 1)) {
    tomorrow = today.setMonth(month + 1, 1);
} else if (!(month + 1)) {
    today.setFullYear(year + 1, 1, 1);
} else {
    tomorrow = today.setDate(date + 1);
}
let tomorrowMidnight = today.setHours(0, 0, 0, 0);
let thisMoment = Date.now();

let difference = (tomorrowMidnight - thisMoment) / 1000;
console.log(Math.trunc(difference));


let numberFromString = (string) => {
return parseInt(string.match(/\d+/), 10)
}
let number = numberFromString("*120р.");
console.log(typeof number);//number
console.log(number);//120

let number1 = numberFromString("95$");
console.log(typeof number1);//number
console.log(number1);//95

let numberFromString1 = (string1) => {
    return Number(string1.replace(/\D+/g,""));
    }

let number2 = numberFromString1("*120р.");
console.log(typeof number2);//number
console.log(number2);//120

let number3 = numberFromString1("95$");
console.log(typeof number3);//number
console.log(number3);//95

let array = ["Я", "пришел", "к", "тебе", "с", "приветом"];
console.log(array.join(" "));//"Я пришел к тебе с приветом"
console.log(typeof array.join(" "));//string

let str1 = "Я пришел к тебе с приветом";
console.log(str1.split(" "));//(6) ["Я", "пришел", "к", "тебе", "с", "приветом"]

let randomNum = Math.ceil(Math.random()*100);
console.log(randomNum);

console.log(Math.round(4.49));//4
console.log(Math.round(4.51));//5
let str2 = "     Я пришел к тебе с приветом     ";
console.log(str2.trim());//"Я пришел к тебе с приветом"





