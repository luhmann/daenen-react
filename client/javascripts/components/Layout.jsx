import React from 'react'
import CSSModules from 'react-css-modules'
import CSSModuleConfig from '../config/cssModules.js'
import styles from '../../stylesheets/modules/layout.styl'

import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'

@CSSModules(styles, CSSModuleConfig)
export default class Layout extends React.Component {
  render() {
    return (
      <div data-e2e='layout' styleName='layout'>
        <div styleName='wrapper'>
          <Header />
          { this.props.children }
          <Footer />
        </div>
      </div>
    )
  }
}
