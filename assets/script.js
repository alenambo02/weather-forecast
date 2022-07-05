// var seachCont = $("#searchCont")
// var button = $("#addItemBtn");

$(document).on("click", "#addItemBtn", displayCityWeathers);

function displayCityWeathers() {
    var cities = $(this).attr("data-name");
    var queryURl = "https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&units=imperial&appid=a332184f8c6ec6a979de62cfa465345f"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#weatherDisplayHere").empty();



    })
}





// function displayCityWeathers() {


// var queryURl = "https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&units=imperial&appid=a332184f8c6ec6a979de62cfa465345f"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     $("#movies-view").empty();

// }
