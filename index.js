'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var compiler = require('css-combo');

module.exports = function (options) {
	//if (!options.foo) {
	//	throw new gutil.PluginError('gulp-css-combo', '`foo` required');
	//}

	return through.obj(function (file, enc, cb) {
        var self = this;

		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-css-combo', 'Streaming not supported'));
			return cb();
		}

        compiler.analyze({
            src: file.path
        }, function(err, report){
            if(err){
                self.emit('error', new gutil.PluginError('gulp-css-combo', err));
            }
            file.contents = new Buffer(report[0].content);
            self.push(file);
            cb();
        });

	});
};
