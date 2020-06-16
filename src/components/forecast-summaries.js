import React from 'react';
import ForecastSummary from './forecast-summary';
import PropTypes from 'prop-types';


const ForecastSummaries = props => (
    <div className="forecastSummary">
{
    props.forecasts.map(forecast=> (
        <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        icon={forecast.icon}
        description={forecast.description}
        temperature={forecast.temperature.max}
        />
    ))
}

    </div>
);
ForecastSummaries.propTypes = {
    forecasts: PropTypes.array,
}

export default ForecastSummaries;