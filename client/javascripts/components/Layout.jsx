import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/modules/layout.styl';

import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

@CSSModules(styles)
export default class Layout extends React.Component {
  render() {
    return(
      <div styleName="layout">
        <div styleName="wrapper">
          <Header />
          { this.props.children }
          <Footer />
        </div>
      </div>
    );
  }
}
