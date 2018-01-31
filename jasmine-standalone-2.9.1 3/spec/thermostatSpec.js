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

})
