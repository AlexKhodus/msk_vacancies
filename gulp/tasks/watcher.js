module.exports = function ($, path) {
    $.gulp.task('watch', function () {
       $.gulp.watch('source/pug/**/*.*', $.gulp.series('pug'));
       $.gulp.watch('source/styles/**/*.*', $.gulp.series('style'));
       $.gulp.watch('source/scripts/**/*.*', $.gulp.series('js'));
    });
};