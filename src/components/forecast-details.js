import React from 'react';
//import ForecastSummary from './forecast-summary';
import PropTypes from 'prop-types';
import moment from 'moment';

//import '../styles/forecast-summaries.css';


const ForecastDetails = (props) => (
    
    <div className="FDClass">

    <div className="forecast-details-date" data-testid="date-id"><h3>
    {moment(props.forecast.date).format('ddd Do MMM')}</h3></div>

    <div className="forecast-details-max-temp" data-testid="max-temp-id">
    <b>Max Temperature:</b> {props.forecast.temperature.max} °C</div>

    <div className="forecast-details-min-temp" data-testid="min-temp-id">
    <b>Min Temperature:</b> {props.forecast.temperature.min} °C</div>
            
    <div className="forecast-details-humidity" data-testid="humidity-id">
    <b>Humidity: </b>{props.forecast.humidity}%</div>   

    <div className="wind-speed" data-testid="wind-speed-id">
    <b>Wind: </b>{props.forecast.wind.speed} mph due {props.forecast.wind.direction.toUpperCase()}</div>          
        
    </div>
)

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.string.isRequired,
        temperature: PropTypes.object.isRequired,
        humidity: PropTypes.string.isRequired,
        wind: PropTypes.object.isRequired,
    }),
};    
export default ForecastDetails;