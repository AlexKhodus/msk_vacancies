module.exports = ($, path) => {
    $.gulp.task('js', () => {
        return $.gulp.src(path.src.js)
            .pipe($.concat('scripts.min.js'))
            .pipe($.uglify())
            .pipe($.gulp.dest(path.build.js))
    });
};