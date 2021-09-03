let conversation = document.querySelector(".main__messages");
let finalMessage;

function sendMessage() {
    let message = document.querySelector(".textarea").value;
    checkSpam(message);

    if (finalMessage != "") {
        const name = document.createElement("p");
        const newText = document.createElement("p");
        const textPlusNameConteiner = document.createElement("div");
        const textConteiner = document.createElement("div");
        const photoContainer = document.createElement("div");
        let photoUrl = localStorage.getItem("photoUrl");

        photoContainer.style.cssText = `min-width: 45px;
                height: 45px;
                border-radius: 50%;
                overflow: hidden;
                background-size: cover;
                background-repeat: no-repeat;
                margin-right: 15px;
        `;

        if (localStorage.getItem("photoUrl") != null) {
            photoContainer.style.backgroundImage = `url(${photoUrl})`;
        } else {
            photoContainer.style.backgroundImage = `url(./images/avatar-icon.png)`;
        }
        newText.innerText = finalMessage;
        textConteiner.style.cssText = `border-bottom: 1px solid #e2dfde;
        height: 50px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;`;

        if (localStorage.getItem("name") != null) {
            name.innerText = localStorage.getItem("name");
        } else {
            name.innerText = "аноним";
        }
        name.style.cssText = `font-weight: 600;
        margin-bottom: 10px;
        color: grey;
        `;

        conversation.appendChild(textConteiner);
        textConteiner.appendChild(photoContainer);
        textConteiner.appendChild(textPlusNameConteiner);
        textPlusNameConteiner.appendChild(name);
        textPlusNameConteiner.appendChild(newText);

        document.querySelector(".textarea").value = "";
    } else {
        return;
    }
    conversation.scrollTop = conversation.scrollHeight;
}

function checkSpam(str) {
    if (str.toLowerCase().includes('viagra'.toLowerCase()) || str.toLowerCase().includes('xxx'.toLowerCase()) || str.toLowerCase().includes('ххх'.toLowerCase())) {
        changedMessage = str.replace(/viagra|xxx|ххх/gi, "***");
    } else {
        changedMessage = str;
    }
    finalMessage = changedMessage.replace(/(\r\n|\n|\r)/gm, "")
}

document.querySelector(".input__button").addEventListener("click", sendMessage);
document.querySelector(".main__input").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        sendMessage();
        document.querySelector(".textarea").value = "";
    }
});

function rememberUserName() {
    let userName = document.querySelector("#user-name").value;
    if (userName === "") {
        document.querySelector(".error").innerHTML = "Вы не ввели имя";
        return;
    }

    if (userName != "" && localStorage.getItem("name") === null) {
        localStorage.setItem("name", userName);
        document.querySelector("#user-name").setAttribute('disabled', 'disabled');
        document.querySelector(".error").innerHTML = "";
    } else {
        document.querySelector(".error").innerHTML = "Вы уже вносили имя";
        return;
    }

    document.querySelector("#user-name").value = "";
        document.querySelector("#user-name").placeholder = "";
}


function rememberUserPhoto() {
    let inputPhoto = document.querySelector('#upload').files[0];
    let reader = new FileReader();

    if (inputPhoto === undefined) {
        document.querySelector(".error").innerHTML = "Вы не загрузили фото";
        return;
    }

    if (inputPhoto != undefined && localStorage.getItem("photoUrl") === null)
    {   document.querySelector(".error").innerHTML = "";
        reader.onloadend = function () {
        localStorage.setItem("photoUrl", `${reader.result}`);
        document.querySelector("#upload").setAttribute('disabled', 'disabled');
        document.querySelector(".fileform").style.cssText = `border: 1.5px solid lightgrey;
        background-color: #fafafa;`;
        document.querySelector("#fileformlabel").style.backgroundColor = "#fafafa";
        document.querySelector(".selectbutton").style.cssText = `border: 1.5px solid lightgrey;
        background-color: lightgrey;`;
    }
    if (inputPhoto) {
        reader.readAsDataURL(inputPhoto);

    }}else{
        document.querySelector(".error").innerHTML = "Вы уже загрузили фото";
        return;
    }

    document.getElementById("fileformlabel").innerHTML = "";
}


document.querySelector(".button-for-name").addEventListener("click", rememberUserName);
document.querySelector(".button-for-photo").addEventListener("click", rememberUserPhoto);

document.querySelector(".fileform").addEventListener("click", clickInput= ()=> { document.querySelector("#upload").click(); });

function getName(str) {
    let i;
    if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
    } else {
        i = str.lastIndexOf('/') + 1;
    }
    let filename = str.slice(i);
    let uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

function checkStorage(){
    if(localStorage.getItem("photoUrl") != null){
        document.querySelector("#upload").setAttribute('disabled', 'disabled');
    }
    if(localStorage.getItem("name") != null){
        document.querySelector("#user-name").setAttribute('disabled', 'disabled');
        document.querySelector("#user-name").placeholder = "";
    }
    if(document.querySelector("#upload").disabled === true){
        document.querySelector(".fileform").style.cssText = `border: 1.5px solid lightgrey;
        background-color: #fafafa;`;
        document.querySelector("#fileformlabel").style.backgroundColor = "#fafafa";
        document.querySelector(".selectbutton").style.cssText = `border: 1.5px solid lightgrey;
        background-color: lightgrey;`;
    }
}
document.addEventListener("DOMContentLoaded", checkStorage);

function changeUserData(){
    document.querySelector(".error").innerHTML = "";
    document.querySelector("#upload").removeAttribute('disabled');
    document.querySelector("#user-name").removeAttribute('disabled');
    document.querySelector("#user-name").placeholder = "Введите свое имя";


        document.querySelector(".fileform").style.cssText = `border: 1.5px solid #82bef3;
        background-color: #FFF;`;
        document.querySelector("#fileformlabel").style.backgroundColor = "#FFF";
        document.querySelector(".selectbutton").style.cssText = `border: 1.5px solid #82bef3;
        background-color: #82bef3;`;
        document.querySelector("#user-name").value = localStorage.getItem("name");

        localStorage.removeItem("name");
        localStorage.removeItem("photoUrl");
}
document.querySelector(".change-user-data").addEventListener("click", changeUserData)

