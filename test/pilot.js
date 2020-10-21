/**
 * Using this file to get sample data
 * for testing and developing purpose.
 *
 * @example node pilot.js "vn Eng"
 *          Get samples['vn Eng']
 */
const iso = require("../");
const query = process.argv.slice(2);

const samples = {
  "vn-eng": iso.getName("vn", "en"),
  "all-vie": iso.getNames("vi"),
  "ru-eng-alias": iso.getName("ru", "en", "alias"),
  "all-gb-deu-alias": iso.getNames("de", "alias").GB
};

const validQuery = (query) =>
  Object.prototype.hasOwnProperty.call(samples, query)
    ? samples[query]
    : `The ⟨${query}⟩ sample not found.`;

const printSample = (name, sample) => console.log(`[${name}] » `, sample);

const printQuery = (query) => {
  for (const name of query) printSample(name, validQuery(name));
};

const printAll = () => {
  for (const name in samples) printSample(name, samples[name]);
};

if (query.length === 0) printAll();
else printQuery(query);
