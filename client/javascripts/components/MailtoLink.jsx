import React from 'react'
const munge = require('munge')

export default class Header extends React.Component {
  render () {
    var url = munge(this.props.email)
    var href = 'mailto:' + url
    var classes = 'link'

    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    var rawMarkup = `<a href="${href}" class="${classes}">${url}</a>`
    return (
      <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
    )
  }
}
