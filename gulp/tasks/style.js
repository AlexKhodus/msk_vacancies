module.exports = function ($, path) {
    $.gulp.task('style', function () {
        return $.gulp.src(path.src.style)
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.concat('style.css'))
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe($.minifyCSS())
            .pipe($.gulp.dest(path.build.css));
    });
};