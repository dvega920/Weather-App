$(document).ready(function () {

    var currentDate = moment().format("MM/DD/YYYY");
    console.log(currentDate);

    $("button").on("click", function (event) {
        event.preventDefault();


        var APIKey = "f41986cb305bbebfdd6bfe2ffeb29d4a";
        var zipCode = $(".search-box").val();
        // console.log(zipCode);
        var value = $(".search-box").val();
        localStorage.setItem("zip", value);

        var getZip = localStorage.getItem("zip");
        $("div ul li").text(getZip);

        var url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=${APIKey}`

        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $(".city-name").html(response.name + " (" + currentDate + ")" );
            $(".temp").html("Temperature: " + response.main.temp + " &#176" + "F");
            $(".humidity").text("Humidity: " + response.main.humidity + "%");
            $(".wind-speed").text("Wind Speed: " + response.wind.speed + " MPH");
            $(".uv-index").text("UV Index: " + response.main.temp);

        })




    })




    // END OF CODE
})