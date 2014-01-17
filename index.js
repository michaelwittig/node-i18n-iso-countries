
/*
* iso: iso country code to resolve
* lang: language for country name
*/
exports.getName = function(iso, lang) {
	"use strict";
	try {
		var l = require("./" + lang.toLowerCase());
		return l.i18n()[iso.toUpperCase()];
	} catch (err) {
		return undefined;
	}	
};


/*
 * lang: language for country name
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

