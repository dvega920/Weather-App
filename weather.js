$(document).ready(function () {

    var currentDate = moment().format("MM/DD/YYYY");
    // console.log(currentDate);

    $("button").on("click", function (event) {
        event.preventDefault();

        var APIKey = "f41986cb305bbebfdd6bfe2ffeb29d4a";
        var zipCode = $(".search-box").val();
        // var cityName = [];
        var url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=${APIKey}`

        localStorage.setItem("zip", zipCode);

        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var cityName = response.name;
            // console.log(cityName);

            localStorage.setItem("city", cityName);

            var city = localStorage.getItem("city");
            var li = $("<li>");

            $(".list-group").append(li)
            li.text(city);

            $(".city-name").html(response.name + " (" + currentDate + ")");
            $(".temp").html("Temperature: " + response.main.temp + " &#176" + "F");
            $(".humidity").text("Humidity: " + response.main.humidity + "%");
            $(".wind-speed").text("Wind Speed: " + response.wind.speed + " MPH");
            $(".uv-index").text("UV Index: " + "empty");

        })


    })




    // END OF CODE
})