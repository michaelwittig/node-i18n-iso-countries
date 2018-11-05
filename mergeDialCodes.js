// update international direct dial (IDD) codes in column 4 of country records in ./codes.json
"use strict";

const request = require('request'),
  JSONStream = require('JSONStream'),
  es = require('event-stream');
const fs = require('fs');

const codesFile = './codes.json';
const codes = JSON.parse(fs.readFileSync(codesFile).toString());

request('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  .pipe(JSONStream.parse([true]))
  .pipe(es.map( (row, next) => {
    const { cca2, callingCode } = row;
    const i = codes.findIndex( row => row[0] === cca2 );
    if (i !== undefined) {
      codes[i][4] = callingCode.map( codeString => "+" + codeString );
    }

    next(null, row) ;// pass it along
  }))
  .pipe(es.wait( () => {
    const stream = JSONStream.stringify('[\n  ', ',\n  ', '\n]\n');
    stream.pipe(fs.createWriteStream(codesFile));
    codes.forEach( row => stream.write(row) );
    stream.end();
  }));
