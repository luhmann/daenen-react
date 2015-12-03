import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Layout from '../components/Layout';
import Content from '../components/Content';
import Impress from '../components/Impress';

export default(
  <Route name app path="/" component={Layout}>
    <IndexRoute component={Content}/>
    <Route path="impress" component={Impress}/>
    <Route path="impressum" conponent={Impress}/>
    <Route path="*" component={Impress}/>
  </Route>
);
