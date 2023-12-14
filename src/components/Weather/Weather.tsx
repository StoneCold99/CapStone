import _React, { useState, CSSProperties } from 'react';
import axios from 'axios';

interface Weather {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

export const Weather = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = async () => {
    try {
      setError(null);
      setLoading(true);

      const apiKey = '8d35cf27f8cdaf07766853196cd3287a';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get<Weather>(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle: CSSProperties = {
    backgroundImage: `url('https://s7d2.scene7.com/is/image/TWCNews/Honduras_Tropical_Weather_49669')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const boxStyle: CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
  };

  const convertToCelsius = (temp: number) => temp;
  const convertToFahrenheit = (temp: number) => (temp * 9) / 5 + 32;

  return (
    <div style={containerStyle}>
      <h1>Weather Page</h1>
      <label>
        Enter city:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <button onClick={getWeather}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div style={boxStyle}>
          <h2>Weather in {city}:</h2>
          <p>
            Temperature: {convertToFahrenheit(weatherData.main.temp).toFixed(2)}°F (
            {convertToCelsius(weatherData.main.temp).toFixed(2)}°C)
          </p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};
