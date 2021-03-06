class Cat {
    constructor(catName, ownerName, ownerSurname, ownerPatronymic, phoneNumber, breed, sex, city, street, house, apartment) {
        this.catName = catName;
        this.ownerName = ownerName;
        this.ownerSurname = ownerSurname;
        this.ownerPatronymic = ownerPatronymic;
        this.phoneNumber = phoneNumber;
        this.breed = breed;
        this.sex = sex;
        this.city = city;
        this.street = street;
        this.house = house;
        this.apartment = apartment;
    }
}

document.querySelector(".save-button").addEventListener("click", showPetData);

function showPetData() {
    let catName = document.querySelector("#name").value;
    let ownerName = document.querySelector("#ownerName").value;
    let ownerSurname = document.querySelector("#ownerSurname").value;
    let ownerPatronymic = document.querySelector("#ownerPatronymic").value;
    let phoneNumber = Number(document.querySelector("input[name = 'phone1']").value + document.querySelector("input[name = 'phone2']").value + document.querySelector("input[name = 'phone3']").value);
    let breed = document.querySelector("#breed").value;
    let city = document.querySelector("#city").value;
    let street = document.querySelector("#street").value;
    let house = document.querySelector("#house").value;
    let apartment = document.querySelector("#apartment").value;

    function checkChosenSex() {
        let theGroup = document.querySelectorAll("input[name='sex']");
        let i;
        for (i = 0; i < theGroup.length; i++) {
            if (theGroup[i].checked) {
                break;
            }
        }
        return theGroup[i].value;
    }
    let chosenSex = checkChosenSex();
    let userCat = new Cat(catName, ownerName, ownerSurname, ownerPatronymic, phoneNumber, breed, chosenSex, city, street, house, apartment);

    function checkChosenMeal() {
        let theGroup = document.querySelectorAll("input[name='meal']");
        let meal = [];
        for (let i = 0; i < theGroup.length; i++) {
            if (theGroup[i].checked) {
                meal.push(theGroup[i].value);
            }
        }
        return meal.join(", ");
    }
    if(checkChosenMeal()){
    userCat.meal = checkChosenMeal();}

    console.log(userCat);
}