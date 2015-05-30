'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = packageMain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _findMain = require('find-main');

var _findMain2 = _interopRequireDefault(_findMain);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

'use strict';

function packageMain(cwd) {
  var main = _findMain2['default'](cwd);
  _assert2['default'](main, 'no "main" entry defined');
  return require(main);
}

module.exports = exports['default'];