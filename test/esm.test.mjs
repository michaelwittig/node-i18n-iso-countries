import assert from "assert";
import library from "../dist/index.mjs";
import en from "../dist/langs/en.mjs";

library.registerLocale(en);

assert.strictEqual(library.getName("GB", "en"), "United Kingdom");
