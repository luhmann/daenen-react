import React from 'react';
import CSSModules from 'react-css-modules';
import CSSModuleConfig from '../config/cssModules.js';
import { IndexLink } from 'react-router';
import styles from '../../stylesheets/modules/header.styl';

import logo from '../../images/logo.svg';

@CSSModules(styles, CSSModuleConfig)
export default class Header extends React.Component {
  render() {
    return (
      <IndexLink to='/' styleName='header' data-e2e="header">
        <img
          styleName='header--logo'
          src={logo}
          width='364'
          height='114'
          title='Softwarehaus Dänen4 | Sonntagstr. 4 | 10245 Berlin'
          alt='Softwarehaus Dänen4 | Sonntagstr. 4 | 10245 Berlin'
        />
      </IndexLink>
    );
  }
}
