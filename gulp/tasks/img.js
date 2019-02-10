module.exports = function ($, path) {
    $.gulp.task('img', function () {
     return $.gulp.src(path.src.img)
          .pipe($.gulp.dest(path.build.img));
    });
};