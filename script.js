const units = {
	Celcius: "°C",
	Fahrenheit: "°F"
};

const config = {
	minTemp: 0,
	maxTemp: 85,
	unit: "Celcius"
};

const temperature = document.getElementById("temperature");

function setTemperature() {
	temperature.style.height = (24 - config.minTemp) / (config.maxTemp - config.minTemp) * 100 + "%";
	temperature.dataset.value = 24 + units[config.unit];
}

setTimeout(setTemperature, 1000);