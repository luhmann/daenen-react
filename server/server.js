var logger = require('koa-logger');
var router = require('koa-router');
var serve = require('koa-static');
var path = require('path');
var fs = require('fs');
var koa = module.exports = require('koa');
var app = koa();

const config = require('./config.js');

app.use(logger());
app.use(serve(config.assetPath));
app.use(router(app));


routes = require('./routes.js');



//app.get('/', routes.home);
//app.get('/impressum', routes.home);

app.use(function *(){
    var filepath = path.join(__dirname, '..', 'src', 'index.html');
    this.type = path.extname(filepath);
    this.body = fs.createReadStream(filepath);
});

app.listen(3000);
console.log('Listening on port 3000');
