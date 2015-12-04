import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Layout from '../components/Layout';
import Content from '../components/Content';
import Impress from '../components/Impress';

/*
 * These are separated from the <Router> definition in App.jsx because the serverside-rendering needs
 * its own routing logic, the routes are loaded in the server and then handed of to the 'match'-function
 * of react-router
 */
export default(
  <Route name app path="/" component={Layout}>
    <IndexRoute component={Content}/>
    <Route path="impress" component={Impress}/>
    <Route path="impressum" conponent={Impress}/>
    <Route path="*" component={Impress}/>
  </Route>
);
