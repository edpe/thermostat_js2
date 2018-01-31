const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

function Thermostat () {
  this.temp = DEFAULT_TEMP;

};

Thermostat.prototype = {

    up: function() { this.temp++; },

    down: function() {
       this._minTemp();
       this.temp--;
    },

    _minTemp: function() {
      if (this.temp <= MIN_TEMP) {throw new Error("minimum tempreture reached")}
      }

};
