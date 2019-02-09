module.exports = function ($, path) {
    $.gulp.task('fonts', function () {
        return $.gulp.src(path.src.fonts)
            .pipe($.gulp.dest(path.build.fonts))
    });
};