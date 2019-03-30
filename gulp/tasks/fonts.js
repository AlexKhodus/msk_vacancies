module.exports = ($, path) => {
    $.gulp.task('fonts', () => {
        return $.gulp.src(path.src.fonts)
            .pipe($.gulp.dest(path.build.fonts))
    });
};