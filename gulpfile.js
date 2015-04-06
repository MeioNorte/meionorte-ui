var gulp       = require('gulp'),
    watch      = require('gulp-watch'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    //uglify     = require('gulp-uglify'),
    gutil      = require('gulp-util'),
    livereload = require('gulp-livereload'),
    connect    = require('gulp-connect');

var paths = {
  html:    ['app/*.html'],
  scripts: ['app/js/vendor/**/*.js', 'app/js/core.js', 'app/js/components/**/*.js'],
  styles:  ['app/sass/**/*.scss']
};

gulp.task('connect', function() {
  console.log("Conectando Server");
   connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('app/*.html')
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
    .pipe(sass({outputStyle: 'expanded', errLogToConsole: true}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.html, ['html']);
	gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', [ 'watch', 'connect', 'html', 'scripts', 'styles' ]);