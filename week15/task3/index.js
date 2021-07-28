
let colorWhite = () => {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("background").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundImage = "none"
    document.getElementById("background").style.color = "black";
    document.querySelector("div").style.color = "black";
}
let colorGray = () => {
    document.getElementById("body").style.backgroundColor = "gray";
    document.getElementById("background").style.backgroundColor = "gray";
    document.getElementById("body").style.backgroundImage = "none"
    document.getElementById("background").style.color = "#ffeb3b";
    document.querySelector("div").style.color = "#ffeb3b";
}
let colorLightblue = () => {
    document.getElementById("body").style.backgroundColor = "lightblue";
    document.getElementById("background").style.backgroundColor = "lightblue";
    document.getElementById("body").style.backgroundImage = "none"
    document.getElementById("background").style.color = "black";
    document.querySelector("div").style.color = "black";
}
let pictureBack = () => {
    document.getElementById("body").style.backgroundImage = "URL(./images/babochki.jpg)";
    document.getElementById("background").style.backgroundColor = "#072c49";
    document.getElementById("background").style.color = "lightblue";
    document.querySelector("div").style.color = "lightblue";
}

let colorBackground = () => {
    switch (document.getElementById("background").value) {
        case "none":
            colorWhite();
            break;

        case "dark":
            colorGray();
            break;

        case "picture":
            pictureBack();
            break;

        case "light-blue":
            colorLightblue();
            break;
    }
}