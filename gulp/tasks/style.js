module.exports = function ($, path) {
    $.gulp.task('style', function () {
        return $.gulp.src('source/styles/**/*.scss')
            .pipe($.newer('build/assets/css'))
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer())
            .pipe($.concat('style.css'))
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/assets/css'));
    });
};