'use strict'

var test = require('tape')
var pkgMain = require('./')

test(function (t) {
  t.equal(pkgMain(__dirname), pkgMain)
  t.equal(pkgMain(), pkgMain)
  t.end()
})
