var Developer = require('./developer.js');
var jfd = require('../json/jfd.json');
var hp = require('../json/hp.json');




var Content = React.createClass({
    render: function () {
        return (
            <div id="content">
                <Developer data={ jfd } />
                <Developer data={ hp } />
            </div>
        );
    }
});

module.exports = Content;
