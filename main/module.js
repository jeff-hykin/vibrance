const es6Chalk = require("../chalk-deno/source/index.js").default
const vibranceSetup = require("./main.js")
// use es chalk
module.exports = vibranceSetup(es6Chalk)