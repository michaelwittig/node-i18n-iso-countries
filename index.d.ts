export type LocalizedCountryNames = { 
  [alpha2Key: string]: string 
};

export type LocaleData = {
  locale: string,
  countries: LocalizedCountryNames
};

export function registerLocale(localeData: LocaleData): void;
export function alpha2ToAlpha3(alpha2: string): string;
export function alpha2ToNumeric(alpha2: string): number;
export function alpha3ToAlpha2(alpha3: string): string;
export function alpha3ToNumeric(alpha3: string): number;
export function numericToAlpha2(numeric: number | string): string;
export function numericToAlpha3(numeric: number | string): string;
/**
 * Returns object map where key is alpha 2 code and value is alpha 3 code
 */
export function getAlpha2Codes(): { [alpha2Key: string]: string };
/**
 * Returns object map where key is alpha 3 code and value is alpha 2 code
 */
export function getAlpha3Codes(): { [alpha3Key: string]: string };
/**
 * Returns object map where key is numeric code and value is alpha 2 code
 */
export function getNumericCodes(): { [numericKey: number]: string };
export function getName(alpha2orAlpha3orNumeric: string | number, lang: string): string;
export function getNames(lang: string): LocalizedCountryNames;
export function toAlpha3(alpha2orNumeric: number | string): string;
export function toAlpha2(alpha3orNumeric: number | string): string;
export function getAlpha2Code(name: string, lang: string): string;
export function getAlpha3Code(name: string, lang: string): string;
export function langs(): string[];
export function isValid(alpha2orAlpha3orNumeric: string | number): boolean;
