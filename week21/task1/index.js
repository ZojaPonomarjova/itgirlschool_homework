function showCards() {

    let searchTag = document.querySelector(".main__input").value;
if(searchTag != ""){

    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTag}&api_key=vnduHrCn5R6LunjXtJM7YlPg7k06pG5P&limit=5`)
        .then(response => response.json())
        .then(cards => {
            console.log(cards);
            console.log(cards.data);
            console.log(cards.data.length);
            


            if (cards.data.length === 0 || cards === undefined || cards.data === undefined ) {
                document.querySelector(".main-container").innerHTML = "Попробуйте изменить запрос";
            } else {
                for (let i = 0; i < cards.data.length; i++) {
                    if (cards.data[i] === undefined) {
                        document.querySelectorAll(".main__little-container")[i].innerHTML = "";
                    } else {
                        console.log(cards.data[i].images.original.url);
                        document.querySelectorAll(".main__little-container")[i].innerHTML = "";
                        document.querySelectorAll(".main__little-container")[i].innerHTML += `<img src="${cards.data[i].images.original.url}" alt="${i+1} картинка" class="main__img"><br/>
                        <a href="${cards.data[i].images.original.url}" class="main__link">Ссылка на ${i+1} картинку</a><br/>`;
                    }
                }
            }
        })
        .catch(error => {
            console.log(error);
            document.querySelector(".main-container").innerHTML = "Попробуйте повторить запрос"
        });
    }
}

document.querySelector(".main__button").addEventListener("click", showCards);