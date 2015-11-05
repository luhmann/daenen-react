var logger = require('koa-logger');
var router = require('koa-router');
var serve = require('koa-static');
var compress = require('koa-compress');
var fs = require('fs');
var React = require('react');
var Router = require('react-router').Router;
var getRoutes = require('./routes');
var indexHTML = fs.readFileSync(__dirname+'/../client/index.html').toString();
var koa = module.exports = require('koa');
var app = koa();

const config = require('./config.js');

app.use(compress({
    filter: function (content_type) {
        return /application|text|image\/svg\+xml/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
}));
app.use(logger());
app.use(serve(config.assetPath));
app.use(router(app));


var renderApp = (req, cb) => {
    var path = req.url;
    var htmlRegex = /¡HTML!/;
    var dataRegex = /¡DATA!/;
    var layoutRegex = /¡LAYOUT-CLASS!/;

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
            replace(layoutRegex, (Math.random() >= 0.5) ? 'is-beam' : '');
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
