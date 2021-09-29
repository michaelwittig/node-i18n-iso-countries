"use strict";
exports.__esModule = true;
var __1 = require("..");
/* toAlpha2 tests START */
var nonexistentStringAlpha2 = (0, __1.toAlpha2)("bad code");
// it will resolve to `never` and fail if `undefined` isn't a valid type
var testNonexistentStringAlpha2 = undefined;
var nonexistentNumberAlpha2 = (0, __1.toAlpha2)(123456);
var testNonexistentNumberAlpha2 = undefined;
var usaAlpha2 = (0, __1.toAlpha2)("USA");
// you couldn't make this type if usaAlpha2 was not a string
var testUsaAlpha2 = usaAlpha2.toLowerCase;
var usaAlpha2NumberNumeric = (0, __1.toAlpha2)(840);
var testUsaAlpha2NumberNumeric = usaAlpha2NumberNumeric.toLowerCase;
var usaAlpha2StringNumeric = (0, __1.toAlpha2)("840");
var testUsaAlpha2StringNumeric = usaAlpha2StringNumeric.toLowerCase;
// mixed case
var usaAlpha2MixedCase = (0, __1.toAlpha2)("UsA");
var testUsaAlpha2MixedCase = usaAlpha2.toLowerCase;
var usaAlpha2NumberNumericMixedCase = (0, __1.toAlpha2)(840);
var testUsaAlpha2NumberNumericMixedCase = usaAlpha2NumberNumericMixedCase.toLowerCase;
var usaAlpha2StringNumericMixedCase = (0, __1.toAlpha2)("840");
var testUsaAlpha2StringNumericMixedCase = usaAlpha2StringNumericMixedCase.toLowerCase;
// lower case
var usaAlpha2LowerCase = (0, __1.toAlpha2)("usa");
var testUsaAlpha2LowerCase = usaAlpha2.toLowerCase;
var usaAlpha2NumberNumericLowerCase = (0, __1.toAlpha2)(840);
var testUsaAlpha2NumberNumericLowerCase = usaAlpha2NumberNumericLowerCase.toLowerCase;
var usaAlpha2StringNumericLowerCase = (0, __1.toAlpha2)("840");
var testUsaAlpha2StringNumericLowerCase = usaAlpha2StringNumericLowerCase.toLowerCase;
/* toAlpha2 tests END */
/* toAlpha3 tests START */
var nonexistentStringAlpha3 = (0, __1.toAlpha3)("bad code");
var testNonexistentStringAlpha3 = undefined;
var nonexistentNumberAlpha3 = (0, __1.toAlpha3)(123456);
var testNonexistentNumberAlpha3 = undefined;
var usaAlpha3 = (0, __1.toAlpha3)("US");
var testUsaAlpha3 = usaAlpha3.toLowerCase;
var usaAlpha3NumberNumeric = (0, __1.toAlpha3)(840);
var testUsaAlpha3NumberNumeric = usaAlpha3NumberNumeric.toLowerCase;
var usaAlpha3StringNumeric = (0, __1.toAlpha3)("840");
var testUsaAlpha3StringNumeric = usaAlpha3StringNumeric.toLowerCase;
// mixed case
var usaAlpha3MixedCase = (0, __1.toAlpha3)("UsA");
var testUsaAlpha3MixedCase = usaAlpha3.toLowerCase;
var usaAlpha3NumberNumericMixedCase = (0, __1.toAlpha3)(840);
var testUsaAlpha3NumberNumericMixedCase = usaAlpha3NumberNumericMixedCase.toLowerCase;
var usaAlpha3StringNumericMixedCase = (0, __1.toAlpha3)("840");
var testUsaAlpha3StringNumericMixedCase = usaAlpha3StringNumericMixedCase.toLowerCase;
// lower case
var usaAlpha3LowerCase = (0, __1.toAlpha3)("usa");
var testUsaAlpha3LowerCase = usaAlpha3.toLowerCase;
var usaAlpha3NumberNumericLowerCase = (0, __1.toAlpha3)(840);
var testUsaAlpha3NumberNumericLowerCase = usaAlpha3NumberNumericLowerCase.toLowerCase;
var usaAlpha3StringNumericLowerCase = (0, __1.toAlpha3)("840");
var testUsaAlpha3StringNumericLowerCase = usaAlpha3StringNumericLowerCase.toLowerCase;
/* toAlpha3 tests END */
/* alpha2ToAlpha3 tests START */
var nonexistentStringAlpha2ToAlpha3 = (0, __1.alpha2ToAlpha3)("USA");
var testNonexistentStringAlpha2ToAlpha3 = undefined;
var usaAlpha2ToAlpha3 = (0, __1.alpha2ToAlpha3)("US");
var testUsaAlpha2ToAlpha3 = usaAlpha3.toLowerCase;
// mixed case
var usaAlpha2ToAlpha3MixedCase = (0, __1.alpha2ToAlpha3)("Us");
var testUsaAlpha2ToAlpha3MixedCase = usaAlpha2ToAlpha3MixedCase.toLowerCase;
// lower case
var usaAlpha2ToAlpha3LowerCase = (0, __1.alpha2ToAlpha3)("us");
var testUsaAlpha2ToAlpha3LowerCase = usaAlpha2ToAlpha3MixedCase.toLowerCase;
/* alpha2ToAlpha3 tests END */
/* alpha3ToAlpha2 tests START */
var nonexistentStringAlpha3ToAlpha2 = (0, __1.alpha3ToAlpha2)("US");
var testNonexistentStringAlpha3ToAlpha2 = undefined;
var usaAlpha3ToAlpha2 = (0, __1.alpha3ToAlpha2)("USA");
var testUsaAlpha3ToAlpha2 = usaAlpha3.toLowerCase;
// mixed case
var usaAlpha3ToAlpha2MixedCase = (0, __1.alpha3ToAlpha2)("UsA");
var testUsaAlpha3ToAlpha2MixedCase = usaAlpha3ToAlpha2MixedCase.toLowerCase;
// lower case
var usaAlpha3ToAlpha2LowerCase = (0, __1.alpha3ToAlpha2)("usa");
var testUsaAlpha3ToAlpha2LowerCase = usaAlpha3ToAlpha2MixedCase.toLowerCase;
/* alpha3ToAlpha2 tests END */
/* alpha2ToNumeric tests START */
var nonexistentStringAlpha2ToNumeric = (0, __1.alpha2ToNumeric)("USA");
var testNonexistentStringAlpha2ToNumeric = undefined;
var usaAlpha2ToNumeric = (0, __1.alpha2ToNumeric)("US");
var testUsaAlpha2ToNumeric = usaAlpha2.toLowerCase;
// mixed case
var usaAlpha2ToNumericMixedCase = (0, __1.alpha2ToNumeric)("Us");
var testUsaAlpha2ToNumericMixedCase = usaAlpha2ToNumericMixedCase.toLowerCase;
// lower case
var usaAlpha2ToNumericLowerCase = (0, __1.alpha2ToNumeric)("us");
var testUsaAlpha2ToNumericLowerCase = usaAlpha2ToNumericMixedCase.toLowerCase;
/* alpha2ToNumeric tests END */
/* alpha3ToNumeric tests START */
var nonexistentStringAlpha3ToNumeric = (0, __1.alpha3ToNumeric)("US");
var testNonexistentStringAlpha3ToNumeric = undefined;
var usaAlpha3ToNumeric = (0, __1.alpha3ToNumeric)("USA");
var testUsaAlpha3ToNumeric = usaAlpha3.toLowerCase;
// mixed case
var usaAlpha3ToNumericMixedCase = (0, __1.alpha3ToNumeric)("UsA");
var testUsaAlpha3ToNumericMixedCase = usaAlpha3ToNumericMixedCase.toLowerCase;
// lower case
var usaAlpha3ToNumericLowerCase = (0, __1.alpha3ToNumeric)("usa");
var testUsaAlpha3ToNumericLowerCase = usaAlpha3ToNumericMixedCase.toLowerCase;
/* alpha3ToNumeric tests END */
