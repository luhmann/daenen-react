var React = require('react');
var { DefaultRoute, Route, NotFoundRoute, Redirect } = require('react-router');

module.exports = () => {

    return [
        <Route name="app" path="/" handler={ require('../src/javascripts/components/root') }>
            <DefaultRoute handler={ require('../src/javascripts/components/content') }/>
            <Route name="home" path="/" handler={ require('../src/javascripts/components/content') }/>
            <Route name="impress" handler={ require('../src/javascripts/components/impress') } />
            <Route name="impressum" handler={ require('../src/javascripts/components/impress') } />
            <NotFoundRoute handler={ require('../src/javascripts/components/content') } />
        </Route>
    ];
};

