var React = require('react');
var { DefaultRoute, Route, NotFoundRoute, Redirect } = require('react-router');

module.exports = () => {

    return [
        <Route name="app" path="/" handler={ require('../client/javascripts/components/root') }>
            <DefaultRoute handler={ require('../client/javascripts/components/content') }/>
            <Route name="home" path="/" handler={ require('../client/javascripts/components/content') }/>
            <Route name="impress" handler={ require('../client/javascripts/components/impress') } />
            <Route name="impressum" handler={ require('../client/javascripts/components/impress') } />
            <NotFoundRoute handler={ require('../client/javascripts/components/content') } />
        </Route>
    ];
};

