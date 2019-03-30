module.exports = ($, path) => {
    $.gulp.task('serve', () => {
        $.bs.init({
            server: 'build'
        });
        $.bs.watch('build/**/*.*').on('change', $.bs.reload);
    });
};