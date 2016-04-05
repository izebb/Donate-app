'use strict';
export default {
    styles: {
        src: ['src/sass/**/*.scss'],
        dest: 'public/css',
        prodSourcemap: false,
    },
    scripts: {
        src: 'src/js/**/*.js',
        tmpl: 'src/js/**/*.js',
        dest: 'public/js',
        test: 'test/**/*.js',
        entryFile: 'src/js/app.js',
        templateCache:'src/js/modules/**/*.html',
        templateCacheDest:'src/js/modules/templateCache',
        main: 'app.js'
    },
    watch: {
        js: 'src/js/**/*.js',
        sass: 'src/sass/**/*.scss',
        template:'src/js/modules/**/*.html',
        html: 'public/*.html'
    },
    sourceDir: './src/',
    buildDir: './public/',
    baseDir: './public/'
};