# require-main-module [![Build Status](https://travis-ci.org/bendrucker/require-main-module.svg?branch=master)](https://travis-ci.org/bendrucker/require-main-module)

> require your "main" module


## Install

```
$ npm install --save require-main-module
```


## Usage

```js
require('require-main-module')(__dirname);
//=> the main parent
```

## API

### `requireMainModule([cwd])`

#### `cwd`

*Required*  
Type: `string`

The current working directory from which to traverse upwards for the `main` script

## License

MIT © [Ben Drucker](http://bendrucker.me)
