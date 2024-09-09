var library = require("./index");

var supportedLocales = library.getSupportedLanguages();

for (var i = 0; i < supportedLocales.length; i++) {
  var locale = require("./langs/" + supportedLocales[i] + ".json");
  library.registerLocale(locale);
}

module.exports = library;
