'use strict'

import test from 'tape'
import pkgMain from '../'

test((t) => {
  t.equal(pkgMain(__dirname), pkgMain)
  t.end()
})
