var forecastBox = $("#forecastBox");
var weatherBox = $("#weatherBox");
var form = $("#cityForm");
var formInput = $("#cityInput");
var button = $("#addItemBtn");



$(document).on("click", "#addItemBtn", displayCityWeathers);
var apiKey = "a332184f8c6ec6a979de62cfa465345f"
var city = "chicago"


function displayCityWeathers(event) {
    event.preventDefault();
    console.log("working")
 
    var latLonURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey 

     console.log(latLonURL)

    fetch(latLonURL)
    .then(response => response.json())
    .then(data => {
        console.log(data.list[0])
        console.log(data.list[1])
        console.log(data.list[2])
        console.log(data.list[3])
        console.log(data.list[4])
    });  
}



// Function for geocoding 
// var latLonURL = "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=apiKey"
// function useGeocodeForCity(event) {
//     var lat = 0;
//     var lon = 0;

//     var cityName = cityInput.val();
//     var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey
//     console.log(cityURL)
//     fetch(cityURL)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
        
//     });  


 // `api.openweathermap.org/data/2.5/forecast?q=chicago&appid=a332184f8c6ec6a979de62cfa465345f`