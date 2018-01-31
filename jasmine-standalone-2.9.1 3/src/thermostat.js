function Thermostat () {
  this.temp = 20
};

Thermostat.prototype = {

    up: function() {
       this.temp++;
    },
    down: function() {
       this.temp--;
    }

};
