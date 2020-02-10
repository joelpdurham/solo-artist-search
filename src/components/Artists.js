import React from 'react';
import PropTypes from 'prop-types';

export const Artists = ({ artists }) => {
  console.log(artists);

  const test = 'hi';

  return (
    <h1>{test}</h1>
  );
};

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};

