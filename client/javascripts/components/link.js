const React = require('react');

var Link = React.createClass({
    render: function () {
        var classes = ['link'];

        if (this.props.className) {
            classes.push(this.props.className);
        }

        return (
            <a {...this.props} className={ classes.join(' ') } href={ this.props.url } title={ this.props.title }>
                { this.props.children }
            </a>
        );
    }
});

module.exports = Link;
