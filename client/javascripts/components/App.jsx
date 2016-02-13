import React from 'react';
import { Router, browserHistory } from  'react-router';
import Routes from '../config/routes.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={Routes}></Router>
    );
  }
};
