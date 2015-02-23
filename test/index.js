/**
 * @author: daxingplay <daxingplay@gmail.com>
 * @date: 2/23/15
 */

"use strict";

var fs = require('fs');
var es = require('event-stream');
var should = require('should');
var File = require('vinyl');
var CssCombo = require('../index');
require('mocha');

describe('gulp-css-combo', function(){
    describe('css combo', function(){
        it('should combine imported files', function(done){
            var file = new File({
                path: 'test/fixtures/index.css',
                cwd: 'test/',
                base: 'test/fixtures',
                contents: fs.readFileSync('test/fixtures/index.css')
            });

            var stream = CssCombo();
            stream.on('data', function(newFile) {
                should.exist(newFile);
                should.exist(newFile.contents);
                newFile.contents.toString().should.equal(fs.readFileSync('test/expected/index.css', 'utf8'));
                done();
            });

            stream.write(file);
            stream.end();
        });
    });
});