var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  connect = require('gulp-connect-multi')(),

  $ = require('gulp-load-plugins')();
//
// Scripts
gulp.task('scripts', function () {
    return  browserify({
      entries: ['./app/js/main.jsx']
    })

    .on('error', function(log) {
      console.log(log);
    })
    .bundle({debug:true})
    .on('error', function(log) {
      console.log(log);
    })
    .pipe(source('app.js'))
    // .pipe($.jshint('.jshintrc'))
    // .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('app/js'))

    .pipe(connect.reload())

    .on('error', $.util.beep);
});

gulp.task('basicExample',function(){
  return  browserify({
    entries: ['./app/js/basic.jsx']
  })

  .on('error', function(log) {
    console.log(log);
  })
  .bundle({debug:true})
  .on('error', function(log) {
    console.log(log);
  })
  .pipe(source('basic.js'))
  // .pipe($.jshint('.jshintrc'))
  // .pipe($.jshint.reporter('default'))
  .pipe(gulp.dest('app/js'))

  .pipe(connect.reload())

  .on('error', $.util.beep);
});
//styles
gulp.task('styles', function() {
  //for now just reload the server
  connect.reload();
});

gulp.task('test', function() {
  return gulp.src('*.js', {read: false})
  .pipe($.shell([
    'jest'
  ]));
});
// Connect
gulp.task('connect', connect.server({
    root: ['app'],
    port: 9003,
    livereload: true,
    open:{
    browser:  'Google Chrome' //'chrome'
  }
}));

gulp.task('watch', ['scripts', 'basicExample','connect'], function () {
    gulp.watch(['app/js/**/*.js','app/js/**/*.jsx','!app/js/app.js'], ['scripts','test']);
    gulp.watch(['app/css/**.css'], ['styles']);
});

gulp.task('default', ['watch']);
