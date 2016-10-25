function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
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
