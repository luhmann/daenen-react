const React = require('react');

var Link = React.createClass({
    render: function () {
        return (
            <a {...this.props} className={ this.props.className + ' link' } href={ this.props.url } title={ this.props.title }>
                { this.props.children }
            </a>
        );
    }
});

module.exports = Link;
