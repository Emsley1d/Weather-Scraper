 # Weather App (mini-project)

## Description:

A location based weather app to show current the current weather data depending on a user's location.

## Wireframe:

I want to keep the design clean and simple as below:

![wireframe](/ReadMe/Wireframe.png)

## Current Issues:

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



