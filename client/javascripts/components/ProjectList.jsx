import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/modules/projectList.styl';

import slugify from 'underscore.string/slugify';
import Link from './Link';
import ElementWithLabel from './ElementWithLabel';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

@CSSModules(styles)
class Screenshot extends React.Component {
    render() {
        return (
            <a styleName="project--sceenshots-shot" href={ this.props.url } title={ this.props.title }>
                Screenshots
            </a>
        );
    }
};

@CSSModules(styles)
class Project extends React.Component {
    componentDidMount() {
        // require here so it does not get included on server-side rendering
        // var Lightbox = require('lightbox');
        // Lightbox.run('.' + slugify(this.props.data.client) + this.props.index);
    }

    render() {
        var client;
        var screenshots;

        if (this.props.data.link) {
            client = (scope) => {
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
            screenshots = this.props.data.screenshots.map(function (shot, index) {
                return (
                    <Screenshot client={ this.props.data.client } title={ shot.title } url={ shot.url } key={ this.props.data.client + index}/>
                );
            }, this);

            screenshots = function (client, screenshots, index) {
                return (
                    <span className="{slugify(client) +  index}">[{ screenshots }]</span>
                );
            }(this.props.data.client, screenshots, this.props.index);

        }

        return (
            <div>
                <span styleName="project--client">{ client }</span>
                <span styleName="project--description">({ this.props.data.description })</span>
            { screenshots }
            </div>
        );
    }
};

@CSSModules(styles)
class MoreButton extends React.Component {
    render() {
        return (
            <Link styleName="more" url="#" onClick={ this.props.callback }>{ this.props.text }</Link>
        );
    }
};

@CSSModules(styles)
export default class ProjectList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hideAdditionalItems: true,
        moreButtonText: 'More Projects'
      }
    }

    renderProjects() {
        var projects = this.props.projects;

        if (this.state.hideAdditionalItems === true) {
            projects = projects.slice(0, 4);
        }

        return projects.map((project, index) => {
            return(
                <li><Project data={ project } key={ this.props.dev + index } index={ index } /></li>
            );
        }, this);
    }

    handleMoreButtonClick = (event) => {
        event.preventDefault();
        this.setState( { hideAdditionalItems: !this.state.hideAdditionalItems } );
    }

    getMoreButtonText() {
        return (this.state.hideAdditionalItems) ? 'More Projects' : 'Less Projects'
    }

    render() {
        return (
            <div>
                <ElementWithLabel label="Clients and Projects"></ElementWithLabel>
                <ul>
                    { this.renderProjects() }
                </ul>
                <MoreButton callback={ this.handleMoreButtonClick } text={ this.getMoreButtonText() }/>
            </div>
        );
    }
};
