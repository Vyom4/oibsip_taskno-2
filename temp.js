function validateInput() {
    const temperatureInput = document.getElementById('temperature').value;
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        document.getElementById('temperature').value = '';
    }
}

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
    } else if (unit === 'kelvin') {
        convertedTemperature = temperatureInput + 273.15;
        document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} K`;
    }
}
function reset() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'celsius'; // Reset unit to Celsius
    document.getElementById('result').innerText = '';
}