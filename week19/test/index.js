// let arr = [1, 2, 3, 4, 16]
// function changeArr(array){
// let newArray = [];
// for (let i=array.length-1; i>=0; i--){
//     newArray.push(array[i])
// }
// return [...array, ...newArray]
// }
// console.log(changeArr(arr));

class Cake{
    constructor(name, date, weight, composition){
        this.name = name;
        this.date = date;
        this.weight = weight;
        this.composition = composition;
    }
}

let operaCake = new Cake("Opera", "11.09.2021", 1000, "тут какой-то состав");
console.log(operaCake);

// function bike(){
//     console.log(this.name)
// }

// var name = "ninja";
// var obj1 = {name: "pomidor", bike: bike}
// var obj2 = {name: "site", bike: bike}
// bike(); // ninja
// obj1.bike(); //pomidor
// obj2.bike(); //site

class Person{
    constructor(name){
        this.name = name
    }
}

const member = new Person("john");
console.log(typeof member); //object
console.log(member);