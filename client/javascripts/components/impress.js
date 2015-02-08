const React = require('react');
const MailtoLink = require('./mailtoLink');
const ElementWithLabel = require('./elementWithLabel');
const jfd = require('../json/jfd.json');

var Impress = React.createClass({
    render: function () {
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
});

module.exports = Impress;
