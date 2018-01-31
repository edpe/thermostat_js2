const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const MAX_TEMP = 25;

function Thermostat () {
  this.temp = DEFAULT_TEMP;
  this.mode = false;
};

Thermostat.prototype = {

    up: function() {
      if(this.temp >= MAX_TEMP) {throw new Error("maximum tempreture reached")}
      this.temp++; },

    down: function() {
       this._minTemp();
       this.temp--;
    },

    powerSaving: function(mode) {
       this.mode = mode;
    },

    _minTemp: function() {
      if (this.temp <= MIN_TEMP) {throw new Error("minimum tempreture reached")}
      }

};
