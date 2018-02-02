$(document).ready(function() {
	var thermostat = new Thermostat();
  modeCheck();
  refreshTempIndicator();


	function modeCheck() {
		if (thermostat.mode === true) {
			$( '#psMode' ).css({
				'background-color': '#ff9999'
			});
			$('#state').text('on');
		} else {
			$( '#psMode' ).css({
				'background-color': 'white'
			});
			$('#state').text('off');
		}
	}

  function refreshTempIndicator() {
    $("#currentTemp").text(thermostat.temp);
    $("#currentUsage").text(thermostat.usage());
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#localTemp').text(data.main.temp);
      $('#localWeather').text(data.weather[0].main);
      $('#display-city').text(city)
    })
  })

	$("#increaseTemp").click(function(event) {
		if (!thermostat.up()) {
			alert("Max Temperature Reached!")
      // window.open('https://www.youtube.com/watch?v=GeZZr_p6vB8&start=69', '_blank');
		}
    refreshTempIndicator();
		event.preventDefault();
	});

	$("#decreaseTemp").click(function(event) {
		if (!thermostat.down()) {alert("Min Temperature Reached!")} ;
    refreshTempIndicator();
		event.preventDefault();
	});

	$("#reset").click(function(event) {
    thermostat.reset();
    refreshTempIndicator();
		event.preventDefault();
	});

	$("#psMode").click(function(event) {
		thermostat.powerSaving();
    modeCheck();
    refreshTempIndicator();
		event.preventDefault();
	});

});
