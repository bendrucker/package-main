# package-main [![Build Status](https://travis-ci.org/bendrucker/package-main.svg?branch=master)](https://travis-ci.org/bendrucker/package-main) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/package-main.svg)](https://greenkeeper.io/)

> require your "main" module


## Install

```
$ npm install --save package-main
```


## Usage

```js
require('package-main')(__dirname)
//=> the main parent
```

## API

#### `packageMain([cwd])` -> `Any`

##### cwd

*Required*  
Type: `string`

The current working directory from which to traverse upwards for the `main` script

## License

MIT © [Ben Drucker](http://bendrucker.me)
