import assert from "assert";
import library from "../dist/entry-node.mjs";

assert.strictEqual(library.getName("GB", "en"), "United Kingdom");
