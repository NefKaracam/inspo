const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const getWeather = async (lat, lon) => {
  const response = await fetch(`${API_URL}&lat=${lat}&lon=${lon}`);
  const json = await response.json();

  return {
    description: json.weather[0].description,
    temperature: json.main.temp,
    city: json.name,
    icon: json.weather[0].icon,
  };
};

const fetchWeather = { getWeather };

export default fetchWeather;
