module.exports = function ($, path) {
    $.gulp.task('style', function () {
        return $.gulp.src(path.src.style)
            .pipe($.newer(path.build.css))
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer())
            .pipe($.concat('style.css'))
            .pipe($.sourcemaps.write())
            .pipe($.minifyCSS())
            .pipe($.gulp.dest(path.build.css));
    });
};