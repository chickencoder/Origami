'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var ugli = require('gulp-uglifycss');

gulp.task('sass', function() {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.default(['sass']);
