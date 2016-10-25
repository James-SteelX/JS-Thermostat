function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  return this._temperature + 1;
};
