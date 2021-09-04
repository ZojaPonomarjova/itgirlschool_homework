let myNotes = [];
if(localStorage.getItem("savedNotes") != null){
    myNotes = JSON.parse(localStorage.getItem("savedNotes"));
}else{myNotes = [];}

function printNote() {
    let notes = document.querySelector(".main__notes");
    let note = document.querySelector(".enter-note-area").value;
    finalNote = note.replace(/(\r\n|\n|\r)/gm, "")

    if (finalNote != "") {
        const newText = document.createElement("p");

        newText.style.cssText = `word-wrap: break-word;
        hyphens: auto;
        word-break: keep-all;
        `;
        newText.innerText = finalNote;
        notes.appendChild(newText);

        myNotes.push(finalNote);
        localStorage.setItem("savedNotes", JSON.stringify(myNotes));
        // console.log(localStorage);
        document.querySelector(".enter-note-area").value = "";
    } else {
        return;
    }

    console.log(myNotes);
    notes.scrollTop = notes.scrollHeight;
}


document.querySelector(".main__button").addEventListener("click", printNote);
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
}

document.addEventListener("DOMContentLoaded", checkStorage);