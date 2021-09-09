// //Проверка для одного поля
// let errors = [];
// function checkValidity(input) {
//     let validity = input.validity;

//     if (validity.patternMismatch) 
// 		{ errors.push('Неверный формат заполнения'); }

// 		if (validity.rangeOverflow) 
// 		{ let max = input.max;
// 			errors.push('Максимальное значение не может быть больше чем ' + max); }

// 		if (validity.rangeUnderflow) 
// 		{ let min = input.min;
// 			errors.push('Минимальное значение не может быть больше чем ' + min); }

// 		// И остальные проверки валидности...  
// }

// //Проверка для всех полей
// function checkAll() {
// 		//получаем все инпуты
//     let inputs = document.querySelectorAll("input");

// 		//перебираем их и на каждый вызываем функцию валидации
//     for (let input of inputs) {
//         checkValidity(input);
//     }

// 		//выводим ошибки в div 
//     let errorDiv = document.querySelector('.errorsInfo');
//     errorDiv.innerHTML = errors.join('. \n');
// }



// let checkCardNumber = () => {
//     let cardNumber = document.querySelector("#card").value;
//     let cardRegexp = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

//     console.log(cardRegexp.test(Number(cardNumber)));
// }
// document.querySelector("#card").addEventListener("change", checkCardNumber);

// function validate(evt) {
//     let theEvent = evt || window.event;
//     let key = theEvent.keyCode || theEvent.which;
//     key = String.fromCharCode(key);
//     let regex = /[0-9]|\./;
//     if (!regex.test(key)) {
//         theEvent.returnValue = false;
//         if (theEvent.preventDefault) theEvent.preventDefault();
//     }
// }

// let nameRegexp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/

// ;
// console.log(nameRegexp.test("фон Иванов Семен Кузьмич"));

class Person{
    constructor(name){
        this.name = name
    }
}
const member = new Person("John");
console.log(typeof member);
console.log(member);
const person1 = {
    name: "Valera",
    age: 23
}
person1.city = "Amsterdam";
// let city = person1.city;
// city = "Amsterdam";
console.log(person1);
// console.log(city);

