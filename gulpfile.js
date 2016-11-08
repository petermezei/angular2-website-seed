'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify');

// Default
gulp.task('default', ['watch']);

gulp.task('sass', function () {
  return gulp.src('src/assets/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .on('error', swallowError)
    .pipe(minifycss())
    .pipe(gulp.dest('src/assets/css/.'))
});

gulp.task('watch', function () {
  gulp.watch('src/assets/**/*.scss', ['sass']);
});

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}