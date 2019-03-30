module.exports = ($, path) => {
    $.gulp.task('watch', () => {
       $.gulp.watch(path.watch.pug, $.gulp.series('pug'));
       $.gulp.watch(path.watch.style, $.gulp.series('style'));
       $.gulp.watch(path.watch.js, $.gulp.series('js'));
    });
};