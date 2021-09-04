let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

const getNameValidationFunction = (elementId, errorMessage) => {
    return (e) => {
        const element = e.target;
        if (element.value == "") {
            document.getElementById(elementId).innerHTML = errorMessage;
            element.style.borderColor = "red";
        } else {
            document.getElementById(elementId).innerHTML = "";
            element.style.borderColor = "black";
        }
    };
};

const firstNameCallback = getNameValidationFunction("firstNameInputErrorMessage", "Укажите имя");
const lastNameCallback = getNameValidationFunction("lastNameInputErrorMessage", "Укажите фамилию");
firstName.addEventListener("change", firstNameCallback);
firstName.addEventListener("blur", firstNameCallback);
lastName.addEventListener("change", lastNameCallback);
lastName.addEventListener("blur", lastNameCallback);

let showMessageEmailError = () => {
    let email = document.getElementById("email");
    let emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if (email.value == "") {
        document.getElementById("emailInputErrorMessage").innerHTML = "Укажите e-mail";
        email.style.borderColor = "red";
    } else if (emailRegexp.test(email.value) === false) {
        document.getElementById("emailInputErrorMessage").innerHTML = "Адрес должен соответствовать формату: username@example.com";
        email.style.borderColor = "red";
        console.log(emailRegexp.test(email.value));
    } else {
        document.getElementById("emailInputErrorMessage").innerHTML = "";
        email.style.borderColor = "black";
    }

}
email.addEventListener("change", showMessageEmailError);
email.addEventListener("blur", showMessageEmailError);

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let viewPassword = document.getElementById("showPassword");

let showPassword = () => {
    if (viewPassword.checked != true) {
        password.type = "password";
        confirmPassword.type = "password";
    } else {
        password.type = "text";
        confirmPassword.type = "text";
    }
}
viewPassword.addEventListener("change", showPassword);

let showMessagePasswordError = () => {
    const passwordRegexp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    if (password.value == "") {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Придумайте пароль";
        password.style.borderColor = "red";
    } else if (password.value.length < 8) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароль содержит менее восьми знаков";
        password.style.borderColor = "red";
    }else if(passwordRegexp.test(password.value) === false){
        document.getElementById("passwordInputErrorMessage").innerHTML = "Ваш пароль ненадежен. Пароль должен содержать буквы, цифры и специальные знаки.";
        password.style.borderColor = "red";
    } 
    else if (confirmPassword.value != password.value) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароли не совпадают";
        confirmPassword.style.borderColor = "red";
        password.style.borderColor = "red";
    } else {
        document.getElementById("passwordInputErrorMessage").innerHTML = "";
        password.style.borderColor = "black";
        confirmPassword.style.borderColor = "black";
    }
}

let showMessageConfirmPasswordError = () => {
    const passwordRegexp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    if (confirmPassword.value == "") {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Подтвердите пароль";
        confirmPassword.style.borderColor = "red";
    } else if (confirmPassword.value != password.value) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароли не совпадают";
        confirmPassword.style.borderColor = "red";
        password.style.borderColor = "red";
    } else if (confirmPassword.value.length < 8) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароль содержит менее восьми знаков";
        confirmPassword.style.borderColor = "red";
    }
    else if(passwordRegexp.test(confirmPassword.value) === false){
        document.getElementById("passwordInputErrorMessage").innerHTML = "Ваш пароль ненадежен. Пароль должен содержать буквы, цифры и специальные знаки.";
        confirmPassword.style.borderColor = "red";
    } else {
        document.getElementById("passwordInputErrorMessage").innerHTML = "";
        password.style.borderColor = "black";
        confirmPassword.style.borderColor = "black";
    }
}

password.addEventListener("change", showMessagePasswordError);
password.addEventListener("blur", showMessagePasswordError);
confirmPassword.addEventListener("change", showMessageConfirmPasswordError);
confirmPassword.addEventListener("blur", showMessageConfirmPasswordError);

function formValidation() {

    document.getElementById("commonErrorMessage").innerHTML = "";

    if (firstName.value && lastName.value && email.value && password.value && confirmPassword.value != '') {
        document.getElementById("commonErrorMessage").innerHTML = "";
    } else {
        document.getElementById("commonErrorMessage").innerHTML = "Вы заполнили не все поля!";
    }
    if (document.getElementById("firstNameInputErrorMessage").innerHTML ||
        document.getElementById("lastNameInputErrorMessage").innerHTML ||
        document.getElementById("emailInputErrorMessage").innerHTML ||
        document.getElementById("passwordInputErrorMessage").innerHTML ||
        document.getElementById("commonErrorMessage").innerHTML != "") {
        document.getElementById("commonErrorMessage").innerHTML = "Вы заполнили не все поля!";
    } else {
        sayHallo();
    }
}
let enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click", formValidation);

function sayHallo() {
    let usernName = document.getElementById("firstName").value;
    let userSurname = document.getElementById("lastName").value;
    document.getElementById("title").innerHTML = `Добро пожаловать, <br/>${usernName} ${userSurname}!`;

    document.getElementsByClassName("main__inner")[0].style.display = "none";
    document.getElementsByClassName("shield")[0].style.marginTop = "none";

}