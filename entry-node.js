var fs = require("fs");
var path = require("path");
var library = require("./index");

var langDir = path.join(__dirname, "langs");
var locales = fs.readdirSync(langDir);

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(require(path.join(langDir, locales[i])));
}

module.exports = library;
