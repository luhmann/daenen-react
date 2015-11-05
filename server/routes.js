var React = require('react');
var { IndexRoute, Route } = require('react-router');

module.exports = () => {

    return [
        <Route path="/" path={ require('../client/javascripts/components/root') }>
            <IndexRoute component={ require('../client/javascripts/components/content') }/>
            <Route path="impress" component={ require('../client/javascripts/components/impress') } />
            <Route path="impressum" conponent={ require('../client/javascripts/components/impress') } />
            <Route path="*" component={ require('../client/javascripts/components/content') } />
        </Route>
    ];
};
