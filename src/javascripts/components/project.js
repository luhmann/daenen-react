var slugify = require("underscore.string/slugify");
var Link = require('./link');

var Screenshot = React.createClass({
    render: function () {
        return (
            <a className="lightwindow" href={ this.props.url } rel={ slugify(this.props.client) } title={ this.props.title }>
                Screenshots
            </a>
        );
    }
});

var Project = React.createClass({
    render: function () {
        var client;
        var screenshots;

        if (this.props.data.link) {
            client = function (scope) {
                return (
                    <Link url={ scope.props.data.link } title={ scope.props.data.client } target="_blank" >
                        { scope.props.data.client }
                    </Link>
                );
            }(this);
        } else {
            client = this.props.data.client;
        }

        if (this.props.data.screenshots) {
            screenshots = this.props.data.screenshots.map(function (shot) {
                return(
                    <Screenshot client={ this.props.data.client } title={ shot.title } url={ shot.url } />
                );
            }, this);

            screenshots = function(screenshots) {
                return(
                    <span className="project--screenshots">[{ screenshots }]</span>
                );
            }(screenshots);

        }

        return (
            <div className="project">
                <span className="project--client">{ client }</span>
                <span className="project--description">({ this.props.data.description })</span>
                { screenshots }
            </div>
        );
    }
});

module.exports = Project;
