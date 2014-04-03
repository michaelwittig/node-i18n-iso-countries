[![Build Status](https://secure.travis-ci.org/cinovo/node-i18n-iso-countries.png)](http://travis-ci.org/cinovo/node-i18n-iso-countries)
[![NPM version](https://badge.fury.io/js/i18n-iso-countries.png)](http://badge.fury.io/js/i18n-iso-countries)

#i18n-iso-countries

i18n for ISO 3166-1 country codes. We support Alpha-2, Alpha-3 and Numeric codes.

## usage

### get the name of a country by it's ISO 3166-1 Alpha-2, Alpha-3 or Numeric code

`````javascript
var countries = require("i18n-iso-countries");
console.log("US (Alpha-2) => " + countries.getName("US", "en")); // United States
console.log("US (Alpha-2) => " + countries.getName("US", "de")); // Vereinigte Staaten von Amerika
console.log("USA (Alpha-3) => " + countries.getName("USA", "en")); // United States
console.log("USA (Numeric) => " + countries.getName("840", "en")); // United States

`````

### get the names of all countries by their ISO 3166-1 Alpha-2 code

`````javascript
var countries = require("i18n-iso-countries");
console.log(countries.getNames("en")); // { AF: 'Afghanistan', AL: 'Albania', [...], ZM: 'Zambia', ZW: 'Zimbabwe' }

`````

## supported languages

* `en`: english
* `de`: german

## convert Alpha-3 to Alpha-2 code

`````javascript
var countries = require("i18n-iso-countries");
console.log("USA (Alpha-3) => " + countries.alpha3ToAlpha2("USA") + " (Alpha-2)"); // United States

`````

## convert Numeric to Alpha-2 code

`````javascript
var countries = require("i18n-iso-countries");
console.log("840 (Numeric) => " + countries.numericToAlpha2("840") + " (Alpha-2)"); // United States
`````
