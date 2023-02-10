// require('dotenv').config();

const apiKey = '1be2e458069261f93204584096091f3b'

// onload event listener for api:

if (typeof window !== "undefined") {
    window.addEventListener('load', () => {
        let lon;
        let lat;
        // accesses location of user:

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lon = position.coords.longitude;
                const lat = position.coords.latitude;
                const locationData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
                fetch(locationData).then((response) => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                });
            });
        }
    });
}