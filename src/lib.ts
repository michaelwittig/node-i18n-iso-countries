import { COUNTRY_CODES } from "./codes.js";
import {
  Alpha2Code,
  Alpha3Code,
  CountryName,
  GetNameOptions,
  LocaleData,
  LocalizedCountry,
  LocalizedCountryNames,
} from "./types.js";

// TODO: Should we replace this package by a modern version like normalize-diacritics?
// https://github.com/motss/normalize-diacritics
import * as diacritics from "diacritics";

const registeredLocales = {} as Record<string, LocaleData["countries"]>;

/*
 * All codes map to ISO 3166-1 alpha-2
 */
const alpha2: Record<string, string> = {};
const alpha3: Record<string, string> = {};
const numeric: Record<string, string> = {};
const invertedNumeric: Record<string, string> = {};

// TODO: These could be strictly typed as below, to let users have
// autocompletion options or make the compiler detect wrong codes beforehand.

// const alpha2 = {} as Record<Alpha2Code, Alpha3Code>;
// const alpha3 = {} as Record<Alpha3Code, Alpha2Code>;
// const numeric = {} as Record<string, Alpha2Code>;
// const invertedNumeric = {} as Record<Alpha2Code, string>;

COUNTRY_CODES.forEach((codeInformation) => {
  const s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

/**
 * @private
 * @param code
 */
function formatNumericCode(code: number | string): string {
  return String("000" + (code ? code : "")).slice(-3);
}

/**
 * @private
 * Avoid using obj.hasOwnProperty directly as `hasOwnProperty` could be a
 * property in itself ({ hasOwnProperty: 1 }) and cause weird bugs
 * https://eslint.org/docs/rules/no-prototype-builtins
 */
function hasOwnProperty<T>(
  object: T,
  property: string | number | symbol
): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}

/**
 * @private
 * Pass localeList through a filter and return a newLocaleList obj
 * with the same structure of the old localeList.
 * @param localeList Local List in raw
 * @param filter callback to set filter rule
 */
function localeFilter<T extends GetNameOptions>(
  localeList: LocalizedCountryNames<T>,
  filter: (nameList: CountryName<T>) => CountryName<T>
): LocalizedCountryNames<T> {
  return Object.keys(localeList).reduce((newLocaleList, alpha2) => {
    const nameList = localeList[alpha2];
    newLocaleList[alpha2] = filter(nameList);
    return newLocaleList;
  }, {} as LocalizedCountryNames<T>);
}

/**
 * @private
 * Return the country name as list or a single value, depending on the selection
 * type. Preserve for getName & getNames.
 * @param type
 * @param countryNameList string array of country's official name and alias
 */
function filterNameBy(
  type: GetNameOptions["select"],
  countryNameList: string[] | string
): string | string[] {
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
 * Register countries in browsers environment.
 * @param localeData json modules to load country codes from.
 * @example countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
 */
export function registerLocale(localeData: LocaleData): void {
  if (!localeData.locale) {
    throw new TypeError("Missing localeData.locale");
  }

  if (!localeData.countries) {
    throw new TypeError("Missing localeData.countries");
  }

  registeredLocales[localeData.locale] = localeData.countries;
}

/**
 * Return the country ISO 3166-1 Alpha-2 code or undefined.
 * @param code ISO 3166-1 Alpha-3 code to lookup.
 */
export function alpha3ToAlpha2(code: string | Alpha3Code): string {
  return alpha3[code];
}

/**
 * Return the country ISO 3166-1 Alpha-3 code or undefined.
 * @param code ISO 3166-1 Alpha-2 code to lookup.
 */
export function alpha2ToAlpha3(code: string | Alpha2Code): string {
  return alpha2[code];
}

/**
 * Return the country ISO 3166-1 numeric code or undefined.
 * @param code ISO 3166-1 Alpha-3 code to lookup.
 */
export function alpha3ToNumeric(
  alpha3: string | Alpha3Code
): string | undefined {
  return invertedNumeric[alpha3ToAlpha2(alpha3)];
}

/**
 * Return the country ISO 3166-1 numeric code or undefined.
 * @param code ISO 3166-1 Alpha-2 code to lookup.
 */
export function alpha2ToNumeric(
  alpha2: string | Alpha2Code
): string | undefined {
  return invertedNumeric[alpha2];
}

/**
 * Return the country ISO 3166-1 Alpha-3 code or undefined.
 * @param code ISO 3166-1 numeric code to lookup.
 */
export function numericToAlpha3(code: number | string): string | undefined {
  const padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}

/**
 * Return the country ISO 3166-1 Alpha-2 code or undefined.
 * @param code ISO 3166-1 numeric code to lookup.
 */
export function numericToAlpha2(code: number | string): string | undefined {
  const padded = formatNumericCode(code);
  return numeric[padded];
}

/**
 * Return the country ISO 3166-1 alpha-3 code.
 * @param alpha2orNumeric ISO 3166-1 alpha-2, alpha-3 or numeric code.
 */
export function toAlpha3(
  alpha2orNumeric: number | string | Alpha2Code
): string | undefined {
  if (typeof alpha2orNumeric === "string") {
    if (/^[0-9]*$/.test(alpha2orNumeric)) {
      return numericToAlpha3(alpha2orNumeric);
    }
    if (alpha2orNumeric.length === 2) {
      return alpha2ToAlpha3(alpha2orNumeric.toUpperCase());
    }
    if (alpha2orNumeric.length === 3) {
      return alpha2orNumeric.toUpperCase();
    }
  }
  if (typeof alpha2orNumeric === "number") {
    return numericToAlpha3(alpha2orNumeric);
  }
  return undefined;
}

/**
 * Return the country ISO 3166-1 alpha-2 code.
 * @param alpha3orNumeric ISO 3166-1 alpha-2, alpha-3 or numeric code.
 */
export function toAlpha2(
  alpha3orNumeric: number | string | Alpha3Code
): string | undefined {
  if (typeof alpha3orNumeric === "string") {
    if (/^[0-9]*$/.test(alpha3orNumeric)) {
      return numericToAlpha2(alpha3orNumeric);
    }
    if (alpha3orNumeric.length === 2) {
      return alpha3orNumeric.toUpperCase();
    }
    if (alpha3orNumeric.length === 3) {
      return alpha3ToAlpha2(alpha3orNumeric.toUpperCase());
    }
  }
  if (typeof alpha3orNumeric === "number") {
    return numericToAlpha2(alpha3orNumeric);
  }
  return undefined;
}

/**
 * Returns the country code mapped to country name for the specified language.
 * @param countryCode
 * @param lang language for country name.
 * @param options map the country names based on the `select` option. Defaults
 * to 'official'.
 *  - all: This always return string[].
 *  - official: This always return string. If the codename is an array, the
 *    functions return the first element of the array.
 *  - alias: This always return string. If the codename is just a string, the
 *    function return it as it is. Otherwise, it will return the second element
 *    of the codename array.
 */
export function getName(
  countryCode: string | number | Alpha2Code | Alpha3Code,
  lang: string,
  options: GetNameOptions = {
    select: "official",
  }
): string | string[] | undefined {
  try {
    const codeMaps = registeredLocales[lang.toLowerCase()];
    const alpha2Code = toAlpha2(countryCode);
    if (!alpha2Code) throw Error("Invalid Alpha 2 Code");
    const nameList = codeMaps[alpha2Code];
    return filterNameBy(options.select, nameList);
  } catch (err) {
    return undefined;
  }
}

/**
 * Returns all the country codes mapped as names for the specified language,
 * depending on the passed options.
 * @param lang language for country names.
 * @param options map the country names based on the `select` option. Defaults
 * to 'official'.
 *  - all: This always return string[].
 *  - official: This always return string. If the codename is an array, the
 *    functions return the first element of the array.
 *  - alias: This always return string. If the codename is just a string, the
 *    function return it as it is. Otherwise, it will return the second element
 *    of the codename array.
 */
export function getNames<T extends GetNameOptions>(
  lang: string,
  options: GetNameOptions = {
    select: "official",
  }
): LocalizedCountryNames<T> {
  const localeList = registeredLocales[lang.toLowerCase()];
  if (localeList === undefined) return {};
  return localeFilter(
    localeList as LocalizedCountry<T>,
    (nameList: CountryName<T>) => {
      return filterNameBy(options.select, nameList) as CountryName<T>;
    }
  );
}

/**
 * Returns the ISO 3166-1 Alpha-2 code or undefined.
 * @param name country name.
 * @param lang language to lookup for country name.
 */
export function getAlpha2Code(name: string, lang: string): string | undefined {
  const normalizeString = (str: string): string => str.toLowerCase();
  const areSimilar = (a: string, b: string): boolean =>
    normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      const codename = codenames[p];
      if (Array.isArray(codename)) {
        for (const mappedName of codename) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      } else {
        if (areSimilar(codename, name)) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

/**
 * Returns the ISO 3166-1 Alpha-2 code without diacritics or undefined.
 * @param name country name
 * @param lang language to lookup for country name.
 */
export function getSimpleAlpha2Code(
  name: string,
  lang: string
): string | undefined {
  const normalizeString = (str: string): string =>
    diacritics.remove(str.toLowerCase());
  const areSimilar = (a: string, b: string): boolean =>
    normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      const codename = codenames[p];
      if (Array.isArray(codename)) {
        for (const mappedName of codename) {
          if (areSimilar(mappedName, name)) {
            return p;
          }
        }
      } else {
        if (areSimilar(codename, name)) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
}

/**
 * A dictionary-like object of alpha-2 codes mapped to alpha-3 codes
 */
export function getAlpha2Codes(): Record<string, string> {
  return alpha2;
}

/**
 * Returns the ISO 3166-1 Alpha-3 code or undefined.
 * @param name country name
 * @param lang language to lookup for country name.
 */
export function getAlpha3Code(name: string, lang: string): string | undefined {
  const alpha2 = getAlpha2Code(name, lang);
  if (alpha2) {
    return toAlpha3(alpha2);
  } else {
    return undefined;
  }
}

/**
 * Returns the ISO 3166-1 Alpha-3 code without diacritics or undefined.
 * @param name country name
 * @param lang language to lookup for country name.
 */
export function getSimpleAlpha3Code(
  name: string,
  lang: string
): string | undefined {
  const alpha2 = getSimpleAlpha2Code(name, lang);
  if (alpha2) {
    return toAlpha3(alpha2);
  } else {
    return undefined;
  }
}

/**
 * A dictionary-like object of alpha-3 codes mapped to alpha-2 codes.
 */
export function getAlpha3Codes(): Record<string, string> {
  return alpha3;
}

/**
 * A dictionary-like object of numeric codes mapped to alpha-2 codes.
 */
export function getNumericCodes(): Record<string, string> {
  return numeric;
}

/**
 * Return an array of supported languages.
 */
export function langs(): string[] {
  return Object.keys(registeredLocales);
}

/**
 * Validates the passed ISO 3166 country code.
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code.
 */
export function isValid(code: string | number | null | undefined): boolean {
  if (!code) {
    return false;
  }

  const coerced = code.toString().toUpperCase();
  return (
    hasOwnProperty(alpha3, coerced) ||
    hasOwnProperty(alpha2, coerced) ||
    hasOwnProperty(numeric, coerced)
  );
}
