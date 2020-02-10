import React from 'react';
import PropTypes from 'prop-types';

export const Release = ({ title }) => (<h3>{title}</h3>);

Release.propTypes = {
  title: PropTypes.string.isRequired
};
