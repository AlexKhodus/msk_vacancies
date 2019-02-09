module.exports = function ($, path) {
    $.gulp.task('serve', function () {
        $.bs.init({
            server: 'build'
        });
        $.bs.watch('build/**/*.*').on('change', $.bs.reload);
    });
};