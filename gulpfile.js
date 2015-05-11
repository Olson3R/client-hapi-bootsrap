var gulp = require('gulp')
var header = require('gulp-header')
var footer = require('gulp-footer')
var concat = require('gulp-concat')
var jshint = require('gulp-jshint')
var cached = require('gulp-cached')
var remember = require('gulp-remember')
var sass = require('gulp-sass')
var _ = require('underscore')

var cssGlob = 'assets/scss/**/*.scss'
var depsCssGlob = 'node_modules/angular/angular*.css'
var depsScriptsGlob = [
  'node_modules/angular/angular*.js*(.map)',
  'node_modules/angular-ui-router/release/angular-ui-router*.js',
  'node_modules/restangular/dist/restangular*.js',
  'node_modules/underscore/underscore*.js*(.map)'
]
var scriptsGlob = 'assets/ng/**/*.js'
var templatesGlob = 'assets/ng/**/*.tmpl.html'

gulp.task('css', function() {
  return gulp.src(cssGlob)
      .pipe(cached('css'))
      .pipe(remember('css'))
      .pipe(sass())
      .pipe(gulp.dest('public/css'))
})

gulp.task('dependencies', ['dependencies:css', 'dependencies:scripts'])

gulp.task('dependencies:css', function() {
  return gulp.src(depsCssGlob)
      .pipe(gulp.dest('public/css'))
})

gulp.task('dependencies:scripts', function() {
  return gulp.src(depsScriptsGlob)
      .pipe(gulp.dest('public/js'))
})

gulp.task('scripts', function() {
  return gulp.src(scriptsGlob)
      .pipe(cached('scripts'))        // only pass through changed files
      .pipe(jshint())                 // do special things to the changed files...
      .pipe(header('(function () {')) // e.g. jshinting ^^^
      .pipe(footer('})();'))          // and some kind of module wrapping
      .pipe(remember('scripts'))
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/js'))
})

gulp.task('setup', ['dependencies', 'css', 'scripts'])

gulp.task('templates', function() {
  return gulp.src(templatesGlob)
      .pipe(cached('templates'))
      .pipe(remember('templates'))
      .pipe(gulp.dest('public/ng'))
})

gulp.task('watch', function () {
  setupWatcher(cssGlob, ['css'], 'css')
  setupWatcher(scriptsGlob, ['scripts'], 'scripts')
  setupWatcher(templatesGlob, ['templates'], 'templates')
})

function setupWatcher(watches, task, namespace) {
  var watcher = gulp.watch(watches, task)
  watcher.on('change', function (event) {
    if (event.type === 'deleted') {
      delete _.result(cached.caches, namespace)[event.path]
      remember.forget(namespace, event.path)
    }
  })
}
