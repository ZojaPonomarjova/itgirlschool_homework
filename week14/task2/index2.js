

function changeColorpink(sender) {
    sender.classList.add("pinkSelected");
}

function changeColorlightblue(sender) {
    sender.classList.add("lightblueSelected");
}

let showMessage = (from , message = 'привет') => {
    let from = prompt('your name?');
    if (from === null) {
    from = 'Аноним';}
    if (from === "") {
    from = 'Аноним';}
 return  (`${from}, ${message}!` );
 }  
