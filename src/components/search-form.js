import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => {
const [searchText, setSearchText] = useState('');

const handleInputChange = event => {
    setSearchText(event.target.value);
}

return (
<div className="searchForm">
    <span><input type="text" className="city-search" onChange={ handleInputChange }
    placeholder="Type city here" value={searchText}/> </span>

    <span><button type="submit" onClick={() => props.onCitySearch(searchText)}>Go </button></span>

</div>
);
}

SearchForm.propTypes = {
    onCitySearch: PropTypes.func.isRequired,
}
export default SearchForm;