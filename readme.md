 # Weather Scraper (mini-project)

## Description:

A location based Weather Scraper to show the below for a user's location:

  * Current weather conditions.
  * Wind speed.
  * Temperature.
  * Sunrise/Sunset (unless already occured).
    
 All weather data is taken from [Open Weather](https://openweathermap.org/).
    
 ## Deployment Link:
    
[Weather Scraper](https://emsley1d.github.io/Weather-app/)

## Technologies Used:

   * HTML
   * CSS
   * JavaScript
   * Bootstrap

## Project Aims:

   * To put my JavaScript skills to use.
   * To practice calling and fetching data from an API.
   * To practice manipulating the DOM.
   * To make something useful and having fun.

## Wireframe:

HTML and CSS weren't my priority for this project so I wanted to keep the design clean and simple as per my Wireframe below:

![wireframe](/Wireframe.png)

## Current Issues:

N/A - all resolved.

## Resolved Issues:

**1. Browser (Chrome) not asking permission to access user location.**

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

    **Solution:**
  * 'require('dotenv').config()' and hiding the API Key in .env was the issue as I don't have a bundler. For the time being I'll continue without hiding the API key and look to add a bundler at a later stage.

**2. Console message of "[Violation] Only request geolocation information in response to a user gesture" and no location data logged in console.**

    * It would appear being able to request a users geolocation on page load has been removed: https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/

    **Solution:**
    * Button added which user has to press to then be prompted to allow access to location.

**3. The Sunset time isn't removed from the browser after it occurs; as intended. However; the Sunrise time is removed after it occurs.**
    * Reviwed my code and realised I hadn't included .getTime() for the Sunset part of my if else statement. 
    * The above still didn't work so I settled on using a "line-through" for the Sunrise/Sunset instead of attempting to remove both after each had occured.

   **Solution:**
    * I came to realise I hadn't closed the "<h5>" tag for for the header with id="sunset" correctly; I had neglected to include the closing "/". Realising this I then reverted back to my original plan to use .remove() to remove both Sunset/Sunrise as opposted to adding the style of "line-through".


    








