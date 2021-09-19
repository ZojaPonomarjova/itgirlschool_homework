let myNotes = [];//Все сообщения будут загоняться в массив
if(localStorage.getItem("savedNotes") != null){//Если в хранилище что-то есть
    myNotes = JSON.parse(localStorage.getItem("savedNotes"));//вытаскиваем сообщения оттуда и преобразуем в массив
}else{myNotes = [];}

function printNote() {
    let notes = document.querySelector(".main__notes");
    let note = document.querySelector(".enter-note-area").value;//сообщение, которое внесли в textarea
    finalNote = note.replace(/(\r\n|\n|\r)/gm, "") //заменяем пустые переносы строк на ничего

    if (finalNote != "") {//Если сообщение есть
        const newText = document.createElement("p"); //сщздаем для него контейнер

        newText.style.cssText = `word-wrap: break-word;//стили
        hyphens: auto;
        word-break: keep-all;
        `;
        newText.innerText = finalNote;
        notes.appendChild(newText);

        myNotes.push(finalNote); //каждую новую заметку добавляем в массив
        localStorage.setItem("savedNotes", JSON.stringify(myNotes));//перезаписываем массив в локальном хранилище
        // console.log(localStorage);
        document.querySelector(".enter-note-area").value = "";//очищаем textarea
    } else {
        return;
    }

    console.log(myNotes);
    notes.scrollTop = notes.scrollHeight;
}


document.querySelector(".main__button").addEventListener("click", printNote);//каждый раз нажимая кнопку отправить, перезаписываем данные в локальном хранилище
document.querySelector(".enter-note-area").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        printNote();
        document.querySelector(".enter-note-area").value = "";
    }
});

function checkStorage(){
    if(localStorage.getItem("savedNotes") != null){
        let notesFromStorage = JSON.parse(localStorage.getItem("savedNotes"));
        let notes = document.querySelector(".main__notes");
        console.log(notesFromStorage);
        for (let i=0; i<notesFromStorage.length; i++){
            const newText = document.createElement("p");
            newText.style.cssText = `word-wrap: break-word;
            hyphens: auto;
            word-break: keep-all;
            `;
            newText.innerText = notesFromStorage[i];
            notes.appendChild(newText);
        }
        notes.scrollTop = notes.scrollHeight;
    }
    // alert(localStorage.getItem("name"));
}

document.addEventListener("DOMContentLoaded", checkStorage);