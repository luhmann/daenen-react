import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import styles from '../../stylesheets/modules/footer.styl'

@CSSModules(styles)
export default class Footer extends React.Component {
  render() {
    return (
      <div styleName="footer">
          Softwarehaus Dänen4, Sonntagstraße 4, 10245&nbsp;Berlin &nbsp;&nbsp;|&nbsp; &nbsp;
          <Link to="impress">Impressum</Link>
      </div>
    );
  }
};
