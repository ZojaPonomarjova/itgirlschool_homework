
document.addEventListener("DOMContentLoaded", function (event){
    getWeatherData("Saint Petersburg");
})
document.querySelector(".main__button").addEventListener("click", function(){
let city = document.querySelector("#city").value;
if (city){
    getWeatherData(city);
} else{
    return;
}
    
})


function getWeatherData(city){

fetch("https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city={" + city + "}&tz=[local]&key=918f35a0040f4384874ef8f0c0a33725")
.then(response => response.json())
.then(weather => {console.log(weather);
    document.querySelector(".main__weather-container").innerHTML = `<div class="weather-container__temperature">
    <span class="weather-container__degrees"></span>
    <span class="weather-container__celsius-degrees">&deg;C</span><br />
</div>
<img src="" alt="picture" class="middle-picture">

<div class="weather-container__weaser-type"></div>
<div class="weather-container__wind-info wind-info">
<span class="wind-info__text">Скорость ветра: </span>
<span class="wind-info__number"></span>
</div>
<div class="weather-container__pressure-info pressure-info">
<span class="pressure-info__text">Давление: </span>
<span class="pressure-info__number"></span>
</div>
<div class="weather-container__sun-info sun-info">
<div>
    <img src="./assets/images/sun.png" alt="sun" class="little-picture">
    <span class="sun-info__sunrise"></span>
</div>
<div>
    <span class="sun-info__sunset"></span>
    <img src="./assets/images/moon.png" alt="moon" class="little-picture">
</div>
</div>
</div>`;
    document.querySelector(".main__subtitle").innerHTML = weather.data[0].city_name;
        document.querySelector(".weather-container__degrees").innerHTML = weather.data[0].temp;
document.querySelector(".wind-info__number").innerHTML = Math.round(weather.data[0].wind_spd) + " м/с"
    document.querySelector(".pressure-info__number").innerHTML = Math.round(weather.data[0].pres*0.750064) + " мм рт.с.";

if(weather.data[0].weather.code >= 200 && weather.data[0].weather.code<=522){
    document.querySelector(".middle-picture").src = "./assets/images/thunderstorm.png";
} else if(weather.data[0].weather.code >= 801 && weather.data[0].weather.code<=803){
    document.querySelector(".middle-picture").src = "./assets/images/sun+clouds.png";
} else if(weather.data[0].weather.code == 800){
    document.querySelector(".middle-picture").src = "./assets/images/sun.png";
}else if(weather.data[0].weather.code >= 300 && weather.data[0].weather.code<=522){
    document.querySelector(".middle-picture").src = "./assets/images/rain.png";
}else if((weather.data[0].weather.code >= 600 && weather.data[0].weather.code<=610) || (weather.data[0].weather.code >= 621 && weather.data[0].weather.code<=623) ){
    document.querySelector(".middle-picture").src = "./assets/images/snow.png";
}else if(weather.data[0].weather.code >= 610 && weather.data[0].weather.code<=612){
    document.querySelector(".middle-picture").src = "./assets/images/wind.png";
}else if(weather.data[0].weather.code >= 700 && weather.data[0].weather.code<=751){
    document.querySelector(".middle-picture").src = "./assets/images/fog.png";
}else if(weather.data[0].weather.code == 804){
    document.querySelector(".middle-picture").src = "./assets/images/clouds.png";
}else {
    document.querySelector(".middle-picture").src = "./assets/images/white_clouds.png";
}
let cityName = document.querySelector(".main__subtitle").innerHTML;
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=10216f86ee3575bb463e6ca39c789876")
.then(response => response.json())
.then(weather => {console.log(weather);
    console.log(weather.weather[0].main);
let sunriseTime = new Date(weather.sys.sunrise*1000);
let sunrisehours = sunriseTime.getHours();
if(sunrisehours < 10){
    sunrisehours = "0" + sunrisehours;
}
let sunriseminutes = sunriseTime.getMinutes();
if(sunriseminutes < 10){
    sunriseminutes = "0" + sunriseminutes;
}
    document.querySelector(".sun-info__sunrise").innerHTML = "Восход: " + sunrisehours + ":" + sunriseminutes;
    let sunsetTime = new Date(weather.sys.sunset*1000);
let sunsethours = sunsetTime.getHours();
if(sunsethours < 10){
    sunsethours = "0" + sunsethours;
}
let sunsetminutes = sunsetTime.getMinutes();
if(sunsetminutes < 10){
    sunsetminutes = "0" + sunsetminutes;
}
    document.querySelector(".sun-info__sunset").innerHTML = "Закат: " + sunsethours + ":" + sunsetminutes;

})
.catch(error =>{console.log(error);
});
})
.catch(error =>{console.log(error);
document.querySelector(".main__weather-container").innerHTML = "";
document.querySelector(".main__weather-container").innerHTML = "УПС! Что-то пошло не так.";});


}
