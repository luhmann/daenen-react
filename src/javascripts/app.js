var React = window.React = require('react/addons'),
    Header = require('./components/header'),
    Content = require('./components/content'),
    Impress = require('./components/impress'),
    Footer = require('./components/footer'),
    mountNode = document.getElementById('layout');

const Router = require('react-router');
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

var App = React.createClass({
    render: function () {
        return (
            <div id="wrapper">
                <Header />
                <RouteHandler />
                <Footer />
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="home" path="/" handler={ Content }/>
        <Route name="impress" path="/impress" handler={ Impress } />
        <Redirect from="/impressum" to="impress" />
        <DefaultRoute handler={ Content } />
        <NotFoundRoute handler={ Content } />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, mountNode);
});
