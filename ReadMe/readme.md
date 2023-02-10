 # Weather App (mini-project)

## Description:

A location based weather app to show current the current weather data depending on a user's location.

## Wireframe:

I want to keep the design clean and simple as below:

![wireframe](/ReadMe/Wireframe.png)

## Current Issues:

## Resolved Issues:

1. Browser (Chrome) not asking for location. 
    * Re-opened live server in Safari but Safari doesnt ask for permission to access location either.
    * Confirmed Chrome & Safari had permission to access my location on my Mac.
    * Realised I hadn't correctly used string interpolation for the locationData URL; so corrected URL.
    * Code wrapped in try-catch and only error is:

    ```json
    {
    window.addEventListener('load', () => {
    ^

    ReferenceError: window is not defined
    }
    ```

    * Created new API key.
    * Added "navigator.permissions.request" but still no luck.
    * Many browsers currently not supporting Permission API so reverted back to Geolocation API.
    * 'require('dotenv').config()' and hiding the API Key in .env was the issue as I don't have a bundler. For the time being I'll continue without hiding the API key and look to add a bundler at a later stage.






