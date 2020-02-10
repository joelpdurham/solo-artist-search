import { useState, useEffect } from 'react';
import { getReleases } from '../services/getReleases';

export const useGetReleases = (id) => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getReleases(id)
      .then(releases => setReleases(releases.releases))
  }, []);

  return { releases };

};
