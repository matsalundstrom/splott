/*global require*/
var gulp = require('gulp');
var eslint = require('gulp-eslint');


gulp.task('eslint', function () {
  'use strict';

  return gulp
    .src([
      './src/**/*js',
      './*.js'
		])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', function () {
  'use strict';
  // place code for your default task here
});
