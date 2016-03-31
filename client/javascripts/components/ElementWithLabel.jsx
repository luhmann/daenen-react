import React from 'react'
import CSSModules from 'react-css-modules'
import CSSModuleConfig from '../config/cssModules.js'
import styles from '../../stylesheets/modules/elementWithLabel.styl'

@CSSModules(styles, CSSModuleConfig)
export default class ElementWithLabel extends React.Component {
  render() {
    return (
      <div className='text'>
        <span styleName='text--label'>{this.props.label}:</span>
        {this.props.children}
      </div>
    )
  }
}
