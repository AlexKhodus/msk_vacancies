module.exports = function ($, path) {
    $.gulp.task('pug', function () {
        return $.gulp.src(path.src.pug)
            .pipe($.pug({ pretty: true }))
            .pipe($.gulp.dest(path.build.html))
    });
};