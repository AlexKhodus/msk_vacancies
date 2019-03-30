module.exports = ($, path) => {
    $.gulp.task('pug', () => {
        return $.gulp.src(path.src.pug)
            .pipe($.pug({ pretty: true }))
            .pipe($.gulp.dest(path.build.html))
    });
};