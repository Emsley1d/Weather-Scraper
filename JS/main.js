// require('dotenv').config();

const API_key = '1be2e458069261f93204584096091f3b'

let button = document.querySelector("#location");

button.onclick = function () {
    button.remove();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const locationData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
            console.log(locationData);
            fetch(locationData).then((response) => {
                return response.json();
            }).then((data) => {

                const { icon } = data.weather[0]
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                iconImg.src = iconUrl;

                const place = data.name;
                const displayElement = document.querySelector("#place");
                displayElement.innerHTML = place;

                const { description } = data.weather[0];
                weather.textContent = `${description}`;

                const { speed } = data.wind;
                wind.textContent = `wind speed: ${speed.toFixed(0)} mph`;

                const { temp } = data.main;
                tempC.textContent = `${temp.toFixed(1)} °C`;

                const { feels_like } = data.main;
                feelsLike.textContent = `Feels like: ${feels_like.toFixed(1)} °C`;

                const sunrise = data.sys.sunrise;
                const sunriseGMT = new Date(sunrise * 1000);
                const sunriseDisplay = document.querySelector("#sunrise");
                sunriseDisplay.textContent = `Sunrise: ${sunriseGMT.toLocaleTimeString()}`;

                const sunset = data.sys.sunset;
                const sunsetGMT = new Date(sunset * 1000);
                const sunsetDisplay = document.querySelector("#sunset");
                sunsetDisplay.textContent = `Sunset: ${sunsetGMT.toLocaleTimeString()}`;

                let currentTime = new Date()
                if (currentTime.getTime() > sunriseGMT.getTime()) {
                    sunriseDisplay.remove();
                } else if (currentTime > sunsetGMT) {
                    sunsetDisplay.remove();
                };
            });
        });
    };
};
