function getWeather() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("weather-result");

    if (!city) {
        resultDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    // Placeholder data
    setTimeout(() => {
        resultDiv.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: 22°C</p>
            <p>Condition: Clear Sky</p>
            <p>Humidity: 60%</p>
        `;
    }, 1000); // Simulate API delay
}
