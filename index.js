function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednsday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];
    if (minutes< 10){
        minutes= `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`
}
function searchCity(city){
    let apiKey = "ff8cb50adfdf253bb46cfe07e0cf92e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}



function SearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search");

    searchCity(searchInput.value);
}



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", SearchSubmit);



function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement = document.querySelector("h1");
let humidityElement = document.querySelector(".humidity");
  let windElement = document.querySelector(".wind");
  let timeElement = document.querySelector(".date-time");
  let descriptionElement = document.querySelector(".current-weather");
    
    let temperature = response.data.main.temp;
    let cityName = response.data.name;
let humidity = response.data.main.humidity;
let wind = response.data.wind.speed;
let description = response.data.weather[0].description;

cityElement.innerHTML= cityName;
temperatureElement.innerHTML = Math.round(temperature);
humidityElement.innerHTML = `${humidity}%`;
windElement.innerHTML = `${wind}km/h`;
descriptionElement.innerHTML = description;

let currentTime = new Date();
timeElement.innerHTML = formatDate(currentTime);
    }
    searchCity("Hammanskraal")