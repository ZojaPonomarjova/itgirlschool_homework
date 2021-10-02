function showCards() {

    let searchTag = document.querySelector(".main__input").value;
    let imgAmount = document.querySelector("#img-amount").value;
    if (searchTag != "") {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTag}&api_key=vnduHrCn5R6LunjXtJM7YlPg7k06pG5P&limit=${imgAmount}`)
            .then(response => response.json())
            .then(cards => {
                document.querySelector(".main__container").innerHTML = "";

                try {
                    cards.data.forEach((card, i) => {
                        // if (card === undefined) {
                        //     document.querySelector(".main__container").innerHTML += "";
                        // } else {
                        document.querySelector(".main__container").innerHTML += `<div class="main__little-container"><img src="${card.images.original.url}" alt="${i+1} картинка" class="main__img"><br/>
                        <a href="${card.images.original.url}" class="main__link">Ссылка на ${i+1} картинку</a></div>`;
                        // }

                    })

                    if (cards.data.length === 0) {
                        throw new ReferenceError("Попробуйте изменить запрос: такой тег не найден");
                    }

                    if (cards === undefined || cards.data === undefined) {
                        throw new SyntaxError("Попробуйте повторить запрос: пришли некорректные данные");
                    }
                } catch (error) {
                    console.log(error);
                    document.querySelector(".main__container").innerHTML = error.message;
                };
            })

            .catch(error => {
                console.log(error);
                document.querySelector(".main__container").innerHTML = "Проверьте подключение и попробуйте повторить запрос."
            });


    } else {
        document.querySelector(".main__container").innerHTML = "Вы не внесли тег для поиска";
    }
}

document.querySelector(".main__button").addEventListener("click", showCards);