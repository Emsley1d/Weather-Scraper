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
                }).then(data => {
                    console.log(data);
                });
            });
        }
    };

