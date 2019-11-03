$(document).ready(function () {
    var currentDate = moment().format("MM/DD/YYYY");
    var APIKey = "f41986cb305bbebfdd6bfe2ffeb29d4a";

    // pulls city names from local storage (if any) and creates an empty array if nothing is in ls
    var cityNames = JSON.parse(localStorage.getItem("city"));

    if (cityNames === null) {
        citiesArray = [];
    }

    // need to add a forEach to loop through citiesArray to check for saved values

    $("button").on("click", function (event) {
        event.preventDefault();


        var search = $(".search-box").val();
        // console.log(search);
        cityNames = JSON.parse(localStorage.getItem("cityNames"));


        if (search == "" || search == null) {
            return;
        }


        search.val = "";

        if (cityNames === null) {
            citiesArray = [search];
        } else {
            citiesArray.push(search);
        }

        console.log(citiesArray);
        cityData(search);

        localStorage.setItem("cityNames", JSON.stringify(citiesArray));

    })


    function cityData(search) {

        var cityName = $("<h1>");
        var temp = $("<p>");
        var humidity = $("<p>");
        var windSpeed = $("<p>");
        var uvIndex = $("<p>");
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${APIKey}&units=imperial`

        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            cityName.text(response.name + " (" + currentDate + ")");
            // var cityName = response.name;
            temp.html("Temperature: " + response.main.temp + " &#176" + "F");
            humidity.text("Humidity: " + response.main.humidity + "%");
            windSpeed.text("Wind Speed: " + response.wind.speed + " MPH");
            uvIndex.text("UV Index: " + "empty");

            //Need to find a weather icon from font awesome and append to cityName

            var longitute;
            var latitude;

            // api url to get the uv index
            var uvURL;

            //separate ajax call to get the uv index and append to uvIndex variable
            // $.ajax({
            //     url: url,
            //         method: "GET"
            // }).then(function (response) {

            // })

            $("div.card-body").append(cityName);
            $("div.card-body").append(temp);
            $("div.card-body").append(humidity);
            $("div.card-body").append(windSpeed);
            $("div.card-body").append(uvIndex);

        })





    }




})    // END OF $(document).ready() 








