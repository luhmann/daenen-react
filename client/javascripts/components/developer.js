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
                <ElementWithLabel label={ row.label } key={row.label} >
                    { row.links.map(function (link, index) {
                        return (
                            <Link target="_blank" url={ link.url } key={ this.props.data.id + row.label + index} >
                                { link.text }
                            </Link>
                        );
                    }, this) }
                </ElementWithLabel>
            );
        }, this);

        var additional = function (info) {
            if (info) {
                return (
                    <DeveloperSection key="additional">
                        { info }
                    </DeveloperSection>
                );
            }

            return null;
        }(this.props.data.additional);

        return (
            <div className="developer" key={ this.props.data.id } >
                <DeveloperSection key="name">
                    <h3 className="developer--name">{ this.props.data.name }</h3>
                    <div className="developer--job-title">{ this.props.data.jobTitle }</div>
                </DeveloperSection>

                <DeveloperSection key="contact">
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

                <DeveloperSection key="links">
                    { externalLinks }
                </DeveloperSection>

                <DeveloperSection key="qualifications">
                    <ElementWithLabel label="I do">
                        { this.props.data.qualification.join(', ') }.
                    </ElementWithLabel>
                </DeveloperSection>

                <DeveloperSection key="projects">
                    <ProjectList projects={ this.props.data.projects } dev={ this.props.data.id }/>
                </DeveloperSection>

                <DeveloperSection key="technologies">
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
