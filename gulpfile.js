var gulp = require('gulp'),
 source = require('vinyl-source-stream'),
 browserify = require('browserify');
// Load plugins
var $ = require('gulp-load-plugins')();

// Scripts
gulp.task('scripts', function () {
    return  browserify({
      entries: ['./app/js/main.jsx']
    })
    .bundle({debug:true})
    .pipe(source('app.js'))
    // .pipe($.jshint('.jshintrc'))
    // .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('app/js'))

    .pipe($.connect.reload());

});

// Connect
gulp.task('connect', $.connect.server({
    root: ['app'],
    port: 9002,
    livereload: true
}));

gulp.task('watch', ['scripts', 'connect'], function () {
    gulp.watch(['app/js/**/*.js','app/js/**/*.jsx'], ['scripts']);
});
