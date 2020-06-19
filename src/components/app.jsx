import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details'
import ForecastDetails from './forecast-details'
import ForecastSummaries from './forecast-summaries'

import '../styles/app.css'
import '../styles/forecast-summaries.css'

const App = (props) =>
<div className="forecast" >

<LocationDetails 
city={props.location.city} 
country={props.location.country} />

<ForecastSummaries forecasts = {props.forecasts}/>
<ForecastDetails forecasts = {props.forecasts[0]} />

</div>

App.propTypes = {
    location: PropTypes.shape ({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
};

export default App;
