var logger = require('koa-logger');
var router = require('koa-router');
var serve = require('koa-static');
var koa = module.exports = require('koa');
var app = koa();

const config = require('./config.js');

app.use(logger());
app.use(serve(config.assetPath));
app.use(router(app));


routes = require('./routes.js');



app.get('/', routes.home);
app.get('/impressum', routes.impressum);

app.listen(3000);
console.log('Listening on port 3000');