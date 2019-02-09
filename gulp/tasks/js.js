module.exports = function ($, path) {
    $.gulp.task('js', function () {
    return $.gulp.src('source/scripts/**/*.js')
        .pipe($.concat('scripts.min.js'))
        .pipe($.uglify())
        .pipe($.gulp.dest('build/assets/js'))
});
};