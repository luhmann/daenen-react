var Link = require('./link');
var ElementWithLabel = require('./elementWithLabel');
var Project = require('./project');

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

        var projects = this.props.data.projects.map(function (project) {
            return(
                <li>
                    <Project data={ project } />
                </li>
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
            <div className="developer">
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
                        <Link title={ this.props.data.email } isMailto={ true } url={ this.props.data.email }>
                            { this.props.data.email }
                        </Link>
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
                    <ElementWithLabel label="Clients and Projects"></ElementWithLabel>
                    <ul>
                        { projects }
                    </ul>
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
