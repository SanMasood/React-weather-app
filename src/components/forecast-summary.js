import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

import '../styles/forecast-summaries.css';


const ForecastSummary = (props) =>

{
    return (
        <div className="FCClass">
        
        <div className="forecast-summary-date" data-testid="date-id">
        <span>{moment(props.date).format('ddd Do MMM')}</span></div>

        <div className="temperature" data-testid="temperature-id">{props.temperature} °C</div>

        <div className="forecast-summary-icon" data-testid="icon-id"> <WeatherIcon name="owm" iconId={props.icon} 
        />
        </div>

        <div className="description" data-testid="description-id">{props.description} </div>        

        <button onClick ={ () => props.onSelect(props.date)}>
            More        
        </button> 
        
</div>
    )
}

ForecastSummary.propTypes ={
    date: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default ForecastSummary;