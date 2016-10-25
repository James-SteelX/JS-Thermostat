'use strict';

describe("Feature Test: ", function() {

  var thermostat;

  beforeEach (function() {
    thermostat = new Thermostat();
  });

  describe("Thermostat temperature", function() {

    it("starts at 20 degrees", function() {
      expect(thermostat._currentTemperature()).toBe(20)
    });

    it("increase the temperature with the up button", function() {
       expect(thermostat.increaseTemperature()).toBe(21)
     });

    it("decrease the temperature with the down button", function() {
       expect(thermostat.decreaseTemperature()).toBe(19)
    });

    it("has a minimum temperature of 10 degrees", function(){
      expect(thermostat.minimumTemperature).toBe(10)
    });

    it("cannot exceed minimum temperature", function() {
      thermostat.temperature = 10;
      expect(function(){thermostat.decreaseTemperature();}).toThrowError("Minimum temperature reached");
    });

    it("has a maximum temperature of 25 degrees when powersaving is on", function() {
      expect(thermostat.maximumTemperature()).toBe(25)
    });

    it("cannot exceed maximum temperature", function() {
      thermostat.temperature = 25;
      expect(function(){thermostat.increaseTemperature();}).toThrowError("Maximum temperature reached");
    });

    it("Powersaving is set to on by default", function() {
      expect(thermostat._powerSaving).toBe(true)
    });

    it("Powersaving can be switched off", function(){
      thermostat.turnOffPowerSaving()
      expect(thermostat._powerSaving).toBe(false)
    });

    it("Powersaving can be switched on", function(){
      thermostat.turnOnPowerSaving()
      expect(thermostat._powerSaving).toBe(true)
    });

    it("has a maximum temperature of 32 degrees when powersaving mode is on", function() {
      thermostat.turnOffPowerSaving()
      expect(thermostat.maximumTemperature()).toBe(32)
    });

    it("can be reset to 20 degrees with the reset button", function() {
      thermostat.increaseTemperature()
      thermostat.resetTemperature()
      expect(thermostat._currentTemperature()).toBe(20)
    });
   });

   describe("Thermostat display colour", function(){
     it("is Yellow by default", function(){
       expect(thermostat.displayColour()).toBe('Yellow')
     });

     it("green on low usage", function() {
       thermostat.temperature = 17;
       expect(thermostat.displayColour()).toBe("Green")
     });

     it("red on high usage", function() {
       thermostat.temperature = 26;
       expect(thermostat.displayColour()).toBe("Red")
     });

   });

});
