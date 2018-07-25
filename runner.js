#!/bin/env node

require("babel-polyfill");
require('babel-register')({
    presets: [ 'env' ]
})

// Import the rest of our application.
module.exports = require(process.argv[2]);
