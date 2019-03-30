module.exports = ($, path) => {
    $.gulp.task('clean', () => $.del(path.clean));
};