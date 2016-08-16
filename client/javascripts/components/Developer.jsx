import React from 'react';
import CSSModules from 'react-css-modules';
import CSSModuleConfig from '../config/cssModules.js';
import styles from '../../stylesheets/modules/developer.styl';

import Link from './Link';
import ElementWithLabel from './ElementWithLabel';
import ProjectList from './ProjectList';
import MailtoLink from './MailtoLink';

@CSSModules(styles, CSSModuleConfig)
class DeveloperSection extends React.Component {
  render() {
    return (
      <div styleName='developer--section'>
        {this.props.children}
      </div>
    );
  }
};

@CSSModules(styles, CSSModuleConfig)
export default class Developer extends React.Component {
  render() {
    var externalLinks = this.props.data.externalLinks.map(function(row) {
      return (
        <ElementWithLabel label={row.label} key={row.label}>
          {row.links.map(function(link, index) {
            return (
              <Link target='_blank' url={link.url} key={this.props.data.id + row.label + index}>
                {link.text}
              </Link>
            );
          }, this)}
        </ElementWithLabel>
      );
    }, this);

    var additional = function(info) {
      if (info) {
        return (
          <DeveloperSection key='additional'>
            {info}
          </DeveloperSection>
        );
      }

      return null;
    }(this.props.data.additional);

    return (
      <div styleName='developer' key={this.props.data.id} data-e2e='dev'>
        <DeveloperSection key='name'>
          <h3 styleName='developer--name'>{this.props.data.name}</h3>
          <div styleName='developer--job-title'>{this.props.data.jobTitle}</div>
        </DeveloperSection>

        <DeveloperSection key='contact'>
          {(this.props.data.phone) && <ElementWithLabel label='Phone'>
            {this.props.data.phone}
          </ElementWithLabel>
}

          <ElementWithLabel label='E-Mail'>
            <MailtoLink email={this.props.data.email}/>
          </ElementWithLabel>

          <ElementWithLabel label='Skype'>{this.props.data.skype}</ElementWithLabel>
        </DeveloperSection>

        <DeveloperSection key='links'>
          {externalLinks}
        </DeveloperSection>

        <DeveloperSection key='qualifications'>
          <ElementWithLabel label='I do'>
            {this.props.data.qualification.join(', ')}.
          </ElementWithLabel>
        </DeveloperSection>

        <DeveloperSection key='projects'>
          <ProjectList projects={this.props.data.projects} dev={this.props.data.id}/>
        </DeveloperSection>

        <DeveloperSection key='technologies'>
          <ElementWithLabel label='Technologies'>
            <ul>
              {this.props.data.technologies.map((item) => {
                return (
                  <li>
                    {item}
                  </li>
                )
              })}
            </ul>
          </ElementWithLabel>
        </DeveloperSection>

        {additional}
      </div>
    );
  }
};
