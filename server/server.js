var logger = require('koa-logger');
var router = require('koa-router');
var serve = require('koa-static');
var fs = require('fs');
var React = require('react');
var Router = require('react-router');
var getRoutes = require('./routes');
var indexHTML = fs.readFileSync(__dirname+'/../client/index.html').toString();
var koa = module.exports = require('koa');
var app = koa();

const config = require('./config.js');

app.use(logger());
app.use(serve(config.assetPath));
app.use(router(app));


var renderApp = (req, cb) => {
    var path = req.url;
    var htmlRegex = /¡HTML!/;
    var dataRegex = /¡DATA!/;

    var router = Router.create({
        routes: getRoutes(),
        location: path,
        onAbort: function (redirect) {
            cb({redirect});
        },
        onError: function (err) {
            console.log('Routing Error');
            console.log(err);
        }
    });

    router.run((Handler, state) => {
        var html = React.renderToString(<Handler />);
        var output = indexHTML.
            replace(htmlRegex, html).
            replace(dataRegex, '');
        cb(null, output);
    });
};

renderApp.bind(this);


app.use(function *(){
    renderApp(this.request, (error, html) => {
        this.body = html;
    });
});

app.listen(3000);
console.log('Listening on port 3000');
