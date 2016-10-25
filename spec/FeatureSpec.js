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

  });

});
