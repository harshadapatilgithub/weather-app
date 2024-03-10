import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import axios from "axios";
import {weatherRealtime, weatherForecast, errorHandling} from "../features/weather/weatherSlice"

function GetWeatherInfo(){
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    // function to fetch weather data from api
    const getData = async () => {
        try{
            const realtimeResponse = await axios.get( `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU`);
            const forcastResponse = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU`);
            dispatch(weatherRealtime({data:realtimeResponse.data}));
            dispatch(weatherForecast({data:forcastResponse.data}));
        }catch(error){  
            console.log("error",error);
            dispatch(errorHandling({error:"Error while fetching data for searched result, enter valid city name"}));
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(errorHandling({error:"Loading..."}));
        getData();
    };


    return(
        <div>
        <>
            <h1>Weather</h1>
            <form onSubmit={handleSubmit}>
              <input 
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={handleInputChange} 
            />  
            <button type="submit">Get Weather Info</button>
            </form>
        </>
        </div>
    );
};

export default GetWeatherInfo;