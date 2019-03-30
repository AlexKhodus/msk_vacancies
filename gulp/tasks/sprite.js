module.exports = ($, path) => {
    $.gulp.task('sprite', $.gulp.parallel(() => {
        let spriteData = $.gulp.src(path.src.sprite)
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                padding: 20
            }));
        return spriteData.img.pipe($.gulp.dest(path.build.imgSprite));
    }), () => {
        let spriteData = $.gulp.src(path.src.sprite)
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }));
        return spriteData.css.pipe($.gulp.dest(path.build.sprite));
    });
};