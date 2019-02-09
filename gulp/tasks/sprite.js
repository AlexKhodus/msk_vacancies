module.exports = function ($, path) {
    $.gulp.task('sprite', function () {
        let spriteData = $.gulp.src(path.src.sprite)
            .pipe($.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
        return spriteData.pipe($.gulp.dest(path.build.img));
    });
};