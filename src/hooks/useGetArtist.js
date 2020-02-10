import { useState, useEffect } from 'react';
import { getArtists } from '../services/getArtists';

export const useGetArtists = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('david bowie');

  useEffect(() => {
    getArtists(searchTerm)
      .then(setArtists());
  }, [searchTerm]);

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  return { artists, searchTerm, handleChange };
};
