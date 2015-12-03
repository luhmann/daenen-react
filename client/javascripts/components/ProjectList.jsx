import React from 'react';
import CSSModules from 'react-css-modules';
import CSSModuleConfig from '../config/cssModules.js';
import styles from '../../stylesheets/modules/projectList.styl';

import Link from './Link';
import ElementWithLabel from './ElementWithLabel';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

@CSSModules(styles, CSSModuleConfig)
class Project extends React.Component {
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
            }
            client(this);
        } else {
            client = this.props.data.client;
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

@CSSModules(styles, CSSModuleConfig)
class MoreButton extends React.Component {
    render() {
        return (
            <Link styleName="more" url="#" onClick={ this.props.callback }>{ this.props.text }</Link>
        );
    }
};

@CSSModules(styles, CSSModuleConfig)
export default class ProjectList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hideAdditionalItems: true,
        moreButtonText: 'More Projects'
      }
    }

    renderProjects = () => {
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
