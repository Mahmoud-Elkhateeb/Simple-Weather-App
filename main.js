function displayCityName() {

    var cityInput = document.getElementById("city-input");
    var cityName = document.getElementById("city-name");
    cityName.textContent = "City: " + cityInput.value;

    let apikey = `https://api.weatherapi.com/v1/current.json?key=eaf9e14a0e904967b1e31755240106&q=${cityInput.value}&aqi=no`
    fetch(apikey)
        .then((req) => req.json().finally())
        .then((data) => {
            // 
            // console.log(data);
            // 
            var temp = document.getElementById("temperature");
            temp.innerHTML = `${data.current.temp_c} C&deg;`;
            // 
            var icon = document.getElementById("weather-icon");
            icon.src = data.current.condition.icon
        })
}
//Eng\ Mahmoud Elkhateeb
