import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import '../styles/forecast-summaries.css';

const ForecastSummary = ({date, temperature, description, icon}) =>

{
    //let newdate = new Date(date).toLocaleDateString("en-US");
    return (
        <div className="FCClass">
        <>
        <div className="date" data-testid="date-id">{date} </div>

        <div className="temperature" data-testid="temperature-id">{temperature} °C</div>

        <div className="forecast-summary-icon" data-testid="icon-id"> <WeatherIcon name="owm" iconId={icon} 
        /></div>
        <div className="description" data-testid="description-id">{description} </div>
        

         <button value={date}>
            More Details        
    </button> 
</>
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