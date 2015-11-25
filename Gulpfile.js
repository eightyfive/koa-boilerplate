'use strict';


const gulp = require('gulp');

/**
 * SECTIONS
 *   - LINT
 *   - NODEMON
 *   - WATCH
 *   - ALIASES
 */

// -------------------------------------------------------------------------------------------------------
// ** LINT **
// -------------------------------------------------------------------------------------------------------
const eslint = require('gulp-eslint');
function gulpLint(src) {
  return gulp.src(['!Gulpfile.js','shared/**/*.js'].concat(src))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
gulp.task('lint-frontend', function() {
    return gulpLint([
      'frontend/**/*.js',
      '!frontend/public/**/*.js',
    ]);
});
gulp.task('lint-backend', function() {
    return gulpLint([
      'backend/**/*.js',
      '!backend/public/**/*.js',
    ]);
});

// -------------------------------------------------------------------------------------------------------
// ** NODEMON **
// -------------------------------------------------------------------------------------------------------
const nodemon = require('gulp-nodemon');
const path = require('path');

function gulpNodemon(script) {
  return nodemon({
    'script': script,
    'env': {
      'NODE_ENV': 'development',
      'BLUEBIRD_WARNINGS': 0
      // 'DEBUG': '*',
    },
    'ignore': [
      'assets/',
      'public/',
    ],
    'ext': 'js json swig'
  });
}
gulp.task('nodemon-frontend', function() {
  return gulpNodemon(path.resolve(__dirname, 'frontend/server.js'));
});
gulp.task('nodemon-backend', function() {
  return gulpNodemon(path.resolve(__dirname, 'backend/server.js'));
});

// -------------------------------------------------------------------------------------------------------
// ** WATCH **
// -------------------------------------------------------------------------------------------------------
const livereload = require('gulp-livereload');

function gulpWatch(app, liveport) {
  livereload.listen({
    port: liveport
  });
  gulp.watch([app + '/**/*.js', 'shared/**/*.js'], ['lint-' + app]);
}
gulp.task('watch-frontend', function() {
  return gulpWatch('frontend', 35729);
});
gulp.task('watch-backend', function() {
  return gulpWatch('frontend', 35730);
});

// -------------------------------------------------------------------------------------------------------
// ** ALIASES **
// -------------------------------------------------------------------------------------------------------
gulp.task('default', ['front']);
gulp.task('front', ['watch-frontend', 'nodemon-frontend']);
gulp.task('back', ['watch-backend', 'nodemon-backend']);

