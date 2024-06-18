import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// c16f4a6bc823370200be39822e83011e
function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cites = ['seoul', 'paris', 'new york']

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c16f4a6bc823370200be39822e83011e&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c16f4a6bc823370200be39822e83011e&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  // useEffect의 실행 순서의 주의 해야 한다.
  // 처음 실행이 될 때 useEffect가 2개 실행되면 안된다.
  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  useEffect(() => {
    if (city === '') {
      getCurrentLocation();
    }
    else {
      getWeatherByCity();
    }

  }, [city]);



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
          <WeatherBox weather={weather} />
          <WeatherButton cites={cites} setCity={setCity} selCity={city} />
        </div>}

    </div>
  );
}

export default App;
