var gulp                  = require('gulp'),
    watch                 = require('gulp-watch'),
    sass                  = require('gulp-sass'),
    concat                = require('gulp-concat'),
    //uglify              = require('gulp-uglify'),
    gutil                 = require('gulp-util'),
    livereload            = require('gulp-livereload'),
    connect               = require('gulp-connect');
    // historyApiFallback    = require('connect-history-api-fallback');

var paths = {
  html:    ['app/*.html'],
  scripts: ['app/js/vendor/**/*.js', 'app/js/app.js'],
  styles:  ['app/scss/**/*.scss']
};

gulp.task('connect', function() {

  connect.server({
    root: 'app',
    livereload: true
  });

});

gulp.task('html', function () {
  gulp.src('app/templates/**/*.html')
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  console.log("Javascripts");
  return gulp.src(paths.scripts)
    //.pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('app/js'))
    .pipe(connect.reload());
});

gulp.task('styles', function () {
  console.log("Stylesheets");
  return gulp.src(paths.styles)
    .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});


gulp.task('watch', function() {
  gulp.watch(paths.html, ['html']);
	gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);

  livereload.listen();
  
});

gulp.task('default', [ 'watch', 'connect', 'html', 'scripts', 'styles' ]);