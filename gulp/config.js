module.exports = () => {

  return {
      build: {
          html: 'build/',
          js: 'build/assets/js/',
          css: 'build/assets/css/',
          img: 'build/assets/img/',
          fonts: 'build/assets/fonts/',
          sprite: 'source/style/sprite/',
          imgSprite: 'source/img/sprite'
      },
      src: {
          pug: 'source/pug/**/index.pug',
          js: 'source/js/**/*.js',
          style: 'source/style/main.scss',
          img: 'source/img/**/*.*',
          fonts: 'source/fonts/**/*.*',
          sprite: 'source/sprite/**/*.*'
      },
      watch: {
          pug: 'source/**/*.pug',
          js: 'source/js/**/*.js',
          style: 'source/style/**/*.scss',
          img: 'source/img/**/*.*',
          fonts: 'source/fonts/**/*.*'
      },
      clean: './build'
  };
};