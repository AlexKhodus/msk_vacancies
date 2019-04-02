module.exports = ($, path) => {
    $.gulp.task('style', () => {
        return $.gulp.src(path.src.style)
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.concat('style.css'))
            .pipe($.autoprefixer())
            .pipe($.minifyCSS())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest(path.build.css));
    });
};
