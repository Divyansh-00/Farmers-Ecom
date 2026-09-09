const getWeather = async (location) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            location
        )}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
        console.log("OpenWeather error:", data);
        throw new Error(data.message || "Unable to fetch weather data");
    }

    return {
        location: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        windSpeed: data.wind.speed
    };
};

module.exports = getWeather;