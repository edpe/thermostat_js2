describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat()
  })

  it("starts at 20 degrees", function () {
    expect(thermostat.temp).toEqual(20)
  })

  it("up increases temperature by 1 degree", function () {
    thermostat.up();
    expect(thermostat.temp).toEqual(21)
  })

  it("down decreses temperature by 2 degree", function () {
    thermostat.down();
    expect(thermostat.temp).toEqual(19)
  })


  it("throw error is temp below 10", function() {
    thermostat.temp = 10
    error = "minimum temperature reached"
    expect( thermostat.down() ).toBe(false)
  })

  it("max temp is 25 when power saving mode is on", function() {
    error = "maximum temperature reached"
    thermostat.temp = 25
    expect(thermostat.up()).toBe(false)
  })

  it("max temp is 32 when power saving mode is off", function() {
    thermostat.powerSaving();
    error = "maximum temperature reached"
    thermostat.temp = 32
    expect(thermostat.up()).toBe(false)
  })

  it("can set temp to 32 when power saving mode is off", function() {
    thermostat.powerSaving();
    thermostat.temp = 31
    thermostat.up()
    expect(thermostat.temp).toEqual(32)
  })

  it("reset returns temperature to DEFAULT_TEMP", function() {
    thermostat.temp = 31;
    thermostat.reset();
    expect(thermostat.temp).toEqual(DEFAULT_TEMP)
  })

  it("by default is on medium usage", function(){
     expect(thermostat.usage()).toEqual("medium-usage")
  })

  it("when temperature is 17, usage should be low", function(){
    thermostat.temp = 17;
     expect(thermostat.usage()).toEqual("low-usage")
  })

  it("when temperature is 24, usage should be medium", function(){
    thermostat.temp = 24;
     expect(thermostat.usage()).toEqual("medium-usage")
  })

  it("when temperature is 18, usage should be medium", function(){
    thermostat.temp = 18;
     expect(thermostat.usage()).toEqual("medium-usage")
  })

  it("when temperature is 25, usage should be high", function(){
    thermostat.temp = 25;
     expect(thermostat.usage()).toEqual("high-usage")
  })

  it("expects power saving mode to revert the temperature to 25 °C", function() {
    thermostat.powerSaving();
    thermostat.temp = 32
    thermostat.powerSaving();
    expect(thermostat.temp).toEqual(POWER_MAX_TEMP);
  })
})
