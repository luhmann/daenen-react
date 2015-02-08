const React = require('react');
var Link = require('./link');
var ElementWithLabel = require('./elementWithLabel');
var ProjectList = require('./projectList');
const MailtoLink = require('./mailtoLink');

var DeveloperSection = React.createClass({
    render: function () {
        return (
            <div className="developer--section">
                { this.props.children }
            </div>
        );
    }
});


var Developer = React.createClass({
    render: function () {

        var externalLinks = this.props.data.externalLinks.map(function (row) {
            return (
                <ElementWithLabel label={ row.label }>
                    { row.links.map(function (link) {
                        return (
                            <Link target="_blank" url={ link.url }>{ link.text }</Link>
                        );
                    }) }
                </ElementWithLabel>
            );
        });

        var additional = function(info) {
            if (info) {
                return (
                    <DeveloperSection>
                        { info }
                    </DeveloperSection>
                );
            }

            return null;
        }(this.props.data.additional);

        return (
            <div className="developer" key={ this.props.data.id } >
                <DeveloperSection>
                    <h3 className="developer--name">{ this.props.data.name }</h3>
                    <div className="developer--job-title">{ this.props.data.jobTitle }</div>
                </DeveloperSection>

                <DeveloperSection>
                    {
                        (this.props.data.phone) &&
                        <ElementWithLabel label="Phone">
                            { this.props.data.phone }
                        </ElementWithLabel>
                    }

                    <ElementWithLabel label="E-Mail">
                        <MailtoLink email={ this.props.data.email } />
                    </ElementWithLabel>

                    <ElementWithLabel label="Skype">{ this.props.data.skype }</ElementWithLabel>
                </DeveloperSection>

                <DeveloperSection>
                    { externalLinks }
                </DeveloperSection>

                <DeveloperSection>
                    <ElementWithLabel label="I do">
                        { this.props.data.qualification.join(', ') }.
                    </ElementWithLabel>
                </DeveloperSection>

                <DeveloperSection>
                    <ProjectList projects={ this.props.data.projects } />
                </DeveloperSection>

                <DeveloperSection>
                    <ElementWithLabel label="Technologies">
                        { this.props.data.technologies.join(', ') }.
                    </ElementWithLabel>
                </DeveloperSection>

                { additional }
            </div>
        );
    }
});

module.exports = Developer;
