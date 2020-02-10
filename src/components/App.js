import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Search } from './Search';
import { Artists} from './Artists';

export default function App() {

  return (
    <Router>
      <Search />
      <Switch>
        <Route exact path='/artists' component={Artists} />
      </Switch>
    </Router>
  );
}
