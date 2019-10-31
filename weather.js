$(document).ready(function () {


    //search feature
    var APIKey = "f41986cb305bbebfdd6bfe2ffeb29d4a";

    var query = "http://api.openweathermap.org/data/2.5/forecast?q=haverhill,us&APPID=" + APIKey;


    //ajax call 
    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })


    // END OF CODE
})