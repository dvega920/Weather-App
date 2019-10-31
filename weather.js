$(document).ready(function () {

    var APIKey = "f41986cb305bbebfdd6bfe2ffeb29d4a";
    var zipCode = "02451";

    var url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&APPID=${APIKey}`;

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
    // END OF CODE
})