import { COUNTRY_CODES } from './codes';
import {
  Alpha2Code,
  Alpha3Code,
  CountryName,
  GetNameOptions,
  LocaleData,
  LocalizedCountryNames,
} from './types';

// TODO: Should we replace this package by a modern version like normalize-diacritics?
// https://github.com/motss/normalize-diacritics
// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeDiacritics = require('diacritics').remove;

const registeredLocales = {} as Record<string, LocaleData['countries']>;

/*
 * All codes map to ISO 3166-1 alpha-2
 */
const alpha2: Record<string, string> = {};
const alpha3: Record<string, string> = {};
const numeric: Record<string, string> = {};
const invertedNumeric: Record<string, string> = {};

// TODO: These could be strictly typed as below, to let users have
// autocompletion options or make the compiler detect wrong codes beforehand.

// const alpha2 = {} as
// Record<Alpha2Code, Alpha3Code>; const alpha3 = {} as Record<Alpha3Code,
// Alpha2Code>; const numeric = {} as Record<string, Alpha2Code>; const
// invertedNumeric = {} as Record<Alpha2Code, string>;

COUNTRY_CODES.forEach((codeInformation) => {
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
function formatNumericCode(code: number | string): string {
  return String('000' + (code ? code : '')).slice(-3);
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
 *
 * @param {LocalizedCountryNames} localeList  Local List in raw
 * @param {Function} filter    callback to set filter rule
 * @return {String | String[]} new filtered Local List
 */
function localeFilter<T extends GetNameOptions>(
  localeList: LocalizedCountryNames<T>,
  filter: (nameList: CountryName<T>) => string | string[]
): LocalizedCountryNames<T> {
  return Object.keys(localeList).reduce((newLocaleList, alpha2) => {
    const nameList = localeList[alpha2];
    newLocaleList[alpha2] = filter(nameList);
    return newLocaleList;
  }, {} as LocalizedCountryNames<T>);
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
function filterNameBy(
  type: GetNameOptions['select'],
  countryNameList: string[] | string
): string | string[] {
  switch (type) {
    case 'official':
      return Array.isArray(countryNameList)
        ? countryNameList[0]
        : countryNameList;

    case 'all':
      return typeof countryNameList === 'string'
        ? [countryNameList]
        : countryNameList;

    case 'alias':
      return Array.isArray(countryNameList)
        ? countryNameList[1] || countryNameList[0]
        : countryNameList;

    default:
      throw new TypeError(
        'LocaleNameType must be one of these: all, official, alias!'
      );
  }
}

/**
 * Register countries in browsers' environment:
 * @param {object} localeData
 * @example countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
 * @return void
 */
export function registerLocale(localeData: LocaleData): void {
  if (!localeData.locale) {
    throw new TypeError('Missing localeData.locale');
  }

  if (!localeData.countries) {
    throw new TypeError('Missing localeData.countries');
  }

  registeredLocales[localeData.locale] = localeData.countries;
}

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
export function alpha3ToAlpha2(code: string | Alpha3Code): string {
  return alpha3[code];
}

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
export function alpha2ToAlpha3(code: string | Alpha2Code): string {
  return alpha2[code];
}

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
export function alpha3ToNumeric(
  alpha3: string | Alpha3Code
): string | undefined {
  return invertedNumeric[alpha3ToAlpha2(alpha3)];
}

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
export function alpha2ToNumeric(
  alpha2: string | Alpha2Code
): string | undefined {
  return invertedNumeric[alpha2];
}

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
export function numericToAlpha3(code: number | string): string | undefined {
  const padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
export function numericToAlpha2(code: number | string): string | undefined {
  const padded = formatNumericCode(code);
  return numeric[padded];
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
export function toAlpha3(
  alpha2orNumeric: number | string | Alpha2Code
): string | undefined {
  if (typeof alpha2orNumeric === 'string') {
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
  if (typeof alpha2orNumeric === 'number') {
    return numericToAlpha3(alpha2orNumeric);
  }
  return undefined;
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
export function toAlpha2(
  alpha3orNumeric: number | string | Alpha3Code
): string | undefined {
  if (typeof alpha3orNumeric === 'string') {
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
  if (typeof alpha3orNumeric === 'number') {
    return numericToAlpha2(alpha3orNumeric);
  }
  return undefined;
}

/**
 * @param {string | number | Alpha2Code | Alpha3Code} code
 * @param {String} lang          language for country name
 * @param {GetNameOptions} options
 * @return {String | String[] | undefined}  name
 */
export function getName(
  contryCode: string | number | Alpha2Code | Alpha3Code,
  lang: string,
  options: GetNameOptions = {
    select: 'official',
  }
): string | string[] | undefined {
  try {
    const codeMaps = registeredLocales[lang.toLowerCase()];
    const alpha2Code = toAlpha2(contryCode);
    if (!alpha2Code) throw Error('Invalid Alpha 2 Code');
    const nameList = codeMaps[alpha2Code];
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
export function getNames<T extends GetNameOptions>(
  lang: string,
  options: GetNameOptions = {
    select: 'official',
  }
): LocalizedCountryNames<T> {
  const localeList = registeredLocales[lang.toLowerCase()];
  if (localeList === undefined) return {};
  return localeFilter(localeList, (nameList: string | string[]) => {
    return filterNameBy(options.select, nameList);
  });
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
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
      if (typeof codenames[p] === 'string') {
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
export function getSimpleAlpha2Code(
  name: string,
  lang: string
): string | undefined {
  const normalizeString = (str: string): string =>
    removeDiacritics(str.toLowerCase());
  const areSimilar = (a: string, b: string): boolean =>
    normalizeString(a) === normalizeString(b);

  try {
    const codenames = registeredLocales[lang.toLowerCase()];
    for (const p in codenames) {
      if (!hasOwnProperty(codenames, p)) {
        continue;
      }
      if (typeof codenames[p] === 'string') {
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
export function getAlpha2Codes(): Record<string, string> {
  return alpha2;
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
export function getAlpha3Code(name: string, lang: string): string | undefined {
  const alpha2 = exports.getAlpha2Code(name, lang);
  if (alpha2) {
    return exports.toAlpha3(alpha2);
  } else {
    return undefined;
  }
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
export function getSimpleAlpha3Code(
  name: string,
  lang: string
): string | undefined {
  const alpha2 = exports.getSimpleAlpha2Code(name, lang);
  if (alpha2) {
    return exports.toAlpha3(alpha2);
  } else {
    return undefined;
  }
}

/*
 * @return Object of alpha-3 codes mapped to alpha-2 codes
 */
export function getAlpha3Codes(): Record<string, string> {
  return alpha3;
}

/*
 * @return Object of numeric codes mapped to alpha-2 codes
 */
export function getNumericCodes(): Record<string, string> {
  return numeric;
}

/*
 * @return Array of supported languages
 */
export function langs(): string[] {
  return Object.keys(registeredLocales);
}

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return Boolean
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
