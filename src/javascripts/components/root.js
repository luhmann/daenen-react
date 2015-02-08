const React = require('react');
const Header = require('./header');
const Footer = require('./footer');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;

var Root = module.exports = React.createClass({
    mixins: [ Router.State ],
    render: function () {
        var name = this.getRoutes().reverse()[0].name;
        return (
            <div className="wrapper">
                <Header />
                    <RouteHandler key={ name }/>
                <Footer />
            </div>
        );
    }
});
