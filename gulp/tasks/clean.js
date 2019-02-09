module.exports = function ($, path) {
    $.gulp.task('clean', function () {
        return $.del('build');
    });
};