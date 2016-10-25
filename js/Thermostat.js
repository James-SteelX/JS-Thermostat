'use strict';

function Thermostat() {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this._powerSaving = true;
}

Thermostat.prototype._currentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if(this.temperature >= this.maximumTemperature()) {
    throw new Error("Maximum temperature reached");
  }
  return this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this.temperature <= this.minimumTemperature) {
    throw new Error("Minimum temperature reached");
  }
  return this.temperature -= 1;
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
  this.temperature = 20;
};

Thermostat.prototype.displayColour = function () {
  if(this.temperature > 25) {
    return "Red";
  }
  if(this.temperature > 18) {
    return "Yellow";
  }
  return "Green";
};
