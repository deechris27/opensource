
let randomVal = require('unique-random-array');
let allNames = require('./mytidbit-names.json');
let boyNames = require('./boy-names.json');
let girlNames = require('./girl-names.json');

const boyStartingWith = (ch) => {
   return boyNames.filter(name=> name.toLowerCase().startsWith(ch.toString()))
};

const girlStartingWith = (ch) => {
   return girlNames.filter(name=>name.toLowerCase().startsWith(ch.toString()))
};

const mainExport = {
   allNames,
   randomName: randomVal(allNames),
   randomBoyName: randomVal(boyNames),
   randomGirlName: randomVal(girlNames),
   boyStartingWith,
   girlStartingWith
};

export default mainExport;
module.exports = mainExport;