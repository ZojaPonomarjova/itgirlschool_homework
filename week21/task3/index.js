document.getElementById("form-button").addEventListener("submit", (event)=>{
    event.preventDefault();
})
document.getElementById("form-button").addEventListener("click", (e) =>{

    fetch ("https://httpbin.org/post",
    {
        method :'POST',
        body: new FormData(document.getElementById("form")),
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));

})