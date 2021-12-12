$(document).ready(function () {
    function displayWeather(json) {
        var weather = json.weather[0].description;
        var temp = json.main.temp;
        $(".desc").text(weather);
        $(".temp").text(temp+"ºC");
        $(".cityname").text(json.name);

    }
    $("#searchbutton").click(function () {
        let city = $("#hello").val()
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=449d1fe3ac6dca41fee660e9f7f3af31"
        $.getJSON(url, displayWeather);
        console.log(city);
    });
});