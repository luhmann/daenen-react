var slugify = require("underscore.string/slugify");
var Link = require('./link');
var ElementWithLabel = require('./elementWithLabel');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Lightbox = require('lightbox');

var Screenshot = React.createClass({
    render: function () {
        return (
            <a className="project--sceenshots-shot" href={ this.props.url } title={ this.props.title }>
                Screenshots
            </a>
        );
    }
});

var Project = React.createClass({
    componentDidMount: function () {
        Lightbox.run('.' + slugify(this.props.data.client) + this.props.index);
    },
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
                return (
                    <Screenshot client={ this.props.data.client } title={ shot.title } url={ shot.url } />
                );
            }, this);
            console.log(this.props.key);
            screenshots = function (client, screenshots, index) {
                return (
                    <span className={"project--screenshots " + slugify(client) +  index}>[{ screenshots }]</span>
                );
            }(this.props.data.client, screenshots, this.props.index);

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

var MoreButton = React.createClass({
    render: function () {
        return (
            <Link className="more" url="#" onClick={ this.props.callback }>{ this.props.text }</Link>
        );
    }
});

var ProjectList = React.createClass({
    getInitialState: function () {
        return {
            hideAdditionalItems: true,
            moreButtonText: 'More Projects'
        };
    },
    renderProjects: function () {
        var projects = this.props.projects;

        if (this.state.hideAdditionalItems === true) {
            projects = projects.slice(0, 4);
        }

        return projects.map(function (project, index) {
            return(
                <li><Project data={ project } key={ index } index={ index } /></li>
            );
        });
    },
    handleMoreButtonClick: function (event) {
        event.preventDefault();
        this.setState( { hideAdditionalItems: !this.state.hideAdditionalItems } );
    },
    getMoreButtonText: function () {
        return (this.state.hideAdditionalItems) ? 'More Projects' : 'Less Projects'
    },
    render: function () {
        return (
            <div className="projectlist">
                <ElementWithLabel label="Clients and Projects"></ElementWithLabel>
                <ul>
                    <ReactCSSTransitionGroup transitionName="projects">
                        { this.renderProjects() }
                    </ReactCSSTransitionGroup>
                </ul>
                <MoreButton callback={ this.handleMoreButtonClick } text={ this.getMoreButtonText() }/>
            </div>
        );
    }
});

module.exports = ProjectList;
