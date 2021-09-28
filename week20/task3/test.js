let dogInfo = {
    "breed": "Beagle",
		"size": "large",
		"color": "orange",
		"age": 6
}

fetch("http://localhost/pets/add",
{
    method: 'POST',
body: JSON.stringify(dogInfo),
headers:{
    'Content-Type': 'application/json;charset=utf-8'
},
})
.then(response => response.json())
.then(dogData => {console.log(dogData)})
.catch (error => console.log(error))