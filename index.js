function SearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search");

    searchCity(searchInput.value);
}



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", SearchSubmit);

function searchCity(city){
    let apiKey = "ff8cb50adfdf253bb46cfe07e0cf92e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement = document.querySelector("h1");

    let temperature = response.data.main.temp;
    let cityName = response.data.name;


cityElement.innerHTML= cityName;
temperatureElement.innerHTML = Math.round(temperature);
    }
    searchCity("Hammanskraal")