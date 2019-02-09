'use strict';
let $ = {
    gulp: require('gulp'),
    bs: require('browser-sync').create(),
    plugins: require('gulp-load-plugins')(),
    del: require('del'),
    uglify: require('gulp-uglify'),
    pug: require('gulp-pug'),
    sass: require('gulp-sass'),
    newer: require('gulp-newer'),
    sourcemaps: require('gulp-sourcemaps'),
    autoprefixer: require('gulp-autoprefixer'),
    concat: require('gulp-concat'),
    minifyCSS: require('gulp-minify-css')
}, path = {
    build: {
        html: 'build/',
        js: 'build/assets/js/',
        css: 'build/assets/css/',
        img: 'build/assets/img/',
        fonts: 'build/assets/fonts/'
    },
    src: {
        pug: 'source/pug/**/index.pug',
        js: 'source/js/**/*.js',
        style: 'source/style/**/*.scss',
        img: 'source/img/**/*.*',
        fonts: 'source/fonts/**/*.*'
    },
    watch: {
        pug: 'source/**/*.pug',
        js: 'source/js/**/*.js',
        style: 'source/style/**/*.scss',
        img: 'source/img/**/*.*',
        fonts: 'source/fonts/**/*.*'
    },
    clean: './build'
};

function getTask(task) {
    return require('./gulp/tasks/' + task)($, path);
}

$.gulp.task('js', getTask('js'));
$.gulp.task('style', getTask('style'));
$.gulp.task('pug', getTask('pug'));
$.gulp.task('clean', getTask('clean'));
$.gulp.task('fonts', getTask('fonts'));
$.gulp.task('watch', getTask('watch'));
$.gulp.task('serve', getTask('serve'));

$.gulp.task('default', $.gulp.series('clean', $.gulp.parallel('pug', 'style', 'js', 'fonts'), $.gulp.parallel('watch','serve')));