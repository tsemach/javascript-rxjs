#!/bin/env node

require("babel-polyfill");
require('babel-register')({
    presets: [ 'env' ]
})

// Import the rest of our application.
console.log(process.argv[2]);
module.exports = require(process.argv[2]);
