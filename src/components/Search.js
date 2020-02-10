import React from 'react';
import { useGetArtists } from '../hooks/useGetArtist';

export const Search = () => {
  const { handleChange, searchTerm } = useGetArtists();
  
  return (
    <form>
      <input type="text" placeholder="artist" 
        value={searchTerm} 
        onChange={handleChange}/>
    </form>
  );
};
