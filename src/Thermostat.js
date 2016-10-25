'use strict';

function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._powerSaving = true;
}

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  return this._temperature + 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  return this._temperature -1;
};

Thermostat.prototype.maximumTemperature = function () {
  if(this._powerSaving === true) {
    return 25;
  }
  return 32;
};

Thermostat.prototype.turnOffPowerSaving = function () {
  this._powerSaving = false;
};

Thermostat.prototype.turnOnPowerSaving = function () {
  this._powerSaving = true;
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = 20;
};
