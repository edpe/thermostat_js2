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


  it("throw error is temp below 10", function() {
    thermostat.temp = 10
    error = "minimum tempreture reached"
    expect( function() { thermostat.down() }).toThrow(new Error(error))
  })

  it("max temp is 25 when power saving mode is on", function() {
    thermostat.powerSaving(true);
    error = "maximum tempreture reached"
    thermostat.temp = 25
    expect( function() { thermostat.up() }).toThrow(new Error(error))
  })

  it("max temp is 32 when power saving mode is off", function() {
    thermostat.powerSaving(false);
    error = "maximum tempreture reached"
    thermostat.temp = 32
    expect( function() { thermostat.up() }).toThrow(new Error(error))
  })

  it("can set temp to 32 when power saving mode is off", function() {
    thermostat.powerSaving(false);
    thermostat.temp = 31
    thermostat.up()
    expect(thermostat.temp).toEqual(32)
  })

})
