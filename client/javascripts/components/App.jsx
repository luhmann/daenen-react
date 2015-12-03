import React from 'react';
import { Router } from  'react-router';
import Routes from '../config/routes.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

export default class App extends React.Component {
  render() {
    return(
      <Router history={createBrowserHistory()} routes={Routes}>
      </Router>
    );
  }
};
