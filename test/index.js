'use strict'

import test from 'tape'
import requireMain from '../'

test((t) => {
  t.equal(requireMain(__dirname), requireMain)
  t.end()
})
