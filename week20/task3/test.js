fetch("https://api.github.com/users/ZojaPonomarjova")
.then(response => response.json())
.then(user => {console.log(user);})