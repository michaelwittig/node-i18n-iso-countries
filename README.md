[![Build Status](https://secure.travis-ci.org/michaelwittig/node-i18n-iso-countries.png)](http://travis-ci.org/michaelwittig/node-i18n-iso-countries)
[![NPM version](https://badge.fury.io/js/i18n-iso-countries.png)](http://badge.fury.io/js/i18n-iso-countries)

# i18n-iso-countries

> ⚠️ Version 5 drops support for node 6 and 7!

i18n for ISO 3166-1 country codes. We support Alpha-2, Alpha-3 and Numeric codes from ['Wikipedia: Officially assigned code elements'][iso:3166-1]

## Installing

Install it using npm: `npm install i18n-iso-countries`

```javascript
var countries = require("i18n-iso-countries");
```

If you use `i18n-iso-countries` with Node.js, you are done. If you use the package in a browser environment, you have to register the languages you want to use to minimize the file size.

```javascript
// Support french & english languages.
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/fr.json"));
```

## Code to Country

### Get the name of a country by its ISO 3166-1 Alpha-2, Alpha-3 or Numeric code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log("US (Alpha-2) => " + countries.getName("US", "en", {select: "official"})); // United States of America
console.log("US (Alpha-2) => " + countries.getName("US", "de", {select: "official"})); // Vereinigte Staaten von Amerika
console.log("USA (Alpha-3) => " + countries.getName("USA", "en", {select: "official"})); // United States of America
console.log("USA (Numeric) => " + countries.getName("840", "en", {select: "official"})); // United States of America
```

### Get all names by their ISO 3166-1 Alpha-2 code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(countries.getNames("en", {select: "official"})); // { 'AF': 'Afghanistan', 'AL': 'Albania', [...], 'ZM': 'Zambia', 'ZW': 'Zimbabwe' }
```

### Supported languages (ISO 639-1)

> In case you want to add new language, please refer [ISO 639-1 table][iso:639-1].

- `af`: Afrikaans
- `am`: Amharic
- `ar`: Arabic
- `az`: Azerbaijani
- `be`: Belorussian
- `bg`: Bulgarian
- `bn`: Bengali
- `bs`: Bosnian
- `ca`: Catalan
- `cs`: Czech
- `cy`: Cymraeg
- `da`: Danish
- `de`: German
- `dv`: Dhivehi
- `en`: English
- `es`: Spanish
- `et`: Estonian
- `eu`: Basque
- `fa`: Persian
- `fi`: Finnish
- `fr`: French
- `gl`: Galician
- `el`: Greek
- `ha`: Hausa
- `he`: Hebrew
- `hi`: Hindi
- `hr`: Croatian
- `hu`: Hungarian
- `hy`: Armenian
- `is`: Icelandic
- `it`: Italian
- `id`: Indonesian
- `ja`: Japanese
- `ka`: Georgian
- `kk`: Kazakh
- `km`: Khmer
- `ko`: Korean
- `ku`: Kurdish
- `ky`: Kyrgyz
- `lt`: Lithuanian
- `lv`: Latvian
- `mk`: Macedonian
- `ml`: Malayalam
- `mn`: Mongolian
- `ms`: Malay
- `nb`: Norwegian Bokmål
- `nl`: Dutch
- `nn`: Norwegian Nynorsk
- `no`: Norwegian
- `pl`: Polish
- `ps`: Pashto
- `pt`: Portuguese
- `ro`: Romanian
- `ru`: Russian
- `sd`: Sindhi
- `sk`: Slovak
- `sl`: Slovene
- `so`: Somali
- `sq`: Albanian
- `sr`: Serbian
- `sv`: Swedish
- `sw`: Swahili
- `ta`: Tamil
- `tg`: Tajik
- `th`: Thai
- `tr`: Turkish
- `tt`: Tatar
- `ug`: Uyghur
- `uk`: Ukrainian
- `ur`: Urdu
- `uz`: Uzbek
- `zh`: Chinese
- `vi`: Vietnamese

[List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### Country to Code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(
  "United States of America => " +
    countries.getAlpha2Code("United States of America", "en")
);
// United States of America => US

console.log(
  "United States of America => " +
    countries.getAlpha3Code("United States of America", "en")
);
// United States of America => USA
```

## Codes

### Convert Alpha-3 to Alpha-2 code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(
  "USA (Alpha-3) => " + countries.alpha3ToAlpha2("USA") + " (Alpha-2)"
);
// USA (Alpha-3) => US (Alpha-2)
```

### Convert Numeric to Alpha-2 code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(
  "840 (Numeric) => " + countries.numericToAlpha2("840") + " (Alpha-2)"
);
// 840 (Numeric) => US (Alpha-2)
```

### Convert Alpha-2 to Alpha-3 code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log("DE (Alpha-2) => " + countries.alpha2ToAlpha3("DE") + " (Alpha-3)");
// DE (Alpha-2) => DEU (Alpha-3)
```

### Convert Numeric to Alpha-3 code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(
  "840 (Numeric) => " + countries.numericToAlpha3("840") + " (Alpha-3)"
);
// 840 (Numeric) => USA (Alpha-3)
```

### Convert Alpha-3 to Numeric code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(countries.alpha3ToNumeric("SWE"));
// 752
```

### Convert Alpha-2 to Numeric code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(countries.alpha2ToNumeric("SE"));
// 752
```

### Get all Alpha-2 codes

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(countries.getAlpha2Codes());
// { 'AF': 'AFG', 'AX': 'ALA', [...], 'ZM': 'ZMB', 'ZW': 'ZWE' }
```

### Get all Alpha-3 codes

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(countries.getAlpha3Codes());
// { 'AFG': 'AF', 'ALA': 'AX', [...], 'ZMB': 'ZM', 'ZWE': 'ZW' }
```

### Get all Numeric codes

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(countries.getNumericCodes());
// { '004': 'AF', '008': 'AL', [...], '887': 'YE', '894': 'ZM' }
```

### Validate country code

```javascript
var countries = require("i18n-iso-countries");
// in a browser environment: countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
console.log(
  countries.isValid("US"),
  countries.isValid("USA"),
  countries.isValid("XX")
);
// true, true, false
```

## Contribution

To add a language:

- add a json file under [langs/](langs)
- add the language to the `data` object in entry-node.js at the top
- add language to section **Supported languages** in [README.md](#supported-languages-iso-639-1)
- add language to keywords in [package.json](package.json)
- run `npm test` to make sure that tests are passing
- open a PR on GitHub

You can check codes here: https://www.iso.org/obp/ui/#home

[iso:639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[iso:3166-1]: http://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements
