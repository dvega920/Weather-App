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
            $(".city-name").text(response.name);
            $("span").text(currentDate);
        })




    })




    // END OF CODE
})