import { useSelector } from 'react-redux';
import cloud_icon from './weatherComponents/Assets/cloud.png';
import wind_icon from './weatherComponents/Assets/wind.png';
import humidity_icon from './weatherComponents/Assets/humidity.png';
import GetWeatherInfo from './weatherComponents/getWeatherInfo';
import './App.css';
import './WeatherApp.css';

function App() {

  const weatherState = useSelector(state => state);

  return (
    <div className='App'>
      <div className="container">
        <GetWeatherInfo />
        {weatherState.error === '' && weatherState.realtimeWeather.data ?
          <>
            <div className='top-bar'> </div>
            <h1>{weatherState.realtimeWeather.location?.name}</h1>
            <div className='weather-image'>
              <img src={cloud_icon} alt="" />
            </div>
            <div className='weather-temp'>{weatherState.realtimeWeather.data?.values.temperature}°C</div>
            <div className='weather-location'></div>
            <div className='data-container'>

              <div className='element'>
                <img src={humidity_icon} alt="" className='icon' />
                <div className='data'>
                  <div className='humidity-precent'>{weatherState.realtimeWeather.data?.values.humidity} %</div>
                  <div className='text'>Humidity</div>
                </div>
              </div>

              <div className='element'>
                <img src={wind_icon} alt="" className='icon' />
                <div className='data'>
                  <div className='humidity-precent'>{weatherState.realtimeWeather.data?.values.windSpeed} km/h</div>
                  <div className='text'>Wind</div>
                </div>
              </div>

            </div>
            <div className='forcast-main flex'>
              {
                weatherState.forecastWeather.timelines?.hourly.map((ele) => <div className='forcast-element'>
                  <div>{ele.time.substring(0, 10)}</div>
                  <div>{ele.time.substring(11, ele.time.length)}</div>
                  <div>{ele.values.temperature}°C</div>
                </div>
                )}

            </div>
          </>
          :
          <h3>{weatherState.error}</h3>}
      </div>
    </div>

  );
}

export default App;
