const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const POWER_MAX_TEMP = 25;
const NORMAL_MAX_TEMP = 32;

function Thermostat () {
  this.temp = DEFAULT_TEMP;
  this.mode = true;
};

Thermostat.prototype = {

    up: function() {
      if(this.temp >= this._maxTemp()) {return false}
      this.temp++;
      return true
    },

    down: function() {
      if (this.temp <= MIN_TEMP) { return false}
      this.temp-- ;
      return true
    },

    powerSaving: function() {
       this.mode = (this.mode) ? false : true
       if (this.mode && this.temp > POWER_MAX_TEMP) {
         this.temp = POWER_MAX_TEMP
       }
    },

    reset: function() {
      this.temp = DEFAULT_TEMP
    },

    usage: function(){
       if(this.temp < 18) {return "low"}
       if(this.temp < 25) {return "medium"}
       else {return "high"};
    },

    _maxTemp: function() {
      return (this.mode) ? POWER_MAX_TEMP : NORMAL_MAX_TEMP;
    }
};
