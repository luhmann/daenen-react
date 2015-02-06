var React = window.React = require('react/addons'),
    Header = require('./components/header.js'),
    Content = require('./components/content.js'),
    Footer = require('./components/footer.js'),
    mountNode = document.getElementById('layout');

var App = React.createClass({
    render: function () {
        return (
            <div id="wrapper">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
});


React.render(<App />, mountNode);

