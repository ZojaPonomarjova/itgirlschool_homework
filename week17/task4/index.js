let showResult = () =>{
let generateNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [];

for(let i=0; i<10; i++){
    numbers[i] = generateNumbers(-10, 10);
}

let minNumber = Math.min.apply(null, numbers);
let maxNumber = Math.max.apply(null, numbers);

let numbersSum = 0;
for(let i=0; i<numbers.length; i++){
    numbersSum += numbers[i];
}

let numbersMultiply = 1;
for(let i=0; i<numbers.length; i++){
    numbersMultiply *= numbers[i];
}

let averageNumber = numbersSum/numbers.length;

document.querySelector(".container").innerHTML= `Сгенерировали: ${numbers};<br>

Минимальное: ${minNumber};<br>

Максимальное: ${maxNumber};<br>

Среднее арифметическое: ${averageNumber};<br>

Сумма чисел: ${numbersSum};<br>

Произведение чисел: ${numbersMultiply}`
document.querySelector(".container").style.border = "1px solid black";

}

document.querySelector(".button").addEventListener("click", showResult);
