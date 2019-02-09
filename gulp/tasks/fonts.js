module.exports = function ($, path) {
    $.gulp.task('fonts', function () {
        return $.gulp.src('source/fonts/**/*.*')
            .pipe($.gulp.dest('build/assets/fonts/'))
    });
};