import React from 'react';
import ForecastSummary from './forecast-summary';
import PropTypes from 'prop-types';
import '../styles/forecast-summaries.css';


const ForecastSummaries = props => (
    <div className="forecastSummaries">
{
    props.forecasts.map(forecast=> (
        <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        icon={forecast.icon}
        description={forecast.description}
        temperature={forecast.temperature.max}
        onSelect={props.onForecastSelect}
        />
    ))
}

    </div>
);
ForecastSummaries.propTypes = {
    forecasts: PropTypes.array.isRequired,
}

export default ForecastSummaries;