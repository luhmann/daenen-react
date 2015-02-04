var fs = require('fs');
var path = require('path');

module.exports.home = function*() {
    var filepath = path.join(__dirname, '..', 'src', 'index.html');
    this.type = path.extname(filepath);
    this.body = fs.createReadStream(filepath);
};

module.exports.impressum = function*() {
    this.body = 'This is impressum';
};

