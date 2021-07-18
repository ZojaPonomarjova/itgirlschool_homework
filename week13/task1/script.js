
function showMessage(from , message = 'привет') {
    if (from === null) {
    from = 'Незнакомка';}
    if (from === "") {
    from = 'Незнакомка';}
 return  (`${from}, ${message}!` );
 }  




