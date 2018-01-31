function Thermostat () {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.temp = this.DEFAULT_TEMP;

};

Thermostat.prototype = {

    up: function() { this.temp++; },

    down: function() {
      if (this.temp <= this.MIN_TEMP){
        throw new Error("minimum tempreture reached")
      }
      else {
       this.temp--}
    }

};
