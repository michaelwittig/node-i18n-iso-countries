[![Build Status](https://secure.travis-ci.org/michaelwittig/node-i18n-iso-countries.png)](http://travis-ci.org/michaelwittig/node-i18n-iso-countries)
[![NPM version](https://badge.fury.io/js/i18n-iso-countries.png)](http://badge.fury.io/js/i18n-iso-countries)

# i18n-iso-countries

i18n for ISO 3166-1 country codes. We support Alpha-2, Alpha-3 and Numeric codes from http://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements

## Code to Country

### Get the name of a country by it's ISO 3166-1 Alpha-2, Alpha-3 or Numeric code

`````javascript
var countries = require("i18n-iso-countries");
console.log("US (Alpha-2) => " + countries.getName("US", "en")); // United States
console.log("US (Alpha-2) => " + countries.getName("US", "de")); // Vereinigte Staaten von Amerika
console.log("USA (Alpha-3) => " + countries.getName("USA", "en")); // United States
console.log("USA (Numeric) => " + countries.getName("840", "en")); // United States
`````

### Get all names by their ISO 3166-1 Alpha-2 code

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.getNames("en")); // { 'AF': 'Afghanistan', 'AL': 'Albania', [...], 'ZM': 'Zambia', 'ZW': 'Zimbabwe' }
`````

### Supported languages

* `en`: english
* `de`: german
* `nl`: dutch
* `fr`: french
* `sv`: swedish
* `es`: spanish

### Country to Code

`````javascript
var countries = require("i18n-iso-countries");
console.log("United States => " + countries.getAlpha2Code('United States', 'en')); // US
`````

## Codes

### Convert Alpha-3 to Alpha-2 code

`````javascript
var countries = require("i18n-iso-countries");
console.log("USA (Alpha-3) => " + countries.alpha3ToAlpha2("USA") + " (Alpha-2)"); // United States
`````

### Convert Numeric to Alpha-2 code

`````javascript
var countries = require("i18n-iso-countries");
console.log("840 (Numeric) => " + countries.numericToAlpha2("840") + " (Alpha-2)"); // United States
`````

### Convert Alpha-2 to Alpha-3 coe
`````javascript
var countries = require("i18n-iso-countries");
console.log("DE (Alpha-2) => " + countries.alpha2ToAlpha3("DE") + " (Alpha-3)"); // Germany
`````

### Convert Numeric to Alpha-3 code

`````javascript
var countries = require("i18n-iso-countries");
console.log("840 (Numeric) => " + countries.numericToAlpha3("840") + " (Alpha-3)"); // United States
`````

### Convert Alpha-3 to Numeric code

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.alpha3ToNumeric("SWE")); // 752
`````

### Convert Alpha-2 to Numeric code

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.alpha2ToNumeric("SE")); // 752
`````

### Get all Alpha-2 codes

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.getAlpha2Codes()); // { 'AF': 'AFG', 'AX': 'ALA', [...], 'ZM': 'ZMB', 'ZW': 'ZWE' }
`````

### Get all Alpha-3 codes

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.getAlpha3Codes()); // { 'AFG': 'AF', 'ALA': 'AX', [...], 'ZMB': 'ZM', 'ZWE': 'ZW' }
`````

### Get all Numeric codes

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.getNumericCodes()); // { '4': 'AF', '8': 'AL', [...], '887': 'YE', '894': 'ZM' }
`````
