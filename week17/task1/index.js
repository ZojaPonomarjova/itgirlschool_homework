function divideName() {
    let inputText = document.querySelector(".input-name").value;

    let nameArray = inputText.split(" ");

    let cleanedNameArray = nameArray.filter(item => item != "");

    document.querySelector("#name").value = "";
    document.querySelector("#patronymic").value = "";
    document.querySelector("#surname").value = "";

    if (cleanedNameArray.length === 2) {
        cleanedNameArray[2] = "-";
        document.querySelector(".error").innerHTML = "Если у Вас есть отчество, обязательно впишите его";
        document.querySelector(".error").style.color = "black";
    }

    if (cleanedNameArray.length > 3) {
        document.querySelector(".error").innerHTML = "Пожалуйста, используйте дефис для разделения двойных имен, отчеств или фамилий";
        document.querySelector(".error").style.color = "red";
        return;
    }

    if (cleanedNameArray.length < 2) {
        document.querySelector(".error").innerHTML = "Пожалуйста, проверьте правильность написания. Возможно Вы забыли пробел или вписали имя не полностью";
        document.querySelector(".error").style.color = "red";
        return;
    }

    let name = cleanedNameArray[1];
    nameFirstLetter = name[0].toUpperCase();
    let nameEnd = name.slice(1);
    let сhangeName = nameFirstLetter + nameEnd.toLowerCase();

    if (сhangeName.includes("-")) {
        finalChangedName = changeLetter(сhangeName);

        function changeLetter(nameToChange) {
            function lowerToHyphenUpper(match) {
                return match.toUpperCase();
            }
            return nameToChange.replace(/[-]+[А-Яа-я]/g, lowerToHyphenUpper);
        }
    } else {
        finalChangedName = сhangeName;
    }

    let patronymic = cleanedNameArray[2];
    patronymicFirstLetter = patronymic[0].toUpperCase();
    let patronymicEnd = patronymic.slice(1);
    let changePatronymic = patronymicFirstLetter + patronymicEnd.toLowerCase();

    if (changePatronymic.includes("-") && !changePatronymic.includes("оглы") && !changePatronymic.includes("кызы")) {
        finalChangedPatronymic = changeLetter(changePatronymic);

        function changeLetter(patronymicToChange) {
            function lowerToHyphenUpper(match) {
                return match.toUpperCase();
            }
            return patronymicToChange.replace(/[-]+[А-Яа-я]/g, lowerToHyphenUpper);
        }
    } else {
        finalChangedPatronymic = changePatronymic;
    }

    let surname = cleanedNameArray[0];
    surnameFirstLetter = surname[0].toUpperCase();
    let surnameEnd = surname.slice(1);
    let changeSurname = surnameFirstLetter + surnameEnd.toLowerCase();

    if (changeSurname.includes("-")) {
        finalChangedSurname = changeLetter(changeSurname);

        function changeLetter(surnameToChange) {
            function lowerToHyphenUpper(match) {
                return match.toUpperCase();
            }
            return surnameToChange.replace(/[-]+[А-Яа-я]/g, lowerToHyphenUpper);
        }
    } else {
        finalChangedSurname = changeSurname;
    }

    if (inputText.includes(",") || inputText.includes(";") || inputText.includes(":") || inputText.includes(".") || inputText.includes("'") || inputText.includes("/") || inputText.includes("=") || inputText.includes("_")) {
        document.querySelector(".error").innerHTML = "Проверьте, пожалуйста, правильность написания. ФИО может включать только '-'";
        document.querySelector(".error").style.color = "red";
        return;
    }

    document.querySelector("#name").value = finalChangedName;
    document.querySelector("#patronymic").value = finalChangedPatronymic;
    document.querySelector("#surname").value = finalChangedSurname;
    
    if (document.querySelector("#patronymic").value != "-") {
        document.querySelector(".error").innerHTML = "";
    }
}

document.querySelector(".input-name").addEventListener("change", divideName);