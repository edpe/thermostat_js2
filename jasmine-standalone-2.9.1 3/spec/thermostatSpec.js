describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat()
  })

  it("starts at 20 degrees", function () {
    expect(thermostat.temp).toEqual(20)
  })

  it("up increases tempreture by 1 degree", function () {
    thermostat.up();
    expect(thermostat.temp).toEqual(21)
  })

  it("down decreses tempreture by 2 degree", function () {
    thermostat.down();
    expect(thermostat.temp).toEqual(19)
  })

  it("minimum tempreture is 10", function () {
    thermostat.temp = 10;
    thermostat.down();
    expect(thermostat.temp).toEqual(10);
  })

})
