const Router = require('react-router');
const Link = Router.Link;

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                Softwarehaus Dänen4, Sonntagstraße 4, 10245&nbsp;Berlin &nbsp;&nbsp;|&nbsp; &nbsp;
                <Link to="impress">Impressum</Link>
            </div>
        );
    }
});

module.exports = Footer;
