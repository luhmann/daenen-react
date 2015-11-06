import React from 'react';
import MailtoLink from './MailtoLink';
import ElementWithLabel from './ElementWithLabel';
import jfd from '../json/jfd.json';

export default class Impress extends React.Component {
    render() {
        return (
            <div className="impress">
                <div className="impress--title">Impressum</div>

                <div className="impress--section">
                    Softwarehaus Dänen4<br />
                    Petersen, Dietrich (GbR)<br />
                    Sonntagstraße 4<br />
                    10245 Berlin
                </div>

                <div className="impress--section">
                    <ElementWithLabel label="Telefon">
                        030 29044581
                    </ElementWithLabel>
                    <ElementWithLabel label="E-Mail">
                        <MailtoLink email={ jfd.email } />
                    </ElementWithLabel>
                </div>

                <div className="impress--section">
                    <ElementWithLabel label="Vertretungsberechtigte Gesellschafter">
                        <br/>Jan Florian Dietrich, Henning Petersen
                    </ElementWithLabel>
                </div>

                <div className="impress--section">
                    <ElementWithLabel label="Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz">
                        <br />DE&nbsp;252170892
                    </ElementWithLabel>
                </div>
            </div>
        );
    }
};
