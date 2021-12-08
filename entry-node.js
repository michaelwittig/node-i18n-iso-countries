var library = require("./index");

for (var i = 0; i < library.supportedLocales.length; i++) {
  var locale = require("./langs/" + library.supportedLocales[i] + ".json")
  library.registerLocale(locale);
}

module.exports = library;
