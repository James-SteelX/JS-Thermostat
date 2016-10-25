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

  });

});
