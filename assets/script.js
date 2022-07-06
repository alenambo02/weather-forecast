var forecastBox = $("#forecastBox");
var weatherBox = $("#weatherBox");
var form = $("#cityForm");
var searchInput = $("#searchInput");
var button = $("#addItemBtn");
var temperatureItem = $(".temperature");
var humidityItem = $(".humidity");
var windSpeedItem = $(".wind");
var uvIndexItem = $(".uvIndex");



// var apiKey = "a332184f8c6ec6a979de62cfa465345f"

$(document).on("click", "#addItemBtn", function (event) {
    event.preventDefault();
    console.log("working")
    // var cityInput = cityInputElement.val();
    // if (cityInput === "") {
    //     return;
    // }
    // searchInput = cityInput;
    // val = cityInput;

    cityInputElement.val("");
    fetchWeather();


});

function displayingItemsBox2(temperatureItem, humidityItem, windSpeedItem, uvIndexItem, cityInput) {
    var weatherBoxDiv = document.querySelector("#weatherbox");

}

function fetchWeather(lat, lon, cityInput) {
  
        var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=a332184f8c6ec6a979de62cfa465345f"
            console.log(oneCall)
        fetch(oneCall)
        .then(response => response.json())
        .then(data => { 
        //grabbing data from object array
            temperatureItem = data.current.temp;
            humidityItem = data.current.humidity;
            windSpeedItem = data.current.wind_speed;
            uvIndexItem = data.current.uvi;  

            var

            
        
    });
    
}


// // Function for geocoding 

function useGeocodeForCity() {
    var lat = 0;
    var lon = 0;
    
   cityInput = searchInput.val();
    
    var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=a332184f8c6ec6a979de62cfa465345f"
        console.log(cityURL)
    fetch(cityURL)
    .then(response => response.json())
    .then(data => {
        lat = data[0].lat;
        lon = data[0].lon;

        fetchWeather(lat, lon, cityInput)
    })
    searchInput.val("");
}

 



 // `api.openweathermap.org/data/2.5/forecast?q=chicago&appid=a332184f8c6ec6a979de62cfa465345f`
//  var latLonURL = "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=apiKey"


// function displayCityWeathers(event) {
//     event.preventDefault();
//     console.log("working")
// }
 
//     var latLonURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey 

//      console.log(latLonURL)

//     fetch(latLonURL)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.list[0])
//         console.log(data.list[1])
//         console.log(data.list[2])
//         console.log(data.list[3])
//         console.log(data.list[4])
//     });  
// }