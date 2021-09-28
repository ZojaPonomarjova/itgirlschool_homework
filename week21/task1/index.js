function showCards() {

    let searchTag = document.querySelector(".main__input").value;
    let imgAmount = document.querySelector("#img-amount").value;
if(searchTag != ""){

    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTag}&api_key=vnduHrCn5R6LunjXtJM7YlPg7k06pG5P&limit=${imgAmount}`)
        .then(response => response.json())
        .then(cards => {
            // console.log(cards);
            // console.log(cards.data);
            // console.log(cards.data.length);
            
            if (cards.data.length === 0 || cards === undefined || cards.data === undefined ) {
                document.querySelector(".main__container").innerHTML = "Попробуйте изменить запрос";
            } else {
                document.querySelector(".main__container").innerHTML = "";
                //Вариант с циклом for
                // for (let i = 0; i < cards.data.length; i++) {
                //     if (cards.data[i] === undefined) {
                //         document.querySelector(".main__container").innerHTML += "";
                //     } else {
                //         // console.log(cards.data[i].images.original.url);
                        
                //         document.querySelector(".main__container").innerHTML += `<div class="main__little-container"><img src="${cards.data[i].images.original.url}" alt="${i+1} картинка" class="main__img"><br/>
                //         <a href="${cards.data[i].images.original.url}" class="main__link">Ссылка на ${i+1} картинку</a></div>`;
                //     }
                // }
                cards.data.forEach((card, i) =>{
                    if (card === undefined) {
                        document.querySelector(".main__container").innerHTML += "";
                    } else {
                        document.querySelector(".main__container").innerHTML += `<div class="main__little-container"><img src="${card.images.original.url}" alt="${i+1} картинка" class="main__img"><br/>
                        <a href="${card.images.original.url}" class="main__link">Ссылка на ${i+1} картинку</a></div>`;
                    }
            })
            }
        })
        .catch(error => {
            console.log(error);
            document.querySelector(".main__container").innerHTML = "Попробуйте повторить запрос"
        });
    }
}

document.querySelector(".main__button").addEventListener("click", showCards);