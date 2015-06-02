'use strict'

var findMain = require('find-main')
var assert = require('assert')

module.exports = function packageMain (cwd) {
  var main = findMain(cwd)
  assert(main, 'no "main" entry defined')
  return require(main)
}
