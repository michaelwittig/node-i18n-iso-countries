import codes from "../codes.json";
import diacritics from "diacritics";

const registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
const alpha2 = {},
  alpha3 = {},
  numeric = {},
  invertedNumeric = {};

codes.forEach(function (codeInformation) {
  const s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

/**
 * @private
 * @param {number} code
 */
function formatNumericCode(code) {
  return String("000" + (code ? code : "")).slice(-3);
}

/**
 * @private
 * Avoid using obj.hasOwnProperty directly as `hasOwnProperty` could be a
 * property in itself ({ hasOwnProperty: 1 }) and cause weird bugs
 * https://eslint.org/docs/rules/no-prototype-builtins
 */
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

/**
 * @private
 * Pass localeList through a filter and return a newLocaleList obj
 * with the same structure of the old localeList.
 *
 * @param {LocalizedCountryNames} localeList  Local List in raw
 * @param {Function} filter    callback to set filter rule
 * @return {String | String[]} new filtered Local List
 */
function localeFilter(localeList, filter) {
  return Object.keys(localeList).reduce(function (newLocaleList, alpha2) {
    const nameList = localeList[alpha2];
    newLocaleList[alpha2] = filter(nameList, alpha2);
    return newLocaleList;
  }, {});
}

/**
 * @private
 * Preserve for getName & getNames
 *
 * @param {GetNameOptions.select} type all | official | alias
 * @param countryNameList  string array of country's
 *                         official name and alias
 * @return {String | String[]} of a country name
 */
function filterNameBy(type, countryNameList) {
  switch (type) {
    case "official":
      return Array.isArray(countryNameList)
        ? countryNameList[0]
        : countryNameList;

    case "all":
      return typeof countryNameList === "string"
        ? [countryNameList]
        : countryNameList;

    case "alias":
      return Array.isArray(countryNameList)
        ? countryNameList[1] || countryNameList[0]
        : countryNameList;

    default:
      throw new TypeError(
        "LocaleNameType must be one of these: all, official, alias!"
      );
  }
}

/**
 * Register countries in browsers' environment:
 * @param {object} localeData
 * @example countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
 * @return void
 */
export function registerLocale(localeData) {
  if (!localeData.locale) {
    throw new TypeError("Missing localeData.locale");
  }

  if (!localeData.countries) {
    throw new TypeError("Missing localeData.countries");
  }

  registeredLocales[localeData.locale] = localeData.countries;
}

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
export function alpha3ToAlpha2(code) {
  return alpha3[code];
}

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
export function alpha2ToAlpha3(code) {
  return alpha2[code];
}

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
export function alpha3ToNumeric(code) {
  return invertedNumeric[alpha3ToAlpha2(code)];
}

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
export function alpha2ToNumeric(code) {
  return invertedNumeric[code];
}

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
export function numericToAlpha3(code) {
  var padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
export function numericToAlpha2(code) {
  var padded = formatNumericCode(code);
  return numeric[padded];
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
export function toAlpha3(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if (code.length === 2) {
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

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
export function toAlpha2(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if (code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}

/**
 * @param {string | number | Alpha2Code | Alpha3Code} code
 * @param {String} lang          language for country name
 * @param {GetNameOptions} options
 * @return {String | String[] | undefined}  name
 */
export function getName(code, lang, options = {}) {
  if (!("select" in options)) {
    options.select = "official";
  }
  try {
    const codeMaps = registeredLocales[lang.toLowerCase()];
    const nameList = codeMaps[toAlpha2(code)];
    return filterNameBy(options.select, nameList);
  } catch (err) {
    return undefined;
  }
}

/**
 * @param {String} lang             language for country names
 * @param {GetNameOptions} options   getNames Options
 * @return {LocalizedCountryNames}  country code
 *                                  mapped to county name
 */
export function getNames(lang, options = {}) {
  if (!("select" in options)) {
    options.select = "official";
  }
  var localeList = registeredLocales[lang.toLowerCase()];
  if (localeList === undefined) return {};
  return localeFilter(localeList, function (nameList) {
    return filterNameBy(options.select, nameList);
  });
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
export function getAlpha2Code(name, lang) {
  const normalizeString = (string) => string.toLowerCase();
  const areSimilar = (a, b) => normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      if (typeof codenames[p] === "string") {
        if (areSimilar(codenames[p], name)) {
          return p;
        }
      }
      if (Array.isArray(codenames[p])) {
        for (const mappedName of codenames[p]) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
export function getSimpleAlpha2Code(name, lang) {
  const normalizeString = (string) => diacritics.remove(string.toLowerCase());
  const areSimilar = (a, b) => normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      if (typeof codenames[p] === "string") {
        if (areSimilar(codenames[p], name)) {
          return p;
        }
      }
      if (Array.isArray(codenames[p])) {
        for (const mappedName of codenames[p]) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

/*
 * @return Object of alpha-2 codes mapped to alpha-3 codes
 */
export function getAlpha2Codes() {
  return alpha2;
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
export function getAlpha3Code(name, lang) {
  var alpha2 = this.getAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
export function getSimpleAlpha3Code(name, lang) {
  var alpha2 = this.getSimpleAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
}

/*
 * @return Object of alpha-3 codes mapped to alpha-2 codes
 */
export function getAlpha3Codes() {
  return alpha3;
}

/*
 * @return Object of numeric codes mapped to alpha-2 codes
 */
export function getNumericCodes() {
  return numeric;
}

/*
 * @return Array of supported languages
 */
export function langs() {
  return Object.keys(registeredLocales);
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return Boolean
 */
export function isValid(code) {
  if (!code) {
    return false;
  }

  var coerced = code.toString().toUpperCase();
  return (
    hasOwnProperty(alpha3, coerced) ||
    hasOwnProperty(alpha2, coerced) ||
    hasOwnProperty(numeric, coerced)
  );
}
