let conversation = document.querySelector(".main__messages");

let finalMessage;

function sendMessage() {
    let messageChangeToLower = document.querySelector(".textarea").value.toLowerCase();
    checkSpam(messageChangeToLower);

    if (finalMessage != "") {
        const newText = document.createElement("p");
        newText.innerText = finalMessage;
        newText.style.borderBottom = "1px solid #e2dfde";
        conversation.appendChild(newText);
        document.querySelector(".textarea").value = "";
    } else {
        return;
    }

    conversation.scrollTop = conversation.scrollHeight;
}

function checkSpam(str) {
    if (str.includes('viagra'.toLowerCase()) || str.includes('xxx'.toLowerCase()) || str.includes('ххх'.toLowerCase())) {
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