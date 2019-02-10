module.exports = function ($, path) {
    $.gulp.task('sprite', $.gulp.parallel(function () {
        let spriteData = $.gulp.src(path.src.sprite)
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }));
        return spriteData.img.pipe($.gulp.dest(path.build.img));
    }),function () {
        let spriteData = $.gulp.src(path.src.sprite)
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }));
        return spriteData.css.pipe($.gulp.dest(path.build.img));
    });
};