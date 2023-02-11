// require('dotenv').config();

const API_key = '1be2e458069261f93204584096091f3b'

// button press to access location
let button = document.querySelector("#location");

button.onclick = function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                lon = position.coords.longitude;
                lat = position.coords.latitude;
                const locationData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
                console.log(locationData);
                fetch(locationData).then((response) => {
                    return response.json();
                }).then((data) => {
                    const place = data.name;
                    const displayElement = document.querySelector("#place");
                    displayElement.innerHTML = place;

                    const { description } = data.weather[0];
                    weather.textContent = `${description}`;

                    const { temp } = data.main;
                    tempC.textContent = `${temp.toFixed(2)} °C`;

                    const { feels_like } = data.main;
                    feelsLike.textContent = `Feels like: ${feels_like.toFixed(2)} °C`;

                    const { sunrise } = data.sys;
                    sunrise.textContent = `Sunrise: ${sunrise}`;

                    const { sunset } = data.sys;
                    sunset.textContent = `Sunset: ${sunset}`;

                });
            });
        }
    };

