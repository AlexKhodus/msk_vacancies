module.exports = ($, path) => {
    $.gulp.task('js', () => {
        return $.gulp.src(path.src.js)
            .pipe($.sourcemaps.init())
            .pipe($.concat('scripts.min.js'))
            .pipe($.babel({
                presets: ['@babel/preset-env']
            }))
            .pipe($.uglify())
            .pipe($.sourcemaps.write('.'))
            .pipe($.gulp.dest(path.build.js))
    });
};
