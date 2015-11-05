import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/modules/layout.styl';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

@CSSModules(styles)
export default class Layout extends React.Component {
  render() {
    return(
      <div styleName="layout">
        <div styleName="wrapper">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}
