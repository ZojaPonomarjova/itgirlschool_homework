
function showMessage(from , message = 'привет') {
    if (from === null) {
    from = 'Аноним';}
    if (from === "") {
    from = 'Аноним';}
 return  (`${from}, ${message}!` );
 }  




