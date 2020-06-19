
import LocationDetails from './location-details'
import ForecastDetails from './forecast-details'
import ForecastSummaries from './forecast-summaries'

import '../styles/app.css'
import '../styles/forecast-summaries.css'

import React, { useState, useEffect } from 'react';
const axios = require('axios');




const App = () => {

const [selectedDate, setSelectedDate] = useState(0); //starting value
const [forecasts, setForecasts] = useState([]);
const [location, setLocation] = useState({
    city: '',
    country: '',
});

useEffect (() => {
    axios
    .get('https://mcr-codes-weather.herokuapp.com/forecast')
    .then((res) => {
        setForecasts(res.data.forecasts);
        setLocation(res.data.location);
    })
    /*.catch(err => {
        if(err.res)
        alert('Error loading Weather');
    })*/
});

const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

const handleForecastSelect = (date) => {setSelectedDate(date);}

return (
    
<div className="forecast" >

<LocationDetails 
city={location.city} 
country={location.country} />

<ForecastSummaries forecasts = {forecasts} 
onForecastSelect={handleForecastSelect}  />

{
    selectedForecast && (<ForecastDetails forecast = {selectedForecast} />)
}
</div>

);
}


export default App;
