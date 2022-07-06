// var seachCont = $("#searchCont")
// var button = $("#addItemBtn");

$(document).on("click", "#addItemBtn", displayCityWeathers);
var apiKey = "a332184f8c6ec6a979de62cfa465345f"
var city = "chicago"
// var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=a332184f8c6ec6a979de62cfa465345f`
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey
function displayCityWeathers(event) {
    event.preventDefault();
    console.log("working")
    // var cities = $(this).attr("data-name");
    
    
   console.log(queryURL)
    fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        console.log(data.list[0])
        console.log(data.list[1])
        console.log(data.list[2])
        console.log(data.list[3])
        console.log(data.list[4])
        
        
    });  
}





// function displayCityWeathers() {


// var queryURl = "https:

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     $("#movies-view").empty();

// }
 // `api.openweathermap.org/data/2.5/forecast?q=chicago&appid=a332184f8c6ec6a979de62cfa465345f`