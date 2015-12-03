import React from 'react';
import { IndexRoute, Route, Router } from  'react-router';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Impress from '../components/Impress';
import createBrowserHistory from 'history/lib/createBrowserHistory';

module.exports = () => {

    return (
        <Router history={createBrowserHistory()}>
          <Route path="/" component={ Layout }>
              <IndexRoute component={ Content }/>
                <Route path="impress" component={ Impress } />
                <Route path="impressum" conponent={ Impress } />
                <Route path="*" component={ Impress } />
          </Route>
        </Router>
    );
};
