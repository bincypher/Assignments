async function fetchWeatherData(city) {
    const YOUR_API_KEY = 'cd023cd3438b40c1a0b15752251710';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}&aqi=yes`);
    const data = await response.json();
    console.log(data);
}
await fetchWeatherData('London');