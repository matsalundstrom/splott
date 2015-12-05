/*global require*/
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

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

gulp.task('sass', function () {
	'use strict';

	return gulp
		.src('src/client/styles/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
		.pipe(gulp.dest('dist/'));
});

gulp.task('sass:watch', function () {
	'use strict';

  gulp.watch('src/client/styles/**/*.scss', ['sass']);
});

gulp.task('default', function () {
  'use strict';
  // place code for your default task here
});
