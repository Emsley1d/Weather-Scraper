require('dotenv').config();

const apiKey = process.env.API_KEY;

// onload event listener for api:
window.addEventListener('load', () => {
    let lon;
    let lat;
    // accesses location of user:
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        try {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const locationData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

            fetch(locationData).then((response) => {
                return response.json();
            })
                .catch((error) => {
                    console.error(error);
                });
        }  catch (error) {
            console.error(error);
        }
    });
};
});



console.log(locationData)