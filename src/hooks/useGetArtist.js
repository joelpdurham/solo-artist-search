import { useState, useEffect } from 'react';
import { getArtists } from '../services/getArtists';

export const useGetArtists = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if(!searchTerm) return;
    getArtists(searchTerm)
      .then(artists => setArtists(artists.artists));
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return { artists, searchTerm, handleChange };
};
