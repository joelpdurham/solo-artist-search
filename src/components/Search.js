import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ handleChange, searchTerm }) => {
  return (
    <form>
      <input type="text" placeholder="artist" 
        value={searchTerm} 
        onChange={handleChange}/>
    </form>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};
