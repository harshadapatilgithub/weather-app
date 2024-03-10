import { createSlice } from "@reduxjs/toolkit";
import { weatherRealtimeReducer, weatherForecastReducer, errorHandlingReducer } from './weatherReducer';

const initialState = {
    realtimeWeather: {},
    forecastWeather: {},
    error:''
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherRealtime: weatherRealtimeReducer,
        weatherForecast: weatherForecastReducer,
        errorHandling: errorHandlingReducer,
    }
})

export const { weatherRealtime, weatherForecast, errorHandling } = weatherSlice.actions

export default weatherSlice.reducer