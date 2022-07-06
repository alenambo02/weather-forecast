var forecastBox = $("#forecastBox");
var weatherBox = $("#weatherBox");
var form = $("#cityForm");
var searchInput = $("#searchInput");
var button = $("#addItemBtn");
var temperatureItem = $(".temperature");
var humidityItem = $(".humidity");
var windSpeedItem = $(".wind");
var uvIndexItem = $(".uvIndex");

var long;
var lat;

geoLocation = function (cityName) {
    $.ajax({
        url: "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=a332184f8c6ec6a979de62cfa465345f",
        method: "GET"
    })
        .then(function(response){
            console.log(response)
            long = response[0].lon
            lat = response[0].lat
            fetchWeather();
        })


    
}

// var apiKey = "a332184f8c6ec6a979de62cfa465345f"

$(document).on("click", "#addItemBtn", function (event) {
    event.preventDefault();
    console.log("working")
   
    geoLocation(searchInput.val());
  


});


fetchWeather = function () {
    var latLonURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=current,hourly,minutely,alerts&units=imperial&appid=a332184f8c6ec6a979de62cfa465345f"
    var fiveDayEl = document.getElementsByClassName("box1")

    fetch(latLonURL)
    .then(function (response) {
		if (200 !== response.status) {
			console.log(
				"Looks like there was a problem. Status Code: " + response.status
			);
			return;
		}
        fiveDayEl[0].classList.add("loaded");

        response.json().then(function (data)  {
            var fday = "";
			data.daily.forEach((value, index) => {
				if (index <= 4 ) {
					var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					});
					var icon = value.weather[0].icon;
					var temp = value.temp.day.toFixed(0);
                    var humidity = value.humidity;
                    var wind = value.wind_speed;
                    var uvi = value.uvi;
                   


					fday = `<div class="forecast-day">

						<p>${dayname}</p>
						<p><span class="icon-${icon}" title="${icon}"></span></p>
						<div class="forecast-day--temp">${temp}<sup>°F</sup></div>
                        <p><span class="forecast-day--humidity"><text> Humidity: </text>${humidity + "%"}</div>  
                        <p><span class="forecast-day--wind"><text> Wind Speed: </text>${wind + "MPH" }</div>
                        <p><span class="forecast-day--uvi"><text> UVI Index: </text>${uvi}</div>
					
                        </div>`;
					fiveDayEl[0].insertAdjacentHTML('beforeend', fday);
				}
			});
		});
	})
	.catch(function (err) {
		console.log("Fetch Error :-S", err);
	});       
};





// function displayingItemsBox2(temperatureItem, humidityItem, windSpeedItem, uvIndexItem, cityInput) {
//     var weatherBoxDiv = document.querySelector("#weatherbox");

// }

// function fetchWeather(lat, lon, cityInput) {
  
//         var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=a332184f8c6ec6a979de62cfa465345f"
//             console.log(oneCall)
//         fetch(oneCall)
//         .then(response => response.json())
//         .then(data => { 
//         //grabbing data from object array
//             temperatureItem = data.current.temp;
//             humidityItem = data.current.humidity;
//             windSpeedItem = data.current.wind_speed;
//             uvIndexItem = data.current.uvi;  

//             var

            
        
//     });
    
// }


// // // Function for geocoding 

// function useGeocodeForCity() {
//     var lat = 0;
//     var lon = 0;
    
//    cityInput = searchInput.val();
    
//     var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=a332184f8c6ec6a979de62cfa465345f"
//         console.log(cityURL)
//     fetch(cityURL)
//     .then(response => response.json())
//     .then(data => {
//         lat = data[0].lat;
//         lon = data[0].lon;

//         fetchWeather(lat, lon, cityInput)
//     })
//     searchInput.val("");
// }

 



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