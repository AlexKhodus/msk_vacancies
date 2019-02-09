module.exports = function ($, path) {
    $.gulp.task('pug', function () {
        return $.gulp.src('source/pug/**/index.pug')
            .pipe($.pug({ pretty: true }))
            .pipe($.gulp.dest('build/'))
    });
};