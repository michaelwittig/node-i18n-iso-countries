import { alpha2ToAlpha3, alpha2ToNumeric, alpha3ToAlpha2, alpha3ToNumeric, toAlpha2, toAlpha3 } from "..";

/* toAlpha2 tests START */
const nonexistentStringAlpha2 = toAlpha2("bad code");
// it will resolve to `never` and fail if `undefined` isn't a valid type
const testNonexistentStringAlpha2: Exclude<typeof nonexistentStringAlpha2, string> = undefined;
const nonexistentNumberAlpha2 = toAlpha2(123456);
const testNonexistentNumberAlpha2: Exclude<typeof nonexistentStringAlpha2, string> = undefined;

const usaAlpha2 = toAlpha2("USA")
// you couldn't make this type if usaAlpha2 was not a string
const testUsaAlpha2: (typeof usaAlpha2)["toLowerCase"] = usaAlpha2.toLowerCase;
const usaAlpha2NumberNumeric = toAlpha2(840)
const testUsaAlpha2NumberNumeric: (typeof usaAlpha2NumberNumeric)["toLowerCase"] = usaAlpha2NumberNumeric.toLowerCase
const usaAlpha2StringNumeric = toAlpha2("840")
const testUsaAlpha2StringNumeric: (typeof usaAlpha2StringNumeric)["toLowerCase"] = usaAlpha2StringNumeric.toLowerCase

// mixed case
const usaAlpha2MixedCase = toAlpha2("UsA")
const testUsaAlpha2MixedCase: (typeof usaAlpha2)["toLowerCase"] = usaAlpha2.toLowerCase;
const usaAlpha2NumberNumericMixedCase = toAlpha2(840)
const testUsaAlpha2NumberNumericMixedCase: (typeof usaAlpha2NumberNumericMixedCase)["toLowerCase"] = usaAlpha2NumberNumericMixedCase.toLowerCase
const usaAlpha2StringNumericMixedCase = toAlpha2("840")
const testUsaAlpha2StringNumericMixedCase: (typeof usaAlpha2StringNumericMixedCase)["toLowerCase"] = usaAlpha2StringNumericMixedCase.toLowerCase

// lower case
const usaAlpha2LowerCase = toAlpha2("usa")
const testUsaAlpha2LowerCase: (typeof usaAlpha2)["toLowerCase"] = usaAlpha2.toLowerCase;
const usaAlpha2NumberNumericLowerCase = toAlpha2(840)
const testUsaAlpha2NumberNumericLowerCase: (typeof usaAlpha2NumberNumericLowerCase)["toLowerCase"] = usaAlpha2NumberNumericLowerCase.toLowerCase
const usaAlpha2StringNumericLowerCase = toAlpha2("840")
const testUsaAlpha2StringNumericLowerCase: (typeof usaAlpha2StringNumericLowerCase)["toLowerCase"] = usaAlpha2StringNumericLowerCase.toLowerCase
/* toAlpha2 tests END */

/* toAlpha3 tests START */
const nonexistentStringAlpha3 = toAlpha3("bad code");
const testNonexistentStringAlpha3: Exclude<typeof nonexistentStringAlpha3, string> = undefined;
const nonexistentNumberAlpha3 = toAlpha3(123456);
const testNonexistentNumberAlpha3: Exclude<typeof nonexistentStringAlpha3, string> = undefined;

const usaAlpha3 = toAlpha3("US")
const testUsaAlpha3: (typeof usaAlpha3)["toLowerCase"] = usaAlpha3.toLowerCase;
const usaAlpha3NumberNumeric = toAlpha3(840)
const testUsaAlpha3NumberNumeric: (typeof usaAlpha3NumberNumeric)["toLowerCase"] = usaAlpha3NumberNumeric.toLowerCase
const usaAlpha3StringNumeric = toAlpha3("840")
const testUsaAlpha3StringNumeric: (typeof usaAlpha3StringNumeric)["toLowerCase"] = usaAlpha3StringNumeric.toLowerCase

// mixed case
const usaAlpha3MixedCase = toAlpha3("UsA")
const testUsaAlpha3MixedCase: (typeof usaAlpha3)["toLowerCase"] = usaAlpha3.toLowerCase;
const usaAlpha3NumberNumericMixedCase = toAlpha3(840)
const testUsaAlpha3NumberNumericMixedCase: (typeof usaAlpha3NumberNumericMixedCase)["toLowerCase"] = usaAlpha3NumberNumericMixedCase.toLowerCase
const usaAlpha3StringNumericMixedCase = toAlpha3("840")
const testUsaAlpha3StringNumericMixedCase: (typeof usaAlpha3StringNumericMixedCase)["toLowerCase"] = usaAlpha3StringNumericMixedCase.toLowerCase

