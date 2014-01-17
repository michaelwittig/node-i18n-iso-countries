[![Build Status](https://secure.travis-ci.org/cinovo/node-i18n-iso-countries.png)](http://travis-ci.org/cinovo/node-i18n-iso-countries)
[![NPM version](https://badge.fury.io/js/i18n-iso-countries.png)](http://badge.fury.io/js/i18n-iso-countries)

#i18n-iso-countries

i18n for ISO 3166-1 country codes

## usage

### get the name of a country by it's ISO 3166-1 country code

`````javascript

var countries = require("i18n-iso-countries");
console.log("US => " + countries.getName("US", "en")); // US => United States
console.log("US => " + countries.getName("US", "de")); // US => Vereinigte Staaten von Amerika

`````

### get the names of all countries by their ISO 3166-1 country code

`````javascript

var countries = require("i18n-iso-countries");
console.log(countries.getNames("en")); // { AF: 'Afghanistan', AL: 'Albania', [...], ZM: 'Zambia', ZW: 'Zimbabwe' }

`````

## supported languages

* `en`: english
* `de`: german
