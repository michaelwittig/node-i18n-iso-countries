var pad = require("pad");

var codes = require("./codes.json");
var data = {
  "ar": require("./langs/ar.json"),
  "cs": require("./langs/cs.json"),
  "de": require("./langs/de.json"),
  "en": require("./langs/en.json"),
  "es": require("./langs/es.json"),
  "et": require("./langs/et.json"),
  "fi": require("./langs/fi.json"),
  "fr": require("./langs/fr.json"),
  "it": require("./langs/it.json"),
  "nb": require("./langs/nb.json"),
  "nl": require("./langs/nl.json"),
  "nn": require("./langs/nn.json"),
  "pl": require("./langs/pl.json"),
  "pt": require("./langs/pt.json"),
  "ru": require("./langs/ru.json"),
  "sv": require("./langs/sv.json"),
  "tr": require("./langs/tr.json"),
  "zh": require("./langs/zh.json")
};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
var alpha2 = {},
  alpha3 = {},
  numeric = {},
  invertedNumeric = {};

codes.forEach(function(codeInformation) {
  "use strict";
  var s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

function formatNumericCode(code) {
  "use strict";
  return pad(3, code, '0');
}

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
function alpha3ToAlpha2(code) {
  "use strict";
  return alpha3[code];
}
exports.alpha3ToAlpha2 = alpha3ToAlpha2;

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
function alpha2ToAlpha3(code) {
  "use strict";
  return alpha2[code];
}
exports.alpha2ToAlpha3 = alpha2ToAlpha3;

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
function alpha3ToNumeric(code) {
  "use strict";
  return invertedNumeric[alpha3ToAlpha2(code)];
}
exports.alpha3ToNumeric = alpha3ToNumeric;

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
function alpha2ToNumeric(code) {
  "use strict";
  return invertedNumeric[code];
}
exports.alpha2ToNumeric = alpha2ToNumeric;

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
function numericToAlpha3(code) {
  "use strict";
  var padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}
exports.numericToAlpha3 = numericToAlpha3;

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
function numericToAlpha2(code) {
  "use strict";
  var padded = formatNumericCode(code);
  return numeric[padded];
}
exports.numericToAlpha2 = numericToAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
function toAlpha3(code) {
  "use strict";
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if(code.length === 2) {
      return alpha2ToAlpha3(code.toUpperCase());
    }
    if (code.length === 3) {
      return code.toUpperCase();
    }
  }
  if (typeof code === "number") {
    return numericToAlpha3(code);
  }
  return undefined;
}
exports.toAlpha3 = toAlpha3;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
function toAlpha2(code) {
  "use strict";
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if(code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}
exports.toAlpha2 = toAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @param lang language for country name
 * @return name or undefined
 */
exports.getName = function(code, lang) {
  "use strict";
  try {
    var d = data[lang.toLowerCase()];
    return d[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
};

/*
 * @param lang language for country name
 * @return hash
 */
exports.getNames = function(lang) {
  "use strict";
  var d = data[lang.toLowerCase()];
  if (d === undefined) {
    return {};
  }
  return d;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getAlpha2Code = function(name, lang) {
  "use strict";
  try {
    var p, codenames = data[lang.toLowerCase()];
    for (p in codenames) {
      if (codenames.hasOwnProperty(p)) {
        if (codenames[p].toLowerCase() === name.toLowerCase()) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @return Array of alpha-2 codes
 */
exports.getAlpha2Codes = function() {
  "use strict";
  return alpha2;
};

/*
 * @return Array of alpha-3 codes
 */
exports.getAlpha3Codes = function() {
  "use strict";
  return alpha3;
};

/*
 * @return Array of numeric codes
 */
exports.getNumericCodes = function() {
  "use strict";
  return numeric;
};

/*
 * @return Array of languages
 */
exports.langs = function() {
  "use strict";
  return Object.keys(data);
};
