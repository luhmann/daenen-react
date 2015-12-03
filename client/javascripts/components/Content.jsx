import React from 'react';
import CSSModules from 'react-css-modules';
import CSSModuleConfig from '../config/cssModules.js';
import styles from '../../stylesheets/modules/content.styl';

import Developer from './Developer.jsx';
import jfd from '../json/jfd.json';
import hp from '../json/hp.json';

@CSSModules(styles, CSSModuleConfig)
export default class Layout extends React.Component {
    render() {
        return (
            <div styleName="content">
              <Developer data={ jfd } />
              <Developer data={ hp } />
            </div>
        );
    }
};
