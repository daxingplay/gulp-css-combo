# [gulp](http://gulpjs.com)-css-combo [![Build Status](https://travis-ci.org/daxingplay/gulp-css-combo.svg?branch=master)](https://travis-ci.org/daxingplay/gulp-css-combo)

> Lorem ipsum


## Install

```bash
$ npm install --save-dev gulp-css-combo
```


## Usage

```js
var gulp = require('gulp');
var cssCombo = require('gulp-css-combo');

gulp.task('default', function () {
	return gulp.src('src/app.ext')
		.pipe(cssCombo())
		.pipe(gulp.dest('dist'));
});
```


## API

### cssCombo(options)

#### options


##### debug

Type: `Boolean`  
Default: `false`

enable debug


## License

MIT © [daxingplay](https://github.com/daxingplay)
