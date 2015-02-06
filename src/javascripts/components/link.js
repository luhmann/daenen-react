var Link = React.createClass({
    render: function () {
        var cx = React.addons.classSet;
        var url = this.props.url;
        if (this.props.isMailto) {
            url = 'mailto:' + url;
        }

        return (
            <a {...this.props} className={ cx(this.props.className, 'link') } href={ url } title={ this.props.title }>
                { this.props.children }
            </a>
        );
    }
});

module.exports = Link;
