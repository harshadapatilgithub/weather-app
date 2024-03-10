// reducer used for storing real time data
export function weatherRealtimeReducer(state, action) {
    state.realtimeWeather = action.payload.data;
    state.error = ''
}

// reducer used for storing forecast time data
export function weatherForecastReducer (state, action)  {
    state.forecastWeather = action.payload.data;
    state.error = ''
}

// reducer used for handling errors
export function errorHandlingReducer (state, action)  {
    state.error = action.payload.error;
}