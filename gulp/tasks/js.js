module.exports = function ($, path) {
    $.gulp.task('js', function () {
    return $.gulp.src(path.src.js)
        .pipe($.concat('scripts.min.js'))
        .pipe($.uglify())
        .pipe($.gulp.dest(path.build.js))
});
};