// variables that point to html elements
var forecastBox = $("#forecastBox");
var weatherBox = $("#weatherBox");
var form = $("#cityForm");
var searchInput = $("#searchInput");
var button = $("#addItemBtn");
var temperatureItem = $(".temperature");
var humidityItem = $(".humidity");
var windSpeedItem = $(".wind");
var uvIndexItem = $(".uvIndex");
var pastSearches = $("#previousSearches");
// apikey generated from open weather api
var apiKey = "a332184f8c6ec6a979de62cfa465345f"

var cn;


var searchedCities = [];
if(JSON.parse(localStorage.getItem("history"))){
    searchedCities = JSON.parse(localStorage.getItem("history"))
    
}

showSearchedCities();
// variables created in order to be able to use inside api call and give them value afterwards
var long;
var lat;
// this function uses geocodingAPI to retrieve city names so that lat & lon coordinates arent required
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

//event listner that targets search button on page  
$(document).on("click", "#addItemBtn", function (event) {
    event.preventDefault();
    console.log("working")

    cn = searchInput.val()
   
    geoLocation(cn);

});

// this api request uses onecall api on open weather to retrieve important data information the user will be displayed with upon city searched
fetchWeather = function () {
    var latLonURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=current,hourly,minutely,alerts&units=imperial&appid=a332184f8c6ec6a979de62cfa465345f"
    // fday.empty()
    var fiveDayEl = document.getElementsByClassName("box1")

    fetch(latLonURL)
    .then(function (response) {
		if (200 !== response.status) {
			console.log(
				"There was an error calling for the API. Status Code: " + response.status
			);
			return;
		}
        addCitiesToHistory(cn);

        fiveDayEl[0].classList.add("loaded");

        response.json().then(function (data)  {
            var daysInfo = "";
			data.daily.forEach((value, index) => {
				if 
                (index <= 4 ) {
					var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					});
					
					var temp = value.temp.day.toFixed(0);
                    var humidity = value.humidity;
                    var wind = value.wind_speed;
                    var uvi = value.uvi;
                    
    
                    // data retrieved includes humidity, temp, wind-speed, and uv indexx and display on webpage by creating html tags so data can be stored there 

					daysInfo = `<div id="box2" class="forecast-day">
                        
						<p id="box1" >${dayname}</p>
						<div class="forecast-day-temp">${temp}<sup>°F</sup></div>
                        <p><span class="forecast-day-humidity"><text> Humidity: </text>${humidity + "%"}</p>  
                        <p><span class="forecast-day-wind"><text> Wind Speed: </text>${wind + "MPH" }</p>
                        <p class= "uviColor"><span class="forecast-day-uvi"><text> UVI Index: </text>${uvi}</p>
					
                        </div>`;

					fiveDayEl[0].insertAdjacentHTML('beforeend', fday);


				}
			});
		});
	})
    // catches errors, if no errors then it is ignored 
	.catch(function (err) {
		console.log("Fetch Error", err);
	});       
};

// used a reverse loop so that the last city searched on page is displayed first in list
function showSearchedCities () {
    pastSearches.empty()
    for(var i =  searchedCities.length -1; i >= 0; i--){
        var list = $("<button>").addClass("btn btn-success text-light searchedbtn w-50 m-1").attr("name", searchedCities[i]).text(searchedCities[i])
        pastSearches.append(list)
    }


}
// this function allows cities already search by user to be displayed on the page itself for easier accessability
function addCitiesToHistory (name) {
    if(searchedCities.includes(name)){
        return
    }
    searchedCities.push(name)
    localStorage.setItem("history", JSON.stringify(searchedCities));
    showSearchedCities();
}

$(document).on("click", ".searchedbtn", function () {

    geoLocation($(this).attr("name"));

})



