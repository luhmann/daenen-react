const React = require('react');
const munge = require('munge');

var MailtoLink = module.exports = React.createClass({
    render: function () {
        var url = munge(this.props.email);
        var href = 'mailto:' + url;
        var classes = 'link';

        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        var rawMarkup = '<a href="' + href +'" class="' + classes + '">' + url + '</a>';
        return (
            <span dangerouslySetInnerHTML={{__html: rawMarkup }} />
        );
    }
});

