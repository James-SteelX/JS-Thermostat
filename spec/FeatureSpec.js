'use strict';

describe("Feature Test: ", function() {

  var thermostat;

  beforeEach (function() {
    thermostat = new Thermostat();
  });

  describe("Thermostat temperature", function() {

    it("starts at 20 degrees", function() {
      expect(thermostat.currentTemperature()).toBe(20)
    });

    it("increase the temperature with the up button", function() {
       expect(thermostat.increaseTemperature()).toBe(21)
     });

    it("decrease the temperature with the down button", function() {
       expect(thermostat.decreaseTemperature()).toBe(19)
    });

    it("has a minimum temperature of 10 degrees", function(){
      expect(thermostat._minimumTemperature).toBe(10)
    });

    it("has a maximum temperature of 25 degrees when powersaving is on", function() {
      expect(thermostat.maximumTemperature()).toBe(25)
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
      expect(thermostat.currentTemperature()).toBe(20)
    });
  });

});
