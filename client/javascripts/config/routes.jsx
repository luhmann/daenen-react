var React = require('react');
var { IndexRoute, Route, Router } = require('react-router');
import createBrowserHistory from 'history/lib/createBrowserHistory';

module.exports = () => {

    return (
        <Router history={createBrowserHistory()}>
          <Route path="/" component={ require('../components/Layout') }>
              <IndexRoute component={ require('../components/Content') }/>
              <Route path="impress" component={ require('../components/Impress') } />
              <Route path="impressum" conponent={ require('../components/Impress') } />
              <Route path="*" component={ require('../components/Content') } />
          </Route>
        </Router>
    );
};
