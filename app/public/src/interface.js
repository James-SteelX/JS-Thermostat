$(document).ready(function() {
  var thermostat = new Thermostat();
  thermostat.temperature = gon.temp;

  updateTemperature();
  updateBackground();
  powerSavingReset();
  cityName();
  weatherApp();


  $('#temperature-up').on('click', function() { // event listener
    event.preventDefault();
    thermostat.increaseTemperature(); // update model
    updateTemperature();
    updateBackground();
  });

  $('#temperature-down').click(function() { // event listener
    event.preventDefault();
    thermostat.decreaseTemperature(); // update model
    updateTemperature();
    updateBackground();
  });

  $('#temperature-reset').click(function() {
    event.preventDefault();
    thermostat.resetTemperature();
    updateTemperature();
    updateBackground();
  });

  $('#powersaving-on').click(function() {
    event.preventDefault();
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
    updateBackground();
  });

  $('#powersaving-off').click(function() {
    event.preventDefault();
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
    updateBackground();
  });

  $('#citysub').click(function(){
   event.preventDefault();
   cityName();
   weatherApp();
   $.post( "/data", { temp: thermostat.temperature, city: $('#current-city').val(), psm: thermostat.powerSavingModeOn } );
  });

  function updateTemperature() {
    event.preventDefault();
    $('#temperature').text(thermostat.temperature);
    $.post( "/data", { temp: thermostat.temperature, city: $('#current-city').val() , psm: thermostat.powerSavingModeOn } );
  };

  function updateBackground() {
    event.preventDefault();
    $('#topBar').attr("class", thermostat.energyUsage());
  };

  function weatherApp(){
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
      var city = $('#current-city').val() || gon.currentcity ;
      var api = '&appid=3aa07a48be658a901acbe6b44ee42e17' ;
      var units = '&units=metric' ;
      $.get(url + city + api + units, function(data) {
         $('#outside-temperature').text(data.main.temp + ascii(176) + 'C');
       });
     };

     function cityName() {
       $('#display-city').text($('#current-city').val() || gon.currentcity);
     };

  function powerSavingReset() {
    event.preventDefault();
    if (gon.psm === true) {
        thermostat.turnPowerSavingModeOn();
        $('#power-saving-status').text('on');
        updateBackground();
     } else {
        thermostat.turnPowerSavingModeOff();
        $('#power-saving-status').text('off');
        updateBackground();
   }
 };

 function ascii (a) { return String.fromCharCode(a); }

});
