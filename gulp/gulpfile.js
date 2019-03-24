(function() {
  'use strict';

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');
  var cssnano = require('cssnano');

  function compile() {
    return (
      gulp
        .src('../web/scss/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest('../web/css'))
    );
  }

  function watch(){
    compile();
    gulp.watch('../web/scss/**/*.scss', compile);
  }

  // gulp.task('sass', function () {
  //   return gulp.src('../web/scss/**/*.scss')
  //     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  //     .pipe(gulp.dest('../web/css'));
  // });

  // gulp.task('sass:watch', function () {
  //   gulp.watch('../web/scss/**/*.scss', ['sass']);
  // });

  exports.watch = watch;
  exports.default = compile;

})();
