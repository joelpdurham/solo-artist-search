import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Artist } from './Artist';

export const Artists = ({ artists }) => {
  const artistsElements = artists.map(artist => {
    return (
      <li key={artist.id} >
        <Link to={`/${artist.id}`}>
          <Artist name={artist.name} />
        </Link>
      </li>
    );}
  );

  return (<ul>{artistsElements}</ul>
  );
};

Artists.propTypes = {
  artists: PropTypes.array.isRequired
};

