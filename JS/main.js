require('dotenv').config();

const apiKey = process.env.API_KEY;

// onload event listener for api:
window.addEventListener('load', () => {
    let lon;
    let lat;
    // asks permission to access users location:
    navigator.permissions.request({ name: 'geolocation' })
        .then((permission) => {
            if (permission.state === 'granted'){
                navigator.geolocation.getCurrentPosition((position) => {
                    try {
                        let lon = position.coords.longitude;
                        let lat = position.coords.latitude;
                        const locationData = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}`;


                        fetch(locationData).then((response) => {
                            return response.json();
                        })
                            .catch((error) => {
                                console.error(error);
                            });
                    } catch (error) {
                        console.error(error);
                    }
                });
            }
        });
    });

