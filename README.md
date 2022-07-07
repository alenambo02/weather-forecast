# weather-forecast

## Description
Hello, Here you will find a weather dashboard that allows you to search any city and display its current temperature, humidity, wind-speed, and uv index. Right below it, you can access a 5-day weather forecast of the city you have searched. These weather icons will display the date, temperature, humidity, and an icon that matches the current weather for that day.  


Challenges: Storing that city previously searched below was a challenge I struggled with. I ended up creating a reverse for loop that stored the last searched city first and so on.

## Usage
You may use this page to access information about local storage, how to call on different API's using Javascript and the fetch method. Feel free to reach out to me with ways I can simplify my code or better it! I have included an image reference to the page and a deployed link of the webpage below: ------> https://alenambo02.github.io/weather-forecast/ <------

![alt text](./assets/weather%20dashboard.png)

For my code snippet this time, I included my attempt in trying to create a function that gathered all the data so I could use it where I called the api to retrieve it. Feel free to message me and tell me what my problem was in attempting to do it this was, I am a newbie and could use the pointers.

However, I was successful in retieving my data but it was not the most efficent startegy.
```
function cardValues(value, index) {
    $("#tempCont").empty()
    var iconURL = "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
    var image = $("<img>").attr("src", iconURL)
    img.attr("alt", "Weather Icon")
    var temp = $("<p>").text("Temperature: " + value.temp.day + "F")
    var humidity = $("<p>").text("Humidity: " +value.humidity + "%")
    var wind = $("<p>").text("Wind-speed: " +value.wind_speed + "MPH")
    var uvi = $("<p>").text("UV Index: " + value.uvi)
    var fiveDayForecast = $("<div>").addClass("border-warning")
    fiveDayForecast.append(temp, humidity, wind, uvi)
    }
```

## License 
MIT License

Copyright (c) 2022 Ale

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits
Helpful tool to understand how to display data retrieved from API to HTML: 
https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30
https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

Helpful video/tools to understand calling on API's: https://www.youtube.com/watch?v=WZNG8UomjSI&t=1467
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

And major credits to my teammate: 
Harshith Manjunatha
for helping me with storage issues!
 