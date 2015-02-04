var ElementWithLabel = React.createClass({
    render: function () {
        return (
            <div className="text">
                <span className="text--label">{ this.props.label }:</span>
                { this.props.children }
            </div>
        );
    }
});

module.exports = ElementWithLabel;
