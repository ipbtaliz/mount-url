#!/usr/bin/env node
var mounturl = require('./index.js')
var argv = require('minimist')(process.argv.slice(2));

if (argv._.length == 0) {
  console.error('Usage: mount-url <url> [mount-point] [options]')
  process.exit(1)
}

mounturl(argv, function (err, cleanup) {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }
  process.on('SIGINT', function () {
    cleanup(function () {
      process.exit(1)
    })
  })
})
