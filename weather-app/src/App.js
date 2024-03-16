import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader';
import { ClockLoader } from 'react-spinners';

// 1. 앱이 실행되자마자 현재 위치 기반 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭싸, 화씨, 날씨상태
// 3. 5개의 버튼이 있다. (현재 위치 + 다른 위치)
// 4. 도시 버튼을 클릭 할 때 마다 도시 별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

// const locationState = {
//     lat: '',
//     lon: '',
// };

function App() {
    // const [location, setLocation] = useState(locationState);

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const cities = ['paris', 'seoul', 'new york', 'tokyo'];

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            // setLocation({ lat: lat, lon: lon });

            getWeatherByCurrentLocation(lat, lon);

            console.log('현재 위치: ', lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        setLoading(true);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c16f4a6bc823370200be39822e83011e&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        setWeather(data);
        setLoading(false);
    };

    const getWeatherByCity = async () => {
        setLoading(true);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c16f4a6bc823370200be39822e83011e&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        setWeather(data);
        setLoading(false);
    };

    useEffect(() => {
        if (city == '') {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
    }, [city]);

    // useEffect(() => {
    //     getWeatherByCity();
    // }, [city]);

    // useEffect(() => {
    //     let url = new URL('https://api.openweathermap.org/data/2.5/weather?');
    //     url.searchParams.set('lat', location.lat);
    //     url.searchParams.set('lon', location.lon);
    //     url.searchParams.set('key', 'c16f4a6bc823370200be39822e83011e');
    // }, [Location]);

    return (
        <div>
            {loading ? (
                <div className="container">
                    <ClockLoader color="#f88c6b" loading={loading} size={150} />
                </div>
            ) : (
                <div className="container">
                    <WeatherBox weather={weather} />
                    <WeatherButton cities={cities} setCity={setCity} />
                </div>
            )}
        </div>
    );
}

export default App;
