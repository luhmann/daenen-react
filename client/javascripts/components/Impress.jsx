import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../stylesheets/modules/impress.styl'

import MailtoLink from './MailtoLink';
import ElementWithLabel from './ElementWithLabel';
import jfd from '../json/jfd.json';

@CSSModules(styles)
export default class Impress extends React.Component {
    render() {
        return (
            <div styleName="impress">
                <div styleName="impress--title">Impressum</div>

                <div styleName="impress--section">
                    Softwarehaus Dänen4<br />
                    Petersen, Dietrich (GbR)<br />
                    Sonntagstraße 4<br />
                    10245 Berlin
                </div>

                <div styleName="impress--section">
                    <ElementWithLabel label="Telefon">
                        030 29044581
                    </ElementWithLabel>
                    <ElementWithLabel label="E-Mail">
                        <MailtoLink email={ jfd.email } />
                    </ElementWithLabel>
                </div>

                <div styleName="impress--section">
                    <ElementWithLabel label="Vertretungsberechtigte Gesellschafter">
                        <br/>Jan Florian Dietrich, Henning Petersen
                    </ElementWithLabel>
                </div>

                <div styleName="impress--section">
                    <ElementWithLabel label="Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz">
                        <br />DE&nbsp;252170892
                    </ElementWithLabel>
                </div>
            </div>
        );
    }
};
