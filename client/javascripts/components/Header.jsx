import React from 'react';
import CSSModules from 'react-css-modules';
import Logo from './Logo.jsx';
import styles from '../../stylesheets/modules/header.styl'

@CSSModules(styles)
export default class Header extends React.Component {
  render() {
    return <div styleName="header"><Logo/></div>;
  }
}
