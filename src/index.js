
let randomVal = require('unique-random-array');
let allNames = require('./mytidbit-names.json');


const mainExport = {
   all: allNames,
   random: randomVal(allNames)
}

export default mainExport;
module.exports = mainExport;