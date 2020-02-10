import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetReleases } from '../hooks/useGetReleases';
import { Release } from './Release';
//import { Link } from 'react-router-dom';

export const Releases = () => {
  const { id } = useParams();
  const { releases } = useGetReleases(id);

  const releasesElements = releases.map(release => (
    <li key={release.id}>
      <Release title={release.title} />
    </li>
  ));

  return (<ul>{releasesElements}</ul>);
};
