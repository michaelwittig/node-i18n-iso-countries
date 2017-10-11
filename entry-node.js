var library = require("./index");

var locales = [
  require("./langs/ar.json"),
  require("./langs/az.json"),
  require("./langs/cs.json"),
  require("./langs/da.json"),
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/es.json"),
  require("./langs/et.json"),
  require("./langs/fi.json"),
  require("./langs/fr.json"),
  require("./langs/el.json"),
  require("./langs/he.json"),
  require("./langs/hu.json"),
  require("./langs/it.json"),
  require("./langs/ja.json"),
  require("./langs/ka.json"),
  require("./langs/kk.json"),
  require("./langs/ko.json"),
  require("./langs/nb.json"),
  require("./langs/nl.json"),
  require("./langs/nn.json"),
  require("./langs/pl.json"),
  require("./langs/pt.json"),
  require("./langs/ru.json"),
  require("./langs/sv.json"),
  require("./langs/tr.json"),
  require("./langs/uk.json"),
  require("./langs/zh.json")
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
