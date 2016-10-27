$( document ).ready(function() {
  var thermostat = new Thermostat();

    updateTemp();
    weatherApp();
    cityName();

    $( "#up" ).click(function( event ) {
        thermostat.up();
        updateTemp();
    });

    $( "#down" ).click(function( event ) {
        thermostat.down();
        updateTemp();
    });

    $( "#power-savings-on" ).click( function () {
        thermostat.powerSavingOn();
        updateTemp();
        $("#power-saving-status").text('on');
        powerSavingColor();
    });

     $( "#power-savings-off" ).click( function () {
        thermostat.powerSavingOff();
        $("#power-saving-status").text("off");
        powerSavingColor();
     });

     $( "#reset" ).click( function() {
       thermostat.reset();
       updateTemp();
       $("#power-saving-status").text('on');
       powerSavingColor();
     });

     $('#citysub').click(function(){
       cityName();
       weatherApp();
     })

     function updateTemp(){
       powerSavingColor();
       $("#current-temp").text(thermostat._current_temperature + ascii(176) + 'C');
       $('#current-temp').attr('class', thermostat.energyUse());
       $.post( "/data", { temp: thermostat._current_temperature, city: 'London', psm: thermostat._powerSaving } );
     };

     function powerSavingColor(){
       $('#power-saving-status').attr('class', thermostat._powerSaving);
       $('#body').attr('class', thermostat._powerSaving);
     }

     function weatherApp(){
       var url = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
       var city = $('#cityname').val() || 'London' ;
       var api = '&appid=3aa07a48be658a901acbe6b44ee42e17' ;
       var units = '&units=metric' ;
       $.get(url + city + api + units, function(data) {
          $('#outside-temperature').text(data.main.temp + ascii(176) + 'C');
        });
      }

      function cityName() {
        $('#citytemp').text($('#cityname').val() || 'London')
      }

      function ascii (a) { return String.fromCharCode(a); }


      // $.ajax({url: "temperature_change", method: "POST", data: thermostat.temp
});
