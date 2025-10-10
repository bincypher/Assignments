function temperatureConversion(temp, unit) {
    // Convert Celsius to Fahrenheit
    if (unit.toUpperCase() === 'C') {
        let fahrenheit = (temp * 9/5) + 32;
        console.log(fahrenheit, 'F');
    }
    // Convert Fahrenheit to Celsius
    else if (unit.toUpperCase() === 'F') {
        let celsius = (temp - 32) * 5/9;
        console.log(celsius, 'C');
    } else {
        console.log("Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}
temperatureConversion(100, 'C'); // 212 F
temperatureConversion(32, 'F'); // 0 C
temperatureConversion(32, 'f'); // 0 C
temperatureConversion(100, 'c'); // 212 F
temperatureConversion(100, 'X'); // Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.