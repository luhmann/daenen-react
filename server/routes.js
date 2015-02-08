var React = require('react');
var { DefaultRoute, Route, NotFoundRoute, Redirect } = require('react-router');

module.exports = () => {

    return [
        <Route name="app" path="/" handler={ require('./javascripts/components/root') }>
            <DefaultRoute handler={ require('./javascripts/components/content') }/>
            <Route name="home" path="/" handler={ require('./javascripts/components/content') }/>
            <Route name="impress" handler={ require('./javascripts/components/impress') } />
            <Route name="impressum" handler={ require('./javascripts/components/impress') } />
            <NotFoundRoute handler={ require('./javascripts/components/content') } />
        </Route>
    ];
};

