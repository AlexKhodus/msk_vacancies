module.exports = ($, path) => {
    $.gulp.task('eslint', () => {
        return $.gulp.src(path.src.js)
            .pipe($.eslint())
            .pipe($.eslint.format())
            .pipe($.eslint.failAfterError());
    });
};