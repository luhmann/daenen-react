import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/modules/wrapper.styl';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

@CSSModules(styles)
export default class Wrapper extends React.Component {
  render() {
    return(
      <div styleName="wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}
