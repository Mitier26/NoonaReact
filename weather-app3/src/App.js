import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';
import WeatherBtn from './components/WeatherBtn';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

// c16f4a6bc823370200be39822e83011e
function App() {
  const locations = ['seoul', 'new york', 'paris'];
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByLocation(lat, lon);

    });
  }

  const getWeatherByLocation = async (lat, lon) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c16f4a6bc823370200be39822e83011e&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c16f4a6bc823370200be39822e83011e&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
    setLoading(false);
  }

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    }
    else {
      getWeatherByCity();
    }

  }, [city])


  return (
    <div>
      {loading ?
        <div className='container'>
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> </div> : <div className='container'>
          <Box weatherData={weatherData} />
          <WeatherBtn locations={locations} setCity={setCity} selCity={city} />
        </div>}
    </div>
  );
}

export default App;
