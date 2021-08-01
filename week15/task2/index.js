let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let showMessageFirstNameError = () => {
    if (firstName.value == "") {
        document.getElementById("firstNameInputErrorMessage").innerHTML = "Укажите имя";
        firstName.style.borderColor = "red";
    } else {
        document.getElementById("firstNameInputErrorMessage").innerHTML = "";
        firstName.style.borderColor = "black";
    }
}

let showMessageLastNameError = () => {
    if (lastName.value == "") {
        document.getElementById("lastNameInputErrorMessage").innerHTML = "Укажите фамилию";
        lastName.style.borderColor = "red";
    } else {
        document.getElementById("lastNameInputErrorMessage").innerHTML = "";
        lastName.style.borderColor = "black";
    }
}

firstName.addEventListener("change", showMessageFirstNameError);
firstName.addEventListener("blur", showMessageFirstNameError);
lastName.addEventListener("change", showMessageLastNameError);
lastName.addEventListener("blur", showMessageLastNameError);

let showMessageEmailError = () => {
    let email = document.getElementById("email");

    if (email.value == "") {
        document.getElementById("emailInputErrorMessage").innerHTML = "Укажите e-mail";
        email.style.borderColor = "red";
    }
    else if(!email.value.includes("@" && ".")){
        document.getElementById("emailInputErrorMessage").innerHTML = "Адрес должен соответствовать формату: username@example.com";
        email.style.borderColor = "red";
    } 
    else {
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
    if (password.value == "") {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Придумайте пароль";
        password.style.borderColor = "red";
    } else if (password.value.length < 8) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароль содержит менее восьми знаков";
        password.style.borderColor = "red";
    } else if (confirmPassword.value != password.value) {
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
    if (confirmPassword.value == "") {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Подтвердите пароль";
        confirmPassword.style.borderColor = "red";
    } else if (confirmPassword.value != password.value) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароли не совпадают";
        confirmPassword.style.borderColor = "red";
        password.style.borderColor = "red";
    } 
    else if (confirmPassword.value.length < 8) {
        document.getElementById("passwordInputErrorMessage").innerHTML = "Пароль содержит менее восьми знаков";
        confirmPassword.style.borderColor = "red";
    }
    else {
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
    let usernName = document.getElementById("firstName").value;
    let userSurname = document.getElementById("lastName").value;
    document.getElementById("commonErrorMessage").innerHTML = "";

    if (firstName.value && lastName.value && email.value && password.value && confirmPassword.value != '') {
        document.getElementById("commonErrorMessage").innerHTML = ""
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
        alert(`Добро пожаловать, ${usernName} ${userSurname}!`);
    }
}
let enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click", formValidation);