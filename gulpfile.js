'use strict';

// Modules
var _ = require('lodash'),
    gulp = require('gulp'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

var reload = browserSync.reload,
    bundler;

bundler = watchify(browserify('./src/js/main.js', _.extend({ debug: true }, watchify.args)));
bundler.transform(babelify);

function bundle() {
    return bundler
        .bundle()
        .pipe(source('bundle.dist.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(reload({ stream: true }));
}

gulp.task('js', bundle);
bundler.on('update', bundle);

gulp.task('default', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.start('js');
});
