var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var angularFilesort = require('gulp-angular-filesort');
var karma = require('karma').server;
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var del = require('del');
var filesize = require('gulp-filesize');

// task to clean up destination directory to prepare a new fresh build
gulp.task('clean', function(cb) {
    del(['dist/**'], cb);
});

// prepare dist: concatenate and minify scripts
gulp.task('scripts', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(angularFilesort())
        .pipe(concat('angular-disable-all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(filesize())
        .pipe(rename({ suffix: '.min' }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(filesize());
});

// run tests with karma
gulp.task('test', function (done) {
    karma.start({
        configFile:  __dirname + '/test/karma.conf.js',
        singleRun: true
    }, done);
});

// run jshint checks
gulp.task('lint', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

});

// default Task
gulp.task('default', ['clean'], function() {
    gulp.start('scripts');
});