var library = require("./index");

var locales = [
  require("./langs/ar.json"),
  require("./langs/az.json"),
  require("./langs/be.json"),
  require("./langs/bg.json"),
  require("./langs/bs.json"),
  require("./langs/ca.json"),
  require("./langs/cs.json"),
  require("./langs/da.json"),
  require("./langs/de.json"),
  require("./langs/el.json"),
  require("./langs/en.json"),
  require("./langs/es.json"),
  require("./langs/et.json"),
  require("./langs/fa.json"),
  require("./langs/fi.json"),
  require("./langs/fr.json"),
  require("./langs/el.json"),
  require("./langs/he.json"),
  require("./langs/hr.json"),
  require("./langs/hu.json"),
  require("./langs/hy.json"),
  require("./langs/id.json"),
  require("./langs/it.json"),
  require("./langs/ja.json"),
  require("./langs/ka.json"),
  require("./langs/kk.json"),
  require("./langs/ko.json"),
  require("./langs/ky.json"),
  require("./langs/lt.json"),
  require("./langs/lv.json"),
  require("./langs/mk.json"),
  require("./langs/mn.json"),
  require("./langs/nb.json"),
  require("./langs/nl.json"),
  require("./langs/nn.json"),
  require("./langs/pl.json"),
  require("./langs/pt.json"),
  require("./langs/ro.json"),
  require("./langs/ru.json"),
  require("./langs/sk.json"),
  require("./langs/sl.json"),
  require("./langs/sr.json"),
  require("./langs/sv.json"),
  require("./langs/tr.json"),
  require("./langs/uk.json"),
  require("./langs/uz.json"),
  require("./langs/zh.json")
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
