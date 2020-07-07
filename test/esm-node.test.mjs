import assert from "assert";
import library from "../dist/entry-node.mjs";

assert.equal(library.getName("GB", "en"), "United Kingdom");
