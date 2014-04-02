var fs = require("fs"),
    path = require("path");

/*
 * All codes map to ISO 3166-1 alpha-2
 */
var alpha3 = {},
    numeric = {},
    iso31662 = {};
fs.readFileSync(path.resolve(__dirname, "codes.csv"), {encoding: "utf8"}).replace(/\r/g, "").split("\n").forEach(function(line) {
	"use strict";
	var s = line.split(";");
	alpha3[s[1]] = s[0];
	numeric[parseInt(s[2], 10)] = s[0];
	iso31662[s[3]] = s[0];
});

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
exports.alpha3ToAlpha2 = function(code) {
	"use strict";
	return alpha3[code];
};

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
exports.numericToAlpha2 = function(code) {
	"use strict";
	return numeric[parseInt(code, 10)];
};

/*
 * @param code ISO 3166-2 code
 * @return Alpha-2 code or undefined
 */
exports.iso31662ToAlpha2 = function(code) {
	"use strict";
	return iso31662[code];
};

/*
 * @param code iso country code to resolve
 * @param lang language for country name
 * @return name or undefined
 */
exports.getName = function(code, lang) {
	"use strict";
	try {
		var l = require("./" + lang.toLowerCase());
		return l.i18n()[code.toUpperCase()];
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
	try {
		var l = require("./" + lang.toLowerCase());
		return l.i18n();
	} catch (err) {
		return {};
	}
};

