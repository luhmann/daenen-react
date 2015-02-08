const React = require('react');
const Link = require('./link');
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
                    Jan Florian Dietrich
                </div>

                <div className="impress--section">
                    Sonntagstraße 4
                    10245 Berlin
                </div>

                <div className="impress--section">
                    <ElementWithLabel label="E-Mail">
                        <Link isMailto={ true } url={ jfd.email }>
                                { jfd.email }
                        </Link>
                    </ElementWithLabel>
                </div>

                <div className="impress--section">
                    Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
                    Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden
                    und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten
                    Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen
                    Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen
                    benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die
                    Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
                    verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an
                    Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag
                    von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in
                    Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung
                    Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                    gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können. Durch die
                    Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch
                    Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                </div>
            </div>
        );
    }
});

module.exports = Impress;
