$(document).ready(function(){
  $('form').submit(function(){
    var iconUrl = 'http://openweathermap.org/img/w/';
    var location = $('#cityInput').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=e3bc6987d57ec6bc869b7a30ad7d8f85",function (res) {
      var iconCode=res.weather[0].icon;
      $('#weather').html(
        `
        <h1><strong>${res.name}<strong></h1>
        <h2>Clouds</h2>
        ${res.clouds.all}
        <h2>Latitude & Longitude</h2>
        ${res.coord.lat,res.coord.lon}
        <h2>Temperature</h2>
        ${res.main.temp}
        <h2>Weather</h2>

      ${res.weather[0].description + `<img src=`+iconUrl+iconCode+`.png>`}



        `);
    }, "json");


    return false;})

  });
