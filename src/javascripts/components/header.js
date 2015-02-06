const Router = require('react-router');
const Link = Router.Link;


var Logo = React.createClass({
    render: function () {
        return (
            <img
                className="header--logo"
                src="images/logo.svg"
                width="364"
                height="114"
                title="Softwarehaus Dänen4 | Dänenstr. 4 | 10439 Berlin"
                alt="Softwarehaus Dänen4 | Dänenstr. 4 | 10439 Berlin"
            />
        );
    }
});

var LogoFallback = React.createClass({
    render: function () {
        return (
            <img
                className="header--logo-fallback"
                src="images/logo_364px.png"
                width="364"
                height="114"
                title="Softwarehaus Dänen4 | Dänenstr. 4 | 10439 Berlin"
                alt="Softwarehaus Dänen4 | Dänenstr. 4 | 10439 Berlin"
            />
        );
    }
});

var Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <Link to="home">
                    <Logo />
                </Link>
                <Link to="home">
                    <LogoFallback />
                </Link>
            </div>
        );
    }
});

module.exports = Header;
