$(document).ready(function () {

    var currentDate = moment().format("MM/DD/YYYY");
    // console.log(currentDate);

    // for (var i = 0; i < localStorage.length; i++) {
    //     var cityName = localStorage.getItem(i);
    //     console.log(cityName);
    // }

    $("button").on("click", function (event) {
        event.preventDefault();

        var APIKey = "f41986cb305bbebfdd6bfe2ffeb29d4a";
        var city = $(".search-box").val();
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=imperial`

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