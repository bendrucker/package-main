'use strict'

import findMain from 'find-main'
import assert from 'assert'

export default function requireMain (cwd) {
  const main = findMain(cwd)
  assert(main, 'no "main" entry defined')
  return require(main)
}
