module.exports = ($, path) => {
    $.gulp.task('img', () => {
     return $.gulp.src(path.src.img)
          .pipe($.gulp.dest(path.build.img));
    });
};