import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/modules/header.styl'

@CSSModules(styles)
export default class Header extends React.Component {
  render() {
    return (
      <div styleName="header">
        <img
            styleName="header--logo"
            src="images/logo.svg"
            width="364"
            height="114"
            title="Softwarehaus Dänen4 | Sonntagstr. 4 | 10245 Berlin"
            alt="Softwarehaus Dänen4 | Sonntagstr. 4 | 10245 Berlin"
        />
      </div>
    );
  }
}
