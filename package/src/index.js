'use strict';

let randomVal = require('unique-random-array');
let allNames = require('./random-names.json');

module.exports = {
   all: allNames,
   random: randomVal(allNames)
}