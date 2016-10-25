$(document).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function(){
    thermostat.turnOnPowerSaving();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').on('click', function(){
    thermostat.turnOffPowerSaving();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    showWeather(city)
  })


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.displayColour());
  }

  function showWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=f02bb424d7c89aa13e065244a6a6485f';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }
})