// lower case
const usaAlpha3LowerCase = toAlpha3("usa")
const testUsaAlpha3LowerCase: (typeof usaAlpha3)["toLowerCase"] = usaAlpha3.toLowerCase;
const usaAlpha3NumberNumericLowerCase = toAlpha3(840)
const testUsaAlpha3NumberNumericLowerCase: (typeof usaAlpha3NumberNumericLowerCase)["toLowerCase"] = usaAlpha3NumberNumericLowerCase.toLowerCase
const usaAlpha3StringNumericLowerCase = toAlpha3("840")
const testUsaAlpha3StringNumericLowerCase: (typeof usaAlpha3StringNumericLowerCase)["toLowerCase"] = usaAlpha3StringNumericLowerCase.toLowerCase
/* toAlpha3 tests END */

/* alpha2ToAlpha3 tests START */
const nonexistentStringAlpha2ToAlpha3 = alpha2ToAlpha3("USA");
const testNonexistentStringAlpha2ToAlpha3: Exclude<typeof nonexistentStringAlpha2ToAlpha3, string> = undefined;

const usaAlpha2ToAlpha3 = alpha2ToAlpha3("US")
const testUsaAlpha2ToAlpha3: (typeof usaAlpha2ToAlpha3)["toLowerCase"] = usaAlpha3.toLowerCase;
// mixed case
const usaAlpha2ToAlpha3MixedCase = alpha2ToAlpha3("Us")
const testUsaAlpha2ToAlpha3MixedCase: (typeof usaAlpha2ToAlpha3MixedCase)["toLowerCase"] = usaAlpha2ToAlpha3MixedCase.toLowerCase;

// lower case
const usaAlpha2ToAlpha3LowerCase = alpha2ToAlpha3("us")
const testUsaAlpha2ToAlpha3LowerCase: (typeof usaAlpha2ToAlpha3MixedCase)["toLowerCase"] = usaAlpha2ToAlpha3MixedCase.toLowerCase;
/* alpha2ToAlpha3 tests END */

/* alpha3ToAlpha2 tests START */
const nonexistentStringAlpha3ToAlpha2 = alpha3ToAlpha2("US");
const testNonexistentStringAlpha3ToAlpha2: Exclude<typeof nonexistentStringAlpha3ToAlpha2, string> = undefined;

const usaAlpha3ToAlpha2 = alpha3ToAlpha2("USA")
const testUsaAlpha3ToAlpha2: (typeof usaAlpha3ToAlpha2)["toLowerCase"] = usaAlpha3.toLowerCase;

// mixed case
const usaAlpha3ToAlpha2MixedCase = alpha3ToAlpha2("UsA")
const testUsaAlpha3ToAlpha2MixedCase: (typeof usaAlpha3ToAlpha2MixedCase)["toLowerCase"] = usaAlpha3ToAlpha2MixedCase.toLowerCase;

// lower case
const usaAlpha3ToAlpha2LowerCase = alpha3ToAlpha2("usa")
const testUsaAlpha3ToAlpha2LowerCase: (typeof usaAlpha3ToAlpha2MixedCase)["toLowerCase"] = usaAlpha3ToAlpha2MixedCase.toLowerCase;
/* alpha3ToAlpha2 tests END */


/* alpha2ToNumeric tests START */
const nonexistentStringAlpha2ToNumeric = alpha2ToNumeric("USA");
const testNonexistentStringAlpha2ToNumeric: Exclude<typeof nonexistentStringAlpha2ToNumeric, string> = undefined;

const usaAlpha2ToNumeric = alpha2ToNumeric("US")
const testUsaAlpha2ToNumeric: (typeof usaAlpha2ToNumeric)["toLowerCase"] = usaAlpha2.toLowerCase;

// mixed case
const usaAlpha2ToNumericMixedCase = alpha2ToNumeric("Us")
const testUsaAlpha2ToNumericMixedCase: (typeof usaAlpha2ToNumericMixedCase)["toLowerCase"] = usaAlpha2ToNumericMixedCase.toLowerCase;

// lower case
const usaAlpha2ToNumericLowerCase = alpha2ToNumeric("us")
const testUsaAlpha2ToNumericLowerCase: (typeof usaAlpha2ToNumericMixedCase)["toLowerCase"] = usaAlpha2ToNumericMixedCase.toLowerCase;
/* alpha2ToNumeric tests END */


/* alpha3ToNumeric tests START */
const nonexistentStringAlpha3ToNumeric = alpha3ToNumeric("US");
const testNonexistentStringAlpha3ToNumeric: Exclude<typeof nonexistentStringAlpha3ToNumeric, string> = undefined;

const usaAlpha3ToNumeric = alpha3ToNumeric("USA")
const testUsaAlpha3ToNumeric: (typeof usaAlpha3ToNumeric)["toLowerCase"] = usaAlpha3.toLowerCase;

// mixed case
const usaAlpha3ToNumericMixedCase = alpha3ToNumeric("UsA")
const testUsaAlpha3ToNumericMixedCase: (typeof usaAlpha3ToNumericMixedCase)["toLowerCase"] = usaAlpha3ToNumericMixedCase.toLowerCase;

// lower case
const usaAlpha3ToNumericLowerCase = alpha3ToNumeric("usa")
const testUsaAlpha3ToNumericLowerCase: (typeof usaAlpha3ToNumericMixedCase)["toLowerCase"] = usaAlpha3ToNumericMixedCase.toLowerCase;
/* alpha3ToNumeric tests END */
