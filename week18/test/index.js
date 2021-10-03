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

// class Person{
//     constructor(name){
//         this.name = name
//     }
// }
// const member = new Person("John");
// console.log(typeof member);
// console.log(member);
// const person = {
//     name: "Valera",
//     age: 23
// }

// let city = person.city;
// // city = "Amsterdam";
// console.log(person);
// console.log(city);// undefined
// person.city = "Amsterdam";
// // city = person.city;
// console.log(city);

// class Car {
//     constructor() {
//         this.speed = 0;
//     }

//     get drive() {
//         if (this.speed === 0) {
//               console.log("Скорость ноль! Машина не поедет!");
//         } else {
//               console.log("Мы едем со скоростью"); 
//         }
//         return this.speed;
//     }

//     set drive(speed) {
//         if (speed < 0) {
//                console.log("Машины с отрицательной скоростью не ездят!");
//                return;
//         }
//         this.speed = speed;
//     }
// }

// const lada = new Car();
// console.log(lada.drive); // Скорость ноль! Машина не поедет! 0
// lada.drive = -25; // Машины с отрицательной скоростью не ездят!
// console.log(lada.drive); // Скорость ноль! Машина не поедет! 0
// lada.drive = 35;//
// console.log(lada.drive); // Мы едем со скоростью 35

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date);
// let sunriseTime = new Date(1631847910*1000);
// let hours = sunriseTime.getHours();
// let minutes = sunriseTime.getMinutes();
// console.log( hours +":" + minutes);


// multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var date = new Date(1631847910*1000);

// var hours = date.getHours();
// var minutes = "0" + date.getMinutes();
// var seconds = "0" + date.getSeconds();

// // Will display time in 04:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
// console.log(formattedTime);



// let user = undefined;
try{
    if(!parseInt('ыыыы')){
        throw new ReferenceError("Некорректные данные");
    }
    console.log(parseInt('ыыыы'));

}
catch(e){
    console.log(e);
    alert( e.message );
}