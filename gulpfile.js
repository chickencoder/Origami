'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rnme = require('gulp-rename');
var mcss = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  gulp.src('dist/origami.css')
    .pipe(mcss({compatibility: 'ie8'}))
    .pipe(rnme({'suffix': '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function() {
  gulp.watch('src/*.scss', ['sass']);
});

gulp.task('css:watch', function() {
  gulp.watch('dist/origami.css', ['css']);
});

gulp.task('default', ['sass:watch', 'css:watch']);
