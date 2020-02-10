import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Search } from './Search';
import { Artists } from './Artists';
import { Releases } from './Releases';

import { useGetArtists } from '../hooks/useGetArtist';

export default function App() {
  const { artists, searchTerm, handleChange } = useGetArtists();

  return (
    <Router>
      <Search searchTerm={searchTerm} handleChange={handleChange} />
      <Switch>
        <Route exact path='/' 
          render={() => <Artists artists={artists} isAuthed={true} />} />
        <Route exact path='/:id' component={Releases}/>
      </Switch>
    </Router>
  );
}
