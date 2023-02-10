require('dotenv').config();

const apiKey = process.env.API_KEY;

// onload event listener for api:
window.addEventListener('load', () => {
    let long;
    let lat;
    // accesses location of user:
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const locationData = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}`;

            fetch(locationData).then((response) => {
                return response.json();
            });
        }
)}
});



console.log(locationData)