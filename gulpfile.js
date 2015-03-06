process.on('uncaughtException', console.log)

var chalk            = require('chalk'),
    concat           = require('gulp-concat'),
    fs               = require('fs'),
    gulp             = require('gulp'),
    gutil            = require('gulp-util'),
    livereload       = require('gulp-livereload'),
    mkdirp           = require('mkdirp'),
    mocha            = require('gulp-mocha'),
    path             = require('path'),
    sequence         = require('run-sequence'),
    size             = require('gulp-size'),
    to5              = require('gulp-babel'),
    watching         = require('paradigm-minimist-watching')

require('paradigm-gulp-clean')({
  gulp: gulp
})

require('paradigm-gulp-copy-assets')({
  gulp: gulp
})

require('paradigm-gulp-watch-handlebars')({
  gulp: gulp,
  livereload: livereload
})

gulp.task('build-browser', ['build-browser-flexstrap', 'build-browser-jquery'])

gulp.task('build-browser-flexstrap', function() {

  gulp.src([
    './bower_components/flexstrap/src/index.js',
    './bower_components/flexstrap/src/components/base/component.js',
    './bower_components/flexstrap/src/components/navigation/index.js'
  ])
  .pipe(to5())
  .pipe(concat('flexstrap.js'))
  .pipe(gulp.dest('./public/js'))

})

gulp.task('build-browser-jquery', function() {

  gulp.src([
    './bower_components/jquery/dist/jquery.min.js'
  ])
  .pipe(gulp.dest('./public/js/'))

})

gulp.task('clean', function(done) {

  /*
  Note, the gulp-clean task is janky
  */
  //src('./public/**/*', {read: false}).pipe(clean())

  sh.run('rm -rf public')

  done()

})

gulp.task('copy', ['copy-app-assets'])

gulp.task('copy-app-assets', function() {

  /*return src([
    //'./bower_components/flexstrap/src/icons/svg/fontello.svg'
  ])
  .pipe(dest('./public/icons'))*/

  gulp.src([
    './assets/**/*'
  ])
  .pipe(gulp.dest('./public/'))

})

/*
gulp.task('generate-app-icons', function(done) {

  mkdirp.sync(path.join(__dirname, '/public/icons'))

  var icons = fs.readFileSync(path.join(__dirname, './assets/icons/fontello.svg'), 'utf8')

  icons = icons.split('svg11.dtd">')
  icons = icons[1]
  icons = icons.split('<svg')

  var output = '<svg class="hidden"' + icons[1]

  fs.writeFileSync(path.join(__dirname, './public/icons/fontello.svg'), output, 'utf8')

  done()

})
*/

require('paradigm-gulp-stylus')({
  dest: './public/css/app.css',
  gulp: gulp,
  imports: [
    'nib',
    path.join(__dirname, './bower_components/flexstrap/src/grid/_definitions.styl'),
    path.join(__dirname, './styles/base/_definitions.styl')
  ],
  paths: [
    __dirname + '/bower_components/flexstrap/src/components',
    __dirname + '/bower_components/flexstrap/src'
  ],
  src: [
    './bower_components/normalize.css/normalize.css',
    './bower_components/flexstrap/src/icons/animation.css',
    './assets/icons/fontello.css',
    './bower_components/flexstrap/src/index.styl',
    './styles/base/fonts/montserrat/montserrat.css',
    './styles/base/fonts/opensans/regular.css', // Not using the other families atm
    './styles/base/fonts/**.styl',
    './styles/base/grid.styl',
    './styles/base/logos.styl',
    './styles/partials/**/base.styl',
    './styles/partials/**/xs.styl',
    './styles/partials/**/sm.styl',
    './styles/partials/**/md.styl',
    './styles/partials/**/lg.styl',
    './styles/partials/**/xl.styl',
    './styles/base/footer.styl',
    './styles/base/site.styl',
    './styles/views/**/base.styl',
    './styles/views/**/xs.styl',
    './styles/views/**/sm.styl',
    './styles/views/**/md.styl',
    './styles/views/**/lg.styl',
    './styles/views/**/xl.styl',
    './styles/views/about.styl',
    './styles/views/contact.styl'
  ]
})

require('paradigm-gulp-watch')({
  gulp: gulp,
  livereload: livereload
})

gulp.task('build', function(done) {

  sequence(['copy', 'build-browser', 'styles'], done)

})

gulp.task('styles', ['stylus'])
gulp.task('w', ['watch'])
